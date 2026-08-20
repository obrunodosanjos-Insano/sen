import {
  CategoryId,
  CategoryInfo,
  ComparisonMetric,
  MatchSimulatorData,
  RobotPart,
  QuizQuestion,
  GlossaryItem,
  FaqItem,
  TeamStep,
} from '../types';

export const FIRST_CATEGORIES: Record<'fll' | 'ftc' | 'frc', CategoryInfo> = {
  fll: {
    id: 'fll',
    acronym: 'FLL Challenge',
    name: 'FIRST LEGO League Challenge',
    badge: 'Iniciação & Pesquisa (9 a 16 anos)',
    ageRange: '9 a 16 anos (Brasil: 9 a 15 anos)',
    teamSize: '2 a 10 alunos + 2 mentores adultos',
    buildTime: '8 a 16 semanas (temporada anual)',
    matchDuration: '2 minutos e 30 segundos no tapete oficial',
    robotDimensions: 'Tamanho livre (deve caber na Base inicial de 30x40 cm)',
    robotWeight: 'Aprox. 1 a 2 kg',
    techStack: ['LEGO® SPIKE Prime', 'LEGO MINDSTORMS EV3', 'Scratch / Python'],
    programmingLanguages: ['Blocos visuais (base Scratch)', 'Python'],
    hardwareKit: 'LEGO® Education SPIKE Prime Set + Kit de Expansão Technic',
    arenaSize: 'Mesa de madeira com tapete oficial (2,36 m x 1,14 m)',
    allianceFormat: 'Individual na mesa (duas mesas lado a lado compartilham missões cooperativas)',
    shortDesc:
      'A porta de entrada na robótica competitiva. Crianças e jovens resolvem problemas do mundo real através de um Projeto de Inovação e programam um robô LEGO autônomo para cumprir missões no tapete.',
    fullDesc:
      'O FIRST LEGO League Challenge introduz a ciência, tecnologia, engenharia e matemática (STEM) para crianças e jovens através de um aprendizado prático, divertido e engajador. Os participantes desenvolvem habilidades do mundo real: projetam, constroem e programam um robô LEGO 100% autônomo e realizam uma pesquisa científica profunda sobre o tema anual, apresentando soluções inovadoras para jurados especialistas.',
    keyPillars: [
      {
        title: 'Desafio do Robô (Robot Game)',
        description: 'Criar e programar um robô autônomo que pontua em missões temáticas em 2m30s.',
      },
      {
        title: 'Projeto de Inovação',
        description: 'Identificar um problema real na comunidade, propor uma solução viável e compartilhá-la.',
      },
      {
        title: 'Design do Robô',
        description: 'Explicar a estratégia mecânica, o código, a repetibilidade e a engenharia aos jurados.',
      },
      {
        title: 'Core Values (Valores Fundamentais)',
        description: 'Demonstrar respeito, inclusão, trabalho em equipe e entusiasmo em cada interação.',
      },
    ],
    autonomousPhase: '100% Autônomo durante os 2 minutos e 30 segundos (sem controle manual)',
    teleopPhase: 'Não há teleoperação manual; os alunos apenas tocam o robô na área segura da Base para trocar anexos mecânicos',
    endgamePhase: 'Últimas missões de retorno ou fixação em áreas especiais da arena',
    prestigiousAward: 'Champion\'s Award (Prêmio do Campeão - excelência em todas as 4 áreas avaliadas)',
    estimatedBudget: 'R$ 6.000 a R$ 15.000 (Kit SPIKE + Inscrição + Mesa)',
    idealFor: 'Escolas de Ensino Fundamental I e II, clubes de robótica iniciantes e oficinas makers.',
    colorTheme: {
      primary: '#EF4444',
      secondary: '#DC2626',
      light: '#FEF2F2',
      border: '#FCA5A5',
      text: '#991B1B',
      badgeBg: 'bg-red-500/10 text-red-600 border-red-200',
    },
    sampleRobotSpecs: {
      drivetrain: 'Tração diferencial de 2 rodas com rodízio traseiro (skid/caster) construído em LEGO Technic',
      controllers: 'Hub Inteligente LEGO® SPIKE Prime (Processador ARM M4 100MHz, Giroscópio 6 eixos integrado)',
      motors: '2 Motores médios/grandes angulares LEGO com encoders de rotação embutidos de 1 grau',
      sensors: '2 Sensores de Cor/Luz para seguidor de linha, 1 Sensor de Distância Ultrassônico, Giroscópio interno',
      power: 'Bateria recarregável de íons de lítio 2100 mAh (LEGO)',
    },
  },
  ftc: {
    id: 'ftc',
    acronym: 'FTC',
    name: 'FIRST Tech Challenge',
    badge: 'Engenharia Intermediária (12 a 18 anos)',
    ageRange: '12 a 18 anos (Fundamental II e Ensino Médio)',
    teamSize: 'Até 15 alunos + 2 mentores adultos',
    buildTime: '10 a 20 semanas com temporada estendida',
    matchDuration: '2 minutos e 30 segundos (30s Autônomo + 2m Teleoperado com Endgame)',
    robotDimensions: 'Tamanho máximo inicial de 18 x 18 x 18 polegadas (~45,7 x 45,7 x 45,7 cm)',
    robotWeight: 'Aprox. 10 a 20 kg',
    techStack: ['Android OS', 'REV Control Hub', 'Java', 'Blocks', 'OnBot Java', 'AprilTags / Visão Computacional'],
    programmingLanguages: ['Java (Android Studio ou OnBot Java)', 'Block-based programming'],
    hardwareKit: 'REV Robotics / goBILDA / TETRIX / Peças Usinadas em CNC e Impressão 3D',
    arenaSize: 'Arena com piso emborrachado EVA de 3,66 m x 3,66 m (12x12 pés) cercada por paredes de policarbonato',
    allianceFormat: 'Alianças 2 vs 2 (Duas equipes vermelhas contra duas equipes azuis por partida)',
    shortDesc:
      'Robôs de metal e acrílico com sistemas embarcados Android, peças customizadas em CAD/3D e controle via gamepads. Excelente equilíbrio entre complexidade industrial e acessibilidade.',
    fullDesc:
      'O FIRST Tech Challenge desafia estudantes a projetar, construir, programar e operar robôs complexos em um formato de aliança 2x2. As equipes utilizam sistemas CAD avançados, usinagem, corte a laser e impressão 3D, programam em Java profissional com algoritmos de visão computacional (AprilTags) e desenvolvem um Caderno de Engenharia (Engineering Portfolio) rigoroso.',
    keyPillars: [
      {
        title: 'Engenharia de Precisão & CAD',
        description: 'Projetar sistemas de elevação linear, lançadores e intakes usando perfilados de alumínio e manufatura aditiva.',
      },
      {
        title: 'Programação Java & Visão',
        description: 'Implementar controle de odometria, visão computacional e algoritmos PID para autonomia precisa.',
      },
      {
        title: 'Caderno de Engenharia (Portfolio)',
        description: 'Documentar cada iteração matemática, cálculos de torque, testes e decisões de design.',
      },
      {
        title: 'Comunidade & Outreach',
        description: 'Divulgar a ciência e tecnologia na comunidade local, ministrando oficinas e buscando parcerias.',
      },
    ],
    autonomousPhase: '30 segundos iniciais autônomos com visão computacional, navegação por odometria e pontuação pré-programada',
    teleopPhase: '2 minutos de pilotagem com dois pilotos usando controles USB/Bluetooth (Gamepads)',
    endgamePhase: 'Últimos 30 segundos do teleoperado com tarefas de alto valor (como pendurar na barra, suspensão e zonas especiais)',
    prestigiousAward: 'Inspire Award (Prêmio Inspiração - a equipe modelo em engenharia, espírito de equipe e impacto comunitário)',
    estimatedBudget: 'R$ 20.000 a R$ 50.000 (Kit de peças, eletrônica REV, arena e inscrições)',
    idealFor: 'Ensino Médio, Escolas Técnicas, Institutos Federais e equipes que buscam transição para engenharia avançada.',
    colorTheme: {
      primary: '#F59E0B',
      secondary: '#D97706',
      light: '#FFFBEB',
      border: '#FDE68A',
      text: '#92400E',
      badgeBg: 'bg-amber-500/10 text-amber-600 border-amber-200',
    },
    sampleRobotSpecs: {
      drivetrain: 'Chassi Mecanum (movimentação holonômica omnidirecional em 360°) com 4 motores HD Hex REV',
      controllers: 'REV Control Hub (processador Quad-Core Android integrado com portas de motores e servos) + Driver Hub',
      motors: 'Até 8 motores DC 12V com encoders de alta resolução + até 12 servomotores inteligentes programáveis',
      sensors: 'Webcam USB HD com detecção de AprilTags e TensorFlow, Sensores de Cor/Distância I2C, IMU 9 eixos',
      power: 'Bateria NiMH 12V 3000mAh com fusível de segurança de 20A',
    },
  },
  frc: {
    id: 'frc',
    acronym: 'FRC',
    name: 'FIRST Robotics Competition',
    badge: 'Nível Industrial Máximo (14 a 18 anos)',
    ageRange: '14 a 18 anos (Ensino Médio e Técnico)',
    teamSize: '10 a 50+ alunos com mentoria de engenheiros profissionais',
    buildTime: '6 a 8 semanas intensas de construção (Build Season a partir do Kickoff de Janeiro)',
    matchDuration: '2 minutos e 30 segundos (15s Autônomo + 2m15s Teleoperado)',
    robotDimensions: 'Perímetro do chassi de até 120 polegadas (~304 cm) + Bumpers acolchoados oficiais',
    robotWeight: 'Até 125 libras (~56,7 kg) excluindo bateria e bumpers',
    techStack: ['NI RoboRIO 2.0', 'CAN Bus', 'Pneumática Industrial', 'Java / C++', 'WPILib', 'Swerve Drive', 'Limelight Vision AI'],
    programmingLanguages: ['Java', 'C++', 'Python', 'LabVIEW'],
    hardwareKit: 'Componentes industriais customizados: Motores Brushless Kraken X60/Falcon 500/NEO, Alumínio aeronáutico, Fibra de Carbono',
    arenaSize: 'Quadra de carpete industrial de 8,23 m x 16,46 m (27 x 54 pés) com estações de aliança blindadas',
    allianceFormat: 'Alianças 3 vs 3 (Três robôs industriais em cooperação dinâmica contra outra aliança de 3 robôs)',
    shortDesc:
      'A "Fórmula 1" da robótica escolar mundial. Robôs pesados de até 56kg criados em escala industrial que operam em alta velocidade com sistemas pneumáticos, módulos Swerve e visão por inteligência artificial.',
    fullDesc:
      'Apelidada pelo criador Dean Kamen como "The Varsity Sport for the Mind" (O Esporte Universitário para a Mente), o FRC combina o rigor da engenharia aeroespacial e automobilística com a emoção de uma grande liga esportiva. Em apenas 6 a 8 semanas, equipes multidisciplinares projetam do zero máquinas industriais de 56 kg, organizando-se como verdadeiras startups corporativas com divisão em Engenharia, Negócios, Marketing, Elétrica, Programação e Responsabilidade Social.',
    keyPillars: [
      {
        title: 'Engenharia Industrial & Fabricação CNC',
        description: 'Usinagem em fresadoras CNC, corte por jato d’água, solda, pneumática e redutores planetários.',
      },
      {
        title: 'Arquitetura de Controle & WPILib',
        description: 'Swerve Drive omnidirecional com odometria de alta frequência, filtros de Kalman e visão Limelight/PhotonVision.',
      },
      {
        title: 'Business, Patrocínio & Branding',
        description: 'Captação de centenas de milhares de reais com patrocinadores, marketing, design gráfico e plano de negócios.',
      },
      {
        title: 'Impacto Social & Sustentabilidade',
        description: 'Ações contínuas de divulgação STEM em escolas públicas, ONGs e transformação da sociedade.',
      },
    ],
    autonomousPhase: '15 segundos iniciais 100% autônomos guiados por IA de visão, odometria e trajetórias calculadas (Choreo/PathPlanner)',
    teleopPhase: '2 minutos e 15 segundos pilotados por equipe de campo (Driver + Co-Driver + Human Player + Drive Coach)',
    endgamePhase: 'Últimos 30 segundos disputados em estruturas de suspensão dinâmica, trapézios e plataformas móveis',
    prestigiousAward: 'FIRST Impact Award (O mais alto prêmio da FIRST, garantindo vaga vitalícia no Hall da Fama)',
    estimatedBudget: 'R$ 80.000 a R$ 250.000+ por temporada (Equipamentos industriais, viagens e taxas)',
    idealFor: 'Grandes escolas de Ensino Médio, SESI/SENAI, parcerias com indústrias e universidades tecnológicas.',
    colorTheme: {
      primary: '#2563EB',
      secondary: '#1D4ED8',
      light: '#EFF6FF',
      border: '#BFDBFE',
      text: '#1E40AF',
      badgeBg: 'bg-blue-500/10 text-blue-600 border-blue-200',
    },
    sampleRobotSpecs: {
      drivetrain: 'Swerve Drive MK4i/SDS com 4 módulos independentes (rotação 360° + propulsão simultânea)',
      controllers: 'National Instruments RoboRIO 2.0 (Dual-Core ARM Cortex-A9 + Xilinx FPGA) com CAN FD Bus',
      motors: 'Até 16+ motores Brushless de alta potência (Kraken X60 / Falcon 500 gerando mais de 1000W cada)',
      sensors: 'Câmera inteligente Limelight 3G com acelerador de IA neural, Giroscópio Pigeon 2.0 de 9 eixos, Encoders CANCoder',
      power: 'Bateria de Chumbo-Ácido Selada 12V 18Ah com disjuntor geral de 120A e Power Distribution Hub REV',
    },
  },
};

