import React from 'react';

interface DiagramRendererProps {
  diagramType?: string;
  className?: string;
}

export const DiagramRenderer: React.FC<DiagramRendererProps> = ({ diagramType, className = '' }) => {
  if (!diagramType) return null;

  switch (diagramType) {
    case 'square_orbit':
      return (
        <div className={`flex justify-center my-2 ${className}`}>
          <svg width="150" height="150" viewBox="0 0 150 150" className="stroke-current text-black">
            {/* Circle */}
            <circle cx="75" cy="75" r="55" fill="none" strokeWidth="1.5" />
            {/* Equilateral triangle */}
            <polygon points="75,20 27,102 123,102" fill="none" strokeWidth="1.2" strokeDasharray="3,3" />
            {/* Mass points */}
            <circle cx="75" cy="20" r="4" fill="black" />
            <text x="75" y="14" fontSize="11" textAnchor="middle" fontFamily="Times New Roman, serif" fontWeight="bold">m</text>
            
            <circle cx="27" cy="102" r="4" fill="black" />
            <text x="17" y="112" fontSize="11" textAnchor="middle" fontFamily="Times New Roman, serif" fontWeight="bold">m</text>
            
            <circle cx="123" cy="102" r="4" fill="black" />
            <text x="133" y="112" fontSize="11" textAnchor="middle" fontFamily="Times New Roman, serif" fontWeight="bold">m</text>

            {/* Radius arrows */}
            <line x1="75" y1="75" x2="75" y2="20" strokeWidth="1" />
            <text x="82" y="52" fontSize="10" fontFamily="Times New Roman, serif">R</text>
            <circle cx="75" cy="75" r="2" fill="black" />
            <text x="75" y="87" fontSize="10" textAnchor="middle" fontFamily="Times New Roman, serif">O</text>
          </svg>
        </div>
      );

    case 'spring_drop':
      return (
        <div className={`flex justify-center my-2 ${className}`}>
          <svg width="140" height="150" viewBox="0 0 140 150" className="stroke-current text-black">
            {/* Ground */}
            <line x1="20" y1="140" x2="120" y2="140" strokeWidth="2" />
            <line x1="25" y1="145" x2="35" y2="140" strokeWidth="1" />
            <line x1="45" y1="145" x2="55" y2="140" strokeWidth="1" />
            <line x1="65" y1="145" x2="75" y2="140" strokeWidth="1" />
            <line x1="85" y1="145" x2="95" y2="140" strokeWidth="1" />
            <line x1="105" y1="145" x2="115" y2="140" strokeWidth="1" />
            {/* Mass m at height h */}
            <circle cx="70" cy="25" r="8" fill="black" />
            <text x="85" y="28" fontSize="11" fontFamily="Times New Roman, serif" fontWeight="bold">m</text>
            {/* Dimension h */}
            <line x1="40" y1="25" x2="40" y2="65" strokeWidth="1" markerStart="url(#arrow)" markerEnd="url(#arrow)" />
            <text x="32" y="48" fontSize="11" fontFamily="Times New Roman, serif">h</text>
            {/* Spring */}
            <path d="M 70 65 L 60 70 L 80 77 L 60 84 L 80 91 L 60 98 L 80 105 L 60 112 L 80 119 L 60 126 L 80 133 L 70 140" fill="none" strokeWidth="1.5" />
            <text x="92" y="100" fontSize="11" fontFamily="Times New Roman, serif">k</text>
          </svg>
        </div>
      );

    case 'collision_line':
      return (
        <div className={`flex justify-center my-2 ${className}`}>
          <svg width="220" height="60" viewBox="0 0 220 60" className="stroke-current text-black">
            <line x1="10" y1="45" x2="210" y2="45" strokeWidth="1.5" />
            {/* Mass m */}
            <rect x="30" y="25" width="20" height="20" fill="none" strokeWidth="1.5" />
            <text x="40" y="38" fontSize="10" textAnchor="middle" fontFamily="Times New Roman, serif">m</text>
            <line x1="30" y1="15" x2="55" y2="15" strokeWidth="1.2" markerEnd="url(#arrowhead)" />
            <text x="42" y="11" fontSize="10" textAnchor="middle" fontFamily="Times New Roman, serif">u</text>
            {/* Mass 3m */}
            <rect x="110" y="15" width="35" height="30" fill="none" strokeWidth="1.5" />
            <text x="127" y="33" fontSize="10" textAnchor="middle" fontFamily="Times New Roman, serif">3m</text>
            <text x="127" y="55" fontSize="9" textAnchor="middle" fontFamily="Times New Roman, serif">(rest)</text>
          </svg>
        </div>
      );

    case 'bead_quarter_circle':
      return (
        <div className={`flex justify-center my-2 ${className}`}>
          <svg width="130" height="130" viewBox="0 0 130 130" className="stroke-current text-black">
            {/* Quarter arc from (25, 20) to (105, 100) */}
            <path d="M 25 20 A 80 80 0 0 1 105 100" fill="none" strokeWidth="2.5" />
            {/* Center axes */}
            <line x1="25" y1="20" x2="25" y2="100" strokeWidth="1" strokeDasharray="3,3" />
            <line x1="25" y1="100" x2="105" y2="100" strokeWidth="1" strokeDasharray="3,3" />
            {/* Bead at top */}
            <circle cx="25" cy="20" r="5" fill="black" />
            <text x="14" y="20" fontSize="11" fontFamily="Times New Roman, serif" fontWeight="bold">A</text>
            <text x="114" y="105" fontSize="11" fontFamily="Times New Roman, serif" fontWeight="bold">B</text>
            <text x="35" y="90" fontSize="10" fontFamily="Times New Roman, serif">90°</text>
          </svg>
        </div>
      );

    case 'three_spheres_touching':
      return (
        <div className={`flex justify-center my-2 ${className}`}>
          <svg width="140" height="130" viewBox="0 0 140 130" className="stroke-current text-black">
            <circle cx="70" cy="35" r="25" fill="none" strokeWidth="1.5" />
            <circle cx="45" cy="85" r="25" fill="none" strokeWidth="1.5" />
            <circle cx="95" cy="85" r="25" fill="none" strokeWidth="1.5" />
            {/* Centers line */}
            <polygon points="70,35 45,85 95,85" fill="none" strokeWidth="1" strokeDasharray="2,2" />
            <circle cx="70" cy="68" r="3" fill="black" />
            <text x="77" y="70" fontSize="9" fontFamily="Times New Roman, serif">G</text>
          </svg>
        </div>
      );

    case 'seed_anatomy':
      return (
        <div className={`flex justify-center my-2 ${className}`}>
          <svg width="150" height="120" viewBox="0 0 150 120" className="stroke-current text-black">
            {/* Dicot seed open halves */}
            <path d="M 35 60 C 35 25, 70 25, 75 60 C 70 95, 35 95, 35 60 Z" fill="#fdf8f0" strokeWidth="1.5" />
            <path d="M 115 60 C 115 25, 80 25, 75 60 C 80 95, 115 95, 115 60 Z" fill="#fdf8f0" strokeWidth="1.5" />
            {/* Embryo axis */}
            <path d="M 75 45 Q 70 55 75 75" fill="none" strokeWidth="2" />
            <circle cx="75" cy="45" r="3" fill="black" />
            <text x="75" y="38" fontSize="9" textAnchor="middle" fontFamily="Times New Roman, serif">Plumule</text>
            <circle cx="75" cy="75" r="3" fill="black" />
            <text x="75" y="90" fontSize="9" textAnchor="middle" fontFamily="Times New Roman, serif">Radicle</text>
            <text x="25" y="62" fontSize="9" fontFamily="Times New Roman, serif">Cotyledon</text>
          </svg>
        </div>
      );

    case 'embryo_anatomy':
      return (
        <div className={`flex justify-center my-2 ${className}`}>
          <svg width="130" height="130" viewBox="0 0 130 130" className="stroke-current text-black">
            {/* Maize grain longitudinal section outline */}
            <path d="M 40 20 Q 65 10 90 20 Q 105 60 90 110 Q 65 125 40 110 Q 25 60 40 20 Z" fill="none" strokeWidth="1.5" />
            {/* Separation between endosperm and embryo */}
            <path d="M 35 60 Q 65 55 95 65" fill="none" strokeWidth="1.2" strokeDasharray="3,3" />
            <text x="65" y="42" fontSize="9" textAnchor="middle" fontFamily="Times New Roman, serif">Endosperm</text>
            {/* Scutellum shield */}
            <path d="M 45 68 C 45 95, 60 100, 75 95" fill="none" strokeWidth="1.5" />
            <text x="65" y="85" fontSize="9" textAnchor="middle" fontFamily="Times New Roman, serif">Scutellum</text>
          </svg>
        </div>
      );

    case 'dicot_root_cross_section':
      return (
        <div className={`flex justify-center my-2 ${className}`}>
          <svg width="140" height="130" viewBox="0 0 140 130" className="stroke-current text-black">
            <circle cx="70" cy="65" r="55" fill="none" strokeWidth="1.5" />
            <circle cx="70" cy="65" r="42" fill="none" strokeWidth="1" strokeDasharray="3,3" />
            <circle cx="70" cy="65" r="25" fill="none" strokeWidth="1.5" />
            {/* Xylem star (diarch to tetrarch) */}
            <path d="M 70 45 L 70 85 M 50 65 L 90 65" strokeWidth="2.5" />
            <text x="70" y="33" fontSize="8" textAnchor="middle" fontFamily="Times New Roman, serif">Epiblema</text>
            <text x="70" y="52" fontSize="8" textAnchor="middle" fontFamily="Times New Roman, serif">Endodermis</text>
            <text x="96" y="67" fontSize="8" fontFamily="Times New Roman, serif">Xylem</text>
          </svg>
        </div>
      );

    case 'glycogen_branch':
      return (
        <div className={`flex justify-center my-2 ${className}`}>
          <svg width="220" height="80" viewBox="0 0 220 80" className="stroke-current text-black">
            {/* Hexagons representing glucose units in main chain */}
            <polygon points="20,50 28,40 42,40 50,50 42,60 28,60" fill="none" strokeWidth="1.2" />
            <line x1="50" y1="50" x2="65" y2="50" strokeWidth="1.5" />
            <polygon points="65,50 73,40 87,40 95,50 87,60 73,60" fill="none" strokeWidth="1.2" />
            <line x1="95" y1="50" x2="110" y2="50" strokeWidth="1.5" />
            <polygon points="110,50 118,40 132,40 140,50 132,60 118,60" fill="none" strokeWidth="1.2" />
            <line x1="140" y1="50" x2="155" y2="50" strokeWidth="1.5" />
            <polygon points="155,50 163,40 177,40 185,50 177,60 163,60" fill="none" strokeWidth="1.2" />

            {/* Branch at 110 */}
            <line x1="125" y1="40" x2="125" y2="25" strokeWidth="1.5" />
            <polygon points="110,20 118,10 132,10 140,20 132,30 118,30" fill="none" strokeWidth="1.2" />
            
            <text x="145" y="24" fontSize="8" fontFamily="Times New Roman, serif">α-1,6 branch</text>
            <text x="102" y="73" fontSize="8" textAnchor="middle" fontFamily="Times New Roman, serif">α-1,4 linear chain</text>
          </svg>
        </div>
      );

    case 'enzyme_activation_energy':
      return (
        <div className={`flex justify-center my-2 ${className}`}>
          <svg width="200" height="130" viewBox="0 0 200 130" className="stroke-current text-black">
            {/* Axes */}
            <line x1="30" y1="110" x2="185" y2="110" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
            <line x1="30" y1="110" x2="30" y2="15" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
            <text x="20" y="20" fontSize="9" textAnchor="end" transform="rotate(-90, 20, 60)" fontFamily="Times New Roman, serif">Potential Energy</text>
            <text x="110" y="125" fontSize="9" textAnchor="middle" fontFamily="Times New Roman, serif">Progress of reaction</text>

            {/* Substrate level */}
            <line x1="30" y1="80" x2="55" y2="80" strokeWidth="1.2" />
            <text x="50" y="75" fontSize="9" fontFamily="Times New Roman, serif">S</text>

            {/* Uncatalyzed peak (higher) */}
            <path d="M 55 80 C 80 80, 85 25, 110 25 C 135 25, 140 100, 170 100" fill="none" strokeWidth="1.5" />
            <text x="110" y="20" fontSize="8" textAnchor="middle" fontFamily="Times New Roman, serif">Without enzyme</text>

            {/* Catalyzed peak (lower, dashed) */}
            <path d="M 55 80 C 80 80, 85 50, 110 50 C 135 50, 140 100, 170 100" fill="none" strokeWidth="1.5" strokeDasharray="3,3" />
            <text x="110" y="45" fontSize="8" textAnchor="middle" fontFamily="Times New Roman, serif">With enzyme</text>

            {/* Product level */}
            <text x="175" y="103" fontSize="9" fontFamily="Times New Roman, serif">P</text>
          </svg>
        </div>
      );

    case 'michaelis_menten':
      return (
        <div className={`flex justify-center my-2 ${className}`}>
          <svg width="200" height="130" viewBox="0 0 200 130" className="stroke-current text-black">
            {/* Axes */}
            <line x1="30" y1="110" x2="185" y2="110" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
            <line x1="30" y1="110" x2="30" y2="15" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
            <text x="20" y="20" fontSize="9" textAnchor="end" transform="rotate(-90, 20, 60)" fontFamily="Times New Roman, serif">Velocity (V)</text>
            <text x="110" y="125" fontSize="9" textAnchor="middle" fontFamily="Times New Roman, serif">Substrate conc. [S]</text>

            {/* Rectangular hyperbolic curve */}
            <path d="M 30 110 Q 55 45 175 40" fill="none" strokeWidth="2" />

            {/* Vmax asymptote */}
            <line x1="30" y1="38" x2="180" y2="38" strokeWidth="1" strokeDasharray="3,3" />
            <text x="25" y="42" fontSize="9" textAnchor="end" fontFamily="Times New Roman, serif">Vmax</text>

            {/* Vmax / 2 */}
            <line x1="30" y1="74" x2="68" y2="74" strokeWidth="1" strokeDasharray="2,2" />
            <text x="25" y="78" fontSize="8" textAnchor="end" fontFamily="Times New Roman, serif">Vmax/2</text>

            {/* Km drop line */}
            <line x1="68" y1="74" x2="68" y2="110" strokeWidth="1" strokeDasharray="2,2" />
            <text x="68" y="122" fontSize="9" textAnchor="middle" fontFamily="Times New Roman, serif" fontWeight="bold">Km</text>
          </svg>
        </div>
      );

    default:
      return null;
  }
};
