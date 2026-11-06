import { isFormConfigured, siteConfig } from '@/config/site';

export interface ContactValues {
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  cidade: string;
  estado: string;
  pais: string;
  servico: string;
  tipoAmbiente: string;
  descricao: string;
  consentimento: boolean;
  /** Campo-armadilha contra robôs (fica oculto). */
  website: string;
}

export type ContactErrors = Partial<Record<keyof ContactValues, string>>;

export const initialContactValues: ContactValues = {
  nome: '',
  empresa: '',
  email: '',
  telefone: '',
  cidade: '',
  estado: '',
  pais: 'Brasil',
  servico: '',
  tipoAmbiente: '',
  descricao: '',
  consentimento: false,
  website: '',
};

export const UFS = [
  ['AC', 'Acre'], ['AL', 'Alagoas'], ['AP', 'Amapá'], ['AM', 'Amazonas'], ['BA', 'Bahia'],
  ['CE', 'Ceará'], ['DF', 'Distrito Federal'], ['ES', 'Espírito Santo'], ['GO', 'Goiás'],
  ['MA', 'Maranhão'], ['MT', 'Mato Grosso'], ['MS', 'Mato Grosso do Sul'], ['MG', 'Minas Gerais'],
  ['PA', 'Pará'], ['PB', 'Paraíba'], ['PR', 'Paraná'], ['PE', 'Pernambuco'], ['PI', 'Piauí'],
  ['RJ', 'Rio de Janeiro'], ['RN', 'Rio Grande do Norte'], ['RS', 'Rio Grande do Sul'],
  ['RO', 'Rondônia'], ['RR', 'Roraima'], ['SC', 'Santa Catarina'], ['SP', 'São Paulo'],
  ['SE', 'Sergipe'], ['TO', 'Tocantins'],
] as const;

export const isBrazil = (pais: string) =>
  ['brasil', 'brazil', 'br'].includes(
    pais
      .trim()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, ''),
  );

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContact(v: ContactValues): ContactErrors {
  const e: ContactErrors = {};
  if (v.nome.trim().length < 2) e.nome = 'Informe seu nome.';
  if (!v.email.trim()) e.email = 'Informe seu e-mail.';
  else if (!EMAIL_RE.test(v.email.trim())) e.email = 'Informe um e-mail válido, por exemplo: nome@empresa.com.br.';
  if (v.telefone.trim()) {
    const digits = v.telefone.replace(/\D/g, '');
    if (digits.length < 8 || digits.length > 15)
      e.telefone = 'Informe um telefone válido, com DDD (e código do país, se for do exterior).';
  }
  if (!v.pais.trim()) e.pais = 'Informe o país.';
  if (isBrazil(v.pais) && !v.estado) e.estado = 'Selecione o estado.';
  if (!v.cidade.trim()) e.cidade = 'Informe a cidade.';
  if (!v.servico) e.servico = 'Selecione o serviço desejado.';
  if (!v.tipoAmbiente) e.tipoAmbiente = 'Selecione o tipo de edificação ou ambiente.';
  if (v.descricao.trim().length < 20)
    e.descricao = 'Descreva a necessidade com pelo menos 20 caracteres.';
  if (!v.consentimento) e.consentimento = 'É necessário concordar com o uso dos dados para o retorno da solicitação.';
  return e;
}

export type SubmitResult = { status: 'success' } | { status: 'error'; message: string } | { status: 'not-configured' };

/**
 * Envia a solicitação para o endpoint configurado em VITE_FORM_ENDPOINT.
 * Sem endpoint, NÃO simula o envio: retorna "not-configured".
 */
export async function submitContact(values: ContactValues, labels: { servico: string; tipoAmbiente: string }): Promise<SubmitResult> {
  if (!isFormConfigured) return { status: 'not-configured' };

  // Robôs costumam preencher o campo oculto; nesse caso, descarta-se o envio.
  if (values.website) return { status: 'success' };

  const payload: Record<string, string> = {
    nome: values.nome.trim(),
    empresa: values.empresa.trim(),
    email: values.email.trim(),
    telefone: values.telefone.trim(),
    cidade: values.cidade.trim(),
    estado: values.estado.trim(),
    pais: values.pais.trim(),
    servico: labels.servico,
    tipo_de_ambiente: labels.tipoAmbiente,
    descricao: values.descricao.trim(),
    consentimento_lgpd: 'sim',
    _subject: `Nova solicitação pelo site — ${labels.servico}`,
    _replyto: values.email.trim(),
  };
  if (siteConfig.formAccessKey) payload.access_key = siteConfig.formAccessKey;

  try {
    const res = await fetch(siteConfig.formEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(String(res.status));
    return { status: 'success' };
  } catch {
    return {
      status: 'error',
      message:
        'Não foi possível enviar a mensagem agora. Verifique sua conexão e tente novamente ou utilize um dos canais ao lado.',
    };
  }
}