export const COMPARISON_METRICS: ComparisonMetric[] = [
  {
    feature: 'Faixa Etária Recomendada',
    category: 'Geral',
    fll: '9 a 16 anos (Fund. I e II)',
    ftc: '12 a 18 anos (Fund. II e Médio)',
    frc: '14 a 18 anos (Médio e Técnico)',
    highlight: true,
  },
  {
    feature: 'Tamanho Médio da Equipe',
    category: 'Geral',
    fll: '2 a 10 alunos',
    ftc: '4 a 15 alunos',
    frc: '15 a 50+ alunos (formato empresa)',
  },
  {
    feature: 'Tempo de Construção / Temporada',
    category: 'Geral',
    fll: '8 a 16 semanas',
    ftc: '10 a 20 semanas',
    frc: '6 a 8 semanas intensivas (Build Season)',
  },
  {
    feature: 'Peso Máximo do Robô',
    category: 'Hardware',
    fll: '~1 a 2 kg',
    ftc: '~10 a 20 kg',
    frc: 'Até 56,7 kg (125 lbs) + bateria/bumpers',
    highlight: true,
  },
  {
    feature: 'Dimensão Máxima do Robô',
    category: 'Hardware',
    fll: 'Livre (deve caber na Base inicial de 30x40 cm)',
    ftc: 'Cubo de 18 x 18 x 18 polegadas (~45 cm)',
    frc: 'Perímetro de até 120 pol (~3,04 m) + Bumpers',
  },
  {
    feature: 'Materiais de Construção',
    category: 'Hardware',
    fll: 'Peças LEGO® Technic e vigas plásticas',
    ftc: 'Alumínio, chapas de policarbonato, 3D e peças usinadas',
    frc: 'Alumínio estrutural, aço, fibra de carbono, tubos soldados',
  },
  {
    feature: 'Cérebro / Controlador Principal',
    category: 'Hardware',
    fll: 'LEGO® SPIKE Prime Hub',
    ftc: 'REV Control Hub (Android OS integrado)',
    frc: 'NI RoboRIO 2.0 (FPGA industrial)',
    highlight: true,
  },
  {
    feature: 'Linguagens de Programação',
    category: 'Software',
    fll: 'Scratch (blocos) e MicroPython',
    ftc: 'Java puro (Android Studio) ou OnBot Java',
    frc: 'Java, C++, Python e WPILib framework',
    highlight: true,
  },
  {
    feature: 'Sensores e Visão por IA',
    category: 'Software',
    fll: 'Sensor de Cor e Ultrassônico LEGO',
    ftc: 'Câmera USB, AprilTags e TensorFlow',
    frc: 'Limelight 3G AI, PhotonVision, AprilTags 3D e IMU Pigeon',
  },
  {
    feature: 'Formato da Partida na Arena',
    category: 'Competição',
    fll: 'Mesa 2,3m x 1,1m (2m30s autônomo)',
    ftc: 'Arena 3,6m x 3,6m (Alianças 2v2)',
    frc: 'Arena 16,4m x 8,2m (Alianças 3v3)',
    highlight: true,
  },
  {
    feature: 'Pesquisa e Projeto Social',
    category: 'Competição',
    fll: 'Projeto de Inovação anual obrigatório',
    ftc: 'Caderno de Engenharia + Outreach comunitário',
    frc: 'Sub-área de Negócios, Patrocínio e Impact Award',
  },
  {
    feature: 'Prêmio Principal de Maior Prestígio',
    category: 'Competição',
    fll: "Champion's Award",
    ftc: 'Inspire Award',
    frc: 'FIRST Impact Award (Hall da Fama)',
    highlight: true,
  },
  {
    feature: 'Investimento Inicial Estimado',
    category: 'Custos',
    fll: 'R$ 6.000 - R$ 15.000',
    ftc: 'R$ 20.000 - R$ 50.000',
    frc: 'R$ 80.000 - R$ 250.000+',
  },
];

