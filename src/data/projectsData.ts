import { Project } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: "stohrm",
    projectNumber: "01",
    title: "StoHRM Mobile App",
    tagline: "Redesigning a mobile-first HCM experience for enterprise employees and managers across APAC.",
    category: "HCM / HRMS / Mobile",
    role: "Lead / Senior UX Designer",
    company: "Ascent HR Technologies",
    timeline: "2024",
    team: "1 Senior Designer, 2 PMs, 8 Mobile Engineers",
    platform: "iOS & Android (React Native / Native)",
    contribution: [
      "End-to-end mobile UX audit and legacy heuristic evaluation",
      "Information Architecture overhaul for multi-country workforce",
      "High-fidelity component library & design system integration",
      "Interactive prototyping and usability validation"
    ],
    highlightMetric: {
      value: "85%+",
      label: "User Adoption Rate",
      description: "Across APAC enterprise deployments (India, Singapore, Philippines, UAE)"
    },
    summary: "Spearheaded the ground-up mobile experience transformation of StoHRM HCM, replacing rigid legacy workflows with an intuitive employee self-service and managerial approval hub.",
    challengeBrief: "Enterprise employees across APAC struggled with clunky leave, attendance, and payroll approvals on mobile, resulting in high support burden and desktop dependency.",
    heroImageRatio: "16:9",
    accentColor: "#6B5CFF",
    tags: ["HRMS", "Mobile", "Enterprise SaaS", "APAC", "Design System"],
    sections: []
  },
  {
    id: "jofin",
    projectNumber: "02",
    title: "Jofin Mobile App",
    tagline: "Designing split-salary transaction experiences and financial wellness integrated into enterprise HRMS.",
    category: "FinTech / Employee Finance / Mobile",
    role: "Senior UX Designer",
    company: "Ascent HR Technologies",
    timeline: "2024",
    team: "1 Senior Designer, 1 FinTech Product Lead, 5 Engineers",
    platform: "iOS & Android",
    contribution: [
      "Financial onboarding & multi-bank split-salary UX flow",
      "Trust-first interaction design for transactional security",
      "Zero-latency wage access micro-interactions",
      "Product monetization & enterprise integration strategy"
    ],
    highlightMetric: {
      value: "45%",
      label: "Employee Adoption",
      description: "Achieved within the first month of enterprise roll-out"
    },
    summary: "Architected an integrated employee financial wellness & split-salary transaction experience embedded seamlessly into the corporate HRMS ecosystem.",
    challengeBrief: "Enterprise employees lacked flexible control over salary disbursements, savings allocations, and earned wage access without leaving their workplace portal.",
    heroImageRatio: "16:9",
    accentColor: "#10B981",
    tags: ["FinTech", "Mobile UX", "Transactions", "HRMS Integration"],
    sections: []
  },
  {
    id: "smart-reports",
    projectNumber: "03",
    title: "Smart Reports Suite",
    tagline: "Simplifying complex HR and payroll reporting workflows into a high-clarity data experience.",
    category: "Enterprise SaaS / Reporting / Payroll",
    role: "Senior UX Designer",
    company: "Ascent HR Technologies",
    timeline: "2024",
    team: "1 Senior Designer, 1 Data PM, 6 Fullstack Engineers",
    platform: "Web SaaS Desktop",
    contribution: [
      "Complex query builder & report customizer UX",
      "Data grid optimization for millions of payroll records",
      "Automated bank advice scheduling & export flows",
      "Cognitive load reduction through progressive disclosure"
    ],
    highlightMetric: {
      value: "90%",
      label: "Cognitive Load Reduction",
      description: "Measured across enterprise HR operations & payroll admins"
    },
    summary: "Transformed a dense, multi-table payroll reporting engine into a modern modular reporting suite with scheduled sharing and 100% on-time bank advice delivery.",
    challengeBrief: "Payroll managers faced overwhelming cognitive fatigue and frequent export errors when running monthly compliance and bank advice reports across multi-entity corporations.",
    heroImageRatio: "16:10",
    accentColor: "#3B82F6",
    tags: ["SaaS", "Data-Heavy Tables", "Payroll", "Information Architecture"],
    sections: []
  },
  {
    id: "sjp",
    projectNumber: "04",
    title: "SJP Financial Onboarding",
    tagline: "Designing a streamlined registration experience and scalable design-system foundations for an enterprise financial product.",
    category: "Financial Services / Registration / Design System",
    role: "Senior UX Designer",
    company: "Insightek Global Pvt Ltd",
    timeline: "2026 — Present",
    team: "Senior Designer, Brand Lead, Engineering Leads",
    platform: "Responsive Web & Tablet",
    contribution: [
      "End-to-end multi-step registration journey alignment",
      "Scalable enterprise component architecture & tokens",
      "Design-led discovery workshops with executive leadership",
      "Developer-ready design specs & accessible pattern library"
    ],
    highlightMetric: {
      value: "Enterprise Ready",
      label: "Unified Design System",
      description: "Accelerating engineering velocity and cross-brand consistency"
    },
    summary: "Led user-centric registration streamlining and founded design system foundations for a multi-brand financial services ecosystem.",
    challengeBrief: "Fragmented onboarding funnels and inconsistent brand styling across business units slowed down customer verification and increased technical debt.",
    heroImageRatio: "16:9",
    accentColor: "#8B5CF6",
    tags: ["Design System", "FinTech", "Onboarding", "Design Tokens"],
    sections: []
  },
  {
    id: "wealthforce",
    projectNumber: "05",
    title: "Wealthforce",
    tagline: "Designing complex enterprise workflows and high-density product features for a financial-services desktop application.",
    category: "Wealth Management / Desktop Application",
    role: "Senior Product Designer",
    company: "Ascent / Enterprise FinTech",
    timeline: "2023 — 2024",
    team: "Senior Designer, Financial Analysts, Desktop Engineers",
    platform: "Desktop Application (Electron / Web)",
    contribution: [
      "High-density financial dashboard layout & workspace customizer",
      "Portfolio rebalancing & trade execution workflows",
      "Multi-monitor desktop windowing interaction model",
      "WCAG-compliant financial color coding & data visualization"
    ],
    highlightMetric: {
      value: "High-Density",
      label: "Financial Workflows",
      description: "Engineered for rapid keyboard-driven portfolio management"
    },
    summary: "Architected a high-performance desktop application for wealth managers and portfolio advisors, balancing extreme data density with effortless navigation.",
    challengeBrief: "Wealth advisors were forced to tab across 8+ legacy tools to reconcile client portfolios, execute rebalancing trades, and review real-time market data.",
    heroImageRatio: "16:10",
    thumbnailImage: "/images/case-studies/wealthforce-thumbnail.png",
    heroImage: "/images/case-studies/wealthforce-thumbnail.png",
    accentColor: "#EC4899",
    tags: ["Desktop App", "Wealth Management", "High-Density IA", "Data Viz"],
    sections: []
  },
  {
    id: "tia",
    projectNumber: "06",
    title: "TIA (AI HR & IT Assistant)",
    tagline: "Designing an AI-powered conversational assistant that transforms enterprise support and recruitment workflows.",
    category: "AI / HR / Conversational UX",
    role: "Senior UX Designer",
    company: "Ascent HR Technologies",
    timeline: "2024",
    team: "1 Senior Designer, 1 AI/ML Lead, 4 Engineers",
    platform: "Web, Mobile & Embedded Slack/Teams Copilot",
    contribution: [
      "Conversational UX heuristics & multimodal interaction patterns",
      "Recruiter resume-parsing & candidate evaluation interface",
      "HR/IT intent resolution workflows & fallback handling",
      "Enterprise prompt transparency & feedback telemetry"
    ],
    highlightMetric: {
      value: "65%",
      label: "Support Ticket Deflection",
      description: "Along with 70% reduction in recruiter resume-sorting time"
    },
    summary: "Designed an intelligent conversational copilot for enterprise HR and IT operations, drastically deflecting repetitive queries and automating candidate screening.",
    challengeBrief: "HR & IT service desks spent thousands of hours handling repetitive policy inquiries, while recruiting teams spent days manually sorting unstructured resumes.",
    heroImageRatio: "16:9",
    thumbnailImage: "/images/case-studies/tia-thumbnail.png",
    heroImage: "/images/case-studies/tia-thumbnail.png",
    accentColor: "#6366F1",
    tags: ["Conversational AI", "Copilot UX", "Automation", "Recruiting"],
    sections: []
  }
];
