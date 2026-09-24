/**
 * Topic-specific educational SVG diagrams for lessons.
 * Textbook-style medical/nursing illustrations.
 * Light/dark via CSS variables --diagram-fill / --diagram-stroke
 */

const commonProps = {
  viewBox: '0 0 320 240',
  xmlns: 'http://www.w3.org/2000/svg',
  role: 'img',
  className: 'lc-diagram-svg',
};

const stroke = 'var(--diagram-stroke)';
const fill = 'var(--diagram-fill)';

/** Simple standing human silhouette (anatomical position-friendly) */
function BodySilhouette({ cx = 160, top = 28, scale = 1, palmsForward = false }) {
  const s = scale;
  const x = cx;
  const y = top;
  return (
    <g>
      {/* head */}
      <ellipse cx={x} cy={y + 16 * s} rx={14 * s} ry={17 * s} fill={fill} stroke={stroke} strokeWidth="2" />
      {/* neck */}
      <rect x={x - 5 * s} y={y + 30 * s} width={10 * s} height={10 * s} fill={fill} stroke={stroke} strokeWidth="1.5" />
      {/* torso */}
      <path
        d={`M${x - 28 * s} ${y + 40 * s} Q${x - 32 * s} ${y + 70 * s} ${x - 26 * s} ${y + 100 * s} L${x + 26 * s} ${y + 100 * s} Q${x + 32 * s} ${y + 70 * s} ${x + 28 * s} ${y + 40 * s} Z`}
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
      />
      {/* arms */}
      <path
        d={`M${x - 28 * s} ${y + 48 * s} L${x - 52 * s} ${y + 55 * s} L${x - 58 * s} ${y + 95 * s}`}
        fill="none"
        stroke={stroke}
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d={`M${x + 28 * s} ${y + 48 * s} L${x + 52 * s} ${y + 55 * s} L${x + 58 * s} ${y + 95 * s}`}
        fill="none"
        stroke={stroke}
        strokeWidth="8"
        strokeLinecap="round"
      />
      {/* palms forward markers */}
      {palmsForward && (
        <g>
          <ellipse cx={x - 58 * s} cy={y + 100 * s} rx={7 * s} ry={5 * s} fill="#99f6e4" stroke="#0d9488" strokeWidth="1.5" />
          <ellipse cx={x + 58 * s} cy={y + 100 * s} rx={7 * s} ry={5 * s} fill="#99f6e4" stroke="#0d9488" strokeWidth="1.5" />
        </g>
      )}
      {/* legs */}
      <path
        d={`M${x - 14 * s} ${y + 100 * s} L${x - 18 * s} ${y + 155 * s} L${x - 22 * s} ${y + 175 * s}`}
        fill="none"
        stroke={stroke}
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d={`M${x + 14 * s} ${y + 100 * s} L${x + 18 * s} ${y + 155 * s} L${x + 22 * s} ${y + 175 * s}`}
        fill="none"
        stroke={stroke}
        strokeWidth="9"
        strokeLinecap="round"
      />
      {/* feet */}
      <ellipse cx={x - 26 * s} cy={y + 178 * s} rx={12 * s} ry={5 * s} fill={fill} stroke={stroke} strokeWidth="1.5" />
      <ellipse cx={x + 26 * s} cy={y + 178 * s} rx={12 * s} ry={5 * s} fill={fill} stroke={stroke} strokeWidth="1.5" />
    </g>
  );
}

