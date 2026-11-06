import { cn } from '@/lib/cn';

/**
 * Ilustração conceitual (planta esquemática) — NÃO representa nenhum
 * projeto executado. Mostra elementos típicos de uma avaliação de
 * acessibilidade: rota acessível, rampa, sinalização tátil e área de
 * manobra para cadeira de rodas.
 */
export function PlanIllustration({ className }: { className?: string }) {
  const paper = '#faf8f4';
  const ochre = '#f0c46c';
  return (
    <svg
      viewBox="0 0 560 640"
      role="img"
      aria-labelledby="plan-title plan-desc"
      className={cn('h-auto w-full', className)}
    >
      <title id="plan-title">Planta esquemática ilustrativa</title>
      <desc id="plan-desc">
        Desenho conceitual de uma edificação com rota acessível tracejada que parte de uma rampa na entrada,
        atravessa a circulação e chega a um sanitário com área de manobra de 1,50 metro de diâmetro.
      </desc>
      <defs>
        <pattern id="plan-dots" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.4" fill={paper} fillOpacity="0.09" />
        </pattern>
        <pattern id="plan-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="8" stroke={paper} strokeOpacity="0.18" strokeWidth="2" />
        </pattern>
      </defs>

      <rect width="560" height="640" rx="36" fill="#0b4547" />
      <rect width="560" height="640" rx="36" fill="url(#plan-dots)" />

      {/* Cota superior */}
      <g stroke={paper} strokeOpacity="0.55" strokeWidth="1.2" fill="none">
        <line x1="70" y1="54" x2="490" y2="54" />
        <line x1="70" y1="46" x2="70" y2="62" />
        <line x1="490" y1="46" x2="490" y2="62" />
        <line x1="64" y1="60" x2="76" y2="48" />
        <line x1="484" y1="60" x2="496" y2="48" />
      </g>
      <rect x="182" y="42" width="196" height="24" fill="#0b4547" />
      <text
        x="280"
        y="59"
        textAnchor="middle"
        fill={paper}
        fillOpacity="0.75"
        fontSize="12.5"
        letterSpacing="1.6"
        fontFamily="Instrument Sans, system-ui, sans-serif"
      >
        PLANTA ILUSTRATIVA
      </text>

      {/* Paredes */}
      <g stroke={paper} strokeWidth="7" strokeLinecap="square" fill="none">
        <path d="M310 520 H490 V90 H70 V520 H230" />
        <path d="M70 300 H180" />
        <path d="M262 300 H490" />
        <path d="M330 90 V160" />
        <path d="M330 232 V300" />
      </g>

      {/* Portas (arcos de abertura) */}
      <g stroke={paper} strokeOpacity="0.55" strokeWidth="1.4" fill="none">
        <path d="M180 300 A82 82 0 0 1 262 218" />
        <line x1="262" y1="300" x2="262" y2="218" />
        <path d="M330 160 A72 72 0 0 1 402 232" strokeDasharray="0" />
        <line x1="330" y1="232" x2="402" y2="232" />
      </g>

      {/* Mobiliário (bancada) */}
      <rect x="96" y="116" width="120" height="44" rx="4" fill="url(#plan-hatch)" stroke={paper} strokeOpacity="0.4" />
      <rect x="96" y="232" width="56" height="44" rx="4" fill="url(#plan-hatch)" stroke={paper} strokeOpacity="0.4" />

      {/* Área de manobra Ø 1,50 m */}
      <circle cx="414" cy="168" r="54" fill={ochre} fillOpacity="0.08" stroke={ochre} strokeWidth="1.6" strokeDasharray="5 5" />
      <line x1="360" y1="168" x2="468" y2="168" stroke={ochre} strokeOpacity="0.7" strokeWidth="1" />
      <text x="414" y="160" textAnchor="middle" fill={ochre} fontSize="13" fontFamily="Instrument Sans, system-ui, sans-serif">
        Ø 1,50 m
      </text>

      {/* Rota acessível */}
      <path
        d="M270 600 V384 H222 V196 H404"
        fill="none"
        stroke={ochre}
        strokeWidth="3"
        strokeDasharray="10 8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="270" cy="384" r="5" fill={ochre} />
      <circle cx="222" cy="196" r="5" fill={ochre} />
      <circle cx="414" cy="196" r="7" fill="#0b4547" stroke={ochre} strokeWidth="3" />

      {/* Sinalização tátil direcional na circulação */}
      <g stroke={paper} strokeOpacity="0.5" strokeWidth="2.4" strokeLinecap="round">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line key={i} x1={258} x2={258} y1={500 - i * 18} y2={490 - i * 18} />
        ))}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line key={`b${i}`} x1={282} x2={282} y1={500 - i * 18} y2={490 - i * 18} />
        ))}
      </g>

      {/* Rampa de acesso */}
      <rect x="226" y="526" width="88" height="62" fill="none" stroke={paper} strokeOpacity="0.85" strokeWidth="2" />
      <g stroke={paper} strokeOpacity="0.45" strokeWidth="1.2">
        {[0, 1, 2, 3, 4].map((i) => (
          <line key={i} x1="226" x2="314" y1={538 + i * 11} y2={538 + i * 11} />
        ))}
      </g>
      <rect x="326" y="544" width="110" height="26" rx="13" fill={paper} fillOpacity="0.1" />
      <text x="381" y="562" textAnchor="middle" fill={paper} fontSize="13" fontFamily="Instrument Sans, system-ui, sans-serif">
        rampa i ≤ 8,33%
      </text>

      {/* Sinalização tátil de alerta no início da rampa */}
      <g fill={ochre}>
        {Array.from({ length: 2 }).flatMap((_, r) =>
          Array.from({ length: 9 }).map((__, c) => <circle key={`${r}-${c}`} cx={234 + c * 9} cy={600 + r * 9} r="2.2" />),
        )}
      </g>

      {/* Legenda */}
      <g fontFamily="Instrument Sans, system-ui, sans-serif" fontSize="12.5" fill={paper} fillOpacity="0.8">
        <line x1="96" y1="560" x2="128" y2="560" stroke={ochre} strokeWidth="3" strokeDasharray="8 6" />
        <text x="96" y="584">rota acessível</text>
      </g>
    </svg>
  );
}
