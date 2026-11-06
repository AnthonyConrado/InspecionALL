import { useEffect, useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { useLocation } from 'react-router';
import { CircleAlert, CircleCheck, Info, LoaderCircle, Send } from 'lucide-react';
import { isFormConfigured } from '@/config/site';
import { getServiceBySlug, services } from '@/content';
import {
  initialContactValues,
  isBrazil,
  submitContact,
  UFS,
  validateContact,
  type ContactErrors,
  type ContactValues,
} from '@/lib/contact';
import { cn } from '@/lib/cn';

const serviceOptions = [
  ...services.map((s) => ({ value: s.slug, label: s.title })),
  { value: 'orientacao', label: 'Ainda não sei — preciso de orientação' },
];

const environmentOptions = [
  { value: 'comercial', label: 'Edificação comercial ou de serviços' },
  { value: 'industrial', label: 'Indústria' },
  { value: 'educacional', label: 'Edificação educacional' },
  { value: 'saude', label: 'Edificação de saúde' },
  { value: 'historica', label: 'Edificação histórica ou patrimônio protegido' },
  { value: 'turistico', label: 'Ambiente turístico' },
  { value: 'hospedagem', label: 'Meio de hospedagem' },
  { value: 'tecnologico', label: 'Complexo tecnológico ou corporativo' },
  { value: 'residencial', label: 'Condomínio ou edificação residencial multifamiliar' },
  { value: 'publica', label: 'Edificação pública ou institucional' },
  { value: 'urbano', label: 'Espaço urbano (calçadas, praças, vias)' },
  { value: 'outro', label: 'Outro' },
];

const fieldOrder: (keyof ContactValues)[] = [
  'nome', 'empresa', 'email', 'telefone', 'pais', 'estado', 'cidade', 'servico', 'tipoAmbiente', 'descricao', 'consentimento',
];

const fieldLabels: Record<string, string> = {
  nome: 'Nome',
  email: 'E-mail',
  telefone: 'Telefone',
  pais: 'País',
  estado: 'Estado',
  cidade: 'Cidade',
  servico: 'Serviço desejado',
  tipoAmbiente: 'Tipo de edificação ou ambiente',
  descricao: 'Descrição da necessidade',
  consentimento: 'Consentimento',
};

type Status = 'idle' | 'submitting' | 'success' | 'error' | 'not-configured';

const inputBase =
  'mt-2 block w-full rounded-xl border bg-white px-4 py-3 text-base text-ink placeholder:text-muted/70 transition-colors focus:border-petrol-800 aria-[invalid=true]:border-danger';

function Field({
  id,
  label,
  required,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block font-semibold text-petrol-950">
        {label}
        {required ? (
          <span className="text-danger" aria-hidden="true">
            {' '}
            *
          </span>
        ) : (
          <span className="font-normal text-muted"> (opcional)</span>
        )}
      </label>
      {hint && (
        <p id={`${id}-dica`} className="mt-1 text-sm text-muted">
          {hint}
        </p>
      )}
      {children}
      {error && (
        <p id={`${id}-erro`} className="mt-2 flex items-start gap-1.5 text-sm font-semibold text-danger">
          <CircleAlert aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [values, setValues] = useState<ContactValues>(initialContactValues);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [attempted, setAttempted] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const summaryRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Pré-seleciona o serviço vindo de /contato?servico=...
  useEffect(() => {
    const slug = new URLSearchParams(location.search).get('servico');
    if (slug && getServiceBySlug(slug)) setValues((v) => ({ ...v, servico: slug }));
  }, [location.search]);

  const set = (name: keyof ContactValues) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const value = e.target instanceof HTMLInputElement && e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const next = { ...values, [name]: value } as ContactValues;
    if (name === 'pais' && !isBrazil(String(value)) && isBrazil(values.pais)) next.estado = '';
    setValues(next);
    if (attempted) setErrors(validateContact(next));
  };

  const describedBy = (id: string, hasHint = false) =>
    [hasHint && `${id}-dica`, errors[id.replace('cf-', '') as keyof ContactValues] && `${id}-erro`].filter(Boolean).join(' ') ||
    undefined;

  const a11y = (name: keyof ContactValues, hasHint = false) => ({
    id: `cf-${name}`,
    name,
    'aria-invalid': errors[name] ? (true as const) : undefined,
    'aria-describedby': describedBy(`cf-${name}`, hasHint),
  });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setAttempted(true);
    const found = validateContact(values);
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus('idle');
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    setStatus('submitting');
    const result = await submitContact(values, {
      servico: serviceOptions.find((o) => o.value === values.servico)?.label ?? values.servico,
      tipoAmbiente: environmentOptions.find((o) => o.value === values.tipoAmbiente)?.label ?? values.tipoAmbiente,
    });
    setStatus(result.status);
    if (result.status === 'success') {
      setValues(initialContactValues);
      setAttempted(false);
      setMessage('Solicitação enviada com sucesso. Obrigado pelo contato — o retorno será feito pelo e-mail informado.');
    } else if (result.status === 'error') {
      setMessage(result.message);
    } else {
      setMessage(
        'O envio on-line ainda não está habilitado neste site, por isso sua mensagem não foi enviada. Por favor, utilize um dos canais de contato indicados ao lado.',
      );
    }
    requestAnimationFrame(() => statusRef.current?.focus());
  };

  const errorList = fieldOrder.filter((f) => errors[f]);
  const brazil = isBrazil(values.pais);

  return (
    <form noValidate onSubmit={onSubmit} aria-labelledby="form-title" className="rounded-[1.5rem] border border-line bg-white p-6 sm:p-10">
      <h2 id="form-title" className="text-[clamp(1.6rem,1.2rem+1.2vw,2.2rem)] text-petrol-950">
        Solicitar atendimento
      </h2>
      <p className="mt-3 text-muted">
        Campos marcados com <span className="font-semibold text-danger">*</span> são obrigatórios.
      </p>

      {!isFormConfigured && (
        <p className="mt-6 flex gap-3 rounded-xl border border-ochre/40 bg-ochre-light/15 p-4 text-[0.95rem] leading-relaxed text-ink">
          <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-ochre" />
          O envio on-line deste formulário está em configuração. Enquanto isso, utilize os canais de contato indicados
          nesta página.
        </p>
      )}

      {attempted && errorList.length > 0 && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          aria-labelledby="erros-titulo"
          className="mt-6 rounded-xl border-2 border-danger/70 bg-danger/[0.04] p-5 focus:outline-none focus-visible:ring-4 focus-visible:ring-danger/30"
        >
          <h3 id="erros-titulo" className="font-sans text-base font-bold text-danger">
            {errorList.length === 1 ? 'Há 1 campo a corrigir:' : `Há ${errorList.length} campos a corrigir:`}
          </h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-[0.95rem]">
            {errorList.map((f) => (
              <li key={f}>
                <a
                  href={`#cf-${f}`}
                  className="text-danger underline underline-offset-2"
                  onClick={(ev) => {
                    ev.preventDefault();
                    document.getElementById(`cf-${f}`)?.focus();
                  }}
                >
                  {fieldLabels[f]}: {errors[f]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <Field id="cf-nome" label="Nome" required error={errors.nome}>
          <input {...a11y('nome')} type="text" autoComplete="name" required aria-required="true" value={values.nome} onChange={set('nome')} className={cn(inputBase, 'border-line')} />
        </Field>
        <Field id="cf-empresa" label="Empresa ou instituição">
          <input {...a11y('empresa')} type="text" autoComplete="organization" value={values.empresa} onChange={set('empresa')} className={cn(inputBase, 'border-line')} />
        </Field>
        <Field id="cf-email" label="E-mail" required error={errors.email}>
          <input {...a11y('email')} type="email" inputMode="email" autoComplete="email" required aria-required="true" value={values.email} onChange={set('email')} className={cn(inputBase, 'border-line')} />
        </Field>
        <Field id="cf-telefone" label="Telefone" hint="Com DDD. Se for do exterior, inclua o código do país." error={errors.telefone}>
          <input {...a11y('telefone', true)} type="tel" inputMode="tel" autoComplete="tel" value={values.telefone} onChange={set('telefone')} className={cn(inputBase, 'border-line')} />
        </Field>
        <Field id="cf-pais" label="País" required error={errors.pais}>
          <input {...a11y('pais')} type="text" autoComplete="country-name" required aria-required="true" value={values.pais} onChange={set('pais')} className={cn(inputBase, 'border-line')} />
        </Field>
        {brazil ? (
          <Field id="cf-estado" label="Estado" required error={errors.estado}>
            <select {...a11y('estado')} autoComplete="address-level1" required aria-required="true" value={values.estado} onChange={set('estado')} className={cn(inputBase, 'border-line')}>
              <option value="">Selecione</option>
              {UFS.map(([uf, nome]) => (
                <option key={uf} value={uf}>
                  {nome}
                </option>
              ))}
            </select>
          </Field>
        ) : (
          <Field id="cf-estado" label="Estado, província ou região" error={errors.estado}>
            <input {...a11y('estado')} type="text" autoComplete="address-level1" value={values.estado} onChange={set('estado')} className={cn(inputBase, 'border-line')} />
          </Field>
        )}
        <Field id="cf-cidade" label="Cidade" required error={errors.cidade}>
          <input {...a11y('cidade')} type="text" autoComplete="address-level2" required aria-required="true" value={values.cidade} onChange={set('cidade')} className={cn(inputBase, 'border-line')} />
        </Field>
        <Field id="cf-servico" label="Serviço desejado" required error={errors.servico}>
          <select {...a11y('servico')} required aria-required="true" value={values.servico} onChange={set('servico')} className={cn(inputBase, 'border-line')}>
            <option value="">Selecione</option>
            {serviceOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field id="cf-tipoAmbiente" label="Tipo de edificação ou ambiente" required error={errors.tipoAmbiente}>
            <select {...a11y('tipoAmbiente')} required aria-required="true" value={values.tipoAmbiente} onChange={set('tipoAmbiente')} className={cn(inputBase, 'border-line')}>
              <option value="">Selecione</option>
              {environmentOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field
            id="cf-descricao"
            label="Descrição da necessidade"
            required
            hint="Conte brevemente o objetivo (ex.: licenciamento, reforma, exigência de órgão público), o porte do imóvel e prazos, se houver. Não inclua dados sigilosos."
            error={errors.descricao}
          >
            <textarea {...a11y('descricao', true)} rows={6} required aria-required="true" value={values.descricao} onChange={set('descricao')} className={cn(inputBase, 'border-line resize-y')} />
          </Field>
        </div>
      </div>

      {/* Campo-armadilha para robôs: oculto para pessoas e leitores de tela */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="cf-website">Não preencha este campo</label>
        <input id="cf-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={values.website} onChange={set('website')} />
      </div>

      <fieldset className="mt-8 rounded-xl bg-sand p-5">
        <legend className="sr-only">Privacidade e consentimento</legend>
        <p className="text-[0.92rem] leading-relaxed text-muted">
          Os dados informados serão utilizados exclusivamente para responder a esta solicitação e não serão
          compartilhados com terceiros para outras finalidades, observada a Lei Geral de Proteção de Dados (Lei nº
          13.709/2018). Você pode solicitar a exclusão dos seus dados a qualquer momento pelos canais de contato.
        </p>
        <div className="mt-4 flex items-start gap-3">
          <input
            {...a11y('consentimento')}
            type="checkbox"
            required
            aria-required="true"
            checked={values.consentimento}
            onChange={set('consentimento')}
            className="mt-1 size-5 shrink-0 accent-petrol-800"
          />
          <label htmlFor="cf-consentimento" className="font-semibold text-petrol-950">
            Concordo com o uso dos dados informados para o retorno desta solicitação.
            <span className="text-danger" aria-hidden="true">
              {' '}
              *
            </span>
          </label>
        </div>
        {errors.consentimento && (
          <p id="cf-consentimento-erro" className="mt-2 flex items-start gap-1.5 text-sm font-semibold text-danger">
            <CircleAlert aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
            {errors.consentimento}
          </p>
        )}
      </fieldset>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === 'submitting'}
          aria-disabled={status === 'submitting'}
          className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-petrol-800 px-7 py-3 font-semibold text-white transition-colors hover:bg-petrol-950 disabled:cursor-wait disabled:opacity-80"
        >
          {status === 'submitting' ? (
            <>
              <LoaderCircle aria-hidden="true" className="size-5 animate-spin" />
              Enviando…
            </>
          ) : (
            <>
              Enviar solicitação
              <Send aria-hidden="true" className="size-4" />
            </>
          )}
        </button>
      </div>

      <div
        ref={statusRef}
        tabIndex={-1}
        role={status === 'success' ? 'status' : 'alert'}
        className="mt-6 focus:outline-none"
      >
        {message && status !== 'idle' && status !== 'submitting' && (
          <p
            className={cn(
              'flex gap-3 rounded-xl border p-4 leading-relaxed',
              status === 'success' && 'border-success/40 bg-success/[0.06] text-success',
              status === 'error' && 'border-danger/50 bg-danger/[0.05] text-danger',
              status === 'not-configured' && 'border-ochre/40 bg-ochre-light/15 text-ink',
            )}
          >
            {status === 'success' ? (
              <CircleCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
            ) : (
              <CircleAlert aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
            )}
            <span className="font-semibold">{message}</span>
          </p>
        )}
      </div>
    </form>
  );
}