export const MATCH_SIMULATORS: Record<CategoryId, MatchSimulatorData> = {
  fll: {
    categoryId: 'fll',
    totalDuration: 150, // 2m30s
    phases: [
      {
        id: 'setup',
        name: 'Inspeção & Alinhamento na Base',
        durationSeconds: 15,
        description: 'Os estudantes posicionam o robô e os anexos modulares dentro do quadrante seguro da Base inicial.',
        pointsHighlight: 'Conformidade com os limites de altura e volume da Base',
        driverRole: 'Dois estudantes técnicos na mesa preparam o primeiro código',
        robotBehavior: 'Estático, aguardando sinal sonoro de contagem regressiva 3-2-1 LEGO!',
      },
      {
        id: 'run1',
        name: 'Saída 1: Missões de Alta Pontuação',
        durationSeconds: 45,
        description: 'O robô navega de forma 100% autônoma até o centro da mesa, acionando alavancas e mecanismos temáticos.',
        pointsHighlight: 'Pontuação de ativação mecânica e entrega de modelos',
        driverRole: 'Acompanham sem tocar no robô fora da Base',
        robotBehavior: 'Seguidor de linha PID com sensores ópticos e correção de trajetória por giroscópio',
      },
      {
        id: 'swap',
        name: 'Retorno à Base & Troca de Anexos',
        durationSeconds: 30,
        description: 'O robô retorna à área segura da base. A equipe troca rapidamente o braço mecânico ou garra modular.',
        pointsHighlight: 'Eficiência de pit stop mecânico em menos de 5 segundos',
        driverRole: 'Engatam o acessório modular e selecionam o Programa 2 no Hub',
        robotBehavior: 'Motores desarmados durante o manuseio na Base',
      },
      {
        id: 'run2',
        name: 'Saída 2: Missões Cooperativas',
        durationSeconds: 40,
        description: 'O robô vai até a extremidade que faz fronteira com a mesa adversária para ativar missões compartilhadas.',
        pointsHighlight: 'Pontos extras caso ambas as equipes cumpram a missão mútua',
        driverRole: 'Comunicação e contagem de tempo restante',
        robotBehavior: 'Alinhamento por contato físico na borda e leitura de cor',
      },
      {
        id: 'endgame',
        name: 'Endgame: Estacionamento Final',
        durationSeconds: 20,
        description: 'Última missão para estacionar o robô completamente dentro de uma área demarcada do tapete.',
        pointsHighlight: 'Bônus de posição final e precisão',
        driverRole: 'Torcida e conferência final com o árbitro oficial',
        robotBehavior: 'Bloqueio de freio motorizado e desligamento seguro',
      },
    ],
  },
  ftc: {
    categoryId: 'ftc',
    totalDuration: 150, // 2m30s
    phases: [
      {
        id: 'auto',
        name: 'Período Autônomo (30 segundos)',
        durationSeconds: 30,
        description: 'Robôs operam sem intervenção humana. Câmeras leem AprilTags e reconhecem peças para pontuação máxima.',
        pointsHighlight: 'Até 2x a pontuação regular por elementos colocados no autônomo',
        driverRole: 'Mãos levantadas longe dos controles (Gamepads desativados)',
        robotBehavior: 'Odometria com rodas mortas e visão computacional OpenCV/TensorFlow',
      },
      {
        id: 'driver_early',
        name: 'Início do Período Teleoperado',
        durationSeconds: 45,
        description: 'Sinal sonoro libera os pilotos. Robôs coletam elementos de jogo e depositam em cestas ou suportes altos.',
        pointsHighlight: 'Ciclos rápidos de coleta (Intake) e elevação linear (Slides)',
        driverRole: 'Driver 1 controla movimentação do chassi; Driver 2 opera garras e braços',
        robotBehavior: 'Movimentação omnidirecional em chassi Mecanum a até 2 metros/segundo',
      },
      {
        id: 'driver_mid',
        name: 'Estratégia de Aliança & Defesa Leve',
        durationSeconds: 45,
        description: 'As duas equipes da aliança combinam rotas na arena para não colidirem e otimizar o fluxo de pontuação.',
        pointsHighlight: 'Criação de linhas contínuas e padrões de pontuação geométrica',
        driverRole: 'Comunicação constante pelo fone/microfone interno da equipe',
        robotBehavior: 'Limitação de aceleração para evitar tombamento do mastro elevado',
      },
      {
        id: 'endgame',
        name: 'Endgame: Suspensão na Barra & Drones',
        durationSeconds: 30,
        description: 'Os últimos 30 segundos tocam um alarme especial. Robôs se preparam para escalar ou pendurar nas barras.',
        pointsHighlight: 'Suspensão total do robô no ar sem tocar o chão (Pontuação altíssima)',
        driverRole: 'Acionamento de travas de segurança e motores de alto torque',
        robotBehavior: 'Guinchos motorizados com catraca mecânica mantêm o robô suspenso após o término',
      },
    ],
  },
  frc: {
    categoryId: 'frc',
    totalDuration: 150, // 2m30s (15s auto + 2m15s teleop)
    phases: [
      {
        id: 'auto',
        name: 'Período Autônomo (15 segundos)',
        durationSeconds: 15,
        description: 'Os 6 robôs industriais disparam ao mesmo tempo. Máquinas usam IA Limelight para disparar projéteis a longa distância.',
        pointsHighlight: 'Auto Notes / Reef Placements valendo pontuação dobrada e Ranking Point bônus',
        driverRole: 'Atrás da linha de segurança com as mãos para o alto',
        robotBehavior: 'Trajetórias curvas geradas por PathPlanner com precisão milimétrica via Swerve Drive',
      },
      {
        id: 'teleop_scoring',
        name: 'Teleoperado: Alta Velocidade & Ciclos',
        durationSeconds: 60,
        description: 'Robôs de 56 kg voam pela arena a mais de 5 metros por segundo (20 km/h) coletando e arremessando peças.',
        pointsHighlight: 'Amplificação de arena e ativação de multiplicadores de pontuação',
        driverRole: 'Piloto no volante/joysticks e Operador nos gatilhos com visão das câmeras FPV',
        robotBehavior: 'Controle de mira automática com locking de alvo por câmera inteligente a 90 FPS',
      },
      {
        id: 'teleop_defense',
        name: 'Dinâmica de Alianças 3x3 & Estratégia',
        durationSeconds: 45,
        description: 'Dois robôs focam em pontuação enquanto um terceiro pode exercer bloqueio posicional tático permitido pelas regras.',
        pointsHighlight: 'Maximização de Co-op e conquista de Ranking Points de sustentabilidade',
        driverRole: 'Drive Coach toma decisões táticas em tempo real olhando o placar ao vivo',
        robotBehavior: 'Absorção de impacto de colisão nos bumpers de lona e espuma de alta densidade',
      },
      {
        id: 'endgame_climb',
        name: 'Endgame: Escalada & Trapézio Coletivo',
        durationSeconds: 30,
        description: 'Trombetas anunciam o fim. Os 3 robôs correm para a estrutura central para escalar correntes ou plataformas.',
        pointsHighlight: 'Harmonia da Aliança (múltiplos robôs suspensos na mesma estrutura valendo vitória)',
        driverRole: 'Alinhamento crítico e acionamento de pistões pneumáticos e ganchos',
        robotBehavior: 'Motores Kraken de 1000W erguem 56 kg do chão em menos de 1 segundo',
      },
    ],
  },
};

