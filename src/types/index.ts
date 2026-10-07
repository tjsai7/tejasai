export type ThemeMode = 'light' | 'dark' | 'system';

export type ProjectCategory = 
  | 'HCM / HRMS / Mobile'
  | 'FinTech / Employee Finance / Mobile'
  | 'Enterprise SaaS / Reporting / Payroll'
  | 'Financial Services / Registration / Design System'
  | 'Wealth Management / Desktop Application'
  | 'AI / HR / Conversational UX';

export interface ProjectMetric {
  value: string;
  label: string;
  description?: string;
}

export interface CaseStudyDecision {
  problem: string;
  decision: string;
  reason: string;
  result?: string;
}

export interface CaseStudySection {
  id: string;
  title: string;
  subtitle?: string;
  content?: string;
  bulletPoints?: string[];
  imagePlaceholder?: {
    ratio: '16:9' | '4:3' | '3:2' | '1:1' | '9:16' | '16:10';
    caption: string;
    type: 'hero' | 'mobile-mockup' | 'desktop-mockup' | 'before-after' | 'wireframe' | 'flow' | 'design-system';
    src?: string;
  };
  decisions?: CaseStudyDecision[];
  metrics?: ProjectMetric[];
}

export interface Project {
  id: string; // e.g., 'stohrm', 'jofin', 'smart-reports', 'sjp', 'wealthforce', 'tia'
  projectNumber: string; // e.g., '01', '02'
  title: string;
  tagline: string;
  category: ProjectCategory;
  role: string;
  company: string;
  timeline: string;
  team: string;
  platform: string;
  contribution: string[];
  highlightMetric: ProjectMetric;
  summary: string;
  challengeBrief: string;
  heroImageRatio: '16:9' | '16:10';
  accentColor?: string;
  sections: CaseStudySection[];
  tags: string[];
}

export interface CareerRole {
  period: string;
  role: string;
  company: string;
  location: string;
  type: 'full-time' | 'consultant' | 'lead';
  highlights: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  credentialId?: string;
  url?: string;
}

export interface Award {
  title: string;
  organization: string;
  year?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
}
