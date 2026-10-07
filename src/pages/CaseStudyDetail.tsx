import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, CheckCircle2, Sparkles 
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/projectsData';
import { DeviceMockup } from '../components/ui/DeviceMockup';
import { MockupVisualizer } from '../components/ui/MockupVisualizer';
import { BeforeAfterSlider } from '../components/ui/BeforeAfterSlider';
import { ProcessTimeline } from '../components/ui/ProcessTimeline';
import { LightboxModal, ExpandableImageWrapper } from '../components/ui/LightboxModal';
import { usePageSEO } from '../hooks/usePageSEO';
import { StoHRMCaseStudy } from '../components/case-studies/StoHRMCaseStudy';
import { TIACaseStudy } from '../components/case-studies/TIACaseStudy';

export const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImageModal, setActiveImageModal] = useState<{ isOpen: boolean; title?: string; caption?: string }>({
    isOpen: false,
  });

  const projectIndex = PROJECTS_DATA.findIndex((p) => p.id === id);
  const project = projectIndex !== -1 ? PROJECTS_DATA[projectIndex] : null;

  usePageSEO({
    title: project ? `${project.title} — Case Study` : 'Project Case Study',
    description: project ? project.tagline : 'Enterprise product design case study by Teja Sai.',
  });

  if (projectIndex === -1 || !project) {
    return <Navigate to="/work" replace />;
  }

  // Render dedicated deep-dive for StoHRM
  if (id === 'stohrm') {
    return <StoHRMCaseStudy />;
  }

  const nextProject = PROJECTS_DATA[(projectIndex + 1) % PROJECTS_DATA.length];
  const prevProject = PROJECTS_DATA[(projectIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length];

  // Render dedicated deep-dive for TIA
  if (id === 'tia') {
    return (
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 pt-32 pb-28 space-y-20">
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center justify-between text-xs text-foreground-muted">
          <Link
            to="/work"
            className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to all projects</span>
          </Link>
          <div className="flex items-center gap-2 font-mono">
            <span>{project.projectNumber} / 06</span>
          </div>
        </div>

        {/* Deep Dive TIA Narrative */}
        <TIACaseStudy project={project} />

        {/* Bottom Pagination Controls */}
        <div className="flex items-center justify-between pt-12 border-t border-border-glass">
          <Link
            to={`/work/${prevProject.id}`}
            className="inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <div className="text-left">
              <span className="text-[10px] uppercase font-mono block text-foreground-muted">Previous</span>
              <span className="font-semibold text-foreground">{prevProject.title}</span>
            </div>
          </Link>

          <Link
            to={`/work/${nextProject.id}`}
            className="inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-foreground transition-colors group text-right"
          >
            <div>
              <span className="text-[10px] uppercase font-mono block text-foreground-muted">Next</span>
              <span className="font-semibold text-foreground">{nextProject.title}</span>
            </div>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    );
  }

  // Specific content mapping based on project ID
  return (
    <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 pt-32 pb-28 space-y-24">
      {/* 00 — BREADCRUMB & BACK LINK */}
      <div className="flex items-center justify-between text-xs text-foreground-muted">
        <Link
          to="/work"
          className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to all projects</span>
        </Link>
        <div className="flex items-center gap-2 font-mono">
          <span>{project.projectNumber} / 06</span>
        </div>
      </div>

      {/* 01 — HERO HEADER */}
      <section className="space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass text-xs font-semibold text-accent border border-accent/25">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{project.category}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-sheen font-display">
            {project.title}
          </h1>

          <p className="text-xl sm:text-2xl text-foreground-muted font-normal max-w-3xl leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Floating Glass Metadata Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-3xl liquid-glass border border-border-glass shadow-glass text-xs">
          <div>
            <span className="text-foreground-muted block uppercase tracking-wider text-[10px] font-semibold mb-1">
              Role &amp; Leadership
            </span>
            <span className="font-semibold text-foreground text-sm">{project.role}</span>
          </div>
          <div>
            <span className="text-foreground-muted block uppercase tracking-wider text-[10px] font-semibold mb-1">
              Organization
            </span>
            <span className="font-semibold text-foreground text-sm">{project.company}</span>
          </div>
          <div>
            <span className="text-foreground-muted block uppercase tracking-wider text-[10px] font-semibold mb-1">
              Platform &amp; Scope
            </span>
            <span className="font-semibold text-foreground text-sm">{project.platform}</span>
          </div>
          <div>
            <span className="text-foreground-muted block uppercase tracking-wider text-[10px] font-semibold mb-1">
              Primary Metric
            </span>
            <span className="font-extrabold text-accent text-base">{project.highlightMetric.value}</span>
            <span className="text-[10px] text-foreground-muted block leading-tight">{project.highlightMetric.label}</span>
          </div>
        </div>

        {/* Large Hero Mockup Stage */}
        <div className="relative rounded-3xl overflow-hidden liquid-glass border border-border-glass p-6 sm:p-12 shadow-2xl flex items-center justify-center">
          {project.platform.toLowerCase().includes('mobile') ? (
            <DeviceMockup type="mobile" className="w-[280px] sm:w-[320px]">
              <MockupVisualizer projectId={project.id} type="mobile" />
            </DeviceMockup>
          ) : (
            <DeviceMockup type="desktop" title={`${project.title} — Enterprise UI`} className="w-full">
              <MockupVisualizer projectId={project.id} type="desktop" />
            </DeviceMockup>
          )}
        </div>
      </section>

      {/* 02 — THE CHALLENGE & CONTEXT */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-12 border-t border-border-glass">
        <div className="md:col-span-4 space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            01 — The Challenge
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            What was broken?
          </h2>
        </div>

        <div className="md:col-span-8 space-y-6 text-base text-foreground-muted leading-relaxed">
          <p>
            {project.id === 'stohrm' && (
              <>
                Across enterprise deployments in India, Singapore, the Philippines, and the UAE, employees and managers relied on a legacy web portal that was severely difficult to navigate on mobile devices. Essential everyday actions—such as marking shift attendance, checking leave quotas, and approving urgent reimbursement requests—required multiple nested menus.
              </>
            )}
            {project.id === 'jofin' && (
              <>
                Traditional enterprise payroll cycles locked employee earnings until month-end, creating liquidity friction for frontline staff. When employees needed emergency financial flexibility or multi-account salary splitting, they turned to high-interest loans outside the workplace portal.
              </>
            )}
            {project.id === 'smart-reports' && (
              <>
                Payroll administrators and HR operations leads spent days manually compiling monthly compliance, tax withholdings, and bank disbursement advice. The legacy reporting interface presented hundreds of unformatted database fields with zero scheduled automation.
              </>
            )}
            {project.id === 'sjp' && (
              <>
                Customer onboarding for multi-jurisdictional financial services suffered from high drop-off rates due to disconnected registration steps, inconsistent design components across business units, and slow compliance verification.
              </>
            )}
            {project.id === 'wealthforce' && (
              <>
                Wealth advisors navigated 8+ disconnected desktop tools to monitor real-time market data, rebalance client portfolios, and execute high-value block orders, creating cognitive fatigue and execution latency.
              </>
            )}
            {project.id === 'tia' && (
              <>
                Internal enterprise HR and IT service desks were inundated with thousands of repetitive policy inquiries every month, while talent acquisition teams spent hours manually parsing unstructured candidate resumes.
              </>
            )}
          </p>

          <div className="p-6 rounded-2xl liquid-glass border border-border-glass space-y-3 bg-foreground/[0.02]">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Core Business &amp; Technical Constraints
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Multi-region compliance and localization across diverse APAC enterprise policies.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Rigid backend APIs requiring optimistic offline-first state handling on mobile.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Zero tolerance for transactional latency or data discrepancy in payroll and compliance flows.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 03 — UNDERSTANDING THE USER & RESEARCH */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-12 border-t border-border-glass">
        <div className="md:col-span-4 space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            02 — Research &amp; Insights
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            User Journeys &amp; Heuristics
          </h2>
        </div>

        <div className="md:col-span-8 space-y-6">
          <p className="text-base text-foreground-muted leading-relaxed">
            Directly collaborated with cross-functional product teams, conducting contextual inquiries with frontline shift workers, regional HR business partners, and enterprise operations leads.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl liquid-glass border border-border-glass space-y-2">
              <span className="text-xs font-mono font-bold text-accent">Insight 01</span>
              <h4 className="text-sm font-bold text-foreground">Task-Centric vs Module-Centric</h4>
              <p className="text-xs text-foreground-muted leading-relaxed">
                Users think in terms of immediate tasks ("Clock In", "Approve Overtime", "View Payslip"), whereas legacy systems grouped actions under internal database modules.
              </p>
            </div>

            <div className="p-5 rounded-2xl liquid-glass border border-border-glass space-y-2">
              <span className="text-xs font-mono font-bold text-accent">Insight 02</span>
              <h4 className="text-sm font-bold text-foreground">Urgency &amp; Micro-Moments</h4>
              <p className="text-xs text-foreground-muted leading-relaxed">
                Mobile interactions happen in short 15-second windows (e.g., entering office elevators, commuting). Flows had to be frictionless with zero unnecessary confirmation modals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — KEY DESIGN DECISIONS (PROBLEM -> DECISION -> REASON -> RESULT) */}
      <section className="space-y-8 pt-12 border-t border-border-glass">
        <div className="space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            03 — Strategic Design Decisions
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-sheen">
            High-Impact Architectural Choices
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {project.id === 'tia' ? (
            <>
              <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-4">
                <div className="text-xs font-mono font-bold text-accent uppercase">Decision 01</div>
                <div>
                  <span className="text-[11px] text-foreground-muted uppercase font-bold block">The Problem</span>
                  <p className="text-xs text-foreground font-medium mt-0.5">
                    Unstructured open chat interfaces caused user confusion when executing multi-step HR actions.
                  </p>
                </div>
                <div>
                  <span className="text-[11px] text-foreground-muted uppercase font-bold block">Design Solution</span>
                  <p className="text-xs text-foreground font-medium mt-0.5">
                    Designed a hybrid multimodal interface combining natural language with interactive task cards.
                  </p>
                </div>
                <div className="pt-2 border-t border-border-glass/40 text-[11px] text-accent font-semibold">
                  Result: 65% support ticket deflection across HR &amp; IT.
                </div>
              </div>

              <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-4">
                <div className="text-xs font-mono font-bold text-accent uppercase">Decision 02</div>
                <div>
                  <span className="text-[11px] text-foreground-muted uppercase font-bold block">The Problem</span>
                  <p className="text-xs text-foreground font-medium mt-0.5">
                    Recruiters spent 20+ hours weekly manually scanning hundreds of PDF/Word resume formats.
                  </p>
                </div>
                <div>
                  <span className="text-[11px] text-foreground-muted uppercase font-bold block">Design Solution</span>
                  <p className="text-xs text-foreground font-medium mt-0.5">
                    Engineered AI resume parsing copilot displaying candidate skill match %, tenure, and fit summary.
                  </p>
                </div>
                <div className="pt-2 border-t border-border-glass/40 text-[11px] text-accent font-semibold">
                  Result: 70% reduction in recruiter resume-sorting time.
                </div>
              </div>

              <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-4">
                <div className="text-xs font-mono font-bold text-accent uppercase">Decision 03</div>
                <div>
                  <span className="text-[11px] text-foreground-muted uppercase font-bold block">The Problem</span>
                  <p className="text-xs text-foreground font-medium mt-0.5">
                    Users feared hallucinated answers regarding strict corporate maternity and leave policies.
                  </p>
                </div>
                <div>
                  <span className="text-[11px] text-foreground-muted uppercase font-bold block">Design Solution</span>
                  <p className="text-xs text-foreground font-medium mt-0.5">
                    Added transparent policy handbook citations, source linking, and 1-tap live human desk hand-off.
                  </p>
                </div>
                <div className="pt-2 border-t border-border-glass/40 text-[11px] text-accent font-semibold">
                  Result: 94% positive response validation rating.
                </div>
              </div>
            </>
          ) : project.id === 'wealthforce' ? (
            <>
              <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-4">
                <div className="text-xs font-mono font-bold text-accent uppercase">Decision 01</div>
                <div>
                  <span className="text-[11px] text-foreground-muted uppercase font-bold block">The Problem</span>
                  <p className="text-xs text-foreground font-medium mt-0.5">
                    Wealth advisors lost situational awareness switching between 8+ disconnected tools.
                  </p>
                </div>
                <div>
                  <span className="text-[11px] text-foreground-muted uppercase font-bold block">Design Solution</span>
                  <p className="text-xs text-foreground font-medium mt-0.5">
                    Created a modular high-density multi-pane workspace with customizable docking.
                  </p>
                </div>
                <div className="pt-2 border-t border-border-glass/40 text-[11px] text-accent font-semibold">
                  Result: 75% reduction in context switching time.
                </div>
              </div>

              <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-4">
                <div className="text-xs font-mono font-bold text-accent uppercase">Decision 02</div>
                <div>
                  <span className="text-[11px] text-foreground-muted uppercase font-bold block">The Problem</span>
                  <p className="text-xs text-foreground font-medium mt-0.5">
                    Multi-client portfolio rebalancing required tedious repetitive manual ticket entries.
                  </p>
                </div>
                <div>
                  <span className="text-[11px] text-foreground-muted uppercase font-bold block">Design Solution</span>
                  <p className="text-xs text-foreground font-medium mt-0.5">
                    Designed batch rebalancing engine with drift tolerance previews and 1-key trade execution.
                  </p>
                </div>
                <div className="pt-2 border-t border-border-glass/40 text-[11px] text-accent font-semibold">
                  Result: Rebalancing 100+ portfolios reduced from 4 hours to 8 minutes.
                </div>
              </div>

              <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-4">
                <div className="text-xs font-mono font-bold text-accent uppercase">Decision 03</div>
                <div>
                  <span className="text-[11px] text-foreground-muted uppercase font-bold block">The Problem</span>
                  <p className="text-xs text-foreground font-medium mt-0.5">
                    Subtle market chart shifts were missed in low-contrast ambient room lighting.
                  </p>
                </div>
                <div>
                  <span className="text-[11px] text-foreground-muted uppercase font-bold block">Design Solution</span>
                  <p className="text-xs text-foreground font-medium mt-0.5">
                    Calibrated high-contrast WCAG 2.1 AA financial palettes with instant visual delta pulses.
                  </p>
                </div>
                <div className="pt-2 border-t border-border-glass/40 text-[11px] text-accent font-semibold">
                  Result: 100% accessible financial charting across light &amp; dark trading floors.
                </div>
              </div>
            </>
          ) : project.id === 'sjp' ? (
            <>
              <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-4">
                <div className="text-xs font-mono font-bold text-accent uppercase">Decision 01</div>
                <div>
                  <span className="text-[11px] text-foreground-muted uppercase font-bold block">The Problem</span>
                  <p className="text-xs text-foreground font-medium mt-0.5">
                    Prospective institutional clients abandoned onboarding due to overwhelming legal disclosures.
                  </p>
                </div>
                <div>
                  <span className="text-[11px] text-foreground-muted uppercase font-bold block">Design Solution</span>
                  <p className="text-xs text-foreground font-medium mt-0.5">
                    Re-architected registration into a 5-step progressive KYC funnel with real-time verification status.
                  </p>
                </div>
                <div className="pt-2 border-t border-border-glass/40 text-[11px] text-accent font-semibold">
                  Result: 42% reduction in onboarding abandonment rate.
                </div>
              </div>

              <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-4">
                <div className="text-xs font-mono font-bold text-accent uppercase">Decision 02</div>
                <div>
                  <span className="text-[11px] text-foreground-muted uppercase font-bold block">The Problem</span>
                  <p className="text-xs text-foreground font-medium mt-0.5">
                    Engineering squads duplicated UI code across disparate brand portals.
                  </p>
                </div>
                <div>
                  <span className="text-[11px] text-foreground-muted uppercase font-bold block">Design Solution</span>
                  <p className="text-xs text-foreground font-medium mt-0.5">
                    Founded multi-brand design tokens &amp; headless accessible component library in Figma &amp; code.
                  </p>
                </div>
                <div className="pt-2 border-t border-border-glass/40 text-[11px] text-accent font-semibold">
                  Result: 35% faster sprint delivery for new client portals.
                </div>
              </div>

              <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-4">
                <div className="text-xs font-mono font-bold text-accent uppercase">Decision 03</div>
                <div>
                  <span className="text-[11px] text-foreground-muted uppercase font-bold block">The Problem</span>
                  <p className="text-xs text-foreground font-medium mt-0.5">
                    Conflicting priorities between Product, Legal Compliance, and Engineering teams.
                  </p>
                </div>
                <div>
                  <span className="text-[11px] text-foreground-muted uppercase font-bold block">Design Solution</span>
                  <p className="text-xs text-foreground font-medium mt-0.5">
                    Instituted collaborative discovery workshops and clickable interactive prototypes for consensus.
                  </p>
                </div>
                <div className="pt-2 border-t border-border-glass/40 text-[11px] text-accent font-semibold">
                  Result: Executive alignment achieved in 2 weeks vs 3 months.
                </div>
              </div>
            </>
          ) : project.id === 'smart-reports' ? (
            <>
              <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-4">
                <div className="text-xs font-mono font-bold text-accent uppercase">Decision 01</div>
                <div>
                  <span className="text-[11px] text-foreground-muted uppercase font-bold block">The Problem</span>
                  <p className="text-xs text-foreground font-medium mt-0.5">
                    Payroll operators were overwhelmed by flat 40+ column data grids with zero visual hierarchy.
                  </p>
                </div>
                <div>
                  <span className="text-[11px] text-foreground-muted uppercase font-bold block">Design Solution</span>
                  <p className="text-xs text-foreground font-medium mt-0.5">
                    Created a modular report builder using progressive disclosure and customizable column pinners.
                  </p>
                </div>
                <div className="pt-2 border-t border-border-glass/40 text-[11px] text-accent font-semibold">
                  Result: 90% reduction in operator cognitive fatigue.
                </div>
              </div>

              <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-4">
                <div className="text-xs font-mono font-bold text-accent uppercase">Decision 02</div>
                <div>
                  <span className="text-[11px] text-foreground-muted uppercase font-bold block">The Problem</span>
                  <p className="text-xs text-foreground font-medium mt-0.5">
                    Monthly bank advice files had to be manually generated, validated, and uploaded at midnight cycles.
                  </p>
                </div>
                <div>
                  <span className="text-[11px] text-foreground-muted uppercase font-bold block">Design Solution</span>
                  <p className="text-xs text-foreground font-medium mt-0.5">
                    Engineered automated scheduling pipelines with multi-bank format presets and pre-flight validation.
                  </p>
                </div>
                <div className="pt-2 border-t border-border-glass/40 text-[11px] text-accent font-semibold">
                  Result: 100% on-time bank advice delivery across all client entities.
                </div>
              </div>

              <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-4">
                <div className="text-xs font-mono font-bold text-accent uppercase">Decision 03</div>
                <div>
                  <span className="text-[11px] text-foreground-muted uppercase font-bold block">The Problem</span>
                  <p className="text-xs text-foreground font-medium mt-0.5">
                    Discrepancies in payroll calculations were caught too late, risking salary delays.
                  </p>
                </div>
                <div>
                  <span className="text-[11px] text-foreground-muted uppercase font-bold block">Design Solution</span>
                  <p className="text-xs text-foreground font-medium mt-0.5">
                    Visual variance heatmaps and instant anomaly flagging highlighting payroll delta anomalies.
                  </p>
                </div>
                <div className="pt-2 border-t border-border-glass/40 text-[11px] text-accent font-semibold">
                  Result: 0 calculation errors reaching final bank transfer.
                </div>
              </div>
            </>
          ) : project.id === 'jofin' ? (
            <>
              <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-4">
                <div className="text-xs font-mono font-bold text-accent uppercase">Decision 01</div>
                <div>
                  <span className="text-[11px] text-foreground-muted uppercase font-bold block">The Problem</span>
                  <p className="text-xs text-foreground font-medium mt-0.5">
                    Users were intimidated by complex multi-account percentage inputs during monthly salary setup.
                  </p>
                </div>
                <div>
                  <span className="text-[11px] text-foreground-muted uppercase font-bold block">Design Solution</span>
                  <p className="text-xs text-foreground font-medium mt-0.5">
                    Introduced interactive visual slider pots (Primary, Savings, Family) with real-time currency calculation.
                  </p>
                </div>
                <div className="pt-2 border-t border-border-glass/40 text-[11px] text-accent font-semibold">
                  Result: 88% first-time onboarding completion rate.
                </div>
              </div>

              <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-4">
                <div className="text-xs font-mono font-bold text-accent uppercase">Decision 02</div>
                <div>
                  <span className="text-[11px] text-foreground-muted uppercase font-bold block">The Problem</span>
                  <p className="text-xs text-foreground font-medium mt-0.5">
                    Employees felt anxiety about hidden fees during Earned Wage Access (EWA) withdrawals.
                  </p>
                </div>
                <div>
                  <span className="text-[11px] text-foreground-muted uppercase font-bold block">Design Solution</span>
                  <p className="text-xs text-foreground font-medium mt-0.5">
                    100% upfront fee transparency card with dynamic net-disbursement calculation before biometric confirmation.
                  </p>
                </div>
                <div className="pt-2 border-t border-border-glass/40 text-[11px] text-accent font-semibold">
                  Result: Zero fee-related dispute tickets recorded.
                </div>
              </div>

              <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-4">
                <div className="text-xs font-mono font-bold text-accent uppercase">Decision 03</div>
                <div>
                  <span className="text-[11px] text-foreground-muted uppercase font-bold block">The Problem</span>
                  <p className="text-xs text-foreground font-medium mt-0.5">
                    Disjointed experience between corporate HRMS and third-party banking gateways.
                  </p>
                </div>
                <div>
                  <span className="text-[11px] text-foreground-muted uppercase font-bold block">Design Solution</span>
                  <p className="text-xs text-foreground font-medium mt-0.5">
                    Seamless SSO token exchange and embedded glass bottom sheets retaining user context.
                  </p>
                </div>
                <div className="pt-2 border-t border-border-glass/40 text-[11px] text-accent font-semibold">
                  Result: 45% employee adoption within 30 days.
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Default StoHRM & other projects */}
              <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-4">
                <div className="text-xs font-mono font-bold text-accent uppercase">Decision 01</div>
                <div>
                  <span className="text-[11px] text-foreground-muted uppercase font-bold block">The Problem</span>
                  <p className="text-xs text-foreground font-medium mt-0.5">
                    Managers delayed pending approvals because requests were hidden under separate system tabs.
                  </p>
                </div>
                <div>
                  <span className="text-[11px] text-foreground-muted uppercase font-bold block">Design Solution</span>
                  <p className="text-xs text-foreground font-medium mt-0.5">
                    Unified Universal Approval Inbox aggregating Leave, Overtime, and Expense claims into a single 1-tap review tray.
                  </p>
                </div>
                <div className="pt-2 border-t border-border-glass/40 text-[11px] text-accent font-semibold">
                  Result: 4x faster approval turnaround time.
                </div>
              </div>

              <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-4">
                <div className="text-xs font-mono font-bold text-accent uppercase">Decision 02</div>
                <div>
                  <span className="text-[11px] text-foreground-muted uppercase font-bold block">The Problem</span>
                  <p className="text-xs text-foreground font-medium mt-0.5">
                    Geofencing and biometric clock-in failures caused frustration during spotty network coverage.
                  </p>
                </div>
                <div>
                  <span className="text-[11px] text-foreground-muted uppercase font-bold block">Design Solution</span>
                  <p className="text-xs text-foreground font-medium mt-0.5">
                    Engineered optimistic offline punch states with visual sync indicators and instant haptic feedback.
                  </p>
                </div>
                <div className="pt-2 border-t border-border-glass/40 text-[11px] text-accent font-semibold">
                  Result: 99.4% first-attempt attendance reliability.
                </div>
              </div>

              <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-4">
                <div className="text-xs font-mono font-bold text-accent uppercase">Decision 03</div>
                <div>
                  <span className="text-[11px] text-foreground-muted uppercase font-bold block">The Problem</span>
                  <p className="text-xs text-foreground font-medium mt-0.5">
                    Multi-brand enterprise styling caused visual divergence and slow front-end delivery.
                  </p>
                </div>
                <div>
                  <span className="text-[11px] text-foreground-muted uppercase font-bold block">Design Solution</span>
                  <p className="text-xs text-foreground font-medium mt-0.5">
                    Architected unified design tokens and responsive components governing color, spacing, and typography.
                  </p>
                </div>
                <div className="pt-2 border-t border-border-glass/40 text-[11px] text-accent font-semibold">
                  Result: 30% reduction in design-to-code cycle time.
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* 05 — INTERACTIVE BEFORE / AFTER SLIDER */}
      <section className="space-y-6 pt-12 border-t border-border-glass">
        <div className="space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            04 — Transformation
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-sheen">
            Interactive Before &amp; After Comparison
          </h2>
          <p className="text-sm text-foreground-muted">
            Drag the handle horizontally to compare the legacy workflow with the redesigned experience.
          </p>
        </div>

        <BeforeAfterSlider
          beforeLabel="Legacy Desktop Portal"
          afterLabel="Redesigned Mobile Experience"
          aspectRatio="16:10"
          beforeContent={
            <div className="w-full h-full bg-neutral-900 p-8 text-white/70 font-mono text-xs flex flex-col justify-center items-center space-y-3">
              <div className="text-red-400 font-bold uppercase">Legacy System Architecture</div>
              <p className="max-w-md text-center text-white/50 text-[11px]">
                Dense multi-nested dropdowns, lack of mobile responsiveness, high friction for daily attendance and approvals.
              </p>
              <div className="p-3 rounded bg-white/5 border border-white/10 w-full max-w-sm space-y-1 text-[10px]">
                <div>• Navigation steps required for leave: 6 clicks</div>
                <div>• Average task completion time: 140s</div>
                <div>• Mobile adoption rate: &lt; 20%</div>
              </div>
            </div>
          }
          afterContent={
            <MockupVisualizer projectId={project.id} type="desktop" className="w-full h-full" />
          }
        />
      </section>

      {/* 06 — PROCESS TIMELINE */}
      <section className="space-y-6 pt-12 border-t border-border-glass">
        <div className="space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            05 — Execution Process
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-sheen">
            From Discovery to Enterprise Rollout
          </h2>
        </div>

        <ProcessTimeline
          steps={[
            {
              step: '01',
              title: 'Discovery & Heuristic Audit',
              summary: 'Evaluated legacy telemetry, mapped drop-off funnels, and conducted 18 stakeholder interviews across APAC regions.',
              deliverables: ['Heuristic Evaluation Matrix', 'Drop-off Journey Maps', 'Regional Compliance Checklist']
            },
            {
              step: '02',
              title: 'Information Architecture Redesign',
              summary: 'Re-architected navigation from database tables into intent-driven task flows with card-based mobile patterns.',
              deliverables: ['Revised Navigation Sitemap', 'Task-flow Wireframes', 'Zero-latency punch logic']
            },
            {
              step: '03',
              title: 'Design System & Tokenization',
              summary: 'Created multi-brand component foundations, accessible color tokens (WCAG AA), and interactive micro-animations.',
              deliverables: ['Figma Design System Library', 'Design Tokens Spec', 'Interactive Prototype']
            },
            {
              step: '04',
              title: 'Validation & Deployment',
              summary: 'Ran usability testing with pilot enterprise cohorts in Singapore and India before APAC-wide rollout.',
              deliverables: ['85%+ User Adoption', 'Zero-latency sync', 'Production Release']
            }
          ]}
        />
      </section>

      {/* 07 — EXPANDABLE GALLERY & SYSTEM SPECS */}
      <section className="space-y-6 pt-12 border-t border-border-glass">
        <div className="space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            06 — Component Craft
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-sheen">
            Detailed Screen Explorations
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ExpandableImageWrapper
            onClick={() => setActiveImageModal({ isOpen: true, title: 'Employee Self-Service Dashboard', caption: 'Intuitive daily summary showing attendance punch status, leave quotas, and upcoming corporate holidays.' })}
            title="Employee Self-Service Dashboard"
          >
            <div className="aspect-[16/10] bg-foreground/[0.03] p-4 flex items-center justify-center">
              <MockupVisualizer projectId={project.id} type="desktop" />
            </div>
          </ExpandableImageWrapper>

          <ExpandableImageWrapper
            onClick={() => setActiveImageModal({ isOpen: true, title: 'Managerial Approval Hub', caption: 'Consolidated approval stream with instant inline review and optimistic feedback.' })}
            title="Managerial Approval Hub"
          >
            <div className="aspect-[16/10] bg-foreground/[0.03] p-4 flex items-center justify-center">
              <MockupVisualizer projectId={project.id} type="hero" />
            </div>
          </ExpandableImageWrapper>
        </div>
      </section>

      {/* 08 — MEASURABLE IMPACT */}
      <section className="space-y-8 pt-12 border-t border-border-glass">
        <div className="space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            07 — Quantified Outcomes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-sheen">
            Measurable Business &amp; Product Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-2">
            <div className="text-4xl sm:text-5xl font-black text-sheen font-display">
              {project.highlightMetric.value}
            </div>
            <div className="text-sm font-bold text-foreground">
              {project.highlightMetric.label}
            </div>
            <p className="text-xs text-foreground-muted leading-relaxed">
              Achieved across enterprise deployments in India, Singapore, Philippines, and the UAE.
            </p>
          </div>

          <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-2">
            <div className="text-4xl sm:text-5xl font-black text-sheen font-display">
              4.8 / 5
            </div>
            <div className="text-sm font-bold text-foreground">
              Mobile User Satisfaction (CSAT)
            </div>
            <p className="text-xs text-foreground-muted leading-relaxed">
              Drastic improvement from legacy mobile web score of 2.1 / 5.
            </p>
          </div>

          <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-2">
            <div className="text-4xl sm:text-5xl font-black text-sheen font-display">
              -60%
            </div>
            <div className="text-sm font-bold text-foreground">
              HR Desk Inquiries
            </div>
            <p className="text-xs text-foreground-muted leading-relaxed">
              Direct reduction in routine leave balance and attendance discrepancy tickets.
            </p>
          </div>
        </div>
      </section>

      {/* 09 — WHAT I LEARNED & REFLECTIONS */}
      <section className="p-8 sm:p-10 rounded-3xl liquid-glass border border-border-glass space-y-4">
        <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
          08 — Reflection &amp; Takeaways
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-foreground">
          Design Leadership in High-Constraint Enterprise Environments
        </h3>
        <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
          Designing for enterprise B2B SaaS requires balancing operator speed with multi-country regulatory constraints. By prioritizing task-based information architecture over system data silos, we transformed a legacy operational burden into a high-adoption product experience.
        </p>
      </section>

      {/* 10 — NEXT / PREV PROJECT PAGINATION */}
      <div className="pt-12 border-t border-border-glass flex items-center justify-between">
        <Link
          to={`/work/${prevProject.id}`}
          className="group flex flex-col items-start text-xs font-semibold text-foreground-muted hover:text-foreground transition-colors"
        >
          <span className="flex items-center gap-1 text-[11px] uppercase tracking-wider text-accent">
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            Previous Case Study
          </span>
          <span className="text-sm sm:text-base font-bold text-foreground mt-1">
            {prevProject.title}
          </span>
        </Link>

        <Link
          to={`/work/${nextProject.id}`}
          className="group flex flex-col items-end text-xs font-semibold text-foreground-muted hover:text-foreground transition-colors text-right"
        >
          <span className="flex items-center gap-1 text-[11px] uppercase tracking-wider text-accent">
            Next Case Study
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </span>
          <span className="text-sm sm:text-base font-bold text-foreground mt-1">
            {nextProject.title}
          </span>
        </Link>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={activeImageModal.isOpen}
        onClose={() => setActiveImageModal({ isOpen: false })}
        title={activeImageModal.title}
        caption={activeImageModal.caption}
      >
        <div className="p-8 max-w-4xl w-full">
          <MockupVisualizer projectId={project.id} type="desktop" className="w-full h-auto min-h-[380px] rounded-xl" />
        </div>
      </LightboxModal>
    </div>
  );
};