export const ROBOT_PARTS: RobotPart[] = [
  {
    id: 'drivetrain',
    name: 'Chassi & Sistema de Tração (Drivetrain)',
    system: 'Mecânica e Locomoção',
    description: 'A base do robô responsável pela mobilidade, velocidade, tração no carpete e estabilidade contra tombamentos.',
    fllDetail: 'Montado com vigas LEGO Technic, 2 motores com rodas de borracha e apoio deslizante tipo caster.',
    ftcDetail: 'Chassi Mecanum (4 rodas com roletes a 45°) permitindo deslizar lateralmente e girar no próprio eixo.',
    frcDetail: 'Módulos Swerve Drive MK4i independentes com motores brushless de 1000W em cada roda, atingindo 20+ km/h.',
    keyComponents: ['Rodas & Pneus', 'Redutores Planetários', 'Perfis de Alumínio', 'Correias Dentadas'],
  },
  {
    id: 'brain',
    name: 'Controlador Central (O Cérebro)',
    system: 'Eletrônica e Processamento',
    description: 'O computador de bordo que executa o código compilado, comunica-se com os rádios de arena e envia sinais PWM/CAN.',
    fllDetail: 'LEGO SPIKE Hub: Microprocessador ARM com Bluetooth, matriz de LED e giroscópio integrado.',
    ftcDetail: 'REV Control Hub: Processador Quad-Core com sistema operacional Android, Wi-Fi 5GHz e portas I2C/Servo.',
    frcDetail: 'NI RoboRIO 2.0: Processador Dual-Core ARM Cortex-A9 com matriz de portas lógicas programáveis (FPGA).',
    keyComponents: ['Processador', 'Portas CAN Bus', 'Receptor de Rádio', 'Portas Digitais & Analógicas'],
  },
  {
    id: 'manipulator',
    name: 'Mecanismo / Manipulador (Intake & Shooter)',
    system: 'Engenharia de Aplicação',
    description: 'Os braços, garras, elevadores telescópicos e lançadores projetados sob medida para pegar os objetos da temporada.',
    fllDetail: 'Garras modulares com engate rápido de pino LEGO acionadas por motor angular.',
    ftcDetail: 'Guias lineares telescópicas com cordame de fibra e rodas em silicone compliant.',
    frcDetail: 'Rolos motorizados com silicone de alta aderência, pistões pneumáticos e volantes de inércia a 6.000 RPM.',
    keyComponents: ['Elevadores Lineares', 'Garras Articuladas', 'Volantes de Arremesso', 'Servomotores'],
  },
  {
    id: 'vision',
    name: 'Sensores & Visão Computacional',
    system: 'Autonomia & Percepção',
    description: 'Os olhos e ouvidos do robô que mapeiam a arena, calculam a distância exata até o alvo e corrigem a trajetória.',
    fllDetail: 'Sensores de refletância de luz para detectar linhas pretas e sensor ultrassônico.',
    ftcDetail: 'Webcams HD USB reconhecendo marcadores AprilTag para reposicionamento 3D em tempo real.',
    frcDetail: 'Câmeras Limelight 3G com processamento neural dedicado e Giroscópios Pigeon com filtro de Kalman.',
    keyComponents: ['AprilTags 3D', 'Sensores de Linha', 'IMU Giroscópio 9 Eixos', 'Encoders Ópticos'],
  },
  {
    id: 'power',
    name: 'Sistema de Energia & Segurança',
    system: 'Elétrica e Potência',
    description: 'Fornece corrente estável para motores de alto consumo, com fusíveis de proteção e chave de corte de emergência.',
    fllDetail: 'Bateria de Lítio 2100 mAh com circuito interno de recarga USB.',
    ftcDetail: 'Bateria NiMH 12V 3000mAh conectada através de chave liga/desliga com fusível 20A.',
    frcDetail: 'Bateria AGM 12V 18Ah com disjuntor principal de 120A e Power Distribution Hub com medição de corrente.',
    keyComponents: ['Disjuntor Geral', 'Módulo de Distribuição', 'Conectores Anderson Powerpole', 'Baterias Seladas'],
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Qual é a faixa etária principal dos estudantes participantes?',
    context: 'A idade define a complexidade pedagógica e as regras de elegibilidade da FIRST.',
    options: [
      {
        label: '9 a 14 anos (Ensino Fundamental I e II)',
        description: 'Ideal para introdução à lógica, metodologia científica e montagem rápida.',
        categoryScore: { fll: 3, ftc: 1, frc: 0 },
      },
      {
        label: '13 a 17 anos (Ensino Fundamental II e Médio)',
        description: 'Querem aprender CAD, corte a laser, Java e eletrônica aplicada.',
        categoryScore: { fll: 0, ftc: 3, frc: 1 },
      },
      {
        label: '14 a 18 anos (Ensino Médio e Técnico)',
        description: 'Buscam experiência pré-universitária em nível industrial com usinagem pesada e gestão empresarial.',
        categoryScore: { fll: 0, ftc: 1, frc: 3 },
      },
    ],
  },
  {
    id: 2,
    question: 'Qual é o espaço físico e infraestrutura de oficina disponível?',
    context: 'Cada categoria exige requisitos de espaço para montagem da arena e ferramentas de oficina.',
    options: [
      {
        label: 'Sala de aula comum ou mesa de reunião padrão',
        description: 'Apenas mesas escolares comuns, armários para peças plásticas e computadores simples.',
        categoryScore: { fll: 3, ftc: 0, frc: 0 },
      },
      {
        label: 'Laboratório Maker ou espaço para arena de 4x4 metros',
        description: 'Espaço para tatames de EVA, impressora 3D básica e ferramentas manuais de bancada.',
        categoryScore: { fll: 1, ftc: 3, frc: 1 },
      },
      {
        label: 'Oficina técnica completa com máquinas (CNC, furadeiras, solda) ou quadra poliesportiva',
        description: 'Infraestrutura para robôs de 56 kg e grande área para testes em alta velocidade.',
        categoryScore: { fll: 0, ftc: 1, frc: 3 },
      },
    ],
  },
  {
    id: 3,
    question: 'Qual é o nível de orçamento anual e capacidade de captação de patrocínios?',
    context: 'Custos englobam kits de robótica, taxas de inscrição oficiais, viagens e ferramentas.',
    options: [
      {
        label: 'Orçamento enxuto escolar (R$ 5 mil a R$ 15 mil)',
        description: 'Foco no investimento inicial em kits reutilizáveis por vários anos letivos.',
        categoryScore: { fll: 3, ftc: 1, frc: 0 },
      },
      {
        label: 'Orçamento médio com apoio de parceiros (R$ 20 mil a R$ 50 mil)',
        description: 'Recursos para eletrônica profissional, chapas metálicas, viagens e arena local.',
        categoryScore: { fll: 1, ftc: 3, frc: 1 },
      },
      {
        label: 'Orçamento robusto com patrocínios corporativos industriais (R$ 80 mil a R$ 200 mil+)',
        description: 'Captação ativa com grandes indústrias, leis de incentivo e suporte de engenheiros mentores.',
        categoryScore: { fll: 0, ftc: 1, frc: 3 },
      },
    ],
  },
  {
    id: 4,
    question: 'Quantos alunos pretendem se envolver ativamente na equipe?',
    context: 'A divisão de funções muda drasticamente de pequenas equipes a grandes estruturas organizacionais.',
    options: [
      {
        label: 'Grupo pequeno e integrado (4 a 10 estudantes)',
        description: 'Todos os alunos participam tanto da programação, quanto do projeto de pesquisa e montagem.',
        categoryScore: { fll: 3, ftc: 1, frc: 0 },
      },
      {
        label: 'Equipe intermediária (8 a 15 estudantes)',
        description: 'Divisão clara entre equipe de pilotagem, mecânica, programação Java e caderno de engenharia.',
        categoryScore: { fll: 1, ftc: 3, frc: 1 },
      },
      {
        label: 'Grande equipe multidisciplinar (20 a 50+ estudantes)',
        description: 'Organizada como uma empresa: departamentos de Mecânica, Elétrica, TI, Marketing, Finanças e Social.',
        categoryScore: { fll: 0, ftc: 1, frc: 3 },
      },
    ],
  },
];

