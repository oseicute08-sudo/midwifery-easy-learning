/**
 * Topic-specific educational SVG diagrams for lessons.
 * Light/dark via CSS variables --diagram-fill / --diagram-stroke
 */

const commonProps = {
  viewBox: '0 0 320 220',
  xmlns: 'http://www.w3.org/2000/svg',
  role: 'img',
  className: 'lc-diagram-svg',
};

export function DiagramSvg({ kind, title }) {
  const k = kind || 'generic';
  switch (k) {
    case 'planes':
      return (
        <svg {...commonProps} aria-label={title || 'Body planes'}>
          <ellipse cx="160" cy="36" rx="22" ry="26" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <rect x="138" y="60" width="44" height="70" rx="12" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <rect x="120" y="70" width="18" height="55" rx="8" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <rect x="182" y="70" width="18" height="55" rx="8" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <rect x="142" y="128" width="16" height="55" rx="7" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <rect x="162" y="128" width="16" height="55" rx="7" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <line x1="160" y1="12" x2="160" y2="200" stroke="#0d9488" strokeWidth="2.5" strokeDasharray="6 4" />
          <text x="168" y="24" fill="#0d9488" fontSize="11" fontWeight="700">Sagittal</text>
          <line x1="100" y1="40" x2="100" y2="190" stroke="#2563eb" strokeWidth="2.5" strokeDasharray="6 4" />
          <text x="42" y="120" fill="#2563eb" fontSize="11" fontWeight="700">Frontal</text>
          <line x1="110" y1="110" x2="220" y2="110" stroke="#c026d3" strokeWidth="2.5" strokeDasharray="6 4" />
          <text x="222" y="114" fill="#c026d3" fontSize="11" fontWeight="700">Transverse</text>
        </svg>
      );
    case 'anatomical-position':
      return (
        <svg {...commonProps} aria-label={title || 'Anatomical position'}>
          <ellipse cx="160" cy="40" rx="24" ry="28" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <rect x="136" y="66" width="48" height="72" rx="14" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <rect x="100" y="72" width="36" height="14" rx="7" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <rect x="184" y="72" width="36" height="14" rx="7" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <circle cx="108" cy="79" r="5" fill="#0d9488" />
          <circle cx="212" cy="79" r="5" fill="#0d9488" />
          <text x="55" y="68" fill="var(--diagram-stroke)" fontSize="10">Palm forward</text>
          <text x="198" y="68" fill="var(--diagram-stroke)" fontSize="10">Palm forward</text>
          <rect x="142" y="136" width="16" height="58" rx="7" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <rect x="162" y="136" width="16" height="58" rx="7" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <text x="95" y="210" fill="var(--diagram-stroke)" fontSize="11" fontWeight="600">Facing observer · feet forward</text>
        </svg>
      );
    case 'directional':
      return (
        <svg {...commonProps} aria-label={title || 'Directional terms'}>
          <ellipse cx="160" cy="40" rx="20" ry="24" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <rect x="140" y="62" width="40" height="65" rx="12" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <rect x="146" y="125" width="12" height="50" rx="6" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <rect x="162" y="125" width="12" height="50" rx="6" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <text x="145" y="18" fill="#0d9488" fontSize="11" fontWeight="700">Superior</text>
          <text x="148" y="205" fill="#0d9488" fontSize="11" fontWeight="700">Inferior</text>
          <text x="35" y="100" fill="#2563eb" fontSize="11" fontWeight="700">Lateral</text>
          <text x="185" y="100" fill="#2563eb" fontSize="11" fontWeight="700">Medial</text>
          <text x="210" y="55" fill="#c026d3" fontSize="11" fontWeight="700">Anterior</text>
          <text x="205" y="160" fill="#c026d3" fontSize="11" fontWeight="700">Posterior</text>
        </svg>
      );
    case 'cavities':
      return (
        <svg {...commonProps} aria-label={title || 'Body cavities'}>
          <rect x="110" y="20" width="100" height="180" rx="40" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <rect x="122" y="36" width="76" height="40" rx="8" fill="#99f6e4" stroke="#0d9488" strokeWidth="1.5" />
          <text x="132" y="60" fill="#0f766e" fontSize="11" fontWeight="700">Cranial</text>
          <rect x="122" y="82" width="76" height="48" rx="8" fill="#bfdbfe" stroke="#2563eb" strokeWidth="1.5" />
          <text x="128" y="110" fill="#1d4ed8" fontSize="11" fontWeight="700">Thoracic</text>
          <rect x="122" y="136" width="76" height="50" rx="8" fill="#fbcfe8" stroke="#db2777" strokeWidth="1.5" />
          <text x="124" y="165" fill="#be185d" fontSize="10" fontWeight="700">Abdominopelvic</text>
        </svg>
      );
    case 'regions':
      return (
        <svg {...commonProps} aria-label={title || 'Body regions'}>
          <rect x="100" y="25" width="120" height="170" rx="20" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <line x1="100" y1="80" x2="220" y2="80" stroke="var(--diagram-stroke)" strokeWidth="1.5" strokeDasharray="4 3" />
          <line x1="100" y1="140" x2="220" y2="140" stroke="var(--diagram-stroke)" strokeWidth="1.5" strokeDasharray="4 3" />
          <line x1="140" y1="80" x2="140" y2="170" stroke="var(--diagram-stroke)" strokeWidth="1.5" strokeDasharray="4 3" />
          <line x1="180" y1="80" x2="180" y2="170" stroke="var(--diagram-stroke)" strokeWidth="1.5" strokeDasharray="4 3" />
          <text x="125" y="55" fontSize="11" fontWeight="700" fill="var(--diagram-stroke)">Epigastric</text>
          <text x="108" y="115" fontSize="10" fill="var(--diagram-stroke)">R lumbar</text>
          <text x="148" y="115" fontSize="10" fill="var(--diagram-stroke)">Umbilical</text>
          <text x="108" y="160" fontSize="10" fill="var(--diagram-stroke)">R iliac</text>
          <text x="155" y="160" fontSize="10" fill="var(--diagram-stroke)">Hypogastric</text>
        </svg>
      );
    case 'cell':
    case 'anatomy-intro':
      return (
        <svg {...commonProps} aria-label={title || 'Cell organization'}>
          <ellipse cx="160" cy="110" rx="100" ry="70" fill="#ecfdf5" stroke="#0d9488" strokeWidth="2" />
          <circle cx="160" cy="110" r="28" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
          <text x="142" y="114" fontSize="11" fontWeight="700" fill="#854d0e">Nucleus</text>
          <text x="70" y="70" fontSize="11" fill="#0f766e">Cytoplasm</text>
          <text x="195" y="160" fontSize="11" fill="#0f766e">Membrane</text>
          <circle cx="100" cy="120" r="8" fill="#99f6e4" stroke="#0d9488" strokeWidth="1" />
          <text x="90" y="145" fontSize="9" fill="#0f766e">Organelle</text>
        </svg>
      );
    case 'tissues':
      return (
        <svg {...commonProps} aria-label={title || 'Tissue types'}>
          {[
            [30, 50, 'Epithelial', '#99f6e4'],
            [170, 50, 'Connective', '#bfdbfe'],
            [30, 130, 'Muscle', '#fecaca'],
            [170, 130, 'Nervous', '#e9d5ff'],
          ].map(([x, y, label, fill]) => (
            <g key={label}>
              <rect x={x} y={y} width="120" height="55" rx="10" fill={fill} stroke="var(--diagram-stroke)" strokeWidth="1.5" />
              <text x={x + 25} y={y + 32} fontSize="13" fontWeight="700" fill="var(--diagram-stroke)">{label}</text>
            </g>
          ))}
        </svg>
      );
    case 'skeleton':
      return (
        <svg {...commonProps} aria-label={title || 'Skeleton overview'}>
          <ellipse cx="160" cy="36" rx="18" ry="22" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <rect x="152" y="56" width="16" height="50" rx="4" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <rect x="120" y="70" width="80" height="10" rx="3" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <rect x="100" y="70" width="20" height="50" rx="4" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <rect x="200" y="70" width="20" height="50" rx="4" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <rect x="140" y="106" width="40" height="16" rx="4" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <rect x="142" y="122" width="14" height="55" rx="4" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <rect x="164" y="122" width="14" height="55" rx="4" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <text x="30" y="95" fontSize="11" fill="var(--diagram-stroke)">Appendicular</text>
          <text x="145" y="210" fontSize="11" fill="var(--diagram-stroke)">Axial</text>
        </svg>
      );
    case 'joint':
      return (
        <svg {...commonProps} aria-label={title || 'Synovial joint schematic'}>
          <rect x="130" y="20" width="60" height="70" rx="8" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <rect x="130" y="130" width="60" height="70" rx="8" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <ellipse cx="160" cy="110" rx="40" ry="18" fill="#99f6e4" stroke="#0d9488" strokeWidth="2" />
          <text x="130" y="114" fontSize="11" fontWeight="700" fill="#0f766e">Joint cavity</text>
          <text x="200" y="50" fontSize="11" fill="var(--diagram-stroke)">Bone</text>
          <text x="200" y="170" fontSize="11" fill="var(--diagram-stroke)">Bone</text>
          <text x="90" y="210" fontSize="11" fill="var(--diagram-stroke)">Cartilage · synovial fluid · capsule</text>
        </svg>
      );
    case 'muscle':
      return (
        <svg {...commonProps} aria-label={title || 'Muscle types'}>
          {[
            [30, 60, 'Skeletal', 'Striated · voluntary'],
            [120, 60, 'Cardiac', 'Heart · involuntary'],
            [210, 60, 'Smooth', 'Organs · involuntary'],
          ].map(([x, y, label, sub]) => (
            <g key={label}>
              <rect x={x} y={y} width="80" height="90" rx="10" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
              <text x={x + 12} y={y + 40} fontSize="12" fontWeight="700" fill="var(--diagram-stroke)">{label}</text>
              <text x={x + 6} y={y + 60} fontSize="9" fill="var(--diagram-stroke)">{sub}</text>
            </g>
          ))}
        </svg>
      );
    case 'nervous':
      return (
        <svg {...commonProps} aria-label={title || 'Neuron schematic'}>
          <circle cx="80" cy="110" r="28" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <text x="62" y="114" fontSize="11" fontWeight="700" fill="var(--diagram-stroke)">Soma</text>
          <line x1="108" y1="110" x2="240" y2="110" stroke="#0d9488" strokeWidth="4" />
          <text x="150" y="100" fontSize="11" fill="#0d9488">Axon</text>
          <line x1="240" y1="110" x2="270" y2="90" stroke="#0d9488" strokeWidth="2" />
          <line x1="240" y1="110" x2="270" y2="110" stroke="#0d9488" strokeWidth="2" />
          <line x1="240" y1="110" x2="270" y2="130" stroke="#0d9488" strokeWidth="2" />
          <text x="250" y="80" fontSize="10" fill="var(--diagram-stroke)">Terminals</text>
          <line x1="55" y1="85" x2="40" y2="60" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <line x1="70" y1="82" x2="70" y2="50" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <text x="30" y="45" fontSize="10" fill="var(--diagram-stroke)">Dendrites</text>
        </svg>
      );
    case 'heart':
      return (
        <svg {...commonProps} aria-label={title || 'Heart chambers'}>
          <path d="M160 50 C120 20 70 50 70 100 C70 150 160 190 160 190 C160 190 250 150 250 100 C250 50 200 20 160 50Z" fill="#fecaca" stroke="#dc2626" strokeWidth="2" />
          <line x1="160" y1="70" x2="160" y2="160" stroke="#dc2626" strokeWidth="2" strokeDasharray="4 3" />
          <line x1="100" y1="110" x2="220" y2="110" stroke="#dc2626" strokeWidth="2" strokeDasharray="4 3" />
          <text x="105" y="100" fontSize="11" fontWeight="700" fill="#991b1b">RA</text>
          <text x="175" y="100" fontSize="11" fontWeight="700" fill="#991b1b">LA</text>
          <text x="105" y="140" fontSize="11" fontWeight="700" fill="#991b1b">RV</text>
          <text x="175" y="140" fontSize="11" fontWeight="700" fill="#991b1b">LV</text>
          <text x="70" y="210" fontSize="11" fill="var(--diagram-stroke)">Right → lungs · Left → body</text>
        </svg>
      );
    case 'respiratory':
      return (
        <svg {...commonProps} aria-label={title || 'Respiratory system'}>
          <rect x="150" y="20" width="20" height="50" rx="6" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <text x="178" y="50" fontSize="11" fill="var(--diagram-stroke)">Trachea</text>
          <path d="M160 70 Q120 100 100 150" fill="none" stroke="var(--diagram-stroke)" strokeWidth="3" />
          <path d="M160 70 Q200 100 220 150" fill="none" stroke="var(--diagram-stroke)" strokeWidth="3" />
          <ellipse cx="100" cy="165" rx="35" ry="28" fill="#bfdbfe" stroke="#2563eb" strokeWidth="2" />
          <ellipse cx="220" cy="165" rx="35" ry="28" fill="#bfdbfe" stroke="#2563eb" strokeWidth="2" />
          <text x="82" y="170" fontSize="11" fontWeight="700" fill="#1d4ed8">Lung</text>
          <text x="202" y="170" fontSize="11" fontWeight="700" fill="#1d4ed8">Lung</text>
        </svg>
      );
    case 'digestive':
      return (
        <svg {...commonProps} aria-label={title || 'Digestive tract overview'}>
          <ellipse cx="160" cy="35" rx="30" ry="18" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <text x="145" y="40" fontSize="10" fill="var(--diagram-stroke)">Mouth</text>
          <rect x="150" y="50" width="20" height="30" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <ellipse cx="160" cy="100" rx="35" ry="22" fill="#fecaca" stroke="#dc2626" strokeWidth="2" />
          <text x="140" y="104" fontSize="10" fontWeight="700" fill="#991b1b">Stomach</text>
          <path d="M160 120 C100 140 80 180 120 190 C160 200 200 180 200 150 C200 130 180 125 160 120" fill="none" stroke="#0d9488" strokeWidth="3" />
          <text x="210" y="170" fontSize="10" fill="#0f766e">Intestines</text>
        </svg>
      );
    case 'urinary':
      return (
        <svg {...commonProps} aria-label={title || 'Urinary system'}>
          <ellipse cx="100" cy="70" rx="28" ry="36" fill="#bfdbfe" stroke="#2563eb" strokeWidth="2" />
          <ellipse cx="220" cy="70" rx="28" ry="36" fill="#bfdbfe" stroke="#2563eb" strokeWidth="2" />
          <text x="82" y="75" fontSize="11" fontWeight="700" fill="#1d4ed8">Kidney</text>
          <text x="202" y="75" fontSize="11" fontWeight="700" fill="#1d4ed8">Kidney</text>
          <line x1="100" y1="106" x2="150" y2="160" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <line x1="220" y1="106" x2="170" y2="160" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <ellipse cx="160" cy="175" rx="36" ry="22" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <text x="140" y="180" fontSize="11" fontWeight="700" fill="var(--diagram-stroke)">Bladder</text>
        </svg>
      );
    case 'reproductive':
      return (
        <svg {...commonProps} aria-label={title || 'Female reproductive overview'}>
          <ellipse cx="160" cy="100" rx="50" ry="35" fill="#fce7f3" stroke="#db2777" strokeWidth="2" />
          <text x="140" y="105" fontSize="12" fontWeight="700" fill="#9d174d">Uterus</text>
          <ellipse cx="90" cy="80" rx="18" ry="14" fill="#fbcfe8" stroke="#db2777" strokeWidth="1.5" />
          <ellipse cx="230" cy="80" rx="18" ry="14" fill="#fbcfe8" stroke="#db2777" strokeWidth="1.5" />
          <text x="75" y="55" fontSize="10" fill="#9d174d">Ovary</text>
          <text x="215" y="55" fontSize="10" fill="#9d174d">Ovary</text>
          <path d="M108 80 Q130 90 120 100" fill="none" stroke="#db2777" strokeWidth="2" />
          <path d="M212 80 Q190 90 200 100" fill="none" stroke="#db2777" strokeWidth="2" />
          <text x="70" y="190" fontSize="11" fill="var(--diagram-stroke)">Simplified educational schematic</text>
        </svg>
      );
    case 'endocrine':
      return (
        <svg {...commonProps} aria-label={title || 'Major endocrine glands'}>
          <circle cx="160" cy="40" r="16" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
          <text x="185" y="45" fontSize="11" fill="var(--diagram-stroke)">Pituitary</text>
          <rect x="145" y="70" width="30" height="20" rx="4" fill="#fecaca" stroke="#dc2626" strokeWidth="1.5" />
          <text x="185" y="85" fontSize="11" fill="var(--diagram-stroke)">Thyroid</text>
          <rect x="100" y="120" width="40" height="24" rx="6" fill="#bfdbfe" stroke="#2563eb" strokeWidth="1.5" />
          <text x="105" y="160" fontSize="10" fill="var(--diagram-stroke)">Adrenal</text>
          <ellipse cx="200" cy="140" rx="28" ry="16" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
          <text x="185" y="175" fontSize="10" fill="var(--diagram-stroke)">Pancreas</text>
        </svg>
      );
    case 'lymphatic':
      return (
        <svg {...commonProps} aria-label={title || 'Lymphatic overview'}>
          <circle cx="80" cy="60" r="14" fill="#e9d5ff" stroke="#7c3aed" strokeWidth="2" />
          <circle cx="160" cy="50" r="14" fill="#e9d5ff" stroke="#7c3aed" strokeWidth="2" />
          <circle cx="240" cy="60" r="14" fill="#e9d5ff" stroke="#7c3aed" strokeWidth="2" />
          <text x="55" y="90" fontSize="10" fill="#5b21b6">Lymph nodes</text>
          <path d="M80 74 C100 120 140 140 160 160" fill="none" stroke="#7c3aed" strokeWidth="2" />
          <path d="M160 64 C160 100 180 140 200 160" fill="none" stroke="#7c3aed" strokeWidth="2" />
          <ellipse cx="180" cy="175" rx="40" ry="18" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="2" />
          <text x="155" y="180" fontSize="11" fontWeight="700" fill="#5b21b6">Spleen</text>
        </svg>
      );
    case 'atom':
      return (
        <svg {...commonProps} aria-label={title || 'Atomic structure'}>
          <circle cx="160" cy="110" r="22" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
          <text x="148" y="114" fontSize="11" fontWeight="700" fill="#854d0e">N</text>
          <ellipse cx="160" cy="110" rx="55" ry="28" fill="none" stroke="#0d9488" strokeWidth="2" />
          <ellipse cx="160" cy="110" rx="85" ry="48" fill="none" stroke="#2563eb" strokeWidth="2" />
          <circle cx="215" cy="110" r="7" fill="#0d9488" />
          <circle cx="75" cy="110" r="7" fill="#2563eb" />
          <text x="85" y="200" fill="var(--diagram-stroke)" fontSize="11">Nucleus (p+ n⁰) · Electrons in shells</text>
        </svg>
      );
    case 'periodic':
      return (
        <svg {...commonProps} aria-label={title || 'Periodic table concept'}>
          {Array.from({ length: 12 }).map((_, i) => {
            const x = 40 + (i % 6) * 40;
            const y = 50 + Math.floor(i / 6) * 50;
            return (
              <rect key={i} x={x} y={y} width="34" height="40" rx="4" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="1.5" />
            );
          })}
          <text x="70" y="180" fontSize="12" fontWeight="700" fill="var(--diagram-stroke)">Groups → · Periods ↓</text>
        </svg>
      );
    case 'matter':
      return (
        <svg {...commonProps} aria-label={title || 'States of matter'}>
          <rect x="20" y="60" width="80" height="80" rx="8" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <circle cx="40" cy="85" r="6" fill="#0d9488" /><circle cx="60" cy="90" r="6" fill="#0d9488" /><circle cx="50" cy="110" r="6" fill="#0d9488" />
          <text x="42" y="160" fontSize="12" fontWeight="700" fill="var(--diagram-stroke)">Solid</text>
          <rect x="120" y="60" width="80" height="80" rx="8" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <circle cx="140" cy="80" r="6" fill="#2563eb" /><circle cx="165" cy="100" r="6" fill="#2563eb" /><circle cx="150" cy="120" r="6" fill="#2563eb" />
          <text x="140" y="160" fontSize="12" fontWeight="700" fill="var(--diagram-stroke)">Liquid</text>
          <rect x="220" y="60" width="80" height="80" rx="8" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <circle cx="240" cy="75" r="5" fill="#c026d3" /><circle cx="270" cy="95" r="5" fill="#c026d3" /><circle cx="250" cy="120" r="5" fill="#c026d3" />
          <text x="245" y="160" fontSize="12" fontWeight="700" fill="var(--diagram-stroke)">Gas</text>
        </svg>
      );
    case 'bonding':
      return (
        <svg {...commonProps} aria-label={title || 'Chemical bonding'}>
          <circle cx="90" cy="100" r="30" fill="#fecaca" stroke="#dc2626" strokeWidth="2" />
          <text x="75" y="105" fontSize="12" fontWeight="700" fill="#991b1b">Na⁺</text>
          <circle cx="230" cy="100" r="30" fill="#bfdbfe" stroke="#2563eb" strokeWidth="2" />
          <text x="215" y="105" fontSize="12" fontWeight="700" fill="#1d4ed8">Cl⁻</text>
          <path d="M120 100 H200" stroke="#0d9488" strokeWidth="2" strokeDasharray="5 4" />
          <text x="130" y="90" fontSize="11" fontWeight="700" fill="#0f766e">Ionic attraction</text>
          <text x="80" y="180" fontSize="11" fill="var(--diagram-stroke)">Covalent = shared electron pairs</text>
        </svg>
      );
    case 'ph':
      return (
        <svg {...commonProps} aria-label={title || 'pH scale'}>
          <defs>
            <linearGradient id="phGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="50%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <rect x="30" y="90" width="260" height="28" rx="8" fill="url(#phGrad)" />
          <text x="30" y="80" fontSize="12" fontWeight="700" fill="#ef4444">Acidic</text>
          <text x="150" y="80" fontSize="12" fontWeight="700" fill="#ca8a04">7</text>
          <text x="245" y="80" fontSize="12" fontWeight="700" fill="#2563eb">Alkaline</text>
          <text x="30" y="140" fontSize="11" fill="var(--diagram-stroke)">0</text>
          <text x="145" y="140" fontSize="11" fill="var(--diagram-stroke)">Neutral</text>
          <text x="275" y="140" fontSize="11" fill="var(--diagram-stroke)">14</text>
          <text x="55" y="175" fontSize="11" fill="var(--diagram-stroke)">Blood ≈ 7.35–7.45 · Gastric acid low pH</text>
        </svg>
      );
    case 'solution':
      return (
        <svg {...commonProps} aria-label={title || 'Solution concept'}>
          <rect x="80" y="40" width="160" height="140" rx="12" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
          <circle cx="120" cy="90" r="6" fill="#0d9488" />
          <circle cx="160" cy="110" r="6" fill="#0d9488" />
          <circle cx="190" cy="80" r="6" fill="#0d9488" />
          <circle cx="140" cy="140" r="6" fill="#0d9488" />
          <text x="115" y="55" fontSize="11" fontWeight="700" fill="#075985">Solvent</text>
          <text x="200" y="100" fontSize="11" fill="#0f766e">Solute</text>
        </svg>
      );
    case 'reaction':
      return (
        <svg {...commonProps} aria-label={title || 'Chemical reaction'}>
          <rect x="30" y="80" width="70" height="40" rx="8" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <text x="42" y="105" fontSize="12" fontWeight="700" fill="var(--diagram-stroke)">Reactants</text>
          <text x="115" y="105" fontSize="20" fill="#0d9488">→</text>
          <rect x="145" y="80" width="70" height="40" rx="8" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <text x="158" y="105" fontSize="12" fontWeight="700" fill="var(--diagram-stroke)">Products</text>
          <text x="80" y="160" fontSize="11" fill="var(--diagram-stroke)">Balanced equations conserve atoms</text>
        </svg>
      );
    case 'pressure':
      return (
        <svg {...commonProps} aria-label={title || 'Pressure = force / area'}>
          <rect x="90" y="40" width="140" height="20" rx="4" fill="#fdba74" stroke="#ea580c" strokeWidth="2" />
          <text x="135" y="55" fontSize="12" fontWeight="700" fill="#9a3412">Force</text>
          <path d="M160 60 V100" stroke="#ea580c" strokeWidth="2" />
          <rect x="70" y="100" width="180" height="50" rx="6" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <text x="140" y="130" fontSize="12" fontWeight="700" fill="var(--diagram-stroke)">Area</text>
          <text x="100" y="185" fontSize="13" fontWeight="700" fill="var(--diagram-stroke)">P = F ÷ A</text>
        </svg>
      );
    case 'motion':
      return (
        <svg {...commonProps} aria-label={title || 'Motion concepts'}>
          <circle cx="60" cy="110" r="18" fill="#0d9488" />
          <path d="M80 110 H240" stroke="#0d9488" strokeWidth="3" markerEnd="url(#mArrow)" />
          <polygon points="240,100 260,110 240,120" fill="#0d9488" />
          <text x="120" y="95" fontSize="12" fontWeight="700" fill="var(--diagram-stroke)">Velocity</text>
          <text x="70" y="160" fontSize="11" fill="var(--diagram-stroke)">Displacement over time · direction matters</text>
        </svg>
      );
    case 'heat':
      return (
        <svg {...commonProps} aria-label={title || 'Heat transfer'}>
          {[
            [40, 'Conduction', '#f97316'],
            [120, 'Convection', '#0d9488'],
            [200, 'Radiation', '#2563eb'],
          ].map(([x, label, color]) => (
            <g key={label}>
              <rect x={x} y="70" width="70" height="70" rx="10" fill="var(--diagram-fill)" stroke={color} strokeWidth="2" />
              <text x={x + 6} y="110" fontSize="10" fontWeight="700" fill={color}>{label}</text>
            </g>
          ))}
        </svg>
      );
    case 'wave':
      return (
        <svg {...commonProps} aria-label={title || 'Wave properties'}>
          <path d="M20 110 Q60 40 100 110 Q140 180 180 110 Q220 40 260 110 Q300 180 320 110" fill="none" stroke="#0d9488" strokeWidth="3" />
          <line x1="100" y1="50" x2="100" y2="170" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="4 3" />
          <text x="105" y="45" fontSize="11" fill="#2563eb">Amplitude</text>
          <text x="140" y="200" fontSize="11" fill="var(--diagram-stroke)">Wavelength →</text>
        </svg>
      );
    case 'light':
      return (
        <svg {...commonProps} aria-label={title || 'Reflection and refraction'}>
          <line x1="40" y1="160" x2="280" y2="160" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <line x1="160" y1="40" x2="160" y2="160" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 3" />
          <line x1="80" y1="60" x2="160" y2="160" stroke="#f59e0b" strokeWidth="2.5" />
          <line x1="160" y1="160" x2="240" y2="60" stroke="#f59e0b" strokeWidth="2.5" />
          <text x="60" y="50" fontSize="11" fill="#d97706">Incident</text>
          <text x="220" y="50" fontSize="11" fill="#d97706">Reflected</text>
        </svg>
      );
    case 'circuit':
      return (
        <svg {...commonProps} aria-label={title || 'Simple circuit'}>
          <rect x="40" y="90" width="40" height="40" rx="4" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
          <text x="48" y="115" fontSize="11" fontWeight="700" fill="#854d0e">Batt</text>
          <line x1="80" y1="110" x2="200" y2="110" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <circle cx="230" cy="110" r="22" fill="none" stroke="#0d9488" strokeWidth="2" />
          <text x="218" y="114" fontSize="11" fill="#0f766e">Load</text>
          <line x1="252" y1="110" x2="280" y2="110" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <line x1="280" y1="110" x2="280" y2="160" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <line x1="280" y1="160" x2="60" y2="160" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <line x1="60" y1="160" x2="60" y2="130" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <text x="90" y="200" fontSize="11" fill="var(--diagram-stroke)">Closed path · current flows</text>
        </svg>
      );
    case 'energy':
      return (
        <svg {...commonProps} aria-label={title || 'Energy forms'}>
          <rect x="40" y="70" width="100" height="60" rx="10" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
          <text x="55" y="105" fontSize="12" fontWeight="700" fill="#854d0e">Potential</text>
          <text x="155" y="105" fontSize="18" fill="#0d9488">→</text>
          <rect x="180" y="70" width="100" height="60" rx="10" fill="#ccfbf1" stroke="#0d9488" strokeWidth="2" />
          <text x="200" y="105" fontSize="12" fontWeight="700" fill="#0f766e">Kinetic</text>
          <text x="80" y="170" fontSize="11" fill="var(--diagram-stroke)">Work · energy · power in care settings</text>
        </svg>
      );
    case 'measurement':
      return (
        <svg {...commonProps} aria-label={title || 'Measurement and units'}>
          <rect x="50" y="80" width="220" height="24" rx="4" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          {Array.from({ length: 11 }).map((_, i) => (
            <line key={i} x1={50 + i * 22} y1="80" x2={50 + i * 22} y2="104" stroke="var(--diagram-stroke)" strokeWidth="1.5" />
          ))}
          <text x="100" y="140" fontSize="12" fontWeight="700" fill="var(--diagram-stroke)">SI units · accurate measurement</text>
        </svg>
      );
    case 'membrane':
      return (
        <svg {...commonProps} aria-label={title || 'Membrane transport'}>
          <rect x="40" y="70" width="240" height="50" rx="4" fill="#ccfbf1" stroke="#0d9488" strokeWidth="2" />
          <text x="110" y="100" fontSize="12" fontWeight="700" fill="#0f766e">Cell membrane</text>
          <path d="M80 50 V70" stroke="#2563eb" strokeWidth="2" />
          <text x="45" y="42" fontSize="11" fill="#2563eb">Diffusion →</text>
          <path d="M240 120 V160" stroke="#c026d3" strokeWidth="2" />
          <text x="195" y="175" fontSize="11" fill="#c026d3">Active transport</text>
        </svg>
      );
    case 'homeostasis':
      return (
        <svg {...commonProps} aria-label={title || 'Homeostasis feedback'}>
          <circle cx="160" cy="110" r="40" fill="var(--diagram-fill)" stroke="#0d9488" strokeWidth="2" />
          <text x="130" y="115" fontSize="12" fontWeight="700" fill="#0f766e">Set point</text>
          <path d="M160 70 Q220 40 240 90" fill="none" stroke="#2563eb" strokeWidth="2" />
          <text x="230" y="70" fontSize="10" fill="#2563eb">Sensor</text>
          <path d="M200 140 Q220 180 160 170" fill="none" stroke="#c026d3" strokeWidth="2" />
          <text x="210" y="190" fontSize="10" fill="#c026d3">Effector</text>
        </svg>
      );
    case 'chain-infection':
      return (
        <svg {...commonProps} aria-label={title || 'Chain of infection'}>
          {['Agent', 'Reservoir', 'Exit', 'Transmission', 'Entry', 'Host'].map((label, i) => {
            const x = 20 + (i % 3) * 100;
            const y = 40 + Math.floor(i / 3) * 90;
            return (
              <g key={label}>
                <rect x={x} y={y} width="88" height="56" rx="12" fill="var(--diagram-fill)" stroke="#0d9488" strokeWidth="2" />
                <text x={x + 14} y={y + 34} fontSize="12" fontWeight="700" fill="var(--diagram-stroke)">{label}</text>
              </g>
            );
          })}
        </svg>
      );
    case 'hand-hygiene':
      return (
        <svg {...commonProps} aria-label={title || 'Hand hygiene moments'}>
          {['Before patient', 'Before aseptic', 'After fluid risk', 'After patient', 'After surroundings'].map((label, i) => (
            <g key={label}>
              <circle cx="36" cy={28 + i * 36} r="12" fill="#0d9488" />
              <text x="32" y={32 + i * 36} fontSize="11" fontWeight="700" fill="#fff">{i + 1}</text>
              <text x="56" y={33 + i * 36} fontSize="12" fill="var(--diagram-stroke)">{label}</text>
            </g>
          ))}
        </svg>
      );
    case 'ppe':
      return (
        <svg {...commonProps} aria-label={title || 'PPE principles'}>
          <ellipse cx="160" cy="50" rx="28" ry="32" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <rect x="130" y="80" width="60" height="70" rx="12" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
          <text x="140" y="120" fontSize="11" fontWeight="700" fill="#075985">Gown</text>
          <rect x="100" y="90" width="24" height="40" rx="8" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
          <rect x="196" y="90" width="24" height="40" rx="8" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
          <rect x="140" y="42" width="40" height="16" rx="4" fill="#fce7f3" stroke="#db2777" strokeWidth="2" />
          <text x="200" y="55" fontSize="11" fill="#be185d">Mask</text>
        </svg>
      );
    case 'microbes':
      return (
        <svg {...commonProps} aria-label={title || 'Microorganism groups'}>
          <circle cx="70" cy="90" r="28" fill="#bbf7d0" stroke="#16a34a" strokeWidth="2" />
          <text x="48" y="95" fontSize="11" fontWeight="700" fill="#166534">Bacteria</text>
          <circle cx="160" cy="90" r="18" fill="#e9d5ff" stroke="#7c3aed" strokeWidth="2" />
          <text x="142" y="130" fontSize="11" fontWeight="700" fill="#5b21b6">Virus</text>
          <ellipse cx="250" cy="90" rx="32" ry="20" fill="#fde68a" stroke="#ca8a04" strokeWidth="2" />
          <text x="232" y="95" fontSize="11" fontWeight="700" fill="#854d0e">Fungi</text>
          <ellipse cx="160" cy="170" rx="40" ry="22" fill="#fecaca" stroke="#dc2626" strokeWidth="2" />
          <text x="135" y="175" fontSize="11" fontWeight="700" fill="#991b1b">Protozoa</text>
        </svg>
      );
    case 'sbar':
      return (
        <svg {...commonProps} aria-label={title || 'SBAR structure'}>
          {[['S', 'Situation', '#0d9488'], ['B', 'Background', '#2563eb'], ['A', 'Assessment', '#c026d3'], ['R', 'Recommendation', '#ea580c']].map(([letter, name, color], i) => (
            <g key={letter}>
              <rect x="40" y={20 + i * 48} width="240" height="40" rx="10" fill="var(--diagram-fill)" stroke={color} strokeWidth="2" />
              <circle cx="64" cy={40 + i * 48} r="14" fill={color} />
              <text x="58" y={45 + i * 48} fontSize="13" fontWeight="700" fill="#fff">{letter}</text>
              <text x="90" y={45 + i * 48} fontSize="13" fontWeight="600" fill="var(--diagram-stroke)">{name}</text>
            </g>
          ))}
        </svg>
      );
    case 'communication':
      return (
        <svg {...commonProps} aria-label={title || 'Communication process'}>
          <rect x="20" y="80" width="70" height="40" rx="8" fill="var(--diagram-fill)" stroke="#0d9488" strokeWidth="2" />
          <text x="32" y="105" fontSize="12" fontWeight="700" fill="var(--diagram-stroke)">Sender</text>
          <rect x="145" y="80" width="70" height="40" rx="8" fill="var(--diagram-fill)" stroke="#2563eb" strokeWidth="2" />
          <text x="152" y="105" fontSize="12" fontWeight="700" fill="var(--diagram-stroke)">Message</text>
          <rect x="250" y="80" width="55" height="40" rx="8" fill="var(--diagram-fill)" stroke="#c026d3" strokeWidth="2" />
          <text x="255" y="105" fontSize="11" fontWeight="700" fill="var(--diagram-stroke)">Receiver</text>
          <path d="M90 100 H140" stroke="#0d9488" strokeWidth="2" />
          <path d="M215 100 H248" stroke="#0d9488" strokeWidth="2" />
          <path d="M275 125 C275 170 40 170 40 125" fill="none" stroke="#ea580c" strokeWidth="2" strokeDasharray="5 4" />
          <text x="120" y="185" fontSize="12" fontWeight="700" fill="#ea580c">Feedback</text>
        </svg>
      );
    case 'dikw':
      return (
        <svg {...commonProps} aria-label={title || 'DIKW hierarchy'}>
          {[
            [60, 160, 200, 36, 'Data', '#99f6e4'],
            [80, 118, 160, 36, 'Information', '#5eead4'],
            [100, 76, 120, 36, 'Knowledge', '#2dd4bf'],
            [120, 34, 80, 36, 'Wisdom', '#14b8a6'],
          ].map(([x, y, w, h, label, fill]) => (
            <g key={label}>
              <rect x={x} y={y} width={w} height={h} rx="8" fill={fill} stroke="#0f766e" strokeWidth="1.5" />
              <text x={x + w / 2 - 28} y={y + 24} fontSize="12" fontWeight="700" fill="#134e4a">{label}</text>
            </g>
          ))}
        </svg>
      );
    case 'nursing-process':
      return (
        <svg {...commonProps} aria-label={title || 'Nursing process cycle'}>
          {['Assess', 'Diagnose', 'Plan', 'Implement', 'Evaluate'].map((label, i) => {
            const angle = (i / 5) * Math.PI * 2 - Math.PI / 2;
            const cx = 160 + Math.cos(angle) * 70;
            const cy = 110 + Math.sin(angle) * 70;
            return (
              <g key={label}>
                <circle cx={cx} cy={cy} r="28" fill="var(--diagram-fill)" stroke="#0d9488" strokeWidth="2" />
                <text x={cx - 22} y={cy + 4} fontSize="10" fontWeight="700" fill="var(--diagram-stroke)">{label}</text>
              </g>
            );
          })}
        </svg>
      );
    case 'patient-id':
      return (
        <svg {...commonProps} aria-label={title || 'Patient identification'}>
          {['Ask name', 'Check ID', 'Match record', 'Proceed'].map((label, i) => (
            <g key={label}>
              <rect x={15 + i * 76} y="90" width="70" height="44" rx="10" fill="var(--diagram-fill)" stroke="#0d9488" strokeWidth="2" />
              <text x={22 + i * 76} y="116" fontSize="10" fontWeight="700" fill="var(--diagram-stroke)">{label}</text>
            </g>
          ))}
        </svg>
      );
    case 'vitals':
      return (
        <svg {...commonProps} aria-label={title || 'Vital signs'}>
          {[
            [30, 'T°', '#ef4444'],
            [100, 'Pulse', '#0d9488'],
            [170, 'RR', '#2563eb'],
            [240, 'BP', '#c026d3'],
          ].map(([x, label, color]) => (
            <g key={label}>
              <rect x={x} y="70" width="55" height="70" rx="10" fill="var(--diagram-fill)" stroke={color} strokeWidth="2" />
              <text x={x + 12} y="110" fontSize="13" fontWeight="700" fill={color}>{label}</text>
            </g>
          ))}
        </svg>
      );
    case 'needs':
      return (
        <svg {...commonProps} aria-label={title || 'Needs priority pyramid'}>
          {[
            [60, 160, 200, 36, 'Physiological', '#99f6e4'],
            [85, 122, 150, 34, 'Safety', '#5eead4'],
            [105, 86, 110, 32, 'Belonging', '#2dd4bf'],
            [120, 52, 80, 30, 'Esteem', '#14b8a6'],
            [135, 22, 50, 26, 'Self', '#0d9488'],
          ].map(([x, y, w, h, label, fill]) => (
            <g key={label}>
              <rect x={x} y={y} width={w} height={h} rx="6" fill={fill} stroke="#0f766e" strokeWidth="1.5" />
              <text x={x + 12} y={y + h / 2 + 4} fontSize="11" fontWeight="700" fill="#134e4a">{label}</text>
            </g>
          ))}
        </svg>
      );
    case 'care-concept':
    case 'clinical-skill':
    case 'documentation':
      return (
        <svg {...commonProps} aria-label={title || 'Care process'}>
          {['Prepare', 'Explain', 'Perform', 'Evaluate'].map((label, i) => (
            <g key={label}>
              <rect x={20 + i * 75} y="85" width="68" height="50" rx="10" fill="var(--diagram-fill)" stroke="#0d9488" strokeWidth="2" />
              <text x={28 + i * 75} y="115" fontSize="11" fontWeight="700" fill="var(--diagram-stroke)">{label}</text>
            </g>
          ))}
        </svg>
      );
    case 'professional':
      return (
        <svg {...commonProps} aria-label={title || 'Professional practice pillars'}>
          {[['Ethics', '#0d9488'], ['Competence', '#2563eb'], ['Accountability', '#c026d3']].map(([label, color], i) => (
            <g key={label}>
              <rect x={25 + i * 95} y="70" width="85" height="80" rx="12" fill="var(--diagram-fill)" stroke={color} strokeWidth="2" />
              <text x={32 + i * 95} y="115" fontSize="11" fontWeight="700" fill={color}>{label}</text>
            </g>
          ))}
        </svg>
      );
    case 'informatics':
      return (
        <svg {...commonProps} aria-label={title || 'Health information flow'}>
          <rect x="30" y="80" width="70" height="50" rx="8" fill="var(--diagram-fill)" stroke="#0d9488" strokeWidth="2" />
          <text x="42" y="110" fontSize="11" fontWeight="700" fill="var(--diagram-stroke)">Patient</text>
          <text x="110" y="110" fontSize="16" fill="#0d9488">→</text>
          <rect x="130" y="80" width="70" height="50" rx="8" fill="var(--diagram-fill)" stroke="#2563eb" strokeWidth="2" />
          <text x="148" y="110" fontSize="11" fontWeight="700" fill="var(--diagram-stroke)">EHR</text>
          <text x="210" y="110" fontSize="16" fill="#0d9488">→</text>
          <rect x="230" y="80" width="70" height="50" rx="8" fill="var(--diagram-fill)" stroke="#c026d3" strokeWidth="2" />
          <text x="242" y="110" fontSize="11" fontWeight="700" fill="var(--diagram-stroke)">Care team</text>
          <text x="70" y="170" fontSize="11" fill="var(--diagram-stroke)">Secure · accurate · timely data</text>
        </svg>
      );
    default:
      return (
        <svg {...commonProps} aria-label={title || 'Concept illustration'}>
          <rect x="40" y="40" width="240" height="140" rx="16" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <circle cx="160" cy="100" r="36" fill="none" stroke="#0d9488" strokeWidth="3" />
          <text x="100" y="175" fontSize="12" fontWeight="600" fill="var(--diagram-stroke)">Educational schematic</text>
        </svg>
      );
  }
}
