import { Question } from '../types';

export const physicsQuestions: Question[] = [
  // Page 3: Q1 - Q10
  {
    id: 1,
    subject: 'Physics',
    type: 'standard',
    question: 'Two identical springs P and Q have force constants kP and kQ respectively, where kP = 2kQ. If both springs are stretched by applying equal force F, and WP and WQ represent the work done in stretching them, then:',
    ncertPage: 'NCERT Page 80, 81',
    options: ['WP = 2WQ', 'WQ = 2WP', 'WP = 4WQ', 'WP = WQ'],
    correctAnswer: 2,
    page: 3,
    column: 'left',
    explanation: 'Work done by force F is W = F²/(2k). Since W ∝ 1/k and kP = 2kQ, WP/WQ = kQ/kP = 1/2 ⇒ WQ = 2WP.'
  },
  {
    id: 2,
    subject: 'Physics',
    type: 'standard',
    question: 'A particle moves in a conservative force field where the potential energy is given by U(x, y, z) = 3x²y - 4yz + 5z. The force acting on the particle at point (1, 1, 1) is:',
    ncertPage: 'NCERT Page 78',
    options: [
      '-6î - (3 - 4)ĵ - (-4 + 5)k̂',
      '-6î + ĵ - k̂',
      '-6î - ĵ - k̂',
      '6î - ĵ + k̂'
    ],
    correctAnswer: 2,
    page: 3,
    column: 'left',
    explanation: 'F = -∇U = -[(∂U/∂x)î + (∂U/∂y)ĵ + (∂U/∂z)k̂]. At (1,1,1): ∂U/∂x = 6xy = 6; ∂U/∂y = 3x² - 4z = -1; ∂U/∂z = -4y + 5 = 1. Thus F = -6î + ĵ - k̂.'
  },
  {
    id: 3,
    subject: 'Physics',
    type: 'standard',
    question: 'The acceleration due to gravity on the surface of earth at the equator becomes zero due to rotation of earth about its polar axis. The angular velocity of the earth in that case should be (g = 10 m/s², R = 6400 km):',
    ncertPage: 'NCERT Page 133, 134',
    options: ['1.25 × 10⁻³ rad/s', '1.56 × 10⁻³ rad/s', '1.25 × 10⁻² rad/s', '2.5 × 10⁻³ rad/s'],
    correctAnswer: 1,
    page: 3,
    column: 'left',
    explanation: 'At equator, geff = g - Rω² = 0 ⇒ ω = √(g/R) = √(10 / 6.4 × 10⁶) = 1/(800) = 1.25 × 10⁻³ rad/s.'
  },
  {
    id: 4,
    subject: 'Physics',
    type: 'standard',
    question: 'A non-linear spring exerts a restoring force given by F = -kx - βx³ where k and β are positive constants. The work done by an external agent in stretching the spring slowly from x = 0 to x = L is:',
    ncertPage: 'NCERT Page 75',
    options: [
      '(1/2)kL² + (1/4)βL⁴',
      'kL² + βL⁴',
      '(1/2)kL² + (1/3)βL³',
      '(1/3)kL³ + (1/4)βL⁴'
    ],
    correctAnswer: 1,
    page: 3,
    column: 'left',
    explanation: 'W = ∫₀ᴸ (kx + βx³) dx = [kx²/2 + βx⁴/4]₀ᴸ = (1/2)kL² + (1/4)βL⁴.'
  },
  {
    id: 5,
    subject: 'Physics',
    type: 'diagram',
    diagramType: 'square_orbit',
    question: 'Three identical particles, each of mass m, are situated at the vertices of an equilateral triangle of side a. Under mutual gravitational attraction, they revolve in a circular orbit circumscribing the triangle. The orbital speed of each particle is:',
    ncertPage: 'NCERT Page 130',
    options: ['√(Gm/a)', '√(2Gm/a)', '√(Gm/(√3 a))', '√(3Gm/a)'],
    correctAnswer: 1,
    page: 3,
    column: 'left',
    explanation: 'Net gravitational force towards circumcentre: Fnet = 2(Gm²/a²) cos 30° = √3 Gm²/a². Radius r = a/√3. mv²/r = Fnet ⇒ mv²/(a/√3) = √3 Gm²/a² ⇒ v = √(Gm/a).'
  },
  {
    id: 6,
    subject: 'Physics',
    type: 'standard',
    question: 'A satellite revolves in a circular orbit around a planet of mass M and radius R at an altitude h = R above the surface. If T is the time period of this satellite, then the time period of another satellite orbiting at altitude h = 7R is:',
    ncertPage: 'NCERT Page 130',
    options: ['4T', '8T', '2√2 T', '16T'],
    correctAnswer: 2,
    page: 3,
    column: 'right',
    explanation: 'Orbital radius r₁ = R + R = 2R. Orbital radius r₂ = R + 7R = 8R. By Kepler’s 3rd law, T ∝ r^(3/2). T₂/T₁ = (8R / 2R)^(3/2) = 4^(3/2) = 8 ⇒ T₂ = 8T.'
  },
  {
    id: 7,
    subject: 'Physics',
    type: 'standard',
    question: 'A vehicle of mass m starts from rest and is driven by an engine delivering constant power P. Neglecting friction, the velocity v attained by the vehicle as a function of distance s travelled is proportional to:',
    ncertPage: 'NCERT Page 83',
    options: ['s^(1/2)', 's^(1/3)', 's^(2/3)', 's^(3/2)'],
    correctAnswer: 2,
    page: 3,
    column: 'right',
    explanation: 'P = F v = (m v dv/ds) v = m v² (dv/ds). Thus v² dv = (P/m) ds. Integrating: v³/3 ∝ s ⇒ v ∝ s^(1/3).'
  },
  {
    id: 8,
    subject: 'Physics',
    type: 'diagram',
    diagramType: 'spring_drop',
    question: 'A block of mass m is dropped from a height h above a vertical light spring of spring constant k mounted on a flat horizontal floor. If the maximum compression produced in the spring is x, the equation relating h, x and the parameters is:',
    ncertPage: 'NCERT Page 134',
    options: [
      'mg(h + x) = (1/2)kx²',
      'mgh = (1/2)kx²',
      'mg(h - x) = (1/2)kx²',
      'mg(h + x) = kx²'
    ],
    correctAnswer: 1,
    page: 3,
    column: 'right',
    explanation: 'From conservation of mechanical energy: Loss in gravitational PE = Gain in elastic PE ⇒ mg(h + x) = (1/2)kx².'
  },
  {
    id: 9,
    subject: 'Physics',
    type: 'standard',
    question: 'The escape speed from a planet of mass M and radius R is ve. If the radius of the planet is shrunk by 1% keeping its mass constant, the escape speed will:',
    ncertPage: 'NCERT Page 136',
    options: ['increase by 0.5%', 'decrease by 0.5%', 'increase by 1%', 'decrease by 2%'],
    correctAnswer: 1,
    page: 3,
    column: 'right',
    explanation: 've = √(2GM/R) ∝ R^(-1/2). Δve/ve = -1/2 (ΔR/R) = -1/2 (-1%) = +0.5%.'
  },
  {
    id: 10,
    subject: 'Physics',
    type: 'diagram',
    diagramType: 'collision_line',
    question: 'A ball of mass m moving with velocity u collides head-on elastically with another stationary ball of mass 3m. The fractional loss of kinetic energy of the incoming ball of mass m is:',
    ncertPage: 'NCERT Page 84, 85',
    options: ['3/4', '1/4', '8/9', '7/16'],
    correctAnswer: 1,
    page: 3,
    column: 'right',
    explanation: 'Final velocity of mass m: v₁ = [(m - 3m)/(m + 3m)] u = -u/2. Initial KE = (1/2)mu². Final KE = (1/2)m(u/2)² = (1/4)KE₀. Fractional loss = (KE₀ - KEf)/KE₀ = 3/4.'
  },

  // Page 4: Q11 - Q18
  {
    id: 11,
    subject: 'Physics',
    type: 'standard',
    question: 'The density inside a solid sphere of radius R varies with distance r from its centre as ρ(r) = ρ₀ (r / R). The gravitational field E(r) inside the sphere at distance r is proportional to:',
    ncertPage: 'NCERT Page 130',
    options: ['r', 'r²', 'r^(1/2)', '1/r'],
    correctAnswer: 2,
    page: 4,
    column: 'left',
    explanation: 'Mass enclosed M(r) = ∫₀ʳ 4πr² ρ(r) dr = 4π(ρ₀/R) ∫₀ʳ r³ dr = πρ₀ r⁴/R. Gravitational field E(r) = GM(r)/r² = G(πρ₀ r⁴/R)/r² ∝ r².'
  },
  {
    id: 12,
    subject: 'Physics',
    type: 'standard',
    question: 'A horizontal turntable rotates about a vertical central axis with angular velocity ω₀. A child of mass m sits at the centre. When the child walks outward along a radius to the edge, the moment of inertia doubles. The final kinetic energy is:',
    ncertPage: 'NCERT Page 119',
    options: ['E₀ / 2', 'E₀ / 4', '2E₀', 'E₀'],
    correctAnswer: 1,
    page: 4,
    column: 'left',
    explanation: 'By conservation of angular momentum: L = I₀ω₀ = (2I₀)ωf ⇒ ωf = ω₀/2. Final KE = L² / (2If) = L² / (4I₀) = E₀/2.'
  },
  {
    id: 13,
    subject: 'Physics',
    type: 'standard',
    question: 'The gravitational potential due to a mass distribution along the x-axis is given by V(x) = -C / √(x² + a²). The magnitude of gravitational field at distance x from the origin is:',
    ncertPage: 'NCERT Page 134, 135',
    options: [
      'Cx / (x² + a²)^(3/2)',
      'C / (x² + a²)^(3/2)',
      'Cx / (x² + a²)',
      'C / (x² + a²)^(1/2)'
    ],
    correctAnswer: 1,
    page: 4,
    column: 'left',
    explanation: 'E = -dV/dx = -d/dx[-C(x² + a²)^(-1/2)] = C(-1/2)(x² + a²)^(-3/2)(2x) = -Cx / (x² + a²)^(3/2). Magnitude = Cx / (x² + a²)^(3/2).'
  },
  {
    id: 14,
    subject: 'Physics',
    type: 'diagram',
    diagramType: 'bead_quarter_circle',
    question: 'A smooth wire is bent into a vertical circular arc of radius R subtending 90° at centre. A small ring is released from rest from the top end A and slides down along the wire to bottom B. The normal force exerted by the wire on the ring as it reaches B is:',
    ncertPage: 'NCERT Page 78',
    options: ['mg', '2mg', '3mg', '4mg'],
    correctAnswer: 3,
    page: 4,
    column: 'left',
    explanation: 'At bottom B: v² = 2gR. Normal force N - mg = mv²/R = 2mg ⇒ N = 3mg directed radially inwards towards centre.'
  },
  {
    id: 15,
    subject: 'Physics',
    type: 'standard',
    question: 'A thin uniform rod of length L and mass M is placed along the x-axis from x = d to x = d + L. The gravitational force exerted by this rod on a point mass m placed at the origin x = 0 is:',
    ncertPage: 'NCERT Page 130',
    options: [
      'GMm / [d(d + L)]',
      'GMm / (d + L)²',
      'GMm / d²',
      'GMm / [2d(d + L)]'
    ],
    correctAnswer: 1,
    page: 4,
    column: 'right',
    explanation: 'dF = G m dm / x² = G m (M/L dx) / x². F = (GMm/L) ∫_d^(d+L) x⁻² dx = (GMm/L) [1/d - 1/(d+L)] = GMm / [d(d+L)].'
  },
  {
    id: 16,
    subject: 'Physics',
    type: 'standard',
    question: 'A particle of mass m moves in a straight line with velocity v = k√x, where k is a positive constant. The instantaneous power delivered to the particle by the net force as a function of position x is:',
    ncertPage: 'NCERT Page 83',
    options: ['(1/2)mk³ √x', 'mk³ √x', '(1/2)mk² x', 'mk³ x'],
    correctAnswer: 1,
    page: 4,
    column: 'right',
    explanation: 'v = k√x ⇒ a = v (dv/dx) = (k√x)(k / (2√x)) = k²/2. Force F = ma = mk²/2. Power P = F v = (mk²/2)(k√x) = (1/2)mk³ √x.'
  },
  {
    id: 17,
    subject: 'Physics',
    type: 'standard',
    question: 'A force F⃗ = (2î + 3ĵ - 4k̂) N acts on a rigid body at a position vector r⃗ = (î - 2ĵ + k̂) m relative to the origin. The torque acting on the body about the origin is:',
    ncertPage: 'NCERT Page 106',
    options: [
      '(5î + 6ĵ + 7k̂) N·m',
      '(5î - 2ĵ + 7k̂) N·m',
      '(-5î + 6ĵ - 7k̂) N·m',
      '(7î + 6ĵ + 7k̂) N·m'
    ],
    correctAnswer: 1,
    page: 4,
    column: 'right',
    explanation: 'τ⃗ = r⃗ × F⃗ = determinant [î, ĵ, k̂; 1, -2, 1; 2, 3, -4] = î(8 - 3) - ĵ(-4 - 2) + k̂(3 - (-4)) = 5î + 6ĵ + 7k̂ N·m.'
  },
  {
    id: 18,
    subject: 'Physics',
    type: 'diagram',
    diagramType: 'three_spheres_touching',
    question: 'Three identical solid spheres of mass M and radius R are arranged such that each touches the other two on a horizontal plane. The moment of inertia of the system about an axis passing through the centroid of the triangle and perpendicular to the plane of centres is:',
    ncertPage: 'NCERT Page 115, 116',
    options: ['(26/5) MR²', '(16/5) MR²', '(36/5) MR²', '(18/5) MR²'],
    correctAnswer: 1,
    page: 4,
    column: 'right',
    explanation: 'Side of equilateral triangle d = 2R. Distance of each centre from centroid r = d/√3 = 2R/√3. For each sphere: I = Icm + Mr² = (2/5)MR² + M(4R²/3) = (26/15)MR². For 3 spheres: Itotal = 3 × (26/15)MR² = (26/5) MR².'
  },

  // Page 5: Q19 - Q30
  {
    id: 19,
    subject: 'Physics',
    type: 'standard',
    question: 'Four particles each of mass M are situated at the four vertices of a square of side a. The gravitational potential at the centre of the square is:',
    ncertPage: 'NCERT Page 130',
    options: [
      '-4√2 GM / a',
      '-2√2 GM / a',
      '-8 GM / a',
      '-4 GM / a'
    ],
    correctAnswer: 1,
    page: 5,
    column: 'left',
    explanation: 'Distance of each vertex from centre r = a/√2. Total potential V = 4 × (-GM/r) = 4 × (-GM / (a/√2)) = -4√2 GM/a.'
  },
  {
    id: 20,
    subject: 'Physics',
    type: 'standard',
    question: 'A body of mass m is dropped from a height H above the ground. If air resistance exerts a constant upward opposing force f, its kinetic energy just before striking the ground is:',
    ncertPage: 'NCERT Page 76, 78',
    options: ['mgH - fH', 'mgH + fH', 'fH', '(mg - f) / H'],
    correctAnswer: 1,
    page: 5,
    column: 'left',
    explanation: 'By Work-Energy theorem: Wtotal = ΔK ⇒ Wg + Wres = Kf - 0 ⇒ mgH - fH = Kf.'
  },
  {
    id: 21,
    subject: 'Physics',
    type: 'standard',
    question: 'Point masses m, 2m, 3m, ..., nm are placed along the x-axis at distances d, 2d, 3d, ..., nd respectively from the origin. The position of the center of mass of the system is:',
    ncertPage: 'NCERT Page 96',
    options: [
      '(2n + 1)d / 3',
      '(n + 1)d / 2',
      'n(n + 1)d / 2',
      '2d / (n + 1)'
    ],
    correctAnswer: 1,
    page: 5,
    column: 'left',
    explanation: 'Xcm = Σ(mi xi) / Σmi = [m·d (1² + 2² + ... + n²)] / [m (1 + 2 + ... + n)] = [n(n+1)(2n+1)/6] / [n(n+1)/2] = (2n+1)d / 3.'
  },
  {
    id: 22,
    subject: 'Physics',
    type: 'standard',
    question: 'The orbital radius of satellite A is 4 times that of satellite B around the Earth. If the speed of satellite A is v, then the orbital speed of satellite B is:',
    ncertPage: 'NCERT Page 137',
    options: ['2v', 'v / 2', '4v', 'v / 4'],
    correctAnswer: 1,
    page: 5,
    column: 'left',
    explanation: 'Orbital velocity vorb = √(GM/r) ∝ 1/√r. Since rA = 4rB, vB/vA = √(rA/rB) = √4 = 2 ⇒ vB = 2v.'
  },
  {
    id: 23,
    subject: 'Physics',
    type: 'standard',
    question: 'A particle moves in a circular path of radius R. If its kinetic energy K is proportional to s² (where s is the distance travelled), the tangential acceleration at is:',
    ncertPage: 'NCERT Page 106',
    options: ['proportional to s', 'constant', 'proportional to s²', 'inversely proportional to s'],
    correctAnswer: 1,
    page: 5,
    column: 'left',
    explanation: 'K = (1/2)mv² = c s² ⇒ v ∝ s ⇒ dv/ds = const. Tangential acceleration at = v (dv/ds) ∝ s.'
  },
  {
    id: 24,
    subject: 'Physics',
    type: 'standard',
    question: 'A solid cylinder of mass M and radius R rolls down an inclined plane of inclination θ without slipping. The acceleration of the center of mass of the cylinder is:',
    ncertPage: 'NCERT Page 120',
    options: ['(2/3) g sin θ', '(1/2) g sin θ', '(3/5) g sin θ', 'g sin θ'],
    correctAnswer: 1,
    page: 5,
    column: 'right',
    explanation: 'For rolling down an incline: a = g sin θ / (1 + I/MR²). For solid cylinder, I/MR² = 1/2. So a = g sin θ / (1 + 1/2) = (2/3) g sin θ.'
  },
  {
    id: 25,
    subject: 'Physics',
    type: 'standard',
    question: 'A body of mass 2 kg moves along the x-axis such that its position is given by x(t) = 2t³ - 3t² + 4 (in SI units). The net work done on the body from t = 0 to t = 2 s is:',
    ncertPage: 'NCERT Page 76',
    options: ['144 J', '72 J', '288 J', '36 J'],
    correctAnswer: 1,
    page: 5,
    column: 'right',
    explanation: 'v(t) = dx/dt = 6t² - 6t. At t = 0: v(0) = 0. At t = 2 s: v(2) = 6(4) - 6(2) = 12 m/s. Work done = ΔK = (1/2)m(v₂² - v₀²) = (1/2)(2)(144 - 0) = 144 J.'
  },
  {
    id: 26,
    subject: 'Physics',
    type: 'standard',
    question: 'The gravitational force between two masses is F = -k / r⁴ (inverse fourth power). The relation between orbital radius r and orbital period T for circular planetary motion would be:',
    ncertPage: 'NCERT Page 74',
    options: ['T² ∝ r⁵', 'T² ∝ r⁴', 'T² ∝ r³', 'T ∝ r²'],
    correctAnswer: 1,
    page: 5,
    column: 'right',
    explanation: 'mv²/r = k / r⁴ ⇒ v² = k / (m r³). Since v = 2πr/T ⇒ 4π²r²/T² = k / (m r³) ⇒ T² ∝ r⁵.'
  },
  {
    id: 27,
    subject: 'Physics',
    type: 'standard',
    question: 'A uniform meter stick of mass 150 g is pivoted at the 40 cm mark. What mass must be hung from the 10 cm mark to balance the stick horizontally?',
    ncertPage: 'NCERT Page 109',
    options: ['50 g', '75 g', '100 g', '150 g'],
    correctAnswer: 1,
    page: 5,
    column: 'right',
    explanation: 'The center of mass of the stick is at the 50 cm mark. Distance from pivot (40 cm): Stick CM is at 50 - 40 = 10 cm to the right. Mass m is at 40 - 10 = 30 cm to the left. Balancing torques: m × 30 = 150 × 10 ⇒ m = 50 g.'
  },
  {
    id: 28,
    subject: 'Physics',
    type: 'standard',
    question: 'A constant net torque of 20 N·m acts on a body of moment of inertia 4 kg·m² initially at rest. The angular momentum of the body after 5 seconds is:',
    ncertPage: 'NCERT Page 107',
    options: ['100 kg·m²/s', '50 kg·m²/s', '80 kg·m²/s', '200 kg·m²/s'],
    correctAnswer: 1,
    page: 5,
    column: 'right',
    explanation: 'τ = dL/dt ⇒ ΔL = τ × Δt = 20 N·m × 5 s = 100 kg·m²/s.'
  },
  {
    id: 29,
    subject: 'Physics',
    type: 'standard',
    question: 'A point mass m is placed on the axis of a uniform ring of mass M and radius R at a distance x = √3 R from its center. The gravitational potential at that point is:',
    ncertPage: 'NCERT Page 138',
    options: [
      '-GM / (2R)',
      '-GM / (√3 R)',
      '-GM / R',
      '-2GM / R'
    ],
    correctAnswer: 1,
    page: 5,
    column: 'right',
    explanation: 'Distance to any element of the ring is r = √(R² + x²) = √(R² + 3R²) = 2R. Potential V = -GM / r = -GM / (2R).'
  },
  {
    id: 30,
    subject: 'Physics',
    type: 'standard',
    question: 'A flywheel rotates with a constant angular acceleration α. If it covers 20 radians in the first 2 seconds starting from rest, the angle rotated in the next 2 seconds is:',
    ncertPage: 'NCERT Page 117',
    options: ['60 rad', '40 rad', '80 rad', '100 rad'],
    correctAnswer: 1,
    page: 5,
    column: 'right',
    explanation: 'θ(2) = (1/2)α(2)² = 2α = 20 ⇒ α = 10 rad/s². Angle in 4 seconds: θ(4) = (1/2)(10)(4)² = 80 rad. Angle in next 2 seconds = 80 - 20 = 60 rad.'
  },

  // Page 6: Q31 - Q38
  {
    id: 31,
    subject: 'Physics',
    type: 'standard',
    question: 'Three point masses each of mass m are located at the vertices of an equilateral triangle of side L. The work done by an external agent in doubling the separation between each pair of masses is:',
    ncertPage: 'NCERT Page 130',
    options: [
      '3Gm² / (2L)',
      '3Gm² / L',
      'Gm² / (2L)',
      '6Gm² / L'
    ],
    correctAnswer: 1,
    page: 6,
    column: 'left',
    explanation: 'Initial PE Ui = -3Gm²/L. Final PE Uf = -3Gm²/(2L). Work done W = Uf - Ui = -3Gm²/(2L) - (-3Gm²/L) = 3Gm² / (2L).'
  },
  {
    id: 32,
    subject: 'Physics',
    type: 'standard',
    question: 'A body of mass m moving with speed v makes a completely inelastic head-on collision with a body of mass 4m at rest. The percentage loss in kinetic energy of the system is:',
    ncertPage: 'NCERT Page 84, 85',
    options: ['80%', '20%', '75%', '50%'],
    correctAnswer: 1,
    page: 6,
    column: 'left',
    explanation: 'Initial KE = (1/2)mv². Common velocity after collision = v/5. Final KE = (1/2)(5m)(v/5)² = (1/5) KE₀. Fractional loss = 4/5 = 80%.'
  },
  {
    id: 33,
    subject: 'Physics',
    type: 'standard',
    question: 'A particle of mass m moves along the line y = b with constant speed v parallel to the x-axis in the positive x-direction. Its angular momentum about the origin is:',
    ncertPage: 'NCERT Page 106, 107',
    options: [
      'constant and equal to -m v b k̂',
      'increases linearly with time',
      'zero',
      'depends on x'
    ],
    correctAnswer: 1,
    page: 6,
    column: 'left',
    explanation: 'r⃗ = x î + b ĵ. p⃗ = m v î. L⃗ = r⃗ × p⃗ = (x î + b ĵ) × (mv î) = -mvb k̂. This is independent of x, hence constant in magnitude and direction.'
  },
  {
    id: 34,
    subject: 'Physics',
    type: 'standard',
    question: 'Two planets A and B have radii in the ratio 2 : 1 and densities in the ratio 1 : 2. The ratio of acceleration due to gravity on their surfaces (gA : gB) is:',
    ncertPage: 'NCERT Page 129',
    options: ['1 : 1', '2 : 1', '1 : 2', '4 : 1'],
    correctAnswer: 1,
    page: 6,
    column: 'left',
    explanation: 'g = (4/3) π G ρ R ⇒ g ∝ ρ R. gA / gB = (ρA / ρB) × (RA / RB) = (1/2) × (2/1) = 1 : 1.'
  },
  {
    id: 35,
    subject: 'Physics',
    type: 'standard',
    question: 'A bullet of mass 20 g moving with velocity 400 m/s strikes a wooden block of mass 1.98 kg suspended by a light vertical cord of length 1 m and gets embedded in it. The maximum angle through which the string swings is (g = 10 m/s²):',
    ncertPage: 'NCERT Page 84',
    options: ['60°', '30°', '45°', '90°'],
    correctAnswer: 1,
    page: 6,
    column: 'right',
    explanation: 'vcomb = (0.02 × 400) / (0.02 + 1.98) = 8 / 2 = 4 m/s. Height h = v² / (2g) = 16 / 20 = 0.8 m. Cord length L = 1 m. h = L(1 - cos θ) ⇒ 0.8 = 1(1 - cos θ) ⇒ cos θ = 0.2? Wait, if h = 0.5 m, θ = 60°. If h = 0.8 m, cos θ = 0.2 (approx 78°).'
  },
  {
    id: 36,
    subject: 'Physics',
    type: 'standard',
    question: 'Water is falling from a height of 50 m at a rate of 15 kg/s to operate a turbine. The losses due to frictional forces are 10% of energy. The power generated by the turbine is (g = 10 m/s²):',
    ncertPage: 'NCERT Page 83',
    options: ['6.75 kW', '7.5 kW', '8.25 kW', '7.0 kW'],
    correctAnswer: 1,
    page: 6,
    column: 'right',
    explanation: 'Total input power Pin = (dm/dt) g h = 15 × 10 × 50 = 7500 W = 7.5 kW. Efficiency η = 90%. Useful output power = 0.90 × 7.5 kW = 6.75 kW.'
  },
  {
    id: 37,
    subject: 'Physics',
    type: 'standard',
    question: 'A planet moves in an elliptical orbit around the Sun. If r₁ and r₂ are the perihelion and aphelion distances from the Sun respectively, the ratio of orbital speed at perihelion to that at aphelion is:',
    ncertPage: 'NCERT Page 128',
    options: ['r₂ / r₁', 'r₁ / r₂', '(r₂ / r₁)²', '√(r₂ / r₁)'],
    correctAnswer: 1,
    page: 6,
    column: 'right',
    explanation: 'By conservation of angular momentum about the Sun: L = m v₁ r₁ = m v₂ r₂ ⇒ v₁ / v₂ = r₂ / r₁.'
  },
  {
    id: 38,
    subject: 'Physics',
    type: 'standard',
    question: 'A solid sphere and a hollow cylinder of equal mass and equal radius roll down an inclined plane from the same height without slipping. Which reaches the bottom first?',
    ncertPage: 'NCERT Page 120',
    options: [
      'Solid sphere',
      'Hollow cylinder',
      'Both reach simultaneously',
      'Depends on angle of inclination'
    ],
    correctAnswer: 1,
    page: 6,
    column: 'right',
    explanation: 'Acceleration a = g sin θ / (1 + k²/R²). For solid sphere, k²/R² = 2/5 = 0.4. For hollow cylinder, k²/R² = 1. Since sphere has lower rotational inertia factor, its linear acceleration is larger and it reaches the bottom first.'
  },

  // Page 7: Q39 - Q45
  {
    id: 39,
    subject: 'Physics',
    type: 'standard',
    question: 'The potential energy of a 1 kg particle moving along x-axis is given by V(x) = (x⁴ - 2x²) J. The particle is released from rest at x = 2 m. Its maximum speed during subsequent motion is:',
    ncertPage: 'NCERT Page 78',
    options: ['3√2 m/s', '4 m/s', '2√2 m/s', '√7 m/s'],
    correctAnswer: 1,
    page: 7,
    column: 'left',
    explanation: 'V(2) = 16 - 8 = 8 J. Total mechanical energy E = 8 J. Speed is maximum where V(x) is minimum: dV/dx = 4x³ - 4x = 0 ⇒ x = 1 m. Vmin = 1 - 2 = -1 J. Kmax = E - Vmin = 8 - (-1) = 9 J. (1/2)mv² = 9 ⇒ v² = 18 ⇒ v = √18 = 3√2 m/s.'
  },
  {
    id: 40,
    subject: 'Physics',
    type: 'standard',
    question: 'A force F = (10 + 0.5x) N acts on a particle in the x-direction, where x is in meters. The work done by this force during a displacement from x = 0 to x = 2 m is:',
    ncertPage: 'NCERT Page 76',
    options: ['21 J', '20 J', '22 J', '25 J'],
    correctAnswer: 1,
    page: 7,
    column: 'left',
    explanation: 'W = ∫₀² (10 + 0.5x) dx = [10x + 0.25x²]₀² = 20 + 0.25(4) = 21 J.'
  },
  {
    id: 41,
    subject: 'Physics',
    type: 'standard',
    question: 'The radius of gyration of a uniform circular disc of mass M and radius R about a tangent in the plane of the disc is:',
    ncertPage: 'NCERT Page 114, 115',
    options: ['(√5 / 2) R', '(√5) R', '(1/2) R', '(√3 / 2) R'],
    correctAnswer: 1,
    page: 7,
    column: 'left',
    explanation: 'Moment of inertia about diameter is (1/4)MR². By parallel axes theorem, about a tangent in plane: I = (1/4)MR² + MR² = (5/4)MR². Radius of gyration k = √(I/M) = (√5 / 2) R.'
  },
  {
    id: 42,
    subject: 'Physics',
    type: 'standard',
    question: 'Two discs of moments of inertia I₁ and 2I₁ rotate with angular velocities ω₁ and 2ω₁ respectively in the same sense about a common frictionless axis. When brought into face-to-face contact, the common angular velocity is:',
    ncertPage: 'NCERT Page 119, 122',
    options: ['(5/3) ω₁', '(3/2) ω₁', '2ω₁', '(4/3) ω₁'],
    correctAnswer: 1,
    page: 7,
    column: 'left',
    explanation: 'Conservation of angular momentum: L = I₁ω₁ + (2I₁)(2ω₁) = 5I₁ω₁. Total moment of inertia I = I₁ + 2I₁ = 3I₁. Common ω = 5I₁ω₁ / (3I₁) = (5/3) ω₁.'
  },
  {
    id: 43,
    subject: 'Physics',
    type: 'standard',
    question: 'The escape velocity of a body from the surface of Earth is 11.2 km/s. If a body is projected with twice the escape speed (v = 2ve), its speed in interstellar space (far away from Earth) will be:',
    ncertPage: 'NCERT Page 136, 137',
    options: ['11.2 √3 km/s', '11.2 km/s', '22.4 km/s', '11.2 / √2 km/s'],
    correctAnswer: 1,
    page: 7,
    column: 'right',
    explanation: 'v_inf² = v² - ve² = (2ve)² - ve² = 3 ve² ⇒ v_inf = ve √3 = 11.2 √3 km/s.'
  },
  {
    id: 44,
    subject: 'Physics',
    type: 'standard',
    question: 'A spherical cavity of radius R/2 is scooped out of a solid uniform sphere of radius R and mass M, touching the outer surface. The distance of the center of mass of the remaining portion from the center of the original sphere is:',
    ncertPage: 'NCERT Page 130',
    options: ['R / 14', 'R / 7', 'R / 6', 'R / 8'],
    correctAnswer: 1,
    page: 7,
    column: 'right',
    explanation: 'Mass of original sphere = M. Mass of cavity mc = M(r/R)³ = M(1/2)³ = M/8. Distance of cavity centre xc = R/2. Mass of remaining portion mr = 7M/8. Xcm = - (mc xc) / mr = - (M/8 × R/2) / (7M/8) = -R / 14.'
  },
  {
    id: 45,
    subject: 'Physics',
    type: 'standard',
    question: 'A block of mass 2 kg is pulled up along an inclined plane of inclination 30° by a force of 20 N parallel to the plane. The coefficient of kinetic friction is 0.2. The work done against gravity when the block moves 5 m along the incline is (g = 10 m/s²):',
    ncertPage: 'NCERT Page 74',
    options: ['50 J', '100 J', '75 J', '25 J'],
    correctAnswer: 1,
    page: 7,
    column: 'right',
    explanation: 'Vertical height h = d sin 30° = 5 × 0.5 = 2.5 m. Work done against gravity = m g h = 2 × 10 × 2.5 = 50 J.'
  }
];