export const CORE_VALUES = [
  {
    title: 'Descoberta (Discovery)',
    icon: 'Compass',
    description: 'Exploramos novas habilidades e ideias. Aprender é mais importante do que apenas vencer.',
  },
  {
    title: 'Inovação (Innovation)',
    icon: 'Lightbulb',
    description: 'Usamos a criatividade e a persistência para resolver problemas reais e complexos.',
  },
  {
    title: 'Impacto (Impact)',
    icon: 'Globe',
    description: 'Aplicamos o que aprendemos para melhorar nossa escola, nossa comunidade e o planeta.',
  },
  {
    title: 'Inclusão (Inclusion)',
    icon: 'HeartHandshake',
    description: 'Respeitamos uns aos outros e abraçamos nossas diferenças como nossa maior força.',
  },
  {
    title: 'Trabalho em Equipe (Teamwork)',
    icon: 'Users',
    description: 'Somos mais fortes quando trabalhamos juntos e nos apoiamos mutuamente.',
  },
  {
    title: 'Diversão (Fun)',
    icon: 'Sparkles',
    description: 'Celebramos o que fazemos! A robótica é uma festa de celebração do conhecimento.',
  },
];

export const TEAM_STEPS: TeamStep[] = [
  {
    number: 1,
    title: 'Reunir Mentores e Estudantes',
    subtitle: 'O alicerce da equipe',
    description:
      'Uma equipe precisa de pelo menos 2 mentores adultos dedicados (professores, pais ou engenheiros voluntários) e estudantes engajados de acordo com a faixa etária da categoria escolhida.',
    checklist: [
      'Definir os 2 mentores principais (Lead Mentors)',
      'Realizar processo seletivo ou convite aberto na escola',
      'Definir dias e horários semanais de reuniões/oficinas',
      'Assinar termos de compromisso e autorizações',
    ],
    tips: 'Mentores não precisam ser programadores experientes! A FIRST oferece guias passo a passo para orientar os alunos.',
  },
  {
    number: 2,
    title: 'Cadastro no Portal Oficial e SESI',
    subtitle: 'Registro nacional e internacional',
    description:
      'No Brasil, o SESI Nacional é o operador oficial dos torneios da FIRST (FLL, FTC e FRC). É necessário registrar a equipe no Dashboard global da FIRST (firstinspires.org) e no portal do Festival SESI de Robótica.',
    checklist: [
      'Criar conta de mentor no site firstinspires.org',
      'Registrar a equipe e obter o Número Oficial da Equipe (Team Number)',
      'Acompanhar os editais regionais do SESI/SENAI',
      'Garantir a verificação de antecedentes dos mentores (Youth Protection Policy)',
    ],
    tips: 'Guarde com orgulho o número oficial da sua equipe; ele acompanhará seu time por toda a história!',
  },
  {
    number: 3,
    title: 'Aquisição de Kits e Ferramentas',
    subtitle: 'Hardware, software e campo',
    description:
      'Adquirir o kit inicial de robótica da modalidade escolhida (LEGO SPIKE Prime para FLL, REV/TETRIX para FTC, ou Kit of Parts no Kickoff para FRC) e preparar o espaço de trabalho.',
    checklist: [
      'Encomendar o Kit de Desafio da Temporada (Mission Model Set / Field Elements)',
      'Organizar gaveteiros para parafusos, porcas e peças estruturais',
      'Configurar computadores com softwares de CAD e programação (VS Code / WPILib / Android Studio)',
      'Equipamentos de proteção individual (EPI: óculos de segurança obrigatórios)',
    ],
    tips: 'Muitos componentes de temporadas passadas podem ser reaproveitados para treinar novos membros.',
  },
  {
    number: 4,
    title: 'Plano de Negócios e Patrocínios',
    subtitle: 'Sustentabilidade financeira',
    description:
      'Criar a identidade visual da equipe (nome criativo, logotipo, camiseta oficial) e buscar parceiros comerciais locais, empresas de tecnologia e apoio escolar para financiar viagens e materiais.',
    checklist: [
      'Elaborar um folheto e apresentação profissional de captação de patrocínio',
      'Criar redes sociais ativas (Instagram, YouTube, LinkedIn da equipe)',
      'Promover rifas, campanhas de financiamento coletivo e eventos na comunidade',
      'Explorar editais públicos e fundos de ciência e tecnologia',
    ],
    tips: 'Empresas adoram associar suas marcas a projetos de educação e tecnologia com jovens talentos.',
  },
  {
    number: 5,
    title: 'O Kickoff e a Temporada de Torneios',
    subtitle: 'A largada oficial do desafio',
    description:
      'Em janeiro (para FRC) ou agosto/setembro (para FLL e FTC), a FIRST lança o vídeo mundial do desafio da temporada. A partir daí, inicia-se o projeto, testes, reuniões de estratégia e participação nos torneios regionais.',
    checklist: [
      'Assistir à transmissão mundial do Kickoff e ler minuciosamente o Manual de Regras',
      'Fazer sessões de Brainstorming e prototipagem rápida de mecanismos',
      'Participar dos Treinos Abertos e Scrimmages entre equipes amigas',
      'Disputar as Etapas Regionais e buscar vaga para o Festival Nacional SESI e Mundial de Houston (EUA)',
    ],
    tips: 'A Regra de Ouro da FIRST: "Gracious Professionalism". Ajude suas equipes rivais nos pits; o objetivo é crescer juntos!',
  },
];

