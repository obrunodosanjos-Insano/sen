export type CategoryId = 'fll' | 'ftc' | 'frc';

export interface CategoryInfo {
  id: CategoryId;
  acronym: string;
  name: string;
  badge: string;
  ageRange: string;
  teamSize: string;
  buildTime: string;
  matchDuration: string;
  robotDimensions: string;
  robotWeight: string;
  techStack: string[];
  programmingLanguages: string[];
  hardwareKit: string;
  arenaSize: string;
  allianceFormat: string;
  shortDesc: string;
  fullDesc: string;
  keyPillars: {
    title: string;
    description: string;
  }[];
  autonomousPhase: string;
  teleopPhase: string;
  endgamePhase: string;
  prestigiousAward: string;
  estimatedBudget: string;
  idealFor: string;
  colorTheme: {
    primary: string;
    secondary: string;
    light: string;
    border: string;
    text: string;
    badgeBg: string;
  };
  sampleRobotSpecs: {
    drivetrain: string;
    controllers: string;
    motors: string;
    sensors: string;
    power: string;
  };
}

export interface ComparisonMetric {
  feature: string;
  category: 'Geral' | 'Hardware' | 'Software' | 'Competição' | 'Custos';
  fll: string;
  ftc: string;
  frc: string;
  highlight?: boolean;
}

export interface MatchPhase {
  id: string;
  name: string;
  durationSeconds: number;
  description: string;
  pointsHighlight: string;
  driverRole: string;
  robotBehavior: string;
}

export interface MatchSimulatorData {
  categoryId: CategoryId;
  totalDuration: number;
  phases: MatchPhase[];
}

export interface RobotPart {
  id: string;
  name: string;
  system: string;
  description: string;
  fllDetail: string;
  ftcDetail: string;
  frcDetail: string;
  keyComponents: string[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  context: string;
  options: {
    label: string;
    description: string;
    categoryScore: {
      fll: number;
      ftc: number;
      frc: number;
    };
  }[];
}

export interface GlossaryItem {
  term: string;
  englishTranslation?: string;
  definition: string;
  category: 'Cultura & Valores' | 'Competição' | 'Robótica & Engenharia' | 'Prêmios';
}

export interface FaqItem {
  question: string;
  answer: string;
  categoryTag: string;
}

export interface TeamStep {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  checklist: string[];
  tips: string;
}