export function DiagramSvg({ kind, title }) {
  const k = kind || 'generic';
  switch (k) {
    case 'anatomy-intro':
      return (
        <svg {...commonProps} aria-label={title || 'Levels of organization'}>
          <BodySilhouette cx={95} top={25} scale={0.85} />
          <text x="55" y="20" fontSize="11" fontWeight="700" fill="#0d9488">Head / neck</text>
          <text x="12" y="90" fontSize="11" fontWeight="700" fill="#0d9488">Thorax</text>
          <text x="12" y="130" fontSize="11" fontWeight="700" fill="#0d9488">Abdomen</text>
          <text x="12" y="165" fontSize="11" fontWeight="700" fill="#0d9488">Pelvis</text>
          <text x="55" y="215" fontSize="11" fontWeight="700" fill="#0d9488">Limbs</text>
          {/* organization ladder */}
          <rect x="175" y="25" width="130" height="26" rx="6" fill="#ccfbf1" stroke="#0d9488" strokeWidth="1.5" />
          <text x="210" y="43" fontSize="12" fontWeight="700" fill="#0f766e">Cell</text>
          <text x="232" y="58" fontSize="12" fill="#0d9488">v</text>
          <rect x="175" y="62" width="130" height="26" rx="6" fill="#99f6e4" stroke="#0d9488" strokeWidth="1.5" />
          <text x="205" y="80" fontSize="12" fontWeight="700" fill="#0f766e">Tissue</text>
          <text x="232" y="97" fontSize="12" fill="#0d9488">v</text>
          <rect x="175" y="100" width="130" height="26" rx="6" fill="#5eead4" stroke="#0d9488" strokeWidth="1.5" />
          <text x="210" y="118" fontSize="12" fontWeight="700" fill="#0f766e">Organ</text>
          <text x="232" y="135" fontSize="12" fill="#0d9488">v</text>
          <rect x="175" y="138" width="130" height="26" rx="6" fill="#2dd4bf" stroke="#0d9488" strokeWidth="1.5" />
          <text x="185" y="156" fontSize="12" fontWeight="700" fill="#134e4a">Organ system</text>
          <text x="232" y="173" fontSize="12" fill="#0d9488">v</text>
          <rect x="175" y="176" width="130" height="26" rx="6" fill="#14b8a6" stroke="#0f766e" strokeWidth="1.5" />
          <text x="198" y="194" fontSize="12" fontWeight="700" fill="#ecfdf5">Organism</text>
          <text x="40" y="232" fontSize="11" fill="var(--diagram-stroke)">Regions of the body + levels of organization</text>
        </svg>
      );

    case 'anatomical-position':
      return (
        <svg {...commonProps} aria-label={title || 'Anatomical position'}>
          <BodySilhouette cx={160} top={12} scale={1} palmsForward={true} />
          <text x="12" y="40" fontSize="11" fontWeight="700" fill="#0d9488">Facing</text>
          <text x="12" y="55" fontSize="11" fontWeight="700" fill="#0d9488">observer</text>
          <text x="230" y="100" fontSize="11" fontWeight="700" fill="#0d9488">Palms</text>
          <text x="230" y="115" fontSize="11" fontWeight="700" fill="#0d9488">forward</text>
          <path d="M215 118 L190 115" stroke="#0d9488" strokeWidth="1.5" />
          <text x="12" y="200" fontSize="11" fontWeight="700" fill="#0d9488">Feet forward</text>
          <text x="12" y="215" fontSize="11" fill={stroke}>slightly apart</text>
          <text x="95" y="232" fontSize="11" fill={stroke}>Standard reference posture for all directional terms</text>
        </svg>
      );

    case 'directional':
      return (
        <svg {...commonProps} aria-label={title || 'Directional terms'}>
          <BodySilhouette cx={160} top={20} scale={0.9} />
          {/* Superior / Inferior */}
          <text x="140" y="18" fontSize="12" fontWeight="700" fill="#0d9488">Superior</text>
          <path d="M160 22 L160 32" stroke="#0d9488" strokeWidth="2" />
          <text x="140" y="228" fontSize="12" fontWeight="700" fill="#0d9488">Inferior</text>
          {/* Medial / Lateral */}
          <text x="12" y="100" fontSize="12" fontWeight="700" fill="#2563eb">Lateral</text>
          <path d="M55 100 H95" stroke="#2563eb" strokeWidth="2" />
          <text x="175" y="100" fontSize="12" fontWeight="700" fill="#2563eb">Medial</text>
          <text x="250" y="100" fontSize="12" fontWeight="700" fill="#2563eb">Lateral</text>
          {/* Anterior note */}
          <text x="230" y="50" fontSize="11" fontWeight="700" fill="#c026d3">Anterior</text>
          <text x="230" y="64" fontSize="10" fill="#c026d3">(front)</text>
          <text x="230" y="160" fontSize="11" fontWeight="700" fill="#c026d3">Posterior</text>
          <text x="230" y="174" fontSize="10" fill="#c026d3">(back)</text>
          {/* Proximal distal on arm */}
          <text x="12" y="140" fontSize="11" fontWeight="700" fill="#ea580c">Proximal</text>
          <text x="12" y="175" fontSize="11" fontWeight="700" fill="#ea580c">Distal</text>
        </svg>
      );

    case 'planes':
      return (
        <svg {...commonProps} aria-label={title || 'Body planes'}>
          <BodySilhouette cx={150} top={18} scale={0.95} />
          {/* Sagittal - vertical midline dashed */}
          <line x1="150" y1="20" x2="150" y2="210" stroke="#0d9488" strokeWidth="2.5" strokeDasharray="7 4" />
          <text x="156" y="30" fontSize="12" fontWeight="700" fill="#0d9488">Sagittal</text>
          <text x="156" y="44" fontSize="10" fill="#0d9488">left / right</text>
          {/* Frontal/coronal */}
          <line x1="90" y1="30" x2="90" y2="205" stroke="#2563eb" strokeWidth="2.5" strokeDasharray="7 4" />
          <text x="20" y="120" fontSize="12" fontWeight="700" fill="#2563eb">Frontal</text>
          <text x="20" y="134" fontSize="10" fill="#2563eb">(coronal)</text>
          <text x="20" y="148" fontSize="10" fill="#2563eb">front/back</text>
          {/* Transverse */}
          <line x1="95" y1="110" x2="230" y2="110" stroke="#c026d3" strokeWidth="2.5" strokeDasharray="7 4" />
          <text x="235" y="105" fontSize="12" fontWeight="700" fill="#c026d3">Transverse</text>
          <text x="235" y="120" fontSize="10" fill="#c026d3">upper/lower</text>
        </svg>
      );

    case 'cavities':
      return (
        <svg {...commonProps} aria-label={title || 'Body cavities'}>
          <ellipse cx="160" cy="32" rx="24" ry="26" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <path d="M115 52 Q105 100 110 155 L140 210 L180 210 L210 155 Q215 100 205 52 Z" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <ellipse cx="160" cy="32" rx="18" ry="20" fill="#99f6e4" stroke="#0d9488" strokeWidth="1.5" />
          <text x="200" y="30" fontSize="12" fontWeight="700" fill="#0f766e">Cranial cavity</text>
          <text x="200" y="46" fontSize="11" fill="#0f766e">(brain)</text>
          <rect x="125" y="65" width="70" height="42" rx="8" fill="#bfdbfe" stroke="#2563eb" strokeWidth="1.5" />
          <text x="132" y="85" fontSize="11" fontWeight="700" fill="#1d4ed8">Thoracic</text>
          <text x="128" y="100" fontSize="10" fill="#1d4ed8">heart, lungs</text>
          <line x1="125" y1="112" x2="195" y2="112" stroke="#64748b" strokeWidth="2" />
          <text x="200" y="115" fontSize="10" fill="#64748b">Diaphragm</text>
          <rect x="125" y="118" width="70" height="40" rx="6" fill="#fbcfe8" stroke="#db2777" strokeWidth="1.5" />
          <text x="132" y="142" fontSize="11" fontWeight="700" fill="#be185d">Abdominal</text>
          <rect x="130" y="162" width="60" height="32" rx="6" fill="#e9d5ff" stroke="#7c3aed" strokeWidth="1.5" />
          <text x="140" y="182" fontSize="11" fontWeight="700" fill="#5b21b6">Pelvic</text>
          <text x="30" y="225" fontSize="11" fill="var(--diagram-stroke)">Cavities house and protect organs - orient assessment</text>
        </svg>
      );

    case 'regions':
      return (
        <svg {...commonProps} aria-label={title || 'Abdominal regions'}>
          <rect x="90" y="30" width="140" height="170" rx="16" fill={fill} stroke={stroke} strokeWidth="2" />
          <line x1="90" y1="85" x2="230" y2="85" stroke={stroke} strokeWidth="1.5" strokeDasharray="4 3" />
          <line x1="90" y1="145" x2="230" y2="145" stroke={stroke} strokeWidth="1.5" strokeDasharray="4 3" />
          <line x1="137" y1="85" x2="137" y2="200" stroke={stroke} strokeWidth="1.5" strokeDasharray="4 3" />
          <line x1="183" y1="85" x2="183" y2="200" stroke={stroke} strokeWidth="1.5" strokeDasharray="4 3" />
          <text x="125" y="60" fontSize="12" fontWeight="700" fill={stroke}>Epigastric</text>
          <text x="100" y="120" fontSize="11" fill={stroke}>R lumbar</text>
          <text x="145" y="120" fontSize="11" fontWeight="700" fill={stroke}>Umbilical</text>
          <text x="188" y="120" fontSize="11" fill={stroke}>L lumbar</text>
          <text x="100" y="175" fontSize="11" fill={stroke}>R iliac</text>
          <text x="148" y="175" fontSize="11" fill={stroke}>Hypogastric</text>
          <text x="188" y="175" fontSize="11" fill={stroke}>L iliac</text>
          <text x="50" y="225" fontSize="11" fill={stroke}>Nine-region model used in abdominal assessment</text>
        </svg>
      );

    case 'cell':
      return (
        <svg {...commonProps} aria-label={title || 'Animal cell structure'}>
          <ellipse cx="160" cy="115" rx="115" ry="85" fill="#ecfdf5" stroke="#0d9488" strokeWidth="3" />
          <text x="200" y="45" fontSize="12" fontWeight="700" fill="#0f766e">Plasma membrane</text>
          <circle cx="160" cy="115" r="36" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2.5" />
          <circle cx="160" cy="115" r="12" fill="#fde68a" stroke="#ca8a04" strokeWidth="1" />
          <text x="140" y="100" fontSize="12" fontWeight="700" fill="#854d0e">Nucleus</text>
          <text x="135" y="145" fontSize="10" fill="#854d0e">nucleolus</text>
          <ellipse cx="90" cy="85" rx="16" ry="10" fill="#99f6e4" stroke="#0d9488" strokeWidth="1.5" />
          <text x="20" y="75" fontSize="11" fontWeight="700" fill="#0f766e">Mitochondrion</text>
          <path d="M200 140 Q230 130 250 150 Q230 160 200 155" fill="none" stroke="#16a34a" strokeWidth="2" />
          <text x="210" y="175" fontSize="11" fontWeight="700" fill="#166534">Endoplasmic reticulum</text>
          <circle cx="100" cy="150" r="8" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1" />
          <text x="40" y="175" fontSize="11" fill="#166534">Ribosome</text>
          <text x="40" y="220" fontSize="11" fill="var(--diagram-stroke)">Basic living unit - membrane controls transport</text>
        </svg>
      );

    case 'tissues':
      return (
        <svg {...commonProps} aria-label={title || 'Four primary tissues'}>
          {/* Epithelial - packed cells in a layer */}
          <rect x="15" y="20" width="140" height="90" rx="8" fill="var(--diagram-fill)" stroke="#0d9488" strokeWidth="2" />
          <text x="45" y="40" fontSize="12" fontWeight="700" fill="#0f766e">Epithelial</text>
          <rect x="30" y="50" width="110" height="18" fill="#99f6e4" stroke="#0d9488" strokeWidth="1" />
          <rect x="30" y="68" width="110" height="18" fill="#ccfbf1" stroke="#0d9488" strokeWidth="1" />
          <line x1="50" y1="50" x2="50" y2="86" stroke="#0d9488" strokeWidth="1" />
          <line x1="75" y1="50" x2="75" y2="86" stroke="#0d9488" strokeWidth="1" />
          <line x1="100" y1="50" x2="100" y2="86" stroke="#0d9488" strokeWidth="1" />
          <line x1="125" y1="50" x2="125" y2="86" stroke="#0d9488" strokeWidth="1" />
          <text x="35" y="100" fontSize="10" fill="var(--diagram-stroke)">packed surface layer</text>
          {/* Connective - cells in matrix */}
          <rect x="165" y="20" width="140" height="90" rx="8" fill="var(--diagram-fill)" stroke="#2563eb" strokeWidth="2" />
          <text x="195" y="40" fontSize="12" fontWeight="700" fill="#1d4ed8">Connective</text>
          <circle cx="190" cy="65" r="6" fill="#93c5fd" />
          <circle cx="220" cy="75" r="6" fill="#93c5fd" />
          <circle cx="250" cy="60" r="6" fill="#93c5fd" />
          <circle cx="270" cy="80" r="6" fill="#93c5fd" />
          <line x1="180" y1="55" x2="280" y2="90" stroke="#60a5fa" strokeWidth="1" />
          <line x1="185" y1="90" x2="275" y2="55" stroke="#60a5fa" strokeWidth="1" />
          <text x="180" y="100" fontSize="10" fill="var(--diagram-stroke)">cells in matrix/fibres</text>
          {/* Muscle - parallel fibres */}
          <rect x="15" y="125" width="140" height="90" rx="8" fill="var(--diagram-fill)" stroke="#dc2626" strokeWidth="2" />
          <text x="55" y="145" fontSize="12" fontWeight="700" fill="#991b1b">Muscle</text>
          <line x1="30" y1="160" x2="140" y2="160" stroke="#f87171" strokeWidth="3" />
          <line x1="30" y1="172" x2="140" y2="172" stroke="#f87171" strokeWidth="3" />
          <line x1="30" y1="184" x2="140" y2="184" stroke="#f87171" strokeWidth="3" />
          <line x1="30" y1="196" x2="140" y2="196" stroke="#f87171" strokeWidth="3" />
          <text x="35" y="210" fontSize="10" fill="var(--diagram-stroke)">contractile fibres</text>
          {/* Nervous - neuron sketch */}
          <rect x="165" y="125" width="140" height="90" rx="8" fill="var(--diagram-fill)" stroke="#7c3aed" strokeWidth="2" />
          <text x="205" y="145" fontSize="12" fontWeight="700" fill="#5b21b6">Nervous</text>
          <circle cx="200" cy="175" r="12" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="1.5" />
          <line x1="212" y1="175" x2="280" y2="175" stroke="#7c3aed" strokeWidth="2" />
          <line x1="185" y1="160" x2="170" y2="150" stroke="#7c3aed" strokeWidth="1.5" />
          <line x1="185" y1="190" x2="170" y2="200" stroke="#7c3aed" strokeWidth="1.5" />
          <text x="185" y="210" fontSize="10" fill="var(--diagram-stroke)">neurons + support cells</text>
        </svg>
      );

    case 'skeleton':
      return (
        <svg {...commonProps} aria-label={title || 'Human skeleton overview'}>
          {/* skull */}
          <ellipse cx="160" cy="28" rx="20" ry="22" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <text x="195" y="25" fontSize="11" fontWeight="700" fill="var(--diagram-stroke)">Skull</text>
          {/* cervical suggestion */}
          <rect x="155" y="48" width="10" height="14" rx="2" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="1.5" />
          {/* rib cage */}
          <ellipse cx="160" cy="85" rx="42" ry="30" fill="none" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <ellipse cx="160" cy="85" rx="30" ry="22" fill="none" stroke="var(--diagram-stroke)" strokeWidth="1.2" />
          <line x1="160" y1="55" x2="160" y2="112" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <text x="210" y="80" fontSize="11" fontWeight="700" fill="var(--diagram-stroke)">Ribs</text>
          <text x="210" y="95" fontSize="11" fill="var(--diagram-stroke)">Sternum</text>
          {/* spine */}
          <rect x="155" y="112" width="10" height="40" rx="2" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="1.5" />
          <text x="100" y="130" fontSize="11" fontWeight="700" fill="#0d9488">Spine</text>
          {/* pelvis */}
          <path d="M125 150 Q160 175 195 150 L190 175 Q160 195 130 175 Z" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <text x="195" y="170" fontSize="11" fontWeight="700" fill="var(--diagram-stroke)">Pelvis</text>
          {/* upper limbs */}
          <line x1="118" y1="70" x2="75" y2="95" stroke="var(--diagram-stroke)" strokeWidth="5" strokeLinecap="round" />
          <line x1="75" y1="95" x2="55" y2="130" stroke="var(--diagram-stroke)" strokeWidth="4" strokeLinecap="round" />
          <line x1="202" y1="70" x2="245" y2="95" stroke="var(--diagram-stroke)" strokeWidth="5" strokeLinecap="round" />
          <line x1="245" y1="95" x2="265" y2="130" stroke="var(--diagram-stroke)" strokeWidth="4" strokeLinecap="round" />
          <text x="15" y="100" fontSize="11" fill="var(--diagram-stroke)">Humerus</text>
          <text x="15" y="130" fontSize="11" fill="var(--diagram-stroke)">Radius/Ulna</text>
          {/* lower limbs */}
          <line x1="145" y1="180" x2="135" y2="215" stroke="var(--diagram-stroke)" strokeWidth="6" strokeLinecap="round" />
          <line x1="175" y1="180" x2="185" y2="215" stroke="var(--diagram-stroke)" strokeWidth="6" strokeLinecap="round" />
          <line x1="135" y1="215" x2="125" y2="232" stroke="var(--diagram-stroke)" strokeWidth="4" strokeLinecap="round" />
          <line x1="185" y1="215" x2="195" y2="232" stroke="var(--diagram-stroke)" strokeWidth="4" strokeLinecap="round" />
          <text x="95" y="205" fontSize="11" fill="var(--diagram-stroke)">Femur</text>
          <text x="200" y="225" fontSize="11" fill="var(--diagram-stroke)">Tibia/Fibula</text>
          <text x="15" y="50" fontSize="12" fontWeight="700" fill="#0d9488">AXIAL</text>
          <text x="15" y="65" fontSize="10" fill="#0d9488">skull, spine, ribs</text>
          <text x="230" y="50" fontSize="12" fontWeight="700" fill="#2563eb">APPENDICULAR</text>
          <text x="230" y="65" fontSize="10" fill="#2563eb">limbs + girdles</text>
        </svg>
      );

    case 'joint':
      return (
        <svg {...commonProps} aria-label={title || 'Synovial knee joint'}>
          {/* Femur */}
          <rect x="120" y="10" width="60" height="85" rx="10" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <text x="130" y="50" fontSize="13" fontWeight="700" fill="var(--diagram-stroke)">Femur</text>
          {/* articular cartilage on femur */}
          <path d="M122 92 Q150 105 178 92" fill="none" stroke="#0d9488" strokeWidth="5" strokeLinecap="round" />
          {/* synovial cavity */}
          <ellipse cx="150" cy="118" rx="38" ry="16" fill="#99f6e4" stroke="#0d9488" strokeWidth="1.5" />
          <text x="195" y="115" fontSize="11" fontWeight="700" fill="#0f766e">Synovial</text>
          <text x="195" y="130" fontSize="11" fontWeight="700" fill="#0f766e">fluid/cavity</text>
          {/* cartilage on tibia */}
          <path d="M122 142 Q150 128 178 142" fill="none" stroke="#0d9488" strokeWidth="5" strokeLinecap="round" />
          {/* Tibia */}
          <rect x="120" y="145" width="60" height="80" rx="10" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <text x="132" y="185" fontSize="13" fontWeight="700" fill="var(--diagram-stroke)">Tibia</text>
          {/* capsule */}
          <path d="M115 90 Q95 118 115 148" fill="none" stroke="#c026d3" strokeWidth="2" strokeDasharray="4 3" />
          <path d="M185 90 Q205 118 185 148" fill="none" stroke="#c026d3" strokeWidth="2" strokeDasharray="4 3" />
          <text x="15" y="120" fontSize="11" fontWeight="700" fill="#a21caf">Capsule</text>
          {/* ligament */}
          <line x1="185" y1="95" x2="185" y2="145" stroke="#ea580c" strokeWidth="3" />
          <text x="195" y="155" fontSize="11" fontWeight="700" fill="#c2410c">Ligament</text>
          <text x="20" y="40" fontSize="12" fontWeight="700" fill="#0f766e">Cartilage</text>
          <path d="M70 45 L115 90" stroke="#0d9488" strokeWidth="1.5" />
          <text x="40" y="230" fontSize="11" fill="var(--diagram-stroke)">Knee as model synovial joint - educational schematic</text>
        </svg>
      );

    case 'muscle':
      return (
        <svg {...commonProps} aria-label={title || 'Muscles and muscle types'}>
          {/* anterior body with major groups */}
          <ellipse cx="100" cy="28" rx="14" ry="16" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="1.5" />
          <path d="M78 45 Q100 120 78 160 L122 160 Q100 120 122 45 Z" fill="#fecaca" stroke="#dc2626" strokeWidth="1.5" />
          <text x="12" y="90" fontSize="11" fontWeight="700" fill="#991b1b">Pectoralis</text>
          <path d="M70 70 L45 100" stroke="#dc2626" strokeWidth="8" strokeLinecap="round" />
          <path d="M130 70 L155 100" stroke="#dc2626" strokeWidth="8" strokeLinecap="round" />
          <text x="12" y="120" fontSize="11" fontWeight="700" fill="#991b1b">Biceps</text>
          <path d="M85 160 L80 200" stroke="#dc2626" strokeWidth="9" strokeLinecap="round" />
          <path d="M115 160 L120 200" stroke="#dc2626" strokeWidth="9" strokeLinecap="round" />
          <text x="12" y="185" fontSize="11" fontWeight="700" fill="#991b1b">Quadriceps</text>
          {/* type patterns */}
          <rect x="175" y="25" width="130" height="55" rx="8" fill="var(--diagram-fill)" stroke="#dc2626" strokeWidth="2" />
          <text x="195" y="48" fontSize="12" fontWeight="700" fill="#991b1b">Skeletal</text>
          <text x="185" y="66" fontSize="11" fill="var(--diagram-stroke)">striped fibres, voluntary</text>
          <rect x="175" y="90" width="130" height="55" rx="8" fill="var(--diagram-fill)" stroke="#e11d48" strokeWidth="2" />
          <text x="200" y="113" fontSize="12" fontWeight="700" fill="#9f1239">Cardiac</text>
          <text x="185" y="131" fontSize="11" fill="var(--diagram-stroke)">branched, heart only</text>
          <rect x="175" y="155" width="130" height="55" rx="8" fill="var(--diagram-fill)" stroke="#c026d3" strokeWidth="2" />
          <text x="205" y="178" fontSize="12" fontWeight="700" fill="#a21caf">Smooth</text>
          <text x="185" y="196" fontSize="11" fill="var(--diagram-stroke)">spindle, organs/vessels</text>
          <text x="30" y="230" fontSize="11" fill="var(--diagram-stroke)">Major groups + three muscle tissue types</text>
        </svg>
      );

    case 'nervous':
      return (
        <svg {...commonProps} aria-label={title || 'Neuron and nervous system'}>
          <line x1="30" y1="35" x2="85" y2="95" stroke="var(--diagram-stroke)" strokeWidth="2.5" />
          <line x1="20" y1="80" x2="85" y2="105" stroke="var(--diagram-stroke)" strokeWidth="2.5" />
          <line x1="40" y1="125" x2="85" y2="112" stroke="var(--diagram-stroke)" strokeWidth="2.5" />
          <text x="15" y="30" fontSize="12" fontWeight="700" fill="var(--diagram-stroke)">Dendrites</text>
          <circle cx="110" cy="110" r="34" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2.5" />
          <text x="92" y="115" fontSize="13" fontWeight="700" fill="var(--diagram-stroke)">Soma</text>
          <line x1="144" y1="110" x2="255" y2="110" stroke="#0d9488" strokeWidth="6" strokeLinecap="round" />
          <text x="180" y="95" fontSize="12" fontWeight="700" fill="#0f766e">Axon</text>
          <line x1="255" y1="110" x2="295" y2="85" stroke="#0d9488" strokeWidth="2.5" />
          <line x1="255" y1="110" x2="300" y2="110" stroke="#0d9488" strokeWidth="2.5" />
          <line x1="255" y1="110" x2="295" y2="135" stroke="#0d9488" strokeWidth="2.5" />
          <text x="220" y="155" fontSize="12" fontWeight="700" fill="var(--diagram-stroke)">Synaptic terminals</text>
          <text x="20" y="190" fontSize="12" fill="var(--diagram-stroke)">Signal path: dendrites to soma to axon to synapse</text>
          <text x="20" y="210" fontSize="12" fill="var(--diagram-stroke)">CNS = brain + spinal cord; PNS = peripheral nerves</text>
        </svg>
      );

    case 'heart':
      return (
        <svg {...commonProps} aria-label={title || 'Heart chambers and vessels'}>
          {/* heart outline */}
          <path d="M160 40 C120 10 70 35 65 95 C60 150 120 200 160 215 C200 200 260 150 255 95 C250 35 200 10 160 40Z" fill="#fecaca" stroke="#dc2626" strokeWidth="2.5" />
          {/* septum */}
          <line x1="160" y1="75" x2="160" y2="185" stroke="#991b1b" strokeWidth="2.5" />
          {/* horizontal divider atria/ventricles */}
          <path d="M85 115 Q160 125 235 115" fill="none" stroke="#991b1b" strokeWidth="2" />
          {/* chamber labels */}
          <text x="100" y="100" fontSize="13" fontWeight="700" fill="#7f1d1d">RA</text>
          <text x="185" y="100" fontSize="13" fontWeight="700" fill="#7f1d1d">LA</text>
          <text x="100" y="160" fontSize="13" fontWeight="700" fill="#7f1d1d">RV</text>
          <text x="185" y="160" fontSize="13" fontWeight="700" fill="#7f1d1d">LV</text>
          {/* vessels */}
          <path d="M150 42 L150 8 L170 8 L170 38" fill="none" stroke="#2563eb" strokeWidth="3" />
          <text x="175" y="18" fontSize="11" fontWeight="700" fill="#1d4ed8">Aorta / PA</text>
          <path d="M95 55 L70 30" stroke="#2563eb" strokeWidth="2.5" />
          <text x="15" y="30" fontSize="11" fill="#1d4ed8">Vena cava</text>
          <path d="M225 55 L255 30" stroke="#dc2626" strokeWidth="2.5" />
          <text x="250" y="28" fontSize="11" fill="#dc2626">Pulmonary</text>
          <text x="250" y="42" fontSize="11" fill="#dc2626">veins</text>
          {/* flow arrows text */}
          <text x="15" y="200" fontSize="11" fill="#1d4ed8">Right: body -&gt; lungs</text>
          <text x="185" y="200" fontSize="11" fill="#dc2626">Left: lungs -&gt; body</text>
          <text x="50" y="230" fontSize="11" fill="var(--diagram-stroke)">Four chambers, septum, major vessel pathways</text>
        </svg>
      );

    case 'respiratory':
      return (
        <svg {...commonProps} aria-label={title || 'Respiratory system'}>
          <ellipse cx="160" cy="22" rx="16" ry="10" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="1.5" />
          <text x="185" y="26" fontSize="11" fill="var(--diagram-stroke)">Nose/mouth</text>
          <rect x="152" y="32" width="16" height="18" rx="3" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="1.5" />
          <text x="175" y="45" fontSize="11" fill="var(--diagram-stroke)">Pharynx</text>
          <rect x="152" y="50" width="16" height="14" rx="2" fill="#fecaca" stroke="#dc2626" strokeWidth="1.5" />
          <text x="175" y="60" fontSize="11" fill="#991b1b">Larynx</text>
          <rect x="152" y="64" width="16" height="40" rx="4" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <text x="175" y="88" fontSize="12" fontWeight="700" fill="var(--diagram-stroke)">Trachea</text>
          <path d="M160 104 Q115 130 90 170" fill="none" stroke="var(--diagram-stroke)" strokeWidth="4" strokeLinecap="round" />
          <path d="M160 104 Q205 130 230 170" fill="none" stroke="var(--diagram-stroke)" strokeWidth="4" strokeLinecap="round" />
          <text x="70" y="140" fontSize="11" fill="var(--diagram-stroke)">Bronchi</text>
          <ellipse cx="85" cy="185" rx="42" ry="32" fill="#bfdbfe" stroke="#2563eb" strokeWidth="2" />
          <ellipse cx="235" cy="185" rx="42" ry="32" fill="#bfdbfe" stroke="#2563eb" strokeWidth="2" />
          <circle cx="75" cy="180" r="4" fill="#93c5fd" />
          <circle cx="95" cy="190" r="4" fill="#93c5fd" />
          <circle cx="225" cy="180" r="4" fill="#93c5fd" />
          <circle cx="245" cy="190" r="4" fill="#93c5fd" />
          <text x="60" y="190" fontSize="12" fontWeight="700" fill="#1d4ed8">Lung</text>
          <text x="210" y="190" fontSize="12" fontWeight="700" fill="#1d4ed8">Lung</text>
          <text x="30" y="230" fontSize="11" fill="var(--diagram-stroke)">Air reaches alveoli for O2/CO2 exchange with blood</text>
        </svg>
      );

    case 'digestive':
      return (
        <svg {...commonProps} aria-label={title || 'Digestive tract'}>
          <ellipse cx="160" cy="22" rx="30" ry="12" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <text x="200" y="26" fontSize="11" fontWeight="700" fill="var(--diagram-stroke)">Mouth</text>
          <rect x="153" y="34" width="14" height="30" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <text x="175" y="52" fontSize="11" fill="var(--diagram-stroke)">Oesophagus</text>
          <ellipse cx="160" cy="90" rx="45" ry="26" fill="#fecaca" stroke="#dc2626" strokeWidth="2" />
          <text x="135" y="95" fontSize="12" fontWeight="700" fill="#991b1b">Stomach</text>
          <path d="M145 115 Q90 140 85 175 Q100 210 150 200 Q200 210 230 170 Q240 140 175 120" fill="none" stroke="#0d9488" strokeWidth="5" strokeLinecap="round" />
          <text x="40" y="160" fontSize="11" fontWeight="700" fill="#0f766e">Small intestine</text>
          <text x="200" y="195" fontSize="11" fontWeight="700" fill="#0f766e">Large intestine</text>
          <text x="30" y="230" fontSize="11" fill="var(--diagram-stroke)">Digestion and absorption along the GI tract</text>
        </svg>
      );

    case 'urinary':
      return (
        <svg {...commonProps} aria-label={title || 'Urinary system'}>
          <ellipse cx="95" cy="70" rx="32" ry="40" fill="#bfdbfe" stroke="#2563eb" strokeWidth="2" />
          <ellipse cx="225" cy="70" rx="32" ry="40" fill="#bfdbfe" stroke="#2563eb" strokeWidth="2" />
          <text x="72" y="75" fontSize="12" fontWeight="700" fill="#1d4ed8">Kidney</text>
          <text x="202" y="75" fontSize="12" fontWeight="700" fill="#1d4ed8">Kidney</text>
          <line x1="95" y1="110" x2="145" y2="165" stroke={stroke} strokeWidth="3" />
          <line x1="225" y1="110" x2="175" y2="165" stroke={stroke} strokeWidth="3" />
          <text x="40" y="145" fontSize="11" fill={stroke}>Ureter</text>
          <text x="240" y="145" fontSize="11" fill={stroke}>Ureter</text>
          <ellipse cx="160" cy="185" rx="42" ry="26" fill={fill} stroke={stroke} strokeWidth="2" />
          <text x="138" y="190" fontSize="12" fontWeight="700" fill={stroke}>Bladder</text>
          <text x="30" y="230" fontSize="11" fill={stroke}>Filters blood, forms urine, stores and voids</text>
        </svg>
      );

    case 'reproductive':
      return (
        <svg {...commonProps} aria-label={title || 'Female reproductive overview'}>
          <ellipse cx="90" cy="80" rx="22" ry="16" fill="#fbcfe8" stroke="#db2777" strokeWidth="2" />
          <ellipse cx="230" cy="80" rx="22" ry="16" fill="#fbcfe8" stroke="#db2777" strokeWidth="2" />
          <text x="70" y="55" fontSize="12" fontWeight="700" fill="#9d174d">Ovary</text>
          <text x="210" y="55" fontSize="12" fontWeight="700" fill="#9d174d">Ovary</text>
          <path d="M112 80 Q140 95 130 110" fill="none" stroke="#db2777" strokeWidth="2.5" />
          <path d="M208 80 Q180 95 190 110" fill="none" stroke="#db2777" strokeWidth="2.5" />
          <ellipse cx="160" cy="125" rx="55" ry="38" fill="#fce7f3" stroke="#db2777" strokeWidth="2.5" />
          <text x="138" y="130" fontSize="13" fontWeight="700" fill="#9d174d">Uterus</text>
          <rect x="150" y="160" width="20" height="35" rx="4" fill="#fbcfe8" stroke="#db2777" strokeWidth="2" />
          <text x="178" y="185" fontSize="11" fill="#9d174d">Cervix / vagina</text>
          <text x="25" y="220" fontSize="11" fill={stroke}>Educational schematic for pregnancy and midwifery anatomy</text>
        </svg>
      );

    case 'endocrine':
      return (
        <svg {...commonProps} aria-label={title || 'Endocrine glands'}>
          <ellipse cx="160" cy="28" rx="14" ry="16" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="1.5" />
          <circle cx="160" cy="55" r="14" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
          <text x="185" y="50" fontSize="12" fontWeight="700" fill="var(--diagram-stroke)">Pituitary</text>
          <text x="185" y="65" fontSize="10" fill="var(--diagram-stroke)">(master gland)</text>
          <rect x="145" y="80" width="30" height="20" rx="4" fill="#fecaca" stroke="#dc2626" strokeWidth="1.5" />
          <text x="185" y="95" fontSize="12" fontWeight="700" fill="var(--diagram-stroke)">Thyroid</text>
          <rect x="90" y="125" width="36" height="26" rx="6" fill="#bfdbfe" stroke="#2563eb" strokeWidth="1.5" />
          <text x="20" y="140" fontSize="11" fontWeight="700" fill="#1d4ed8">Adrenal</text>
          <ellipse cx="200" cy="140" rx="34" ry="18" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1.5" />
          <text x="240" y="145" fontSize="11" fontWeight="700" fill="#166534">Pancreas</text>
          <ellipse cx="160" cy="190" rx="30" ry="16" fill="#fbcfe8" stroke="#db2777" strokeWidth="1.5" />
          <text x="200" y="195" fontSize="11" fontWeight="700" fill="#9d174d">Gonads</text>
          <text x="30" y="225" fontSize="11" fill="var(--diagram-stroke)">Hormones travel in blood to target organs</text>
        </svg>
      );

    case 'lymphatic':
      return (
        <svg {...commonProps} aria-label={title || 'Lymphatic system'}>
          <circle cx="60" cy="50" r="12" fill="#e9d5ff" stroke="#7c3aed" strokeWidth="2" />
          <circle cx="120" cy="35" r="12" fill="#e9d5ff" stroke="#7c3aed" strokeWidth="2" />
          <circle cx="200" cy="35" r="12" fill="#e9d5ff" stroke="#7c3aed" strokeWidth="2" />
          <circle cx="260" cy="50" r="12" fill="#e9d5ff" stroke="#7c3aed" strokeWidth="2" />
          <text x="90" y="20" fontSize="12" fontWeight="700" fill="#5b21b6">Lymph nodes</text>
          <path d="M60 62 C90 110 130 140 160 165" fill="none" stroke="#7c3aed" strokeWidth="2.5" />
          <path d="M120 47 C140 100 160 140 170 165" fill="none" stroke="#7c3aed" strokeWidth="2" />
          <path d="M200 47 C190 100 180 140 170 165" fill="none" stroke="#7c3aed" strokeWidth="2" />
          <path d="M260 62 C230 110 200 140 180 165" fill="none" stroke="#7c3aed" strokeWidth="2.5" />
          <ellipse cx="170" cy="185" rx="50" ry="24" fill="#ddd6fe" stroke="#7c3aed" strokeWidth="2" />
          <text x="145" y="190" fontSize="13" fontWeight="700" fill="#5b21b6">Spleen</text>
          <text x="30" y="225" fontSize="11" fill="var(--diagram-stroke)">Returns fluid and supports immune surveillance</text>
        </svg>
      );

    case 'atom':
      return (
        <svg {...commonProps} aria-label={title || 'Atomic structure'}>
          <circle cx="160" cy="120" r="28" fill="#fef08a" stroke="#ca8a04" strokeWidth="2.5" />
          <text x="135" y="115" fontSize="11" fontWeight="700" fill="#854d0e">Protons</text>
          <text x="130" y="130" fontSize="11" fontWeight="700" fill="#854d0e">Neutrons</text>
          <ellipse cx="160" cy="120" rx="60" ry="30" fill="none" stroke="#0d9488" strokeWidth="2" />
          <ellipse cx="160" cy="120" rx="95" ry="55" fill="none" stroke="#2563eb" strokeWidth="2" />
          <circle cx="220" cy="120" r="9" fill="#0d9488" />
          <circle cx="65" cy="120" r="9" fill="#2563eb" />
          <circle cx="160" cy="65" r="9" fill="#0d9488" />
          <circle cx="160" cy="175" r="9" fill="#2563eb" />
          <text x="230" y="90" fontSize="12" fontWeight="700" fill="#0f766e">Electron</text>
          <text x="40" y="210" fontSize="12" fill="var(--diagram-stroke)">Atomic number = number of protons</text>
          <text x="40" y="228" fontSize="11" fill="var(--diagram-stroke)">Electrons occupy energy shells around the nucleus</text>
        </svg>
      );

    case 'periodic':
      return (
        <svg {...commonProps} aria-label={title || 'Periodic table concept'}>
          <rect x="40" y="50" width="36" height="42" rx="4" fill={fill} stroke={stroke} strokeWidth="1.5" />
          <rect x="80" y="50" width="36" height="42" rx="4" fill={fill} stroke={stroke} strokeWidth="1.5" />
          <rect x="120" y="50" width="36" height="42" rx="4" fill={fill} stroke={stroke} strokeWidth="1.5" />
          <rect x="160" y="50" width="36" height="42" rx="4" fill={fill} stroke={stroke} strokeWidth="1.5" />
          <rect x="200" y="50" width="36" height="42" rx="4" fill={fill} stroke={stroke} strokeWidth="1.5" />
          <rect x="240" y="50" width="36" height="42" rx="4" fill={fill} stroke={stroke} strokeWidth="1.5" />
          <rect x="40" y="100" width="36" height="42" rx="4" fill={fill} stroke={stroke} strokeWidth="1.5" />
          <rect x="80" y="100" width="36" height="42" rx="4" fill={fill} stroke={stroke} strokeWidth="1.5" />
          <rect x="120" y="100" width="36" height="42" rx="4" fill={fill} stroke={stroke} strokeWidth="1.5" />
          <rect x="160" y="100" width="36" height="42" rx="4" fill={fill} stroke={stroke} strokeWidth="1.5" />
          <rect x="200" y="100" width="36" height="42" rx="4" fill={fill} stroke={stroke} strokeWidth="1.5" />
          <rect x="240" y="100" width="36" height="42" rx="4" fill={fill} stroke={stroke} strokeWidth="1.5" />
          <text x="70" y="175" fontSize="13" fontWeight="700" fill={stroke}>Groups (columns) -&gt;</text>
          <text x="70" y="195" fontSize="13" fontWeight="700" fill={stroke}>Periods (rows) down</text>
          <text x="50" y="220" fontSize="11" fill={stroke}>Organises elements by atomic number and properties</text>
        </svg>
      );

    case 'matter':
      return (
        <svg {...commonProps} aria-label={title || 'States of matter'}>
          <rect x="12" y="40" width="95" height="120" rx="10" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <circle cx="35" cy="70" r="8" fill="#0d9488" /><circle cx="55" cy="75" r="8" fill="#0d9488" />
          <circle cx="45" cy="95" r="8" fill="#0d9488" /><circle cx="70" cy="100" r="8" fill="#0d9488" />
          <circle cx="40" cy="120" r="8" fill="#0d9488" /><circle cx="65" cy="130" r="8" fill="#0d9488" />
          <text x="40" y="180" fontSize="13" fontWeight="700" fill="var(--diagram-stroke)">Solid</text>
          <text x="25" y="198" fontSize="11" fill="var(--diagram-stroke)">fixed shape</text>
          <rect x="112" y="40" width="95" height="120" rx="10" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <circle cx="135" cy="65" r="8" fill="#2563eb" /><circle cx="160" cy="90" r="8" fill="#2563eb" />
          <circle cx="145" cy="120" r="8" fill="#2563eb" /><circle cx="175" cy="110" r="8" fill="#2563eb" />
          <text x="138" y="180" fontSize="13" fontWeight="700" fill="var(--diagram-stroke)">Liquid</text>
          <text x="120" y="198" fontSize="11" fill="var(--diagram-stroke)">takes container</text>
          <rect x="212" y="40" width="95" height="120" rx="10" fill="var(--diagram-fill)" stroke="var(--diagram-stroke)" strokeWidth="2" />
          <circle cx="235" cy="60" r="7" fill="#c026d3" /><circle cx="270" cy="85" r="7" fill="#c026d3" />
          <circle cx="245" cy="110" r="7" fill="#c026d3" /><circle cx="280" cy="130" r="7" fill="#c026d3" />
          <text x="245" y="180" fontSize="13" fontWeight="700" fill="var(--diagram-stroke)">Gas</text>
          <text x="230" y="198" fontSize="11" fill="var(--diagram-stroke)">fills space</text>
          <text x="40" y="225" fontSize="11" fill="var(--diagram-stroke)">Particle spacing explains state properties</text>
        </svg>
      );

    case 'bonding':
      return (
        <svg {...commonProps} aria-label={title || 'Ionic and covalent bonding'}>
          <circle cx="80" cy="100" r="34" fill="#fecaca" stroke="#dc2626" strokeWidth="2" />
          <text x="62" y="105" fontSize="14" fontWeight="700" fill="#991b1b">Na+</text>
          <circle cx="240" cy="100" r="34" fill="#bfdbfe" stroke="#2563eb" strokeWidth="2" />
          <text x="222" y="105" fontSize="14" fontWeight="700" fill="#1d4ed8">Cl-</text>
          <path d="M114 100 H206" stroke="#0d9488" strokeWidth="2" strokeDasharray="6 4" />
          <text x="125" y="88" fontSize="12" fontWeight="700" fill="#0f766e">Ionic attraction</text>
          <text x="50" y="175" fontSize="12" fill={stroke}>Ionic: transfer of electrons; ions attract</text>
          <text x="50" y="195" fontSize="12" fill={stroke}>Covalent: shared electron pairs between atoms</text>
          <text x="50" y="220" fontSize="11" fill={stroke}>Bond type affects solubility and body chemistry</text>
        </svg>
      );

    case 'reaction':
      return (
        <svg {...commonProps} aria-label={title || 'Physical vs chemical change'}>
          <rect x="12" y="25" width="142" height="160" rx="12" fill={fill} stroke="#2563eb" strokeWidth="2" />
          <text x="28" y="50" fontSize="13" fontWeight="700" fill="#1d4ed8">PHYSICAL</text>
          <text x="28" y="75" fontSize="12" fill={stroke}>Same substance</text>
          <text x="28" y="95" fontSize="12" fill={stroke}>New form or state</text>
          <text x="28" y="125" fontSize="12" fontWeight="700" fill={stroke}>Example:</text>
          <text x="28" y="145" fontSize="12" fill="#1d4ed8">Ice -&gt; liquid water</text>
          <text x="28" y="165" fontSize="11" fill={stroke}>(still H2O)</text>
          <rect x="166" y="25" width="142" height="160" rx="12" fill={fill} stroke="#c026d3" strokeWidth="2" />
          <text x="182" y="50" fontSize="13" fontWeight="700" fill="#a21caf">CHEMICAL</text>
          <text x="182" y="75" fontSize="12" fill={stroke}>New substance</text>
          <text x="182" y="95" fontSize="12" fill={stroke}>Bonds rearrange</text>
          <text x="182" y="125" fontSize="12" fontWeight="700" fill={stroke}>Example:</text>
          <text x="182" y="145" fontSize="12" fill="#a21caf">Reactants -&gt; products</text>
          <text x="182" y="165" fontSize="11" fill={stroke}>(new composition)</text>
          <text x="30" y="215" fontSize="11" fill={stroke}>Classify by whether substance identity changes</text>
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
          <rect x="30" y="95" width="260" height="32" rx="8" fill="url(#phGrad)" />
          <text x="30" y="80" fontSize="13" fontWeight="700" fill="#ef4444">Acidic</text>
          <text x="145" y="80" fontSize="13" fontWeight="700" fill="#ca8a04">7</text>
          <text x="245" y="80" fontSize="13" fontWeight="700" fill="#2563eb">Alkaline</text>
          <text x="30" y="150" fontSize="12" fill={stroke}>0</text>
          <text x="140" y="150" fontSize="12" fill={stroke}>Neutral</text>
          <text x="275" y="150" fontSize="12" fill={stroke}>14</text>
          <text x="40" y="185" fontSize="12" fill={stroke}>Blood ~ 7.35-7.45 (tightly regulated)</text>
          <text x="40" y="205" fontSize="11" fill={stroke}>Gastric acid is strongly acidic; bile is alkaline</text>
        </svg>
      );

    case 'solution':
      return (
        <svg {...commonProps} aria-label={title || 'Solution solute and solvent'}>
          <rect x="60" y="35" width="200" height="150" rx="16" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2.5" />
          <text x="100" y="60" fontSize="13" fontWeight="700" fill="#075985">Solvent (often water)</text>
          <circle cx="100" cy="100" r="11" fill="#0d9488" />
          <circle cx="145" cy="125" r="11" fill="#0d9488" />
          <circle cx="190" cy="95" r="11" fill="#0d9488" />
          <circle cx="120" cy="150" r="11" fill="#0d9488" />
          <circle cx="175" cy="145" r="11" fill="#0d9488" />
          <text x="210" y="120" fontSize="13" fontWeight="700" fill="#0f766e">Solute</text>
          <text x="30" y="210" fontSize="12" fill="var(--diagram-stroke)">Concentration = amount of solute per unit volume</text>
          <text x="30" y="228" fontSize="11" fill="var(--diagram-stroke)">Used for IV fluids, electrolytes and lab values</text>
        </svg>
      );

    case 'measurement':
      return (
        <svg {...commonProps} aria-label={title || 'Measurement and units'}>
          <rect x="40" y="80" width="240" height="28" rx="4" fill={fill} stroke={stroke} strokeWidth="2" />
          <line x1="40" y1="80" x2="40" y2="108" stroke={stroke} strokeWidth="2" />
          <line x1="80" y1="80" x2="80" y2="108" stroke={stroke} strokeWidth="1.5" />
          <line x1="120" y1="80" x2="120" y2="108" stroke={stroke} strokeWidth="1.5" />
          <line x1="160" y1="80" x2="160" y2="108" stroke={stroke} strokeWidth="2" />
          <line x1="200" y1="80" x2="200" y2="108" stroke={stroke} strokeWidth="1.5" />
          <line x1="240" y1="80" x2="240" y2="108" stroke={stroke} strokeWidth="1.5" />
          <line x1="280" y1="80" x2="280" y2="108" stroke={stroke} strokeWidth="2" />
          <text x="50" y="140" fontSize="13" fontWeight="700" fill={stroke}>SI units: m, kg, s, K, mol...</text>
          <text x="50" y="165" fontSize="12" fill={stroke}>Clinical: mmHg, mmol/L, degrees C</text>
          <text x="50" y="195" fontSize="12" fill={stroke}>Accurate measurement protects patients</text>
        </svg>
      );

    case 'motion':
      return (
        <svg {...commonProps} aria-label={title || 'Motion and velocity'}>
          <circle cx="55" cy="120" r="22" fill="#0d9488" />
          <line x1="80" y1="120" x2="230" y2="120" stroke="#0d9488" strokeWidth="3" />
          <polygon points="230,108 255,120 230,132" fill="#0d9488" />
          <text x="120" y="100" fontSize="13" fontWeight="700" fill={stroke}>Velocity</text>
          <text x="50" y="180" fontSize="12" fill={stroke}>Displacement over time - direction matters</text>
          <text x="50" y="200" fontSize="12" fill={stroke}>Speed is magnitude only; velocity includes direction</text>
        </svg>
      );

    case 'pressure':
      return (
        <svg {...commonProps} aria-label={title || 'Pressure equals force over area'}>
          <rect x="90" y="35" width="140" height="24" rx="4" fill="#fdba74" stroke="#ea580c" strokeWidth="2" />
          <text x="135" y="52" fontSize="13" fontWeight="700" fill="#9a3412">Force</text>
          <line x1="160" y1="59" x2="160" y2="100" stroke="#ea580c" strokeWidth="2" />
          <rect x="60" y="100" width="200" height="55" rx="8" fill={fill} stroke={stroke} strokeWidth="2" />
          <text x="135" y="135" fontSize="13" fontWeight="700" fill={stroke}>Area</text>
          <text x="100" y="190" fontSize="16" fontWeight="700" fill={stroke}>P = F / A</text>
          <text x="40" y="215" fontSize="12" fill={stroke}>Smaller area -&gt; higher pressure (same force)</text>
        </svg>
      );

    case 'energy':
      return (
        <svg {...commonProps} aria-label={title || 'Energy forms'}>
          <rect x="30" y="70" width="110" height="70" rx="12" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
          <text x="48" y="110" fontSize="13" fontWeight="700" fill="#854d0e">Potential</text>
          <text x="150" y="110" fontSize="20" fill="#0d9488">-&gt;</text>
          <rect x="180" y="70" width="110" height="70" rx="12" fill="#ccfbf1" stroke="#0d9488" strokeWidth="2" />
          <text x="205" y="110" fontSize="13" fontWeight="700" fill="#0f766e">Kinetic</text>
          <text x="50" y="180" fontSize="12" fill={stroke}>Work transfers energy; power is rate of work</text>
          <text x="50" y="200" fontSize="12" fill={stroke}>Body metabolism converts chemical energy</text>
        </svg>
      );

    case 'heat':
      return (
        <svg {...commonProps} aria-label={title || 'Heat transfer'}>
          <rect x="25" y="60" width="80" height="90" rx="12" fill={fill} stroke="#f97316" strokeWidth="2" />
          <text x="35" y="110" fontSize="12" fontWeight="700" fill="#c2410c">Conduction</text>
          <text x="35" y="128" fontSize="11" fill={stroke}>contact</text>
          <rect x="120" y="60" width="80" height="90" rx="12" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="128" y="110" fontSize="12" fontWeight="700" fill="#0f766e">Convection</text>
          <text x="135" y="128" fontSize="11" fill={stroke}>fluid flow</text>
          <rect x="215" y="60" width="80" height="90" rx="12" fill={fill} stroke="#2563eb" strokeWidth="2" />
          <text x="225" y="110" fontSize="12" fontWeight="700" fill="#1d4ed8">Radiation</text>
          <text x="230" y="128" fontSize="11" fill={stroke}>waves</text>
          <text x="40" y="185" fontSize="12" fill={stroke}>Body loses and gains heat by all three routes</text>
        </svg>
      );

    case 'wave':
      return (
        <svg {...commonProps} aria-label={title || 'Wave properties'}>
          <path d="M15 120 Q50 40 90 120 Q130 200 170 120 Q210 40 250 120 Q290 200 320 120" fill="none" stroke="#0d9488" strokeWidth="3" />
          <line x1="90" y1="50" x2="90" y2="190" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="4 3" />
          <text x="95" y="45" fontSize="12" fontWeight="700" fill="#2563eb">Amplitude</text>
          <text x="130" y="210" fontSize="12" fontWeight="700" fill={stroke}>Wavelength -&gt;</text>
          <text x="40" y="230" fontSize="11" fill={stroke}>Sound and ultrasound are mechanical waves in tissue</text>
        </svg>
      );

    case 'light':
      return (
        <svg {...commonProps} aria-label={title || 'Reflection'}>
          <line x1="30" y1="170" x2="290" y2="170" stroke={stroke} strokeWidth="2" />
          <line x1="160" y1="40" x2="160" y2="170" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 3" />
          <line x1="70" y1="60" x2="160" y2="170" stroke="#f59e0b" strokeWidth="3" />
          <line x1="160" y1="170" x2="250" y2="60" stroke="#f59e0b" strokeWidth="3" />
          <text x="50" y="50" fontSize="12" fontWeight="700" fill="#d97706">Incident</text>
          <text x="220" y="50" fontSize="12" fontWeight="700" fill="#d97706">Reflected</text>
          <text x="50" y="205" fontSize="12" fill={stroke}>Angle of incidence equals angle of reflection</text>
        </svg>
      );

    case 'circuit':
      return (
        <svg {...commonProps} aria-label={title || 'Simple circuit'}>
          <rect x="30" y="90" width="50" height="40" rx="4" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
          <text x="38" y="115" fontSize="12" fontWeight="700" fill="#854d0e">Batt</text>
          <line x1="80" y1="110" x2="200" y2="110" stroke={stroke} strokeWidth="2" />
          <circle cx="230" cy="110" r="24" fill="none" stroke="#0d9488" strokeWidth="2" />
          <text x="215" y="115" fontSize="12" fill="#0f766e">Load</text>
          <line x1="254" y1="110" x2="290" y2="110" stroke={stroke} strokeWidth="2" />
          <line x1="290" y1="110" x2="290" y2="165" stroke={stroke} strokeWidth="2" />
          <line x1="290" y1="165" x2="55" y2="165" stroke={stroke} strokeWidth="2" />
          <line x1="55" y1="165" x2="55" y2="130" stroke={stroke} strokeWidth="2" />
          <text x="50" y="200" fontSize="12" fill={stroke}>Closed path required for current flow</text>
          <text x="50" y="220" fontSize="12" fill={stroke}>Electrical safety critical in wet clinical areas</text>
        </svg>
      );

    case 'magnetism':
      return (
        <svg {...commonProps} aria-label={title || 'Bar magnet and field lines'}>
          <rect x="60" y="95" width="70" height="42" rx="4" fill="#fecaca" stroke="#dc2626" strokeWidth="2" />
          <rect x="130" y="95" width="100" height="42" rx="4" fill={fill} stroke={stroke} strokeWidth="2" />
          <rect x="230" y="95" width="30" height="42" rx="4" fill="#bfdbfe" stroke="#2563eb" strokeWidth="2" />
          <text x="85" y="122" fontSize="16" fontWeight="700" fill="#991b1b">N</text>
          <text x="238" y="122" fontSize="16" fontWeight="700" fill="#1d4ed8">S</text>
          <path d="M90 95 Q160 35 250 95" fill="none" stroke="#2563eb" strokeWidth="1.8" />
          <path d="M90 95 Q160 55 250 95" fill="none" stroke="#2563eb" strokeWidth="1.5" />
          <path d="M90 137 Q160 195 250 137" fill="none" stroke="#2563eb" strokeWidth="1.8" />
          <path d="M90 137 Q160 175 250 137" fill="none" stroke="#2563eb" strokeWidth="1.5" />
          <text x="70" y="30" fontSize="13" fontWeight="700" fill={stroke}>Field lines emerge from N toward S</text>
          <text x="30" y="220" fontSize="12" fill={stroke}>MRI / strong magnets: follow local safety policy</text>
        </svg>
      );

    case 'equipment-physics':
      return (
        <svg {...commonProps} aria-label={title || 'Physics in healthcare equipment'}>
          <rect x="20" y="55" width="65" height="85" rx="10" fill={fill} stroke="#ea580c" strokeWidth="2" />
          <text x="28" y="100" fontSize="12" fontWeight="700" fill="#c2410c">Pressure</text>
          <text x="30" y="118" fontSize="10" fill={stroke}>BP cuff</text>
          <rect x="95" y="55" width="65" height="85" rx="10" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="108" y="100" fontSize="12" fontWeight="700" fill="#0f766e">Sound</text>
          <text x="100" y="118" fontSize="10" fill={stroke}>ultrasound</text>
          <rect x="170" y="55" width="65" height="85" rx="10" fill={fill} stroke="#2563eb" strokeWidth="2" />
          <text x="185" y="100" fontSize="12" fontWeight="700" fill="#1d4ed8">Light</text>
          <text x="178" y="118" fontSize="10" fill={stroke}>scopes</text>
          <rect x="245" y="55" width="55" height="85" rx="10" fill={fill} stroke="#ca8a04" strokeWidth="2" />
          <text x="252" y="100" fontSize="12" fontWeight="700" fill="#a16207">Electric</text>
          <text x="250" y="118" fontSize="10" fill={stroke}>monitors</text>
          <text x="40" y="180" fontSize="12" fill={stroke}>Devices apply physical principles safely</text>
          <text x="40" y="200" fontSize="12" fill={stroke}>Use only as trained and per local protocol</text>
        </svg>
      );

    /* ---- Physiology ---- */
    case 'homeostasis':
      return (
        <svg {...commonProps} aria-label={title || 'Negative feedback loop'}>
          <rect x="85" y="8" width="150" height="28" rx="8" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="120" y="27" fontSize="13" fontWeight="700" fill={stroke}>1. Stimulus</text>
          <text x="152" y="48" fontSize="14" fill="#0d9488">v</text>
          <rect x="70" y="52" width="180" height="28" rx="8" fill={fill} stroke="#2563eb" strokeWidth="2" />
          <text x="95" y="71" fontSize="13" fontWeight="700" fill={stroke}>2. Sensor / receptor</text>
          <text x="152" y="92" fontSize="14" fill="#0d9488">v</text>
          <rect x="70" y="96" width="180" height="28" rx="8" fill={fill} stroke="#c026d3" strokeWidth="2" />
          <text x="100" y="115" fontSize="13" fontWeight="700" fill={stroke}>3. Control centre</text>
          <text x="152" y="136" fontSize="14" fill="#0d9488">v</text>
          <rect x="85" y="140" width="150" height="28" rx="8" fill={fill} stroke="#ea580c" strokeWidth="2" />
          <text x="125" y="159" fontSize="13" fontWeight="700" fill={stroke}>4. Effector</text>
          <text x="152" y="180" fontSize="14" fill="#0d9488">v</text>
          <rect x="85" y="184" width="150" height="28" rx="8" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="120" y="203" fontSize="13" fontWeight="700" fill={stroke}>5. Response</text>
          <path d="M235 198 C295 198 295 22 235 22" fill="none" stroke="#0d9488" strokeWidth="2" strokeDasharray="5 4" />
          <text x="245" y="110" fontSize="11" fontWeight="700" fill="#0f766e">toward</text>
          <text x="245" y="125" fontSize="11" fontWeight="700" fill="#0f766e">set point</text>
          <text x="20" y="232" fontSize="11" fill={stroke}>Negative feedback reduces the original disturbance</text>
        </svg>
      );

    case 'membrane':
      return (
        <svg {...commonProps} aria-label={title || 'Membrane transport'}>
          <rect x="40" y="80" width="240" height="50" rx="6" fill="#ccfbf1" stroke="#0d9488" strokeWidth="2.5" />
          <text x="100" y="110" fontSize="13" fontWeight="700" fill="#0f766e">Cell membrane</text>
          <path d="M90 50 L90 80" stroke="#2563eb" strokeWidth="2.5" />
          <text x="40" y="40" fontSize="12" fontWeight="700" fill="#2563eb">Diffusion -&gt;</text>
          <path d="M230 130 L230 170" stroke="#c026d3" strokeWidth="2.5" />
          <text x="175" y="190" fontSize="12" fontWeight="700" fill="#c026d3">Active transport</text>
          <text x="40" y="215" fontSize="12" fill={stroke}>Passive: down gradient; Active: needs energy</text>
        </svg>
      );

    /* ---- Nursing / clinical / micro / comms / informatics (high-value kinds kept robust) ---- */
    case 'nursing-process':
      return (
        <svg {...commonProps} aria-label={title || 'Nursing process cycle'}>
          <circle cx="160" cy="35" r="30" fill="var(--diagram-fill)" stroke="#0d9488" strokeWidth="2" />
          <text x="138" y="40" fontSize="12" fontWeight="700" fill="var(--diagram-stroke)">Assess</text>
          <circle cx="255" cy="95" r="30" fill="var(--diagram-fill)" stroke="#0d9488" strokeWidth="2" />
          <text x="228" y="100" fontSize="12" fontWeight="700" fill="var(--diagram-stroke)">Diagnose</text>
          <circle cx="220" cy="185" r="30" fill="var(--diagram-fill)" stroke="#0d9488" strokeWidth="2" />
          <text x="205" y="190" fontSize="12" fontWeight="700" fill="var(--diagram-stroke)">Plan</text>
          <circle cx="100" cy="185" r="30" fill="var(--diagram-fill)" stroke="#0d9488" strokeWidth="2" />
          <text x="68" y="190" fontSize="11" fontWeight="700" fill="var(--diagram-stroke)">Implement</text>
          <circle cx="65" cy="95" r="30" fill="var(--diagram-fill)" stroke="#0d9488" strokeWidth="2" />
          <text x="40" y="100" fontSize="12" fontWeight="700" fill="var(--diagram-stroke)">Evaluate</text>
          <path d="M160 65 Q220 70 230 95" fill="none" stroke="#0d9488" strokeWidth="1.5" strokeDasharray="4 3" />
          <path d="M250 125 Q250 160 220 155" fill="none" stroke="#0d9488" strokeWidth="1.5" strokeDasharray="4 3" />
          <text x="60" y="230" fontSize="11" fill="var(--diagram-stroke)">Continuous patient-centred cycle of care</text>
        </svg>
      );

    case 'hand-hygiene':
      return (
        <svg {...commonProps} aria-label={title || 'Five moments of hand hygiene'}>
          <circle cx="30" cy="30" r="12" fill="#0d9488" />
          <text x="26" y="34" fontSize="11" fontWeight="700" fill="#ecfdf5">1</text>
          <text x="50" y="35" fontSize="12" fill={stroke}>Before patient contact</text>
          <circle cx="30" cy="70" r="12" fill="#0d9488" />
          <text x="26" y="74" fontSize="11" fontWeight="700" fill="#ecfdf5">2</text>
          <text x="50" y="75" fontSize="12" fill={stroke}>Before clean/aseptic task</text>
          <circle cx="30" cy="110" r="12" fill="#0d9488" />
          <text x="26" y="114" fontSize="11" fontWeight="700" fill="#ecfdf5">3</text>
          <text x="50" y="115" fontSize="12" fill={stroke}>After body-fluid exposure risk</text>
          <circle cx="30" cy="150" r="12" fill="#0d9488" />
          <text x="26" y="154" fontSize="11" fontWeight="700" fill="#ecfdf5">4</text>
          <text x="50" y="155" fontSize="12" fill={stroke}>After patient contact</text>
          <circle cx="30" cy="190" r="12" fill="#0d9488" />
          <text x="26" y="194" fontSize="11" fontWeight="700" fill="#ecfdf5">5</text>
          <text x="50" y="195" fontSize="12" fill={stroke}>After contact with surroundings</text>
        </svg>
      );

    case 'ppe':
      return (
        <svg {...commonProps} aria-label={title || 'PPE layers'}>
          <ellipse cx="160" cy="45" rx="26" ry="30" fill={fill} stroke={stroke} strokeWidth="2" />
          <rect x="140" y="38" width="40" height="16" rx="4" fill="#fce7f3" stroke="#db2777" strokeWidth="2" />
          <text x="200" y="50" fontSize="12" fontWeight="700" fill="#be185d">Mask</text>
          <rect x="125" y="75" width="70" height="80" rx="12" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
          <text x="140" y="120" fontSize="12" fontWeight="700" fill="#075985">Gown</text>
          <rect x="95" y="90" width="24" height="45" rx="8" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
          <rect x="201" y="90" width="24" height="45" rx="8" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
          <text x="40" y="120" fontSize="12" fill="#a16207">Gloves</text>
          <text x="40" y="200" fontSize="12" fill={stroke}>Don and doff in correct order per protocol</text>
        </svg>
      );

    case 'vitals':
    case 'vitals-measure':
      return (
        <svg {...commonProps} aria-label={title || 'Vital signs'}>
          <rect x="20" y="50" width="65" height="90" rx="12" fill={fill} stroke="#ef4444" strokeWidth="2" />
          <text x="38" y="95" fontSize="16" fontWeight="700" fill="#dc2626">T</text>
          <text x="32" y="120" fontSize="11" fill={stroke}>Temp</text>
          <rect x="95" y="50" width="65" height="90" rx="12" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="105" y="95" fontSize="13" fontWeight="700" fill="#0f766e">Pulse</text>
          <rect x="170" y="50" width="65" height="90" rx="12" fill={fill} stroke="#2563eb" strokeWidth="2" />
          <text x="188" y="95" fontSize="16" fontWeight="700" fill="#1d4ed8">RR</text>
          <rect x="245" y="50" width="55" height="90" rx="12" fill={fill} stroke="#c026d3" strokeWidth="2" />
          <text x="258" y="95" fontSize="16" fontWeight="700" fill="#a21caf">BP</text>
          <text x="40" y="175" fontSize="12" fill={stroke}>Prep -&gt; Measure -&gt; Record -&gt; Report</text>
          <text x="40" y="195" fontSize="12" fill={stroke}>Escalate abnormal findings to supervisor</text>
        </svg>
      );

    case 'positioning':
      return (
        <svg {...commonProps} aria-label={title || 'Patient positions'}>
          <rect x="15" y="55" width="90" height="45" rx="6" fill={fill} stroke={stroke} strokeWidth="2" />
          <ellipse cx="30" cy="78" rx="10" ry="12" fill={fill} stroke={stroke} strokeWidth="1.5" />
          <text x="30" y="125" fontSize="12" fontWeight="700" fill={stroke}>Supine</text>
          <text x="28" y="142" fontSize="11" fill={stroke}>on back</text>
          <rect x="125" y="45" width="40" height="65" rx="8" fill={fill} stroke={stroke} strokeWidth="2" />
          <ellipse cx="145" cy="38" rx="12" ry="10" fill={fill} stroke={stroke} strokeWidth="1.5" />
          <text x="128" y="135" fontSize="12" fontWeight="700" fill={stroke}>Lateral</text>
          <text x="128" y="152" fontSize="11" fill={stroke}>on side</text>
          <path d="M210 100 L210 50 L285 50 L285 100 Z" fill={fill} stroke={stroke} strokeWidth="2" />
          <line x1="210" y1="100" x2="295" y2="100" stroke={stroke} strokeWidth="2" />
          <ellipse cx="225" cy="42" rx="10" ry="11" fill={fill} stroke={stroke} strokeWidth="1.5" />
          <text x="220" y="125" fontSize="12" fontWeight="700" fill={stroke}>Fowler</text>
          <text x="210" y="142" fontSize="11" fill={stroke}>head raised</text>
          <text x="30" y="185" fontSize="12" fill={stroke}>Pressure care, comfort, dignity</text>
          <text x="30" y="205" fontSize="12" fill={stroke}>Educational only - supervised practice / protocol</text>
        </svg>
      );

    case 'transfer':
      return (
        <svg {...commonProps} aria-label={title || 'Safe transfer sequence'}>
          <rect x="15" y="80" width="68" height="50" rx="10" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="25" y="110" fontSize="12" fontWeight="700" fill={stroke}>Prepare</text>
          <rect x="90" y="80" width="68" height="50" rx="10" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="100" y="110" fontSize="12" fontWeight="700" fill={stroke}>Explain</text>
          <rect x="165" y="80" width="68" height="50" rx="10" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="175" y="110" fontSize="12" fontWeight="700" fill={stroke}>Transfer</text>
          <rect x="240" y="80" width="65" height="50" rx="10" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="252" y="110" fontSize="12" fontWeight="700" fill={stroke}>Settle</text>
          <text x="30" y="170" fontSize="12" fill={stroke}>Assess ability - use aids - follow protocol</text>
          <text x="30" y="190" fontSize="12" fill={stroke}>Do not lift beyond training and local policy</text>
        </svg>
      );

    case 'bed-making':
      return (
        <svg {...commonProps} aria-label={title || 'Bed-making sequence'}>
          <rect x="15" y="80" width="68" height="50" rx="10" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="30" y="110" fontSize="12" fontWeight="700" fill={stroke}>Strip</text>
          <rect x="90" y="80" width="68" height="50" rx="10" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="105" y="110" fontSize="12" fontWeight="700" fill={stroke}>Clean</text>
          <rect x="165" y="80" width="68" height="50" rx="10" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="175" y="110" fontSize="12" fontWeight="700" fill={stroke}>Remake</text>
          <rect x="240" y="80" width="65" height="50" rx="10" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="255" y="110" fontSize="12" fontWeight="700" fill={stroke}>Safe</text>
          <text x="30" y="175" fontSize="12" fill={stroke}>Infection prevention - body mechanics</text>
          <text x="30" y="195" fontSize="12" fill={stroke}>Supervised clinical skill</text>
        </svg>
      );

    case 'patient-id':
      return (
        <svg {...commonProps} aria-label={title || 'Patient identification'}>
          <rect x="10" y="90" width="70" height="45" rx="10" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="18" y="118" fontSize="11" fontWeight="700" fill={stroke}>Ask name</text>
          <rect x="88" y="90" width="70" height="45" rx="10" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="98" y="118" fontSize="11" fontWeight="700" fill={stroke}>Check ID</text>
          <rect x="166" y="90" width="72" height="45" rx="10" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="172" y="118" fontSize="11" fontWeight="700" fill={stroke}>Match record</text>
          <rect x="246" y="90" width="64" height="45" rx="10" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="255" y="118" fontSize="11" fontWeight="700" fill={stroke}>Proceed</text>
          <text x="40" y="175" fontSize="12" fill={stroke}>Two identifiers before care or procedures</text>
        </svg>
      );

    case 'microbes':
      return (
        <svg {...commonProps} aria-label={title || 'Microorganism types'}>
          <circle cx="70" cy="85" r="36" fill="#bbf7d0" stroke="#16a34a" strokeWidth="2" />
          <circle cx="58" cy="78" r="4" fill="#166534" />
          <circle cx="80" cy="90" r="4" fill="#166534" />
          <text x="42" y="140" fontSize="12" fontWeight="700" fill="#166534">Bacteria</text>
          <text x="40" y="155" fontSize="10" fill="var(--diagram-stroke)">cells, often treatable</text>
          <circle cx="160" cy="85" r="24" fill="#e9d5ff" stroke="#7c3aed" strokeWidth="2" />
          <circle cx="160" cy="85" r="10" fill="#c4b5fd" />
          <text x="140" y="140" fontSize="12" fontWeight="700" fill="#5b21b6">Virus</text>
          <text x="125" y="155" fontSize="10" fill="var(--diagram-stroke)">needs host cell</text>
          <ellipse cx="250" cy="85" rx="38" ry="28" fill="#fde68a" stroke="#ca8a04" strokeWidth="2" />
          <ellipse cx="250" cy="85" rx="20" ry="12" fill="#fcd34d" />
          <text x="230" y="140" fontSize="12" fontWeight="700" fill="#854d0e">Fungi</text>
          <text x="220" y="155" fontSize="10" fill="var(--diagram-stroke)">yeasts/moulds</text>
          <ellipse cx="160" cy="195" rx="50" ry="22" fill="#fecaca" stroke="#dc2626" strokeWidth="2" />
          <text x="128" y="200" fontSize="12" fontWeight="700" fill="#991b1b">Protozoa</text>
        </svg>
      );

    case 'chain-infection':
      return (
        <svg {...commonProps} aria-label={title || 'Chain of infection'}>
          <rect x="15" y="35" width="90" height="55" rx="12" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="35" y="68" fontSize="12" fontWeight="700" fill={stroke}>Agent</text>
          <rect x="115" y="35" width="90" height="55" rx="12" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="128" y="68" fontSize="12" fontWeight="700" fill={stroke}>Reservoir</text>
          <rect x="215" y="35" width="90" height="55" rx="12" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="240" y="68" fontSize="12" fontWeight="700" fill={stroke}>Exit</text>
          <rect x="15" y="120" width="90" height="55" rx="12" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="22" y="152" fontSize="12" fontWeight="700" fill={stroke}>Transmission</text>
          <rect x="115" y="120" width="90" height="55" rx="12" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="140" y="152" fontSize="12" fontWeight="700" fill={stroke}>Entry</text>
          <rect x="215" y="120" width="90" height="55" rx="12" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="240" y="152" fontSize="12" fontWeight="700" fill={stroke}>Host</text>
          <text x="50" y="210" fontSize="12" fill={stroke}>Break any link to reduce infection risk</text>
        </svg>
      );

    case 'aseptic':
      return (
        <svg {...commonProps} aria-label={title || 'Aseptic field'}>
          <rect x="40" y="40" width="240" height="130" rx="12" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <rect x="90" y="75" width="140" height="60" rx="8" fill={fill} stroke="#dc2626" strokeWidth="2" strokeDasharray="6 4" />
          <text x="115" y="110" fontSize="13" fontWeight="700" fill="#dc2626">Key part / key site</text>
          <text x="40" y="200" fontSize="12" fill={stroke}>Non-touch technique protects sterile integrity</text>
        </svg>
      );

    case 'sterile-vs-clean':
      return (
        <svg {...commonProps} aria-label={title || 'Sterile versus clean'}>
          <rect x="25" y="50" width="125" height="110" rx="12" fill="#ccfbf1" stroke="#0d9488" strokeWidth="2" />
          <text x="55" y="95" fontSize="14" fontWeight="700" fill="#0f766e">Sterile</text>
          <text x="40" y="120" fontSize="12" fill="#0f766e">All microbes</text>
          <text x="45" y="140" fontSize="12" fill="#0f766e">destroyed</text>
          <rect x="170" y="50" width="125" height="110" rx="12" fill="#e0f2fe" stroke="#2563eb" strokeWidth="2" />
          <text x="205" y="95" fontSize="14" fontWeight="700" fill="#1d4ed8">Clean</text>
          <text x="190" y="120" fontSize="12" fill="#1d4ed8">Microbes</text>
          <text x="195" y="140" fontSize="12" fill="#1d4ed8">reduced</text>
          <text x="40" y="200" fontSize="12" fill={stroke}>Method chosen by purpose and local policy</text>
        </svg>
      );

    case 'specimen-path':
      return (
        <svg {...commonProps} aria-label={title || 'Specimen pathway'}>
          <rect x="15" y="80" width="68" height="50" rx="10" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="25" y="110" fontSize="12" fontWeight="700" fill={stroke}>Collect</text>
          <rect x="90" y="80" width="68" height="50" rx="10" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="105" y="110" fontSize="12" fontWeight="700" fill={stroke}>Label</text>
          <rect x="165" y="80" width="68" height="50" rx="10" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="180" y="110" fontSize="12" fontWeight="700" fill={stroke}>Store</text>
          <rect x="240" y="80" width="65" height="50" rx="10" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="258" y="110" fontSize="12" fontWeight="700" fill={stroke}>Lab</text>
          <text x="40" y="175" fontSize="12" fill={stroke}>Correct patient, sample and time</text>
        </svg>
      );

    case 'isolation':
      return (
        <svg {...commonProps} aria-label={title || 'Transmission precautions'}>
          <rect x="40" y="55" width="240" height="100" rx="12" fill={fill} stroke="#dc2626" strokeWidth="2" />
          <text x="70" y="100" fontSize="14" fontWeight="700" fill="#991b1b">Transmission precautions</text>
          <text x="55" y="125" fontSize="12" fill={stroke}>Contact - Droplet - Airborne (per policy)</text>
          <text x="40" y="190" fontSize="12" fill={stroke}>Signage, PPE, limit spread - local protocol</text>
        </svg>
      );

    case 'amr':
      return (
        <svg {...commonProps} aria-label={title || 'Antimicrobial resistance'}>
          <circle cx="95" cy="110" r="45" fill="#bbf7d0" stroke="#16a34a" strokeWidth="2" />
          <text x="62" y="115" fontSize="13" fontWeight="700" fill="#166534">Sensitive</text>
          <text x="150" y="115" fontSize="20" fill="#0d9488">-&gt;</text>
          <circle cx="230" cy="110" r="45" fill="#fecaca" stroke="#dc2626" strokeWidth="2" />
          <text x="198" y="115" fontSize="13" fontWeight="700" fill="#991b1b">Resistant</text>
          <text x="30" y="190" fontSize="12" fill={stroke}>Right drug, right use - stewardship protects care</text>
        </svg>
      );

    case 'sbar':
      return (
        <svg {...commonProps} aria-label={title || 'SBAR structure'}>
          <rect x="40" y="15" width="240" height="42" rx="10" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <circle cx="65" cy="36" r="14" fill="#0d9488" />
          <text x="59" y="41" fontSize="13" fontWeight="700" fill="#ecfdf5">S</text>
          <text x="90" y="41" fontSize="13" fontWeight="600" fill={stroke}>Situation</text>
          <rect x="40" y="65" width="240" height="42" rx="10" fill={fill} stroke="#2563eb" strokeWidth="2" />
          <circle cx="65" cy="86" r="14" fill="#2563eb" />
          <text x="59" y="91" fontSize="13" fontWeight="700" fill="#eff6ff">B</text>
          <text x="90" y="91" fontSize="13" fontWeight="600" fill={stroke}>Background</text>
          <rect x="40" y="115" width="240" height="42" rx="10" fill={fill} stroke="#c026d3" strokeWidth="2" />
          <circle cx="65" cy="136" r="14" fill="#c026d3" />
          <text x="59" y="141" fontSize="13" fontWeight="700" fill="#fdf4ff">A</text>
          <text x="90" y="141" fontSize="13" fontWeight="600" fill={stroke}>Assessment</text>
          <rect x="40" y="165" width="240" height="42" rx="10" fill={fill} stroke="#ea580c" strokeWidth="2" />
          <circle cx="65" cy="186" r="14" fill="#ea580c" />
          <text x="59" y="191" fontSize="13" fontWeight="700" fill="#fff7ed">R</text>
          <text x="90" y="191" fontSize="13" fontWeight="600" fill={stroke}>Recommendation</text>
        </svg>
      );

    case 'communication':
      return (
        <svg {...commonProps} aria-label={title || 'Communication process'}>
          <rect x="15" y="85" width="70" height="45" rx="8" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="28" y="112" fontSize="12" fontWeight="700" fill={stroke}>Sender</text>
          <text x="92" y="112" fontSize="16" fill="#0d9488">-&gt;</text>
          <rect x="115" y="85" width="75" height="45" rx="8" fill={fill} stroke="#2563eb" strokeWidth="2" />
          <text x="125" y="112" fontSize="12" fontWeight="700" fill={stroke}>Message</text>
          <text x="198" y="112" fontSize="16" fill="#0d9488">-&gt;</text>
          <rect x="220" y="85" width="80" height="45" rx="8" fill={fill} stroke="#c026d3" strokeWidth="2" />
          <text x="230" y="112" fontSize="12" fontWeight="700" fill={stroke}>Receiver</text>
          <path d="M260 130 C260 180 40 180 40 130" fill="none" stroke="#ea580c" strokeWidth="2" strokeDasharray="5 4" />
          <text x="120" y="195" fontSize="13" fontWeight="700" fill="#ea580c">Feedback</text>
        </svg>
      );

    case 'barriers-comm':
      return (
        <svg {...commonProps} aria-label={title || 'Communication barriers'}>
          <rect x="20" y="80" width="75" height="50" rx="8" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="35" y="110" fontSize="13" fontWeight="700" fill={stroke}>Sender</text>
          <rect x="120" y="60" width="80" height="90" rx="8" fill="#fecaca" stroke="#dc2626" strokeWidth="2" />
          <text x="135" y="110" fontSize="13" fontWeight="700" fill="#991b1b">Barriers</text>
          <rect x="225" y="80" width="75" height="50" rx="8" fill={fill} stroke="#2563eb" strokeWidth="2" />
          <text x="235" y="110" fontSize="13" fontWeight="700" fill={stroke}>Receiver</text>
          <text x="30" y="185" fontSize="12" fill={stroke}>Language, noise, fear, assumptions, environment</text>
        </svg>
      );

    case 'teach-back':
      return (
        <svg {...commonProps} aria-label={title || 'Teach-back cycle'}>
          <rect x="10" y="85" width="70" height="50" rx="10" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="22" y="115" fontSize="12" fontWeight="700" fill={stroke}>Explain</text>
          <rect x="88" y="85" width="75" height="50" rx="10" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="95" y="115" fontSize="12" fontWeight="700" fill={stroke}>Restate</text>
          <rect x="170" y="85" width="70" height="50" rx="10" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="180" y="115" fontSize="12" fontWeight="700" fill={stroke}>Clarify</text>
          <rect x="248" y="85" width="62" height="50" rx="10" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="255" y="115" fontSize="12" fontWeight="700" fill={stroke}>Confirm</text>
          <text x="40" y="175" fontSize="12" fill={stroke}>Understanding checked, not only information given</text>
        </svg>
      );

    case 'team-comm':
      return (
        <svg {...commonProps} aria-label={title || 'Team communication'}>
          <circle cx="160" cy="105" r="30" fill="#ccfbf1" stroke="#0d9488" strokeWidth="2" />
          <text x="138" y="110" fontSize="12" fontWeight="700" fill="#0f766e">Patient</text>
          <circle cx="70" cy="50" r="26" fill={fill} stroke="#2563eb" strokeWidth="2" />
          <text x="52" y="55" fontSize="12" fontWeight="700" fill={stroke}>Nurse</text>
          <circle cx="250" cy="50" r="26" fill={fill} stroke="#2563eb" strokeWidth="2" />
          <text x="225" y="55" fontSize="12" fontWeight="700" fill={stroke}>Midwife</text>
          <circle cx="70" cy="165" r="26" fill={fill} stroke="#2563eb" strokeWidth="2" />
          <text x="48" y="170" fontSize="12" fontWeight="700" fill={stroke}>Doctor</text>
          <circle cx="250" cy="165" r="26" fill={fill} stroke="#2563eb" strokeWidth="2" />
          <text x="235" y="170" fontSize="12" fontWeight="700" fill={stroke}>Team</text>
          <text x="50" y="220" fontSize="12" fill={stroke}>Closed-loop information around the patient</text>
        </svg>
      );

    case 'conflict-flow':
      return (
        <svg {...commonProps} aria-label={title || 'Conflict resolution steps'}>
          <rect x="8" y="85" width="58" height="48" rx="8" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="16" y="115" fontSize="11" fontWeight="700" fill={stroke}>Pause</text>
          <rect x="72" y="85" width="58" height="48" rx="8" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="82" y="115" fontSize="11" fontWeight="700" fill={stroke}>Listen</text>
          <rect x="136" y="85" width="58" height="48" rx="8" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="145" y="115" fontSize="11" fontWeight="700" fill={stroke}>Clarify</text>
          <rect x="200" y="85" width="58" height="48" rx="8" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="208" y="115" fontSize="11" fontWeight="700" fill={stroke}>Options</text>
          <rect x="264" y="85" width="48" height="48" rx="8" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="270" y="115" fontSize="11" fontWeight="700" fill={stroke}>Agree</text>
          <text x="40" y="175" fontSize="12" fill={stroke}>Escalate if safety is at risk</text>
        </svg>
      );

    case 'telephone-flow':
      return (
        <svg {...commonProps} aria-label={title || 'Telephone structure'}>
          <rect x="8" y="85" width="58" height="48" rx="8" fill={fill} stroke="#2563eb" strokeWidth="2" />
          <text x="14" y="115" fontSize="11" fontWeight="700" fill={stroke}>Identify</text>
          <rect x="72" y="85" width="58" height="48" rx="8" fill={fill} stroke="#2563eb" strokeWidth="2" />
          <text x="78" y="115" fontSize="11" fontWeight="700" fill={stroke}>Purpose</text>
          <rect x="136" y="85" width="58" height="48" rx="8" fill={fill} stroke="#2563eb" strokeWidth="2" />
          <text x="148" y="115" fontSize="11" fontWeight="700" fill={stroke}>Facts</text>
          <rect x="200" y="85" width="58" height="48" rx="8" fill={fill} stroke="#2563eb" strokeWidth="2" />
          <text x="208" y="115" fontSize="11" fontWeight="700" fill={stroke}>Confirm</text>
          <rect x="264" y="85" width="48" height="48" rx="8" fill={fill} stroke="#2563eb" strokeWidth="2" />
          <text x="270" y="115" fontSize="11" fontWeight="700" fill={stroke}>Record</text>
          <text x="40" y="175" fontSize="12" fill={stroke}>Professional structure for phone and digital messages</text>
        </svg>
      );

    case 'dikw':
      return (
        <svg {...commonProps} aria-label={title || 'DIKW hierarchy'}>
          <rect x="50" y="170" width="220" height="36" rx="8" fill="#99f6e4" stroke="#0f766e" strokeWidth="1.5" />
          <text x="140" y="193" fontSize="13" fontWeight="700" fill="#134e4a">Data</text>
          <rect x="70" y="125" width="180" height="36" rx="8" fill="#5eead4" stroke="#0f766e" strokeWidth="1.5" />
          <text x="120" y="148" fontSize="13" fontWeight="700" fill="#134e4a">Information</text>
          <rect x="95" y="80" width="130" height="36" rx="8" fill="#2dd4bf" stroke="#0f766e" strokeWidth="1.5" />
          <text x="125" y="103" fontSize="13" fontWeight="700" fill="#134e4a">Knowledge</text>
          <rect x="120" y="35" width="80" height="36" rx="8" fill="#14b8a6" stroke="#0f766e" strokeWidth="1.5" />
          <text x="135" y="58" fontSize="13" fontWeight="700" fill="#134e4a">Wisdom</text>
        </svg>
      );

    case 'data-lifecycle':
      return (
        <svg {...commonProps} aria-label={title || 'Data lifecycle'}>
          <rect x="15" y="85" width="68" height="50" rx="10" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="25" y="115" fontSize="12" fontWeight="700" fill={stroke}>Collect</text>
          <rect x="90" y="85" width="68" height="50" rx="10" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="105" y="115" fontSize="12" fontWeight="700" fill={stroke}>Store</text>
          <rect x="165" y="85" width="68" height="50" rx="10" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="185" y="115" fontSize="12" fontWeight="700" fill={stroke}>Use</text>
          <rect x="240" y="85" width="65" height="50" rx="10" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="250" y="115" fontSize="12" fontWeight="700" fill={stroke}>Protect</text>
          <text x="40" y="175" fontSize="12" fill={stroke}>Quality and confidentiality at every stage</text>
        </svg>
      );

    case 'cyber-privacy':
      return (
        <svg {...commonProps} aria-label={title || 'Privacy and cybersecurity'}>
          <rect x="20" y="70" width="65" height="65" rx="10" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="28" y="108" fontSize="12" fontWeight="700" fill={stroke}>Password</text>
          <rect x="95" y="70" width="60" height="65" rx="10" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="105" y="108" fontSize="12" fontWeight="700" fill={stroke}>Log out</text>
          <rect x="165" y="70" width="75" height="65" rx="10" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="170" y="108" fontSize="12" fontWeight="700" fill={stroke}>Need-to-know</text>
          <rect x="250" y="70" width="55" height="65" rx="10" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="258" y="108" fontSize="12" fontWeight="700" fill={stroke}>Report</text>
          <text x="40" y="175" fontSize="12" fill={stroke}>Protect records - beware phishing - follow policy</text>
        </svg>
      );

    case 'cdss-flow':
      return (
        <svg {...commonProps} aria-label={title || 'Clinical decision support'}>
          <rect x="15" y="90" width="70" height="45" rx="8" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="32" y="118" fontSize="12" fontWeight="700" fill={stroke}>Data</text>
          <text x="92" y="118" fontSize="16" fill="#0d9488">-&gt;</text>
          <rect x="115" y="90" width="70" height="45" rx="8" fill={fill} stroke="#2563eb" strokeWidth="2" />
          <text x="132" y="118" fontSize="12" fontWeight="700" fill={stroke}>Alert</text>
          <text x="192" y="118" fontSize="16" fill="#0d9488">-&gt;</text>
          <rect x="215" y="90" width="90" height="45" rx="8" fill={fill} stroke="#c026d3" strokeWidth="2" />
          <text x="225" y="118" fontSize="12" fontWeight="700" fill={stroke}>Clinician acts</text>
          <text x="30" y="175" fontSize="12" fill={stroke}>Tools advise - professional remains accountable</text>
        </svg>
      );

    case 'informatics':
      return (
        <svg {...commonProps} aria-label={title || 'Health information flow'}>
          <rect x="10" y="80" width="75" height="55" rx="10" fill="var(--diagram-fill)" stroke="#0d9488" strokeWidth="2" />
          <text x="25" y="112" fontSize="12" fontWeight="700" fill="var(--diagram-stroke)">Patient</text>
          <text x="92" y="112" fontSize="18" fill="#0d9488">-&gt;</text>
          <rect x="115" y="80" width="75" height="55" rx="10" fill="var(--diagram-fill)" stroke="#2563eb" strokeWidth="2" />
          <text x="135" y="105" fontSize="12" fontWeight="700" fill="var(--diagram-stroke)">EHR</text>
          <text x="125" y="122" fontSize="10" fill="var(--diagram-stroke)">record system</text>
          <text x="198" y="112" fontSize="18" fill="#0d9488">-&gt;</text>
          <rect x="220" y="80" width="85" height="55" rx="10" fill="var(--diagram-fill)" stroke="#c026d3" strokeWidth="2" />
          <text x="230" y="105" fontSize="12" fontWeight="700" fill="var(--diagram-stroke)">Care team</text>
          <text x="228" y="122" fontSize="10" fill="var(--diagram-stroke)">decisions</text>
          <text x="30" y="175" fontSize="12" fill="var(--diagram-stroke)">Accurate data in - safer decisions out</text>
          <text x="30" y="195" fontSize="12" fill="var(--diagram-stroke)">Privacy and access controls protect women and families</text>
        </svg>
      );

    case 'documentation':
      return (
        <svg {...commonProps} aria-label={title || 'Documentation process'}>
          <rect x="20" y="85" width="65" height="50" rx="10" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="30" y="115" fontSize="12" fontWeight="700" fill={stroke}>Observe</text>
          <rect x="95" y="85" width="65" height="50" rx="10" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="108" y="115" fontSize="12" fontWeight="700" fill={stroke}>Record</text>
          <rect x="170" y="85" width="65" height="50" rx="10" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="185" y="115" fontSize="12" fontWeight="700" fill={stroke}>Sign</text>
          <rect x="245" y="85" width="60" height="50" rx="10" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="252" y="115" fontSize="12" fontWeight="700" fill={stroke}>Report</text>
          <text x="40" y="175" fontSize="12" fill={stroke}>Factual, timely, legible - if not recorded, team cannot rely on it</text>
        </svg>
      );

    case 'professional':
      return (
        <svg {...commonProps} aria-label={title || 'Professional practice'}>
          <rect x="15" y="50" width="90" height="110" rx="12" fill="var(--diagram-fill)" stroke="#0d9488" strokeWidth="2" />
          <text x="35" y="100" fontSize="13" fontWeight="700" fill="#0f766e">Ethics</text>
          <text x="25" y="120" fontSize="11" fill="var(--diagram-stroke)">right action</text>
          <rect x="115" y="50" width="90" height="110" rx="12" fill="var(--diagram-fill)" stroke="#2563eb" strokeWidth="2" />
          <text x="125" y="100" fontSize="13" fontWeight="700" fill="#1d4ed8">Competence</text>
          <text x="125" y="120" fontSize="11" fill="var(--diagram-stroke)">safe skill</text>
          <rect x="215" y="50" width="90" height="110" rx="12" fill="var(--diagram-fill)" stroke="#c026d3" strokeWidth="2" />
          <text x="222" y="100" fontSize="12" fontWeight="700" fill="#a21caf">Accountability</text>
          <text x="225" y="120" fontSize="11" fill="var(--diagram-stroke)">own your acts</text>
          <text x="30" y="200" fontSize="12" fill="var(--diagram-stroke)">Professional identity supports trusted midwifery care</text>
        </svg>
      );

    case 'needs':
      return (
        <svg {...commonProps} aria-label={title || 'Priority of needs'}>
          <rect x="50" y="175" width="220" height="32" rx="6" fill="#99f6e4" stroke="#0f766e" strokeWidth="1.5" />
          <text x="115" y="196" fontSize="12" fontWeight="700" fill="#134e4a">Physiological</text>
          <rect x="70" y="135" width="180" height="32" rx="6" fill="#5eead4" stroke="#0f766e" strokeWidth="1.5" />
          <text x="135" y="156" fontSize="12" fontWeight="700" fill="#134e4a">Safety</text>
          <rect x="95" y="95" width="130" height="32" rx="6" fill="#2dd4bf" stroke="#0f766e" strokeWidth="1.5" />
          <text x="125" y="116" fontSize="12" fontWeight="700" fill="#134e4a">Belonging</text>
          <rect x="115" y="55" width="90" height="32" rx="6" fill="#14b8a6" stroke="#0f766e" strokeWidth="1.5" />
          <text x="135" y="76" fontSize="12" fontWeight="700" fill="#134e4a">Esteem</text>
          <rect x="130" y="15" width="60" height="32" rx="6" fill="#0d9488" stroke="#0f766e" strokeWidth="1.5" />
          <text x="142" y="36" fontSize="12" fontWeight="700" fill="#ecfdf5">Self</text>
        </svg>
      );

    case 'care-concept':
    case 'clinical-skill':
      return (
        <svg {...commonProps} aria-label={title || 'Care sequence'}>
          <rect x="15" y="90" width="68" height="50" rx="10" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="25" y="120" fontSize="12" fontWeight="700" fill={stroke}>Prepare</text>
          <rect x="90" y="90" width="68" height="50" rx="10" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="100" y="120" fontSize="12" fontWeight="700" fill={stroke}>Explain</text>
          <rect x="165" y="90" width="68" height="50" rx="10" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="175" y="120" fontSize="12" fontWeight="700" fill={stroke}>Perform</text>
          <rect x="240" y="90" width="65" height="50" rx="10" fill={fill} stroke="#0d9488" strokeWidth="2" />
          <text x="248" y="120" fontSize="12" fontWeight="700" fill={stroke}>Evaluate</text>
          <text x="40" y="180" fontSize="12" fill={stroke}>Under supervision and institutional protocol</text>
        </svg>
      );

    default:
      return (
        <svg {...commonProps} aria-label={title || 'Concept illustration'}>
          <rect x="40" y="50" width="240" height="130" rx="16" fill={fill} stroke={stroke} strokeWidth="2" />
          <circle cx="160" cy="115" r="36" fill="none" stroke="#0d9488" strokeWidth="3" />
          <text x="95" y="200" fontSize="13" fontWeight="600" fill={stroke}>Educational schematic</text>
        </svg>
      );
  }
}