export const GLOSSARY_ITEMS: GlossaryItem[] = [
  {
    term: 'Gracious Professionalism®',
    englishTranslation: 'Profissionalismo Gracioso',
    definition:
      'Filosofia central da FIRST criada pelo Prof. Dr. Woodie Flowers. Significa competir ferozmente, mas com empatia, respeito mútuo e integridade absoluta. Em um torneio FIRST, equipes emprestam peças sobressalentes e ajudam seus adversários a consertar robôs quebrados antes de entrarem na mesma partida.',
    category: 'Cultura & Valores',
  },
  {
    term: 'Coopertition®',
    englishTranslation: 'Cooperadição (Cooperação + Competição)',
    definition:
      'Conceito onde as equipes competem com entusiasmo para vencer, mas ao mesmo tempo cooperam e ensinam umas às outras, reconhecendo que a colaboração mútua eleva o nível de todos os participantes.',
    category: 'Cultura & Valores',
  },
  {
    term: 'FIRST Impact Award',
    englishTranslation: 'Prêmio de Impacto FIRST (Antigo Chairman\'s Award)',
    definition:
      'O prêmio mais prestigioso de toda a FIRST Robotics Competition. Ele não premia o robô que marcou mais pontos, mas a equipe que melhor representou a missão da FIRST ao transformar sua comunidade através da educação STEM.',
    category: 'Prêmios',
  },
  {
    term: 'Inspire Award',
    englishTranslation: 'Prêmio Inspiração (FTC)',
    definition:
      'A mais alta honraria do FIRST Tech Challenge. Concedido à equipe que se destaca como modelo em design de engenharia, caderno de bordo, espírito de equipe e impacto comunitário.',
    category: 'Prêmios',
  },
  {
    term: 'Pit Area (Área de Pits)',
    englishTranslation: 'Boxes / Pits de Manutenção',
    definition:
      'Espaço de 3x3 metros onde cada equipe monta sua oficina portátil nos torneios. É decorado com banners da equipe e serve para reparos rápidos entre partidas, inspeção técnica e visitas de jurados e do público.',
    category: 'Competição',
  },
  {
    term: 'Swerve Drive',
    englishTranslation: 'Tração Swerve Omnidirecional',
    definition:
      'Sistema mecânico avançado no FRC onde cada uma das 4 rodas do chassi possui dois motores dedicados: um para rotação angular infinita de 360° e outro para tração, permitindo que o robô se mova em qualquer direção sem precisar girar a frente do chassi.',
    category: 'Robótica & Engenharia',
  },
  {
    term: 'AprilTags',
    englishTranslation: 'Marcadores Visuais AprilTag',
    definition:
      'Marcadores bidimensionais semelhantes a QR Codes espalhados pelas bordas da arena. As câmeras dos robôs (Limelight ou webcams) detectam esses códigos para calcular instantaneamente a posição X, Y e ângulo do robô na quadra com precisão milimétrica.',
    category: 'Robótica & Engenharia',
  },
  {
    term: 'Alliance Selection',
    englishTranslation: 'Seleção de Alianças',
    definition:
      'Momento emocionante que antecede os playoffs (mata-mata) nos torneios de FTC e FRC. As 8 melhores equipes do ranking escolhem livremente outras equipes para formarem alianças oficiais de 2 ou 3 robôs para disputar as finais.',
    category: 'Competição',
  },
  {
    term: 'Scouting',
    englishTranslation: 'Coleta de Dados Estatísticos & Análise',
    definition:
      'Prática onde estudantes assistem a todas as partidas registrando em tablets dados de desempenho de cada robô (pontuação, velocidade, confiabilidade, falhas). Esses dados orientam a estratégia de jogo e a escolha de alianças.',
    category: 'Competição',
  },
  {
    term: 'Dean Kamen & Dr. Woodie Flowers',
    englishTranslation: 'Fundadores da FIRST',
    definition:
      'Dean Kamen (inventor do Segway e bombas de infusão médica) fundou a FIRST em 1989 em Manchester (EUA) com a visão de transformar cientistas e engenheiros em heróis celebrados como atletas. O Dr. Woodie Flowers (professor emérito do MIT) cunhou o conceito de Gracious Professionalism.',
    category: 'Cultura & Valores',
  },
  {
    term: 'RoboRIO',
    englishTranslation: 'Controlador Industrial National Instruments',
    definition:
      'Computador embarcado de nível militar/aeroespacial utilizado no FRC, rodando Linux em tempo real e processador FPGA para ler sensores e controlar dezenas de motores de alta potência com segurança crítica.',
    category: 'Robótica & Engenharia',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'O que significa a sigla FIRST?',
    answer:
      'FIRST significa "For Inspiration and Recognition of Science and Technology" (Para Inspiração e Reconhecimento da Ciência e Tecnologia). Foi fundada em 1989 por Dean Kamen para transformar a cultura mundial, mostrando a jovens que a ciência e a engenharia são tão empolgantes e recompensadoras quanto os esportes tradicionais.',
    categoryTag: 'Geral',
  },
  {
    question: 'Quem organiza os torneios da FIRST no Brasil?',
    answer:
      'No Brasil, o Serviço Social da Indústria (SESI Nacional) é o operador e organizador oficial dos programas da FIRST (FLL, FTC e FRC), promovendo etapas regionais por todo o país e o prestigiado Festival SESI de Robótica, que classifica as melhores equipes para o Mundial em Houston (EUA).',
    categoryTag: 'Brasil',
  },
  {
    question: 'Uma escola pública pode participar da FIRST?',
    answer:
      'Sim! Milhares de escolas públicas e Institutos Federais (IFs) no Brasil participam ativamente da FIRST. O SESI e parceiros oferecem kits, capacitações para professores e editais de apoio. Além disso, equipes de FRC e FTC captam patrocínios privados com indústrias locais.',
    categoryTag: 'Inscrição',
  },
  {
    question: 'Qual a diferença entre FLL, FTC e FRC de forma simples?',
    answer:
      'O FLL (9-16 anos) usa peças LEGO, mesa pequena e robôs 100% autônomos com foco em pesquisa científica. O FTC (12-18 anos) usa peças de metal e Android com robôs de ~15kg e alianças 2v2 em arena de tatame. O FRC (14-18 anos) é a categoria máxima com robôs industriais de até 56kg, arena do tamanho de uma quadra, motores de alta potência e alianças 3v3.',
    categoryTag: 'Categorias',
  },
  {
    question: 'É necessário ter experiência prévia em programação para entrar em uma equipe?',
    answer:
      'Não! A metodologia da FIRST é baseada no aprendizado contínuo. Em uma equipe há espaço para todos os talentos: quem quer programar, quem quer desenhar em CAD, quem gosta de marketing, edição de vídeo, captação de recursos, oratória ou trabalho social.',
    categoryTag: 'Participação',
  },
  {
    question: 'Existem bolsas de estudo universitárias através da FIRST?',
    answer:
      'Sim! O programa global FIRST Scholarships disponibiliza mais de 80 milhões de dólares anualmente em bolsas de estudo universitárias exclusivas para ex-alunos de equipes FIRST em universidades de ponta nos EUA e no mundo.',
    categoryTag: 'Impacto',
  },
];
