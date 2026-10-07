import { useState, FC } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, CheckCircle2, Sparkles, 
  Smartphone, Clock, Users, ShieldAlert,
  HelpCircle, Quote
} from 'lucide-react';
import { DeviceMockup } from '../ui/DeviceMockup';
import { MockupVisualizer } from '../ui/MockupVisualizer';
import { BeforeAfterSlider } from '../ui/BeforeAfterSlider';
import { ImagePlaceholder } from '../ui/ImagePlaceholder';
import { LightboxModal } from '../ui/LightboxModal';

export const StoHRMCaseStudy: FC = () => {
  const [activeModal, setActiveModal] = useState<{ isOpen: boolean; title?: string; caption?: string }>({
    isOpen: false,
  });

  return (
    <article className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 pt-32 pb-28 space-y-20">
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
          <span className="text-accent font-bold">01</span> / 06
        </div>
      </div>

      {/* 01 — HERO HEADER & TITLE */}
      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full liquid-glass text-xs font-semibold text-accent border border-accent/25 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            0→1 Product (MVP Launch)
          </span>
          <span className="px-3 py-1 rounded-full liquid-glass text-xs font-medium text-foreground-muted border border-border-glass">
            iOS &amp; Android (React Native)
          </span>
          <span className="px-3 py-1 rounded-full liquid-glass text-xs font-medium text-foreground-muted border border-border-glass">
            12 Weeks
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-sheen font-display leading-[1.08]">
          StoHRM: Transforming Enterprise HR into a 0→1 Mobile Experience
        </h1>

        <p className="text-xl sm:text-2xl text-foreground-muted font-normal max-w-3xl leading-relaxed">
          Designing a 0→1 Mobile HCM Experience for Deskless and On-the-Go Workforces across APAC.
        </p>

        {/* Hero Showcase Mockup with Image Placeholder */}
        <div className="pt-4">
          <ImagePlaceholder
            label="Hero Showcase: High-Fidelity Mockups of StoHRM iOS & Android Home Screens & Quick-Action Flows"
            sublabel="Click to view or replace with your high-res hero showcase image"
            aspectRatio="16:10"
            onClick={() => setActiveModal({
              isOpen: true,
              title: "StoHRM Mobile Hero Showcase",
              caption: "High-fidelity mockups of StoHRM iOS & Android home screens and quick-action flows."
            })}
          >
            <div className="w-full h-full bg-foreground/[0.02] p-4 sm:p-8 flex items-center justify-center">
              <DeviceMockup type="mobile" className="w-[260px] sm:w-[300px]">
                <MockupVisualizer projectId="stohrm" type="mobile" />
              </DeviceMockup>
            </div>
          </ImagePlaceholder>
        </div>
      </header>

      {/* 02 — AT A GLANCE & KEY METRICS */}
      <section className="space-y-8 pt-8">
        {/* At a Glance Table Card */}
        <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border border-border-glass space-y-4">
          <h2 className="text-xs uppercase font-mono tracking-widest text-accent font-bold">
            At a Glance
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-3.5 rounded-2xl liquid-glass border border-border-glass space-y-1">
              <span className="text-foreground-muted block uppercase text-[10px] font-bold">Role</span>
              <span className="font-semibold text-foreground text-sm">Senior UX Designer</span>
              <p className="text-[11px] text-foreground-muted">Research, IA, Mobile Design System, Testing, QA</p>
            </div>
            <div className="p-3.5 rounded-2xl liquid-glass border border-border-glass space-y-1">
              <span className="text-foreground-muted block uppercase text-[10px] font-bold">Project Type &amp; Platform</span>
              <span className="font-semibold text-foreground text-sm">0→1 Mobile MVP</span>
              <p className="text-[11px] text-foreground-muted">iOS &amp; Android (React Native)</p>
            </div>
            <div className="p-3.5 rounded-2xl liquid-glass border border-border-glass space-y-1">
              <span className="text-foreground-muted block uppercase text-[10px] font-bold">Timeline &amp; Tools</span>
              <span className="font-semibold text-foreground text-sm">12 Weeks</span>
              <p className="text-[11px] text-foreground-muted">Adobe XD, Miro, Cross-functional Sprints</p>
            </div>
            <div className="p-3.5 rounded-2xl liquid-glass border border-border-glass space-y-1">
              <span className="text-foreground-muted block uppercase text-[10px] font-bold">Key Stakeholders</span>
              <span className="font-semibold text-foreground text-sm">Co-founder &amp; VP Tech</span>
              <p className="text-[11px] text-foreground-muted">PM, HR Leaders, Engineering Team</p>
            </div>
          </div>
        </div>

        {/* 3 Large Impact Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border border-border-glass space-y-2">
            <div className="text-4xl sm:text-5xl font-black text-sheen font-display">85%+</div>
            <div className="text-sm font-bold text-foreground">Mobile Adoption Rate</div>
            <p className="text-xs text-foreground-muted leading-relaxed">
              Achieved within 60 days of enterprise rollout across APAC client accounts.
            </p>
          </div>

          <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border border-border-glass space-y-2">
            <div className="text-4xl sm:text-5xl font-black text-sheen font-display">-65%</div>
            <div className="text-sm font-bold text-foreground">Support Ticket Deflection</div>
            <p className="text-xs text-foreground-muted leading-relaxed">
              Reduction in routine HR inquiries and document retrieval support tickets.
            </p>
          </div>

          <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border border-border-glass space-y-2">
            <div className="text-4xl sm:text-5xl font-black text-sheen font-display">12 Wks</div>
            <div className="text-sm font-bold text-foreground">Discovery to Launch</div>
            <p className="text-xs text-foreground-muted leading-relaxed">
              From initial field research to cross-platform React Native app store release.
            </p>
          </div>
        </div>
      </section>

      {/* 03 — CONTEXT & BUSINESS BACKGROUND */}
      <section className="space-y-6 pt-12 border-t border-border-glass">
        <div className="space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            01 — Context &amp; Business Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-sheen">
            The Desktop Monolith Bottleneck
          </h2>
        </div>

        <div className="space-y-4 text-base sm:text-lg text-foreground-muted leading-relaxed">
          <p>
            StoHRM is a comprehensive Human Capital Management (HCM) platform with an established, feature-dense desktop portal. Historically engineered on a PHP web architecture, the platform served back-office administrative teams efficiently.
          </p>
          <p>
            However, modern enterprise clients with distributed workforces, hybrid workers, and deskless field staff faced a major bottleneck: <strong className="text-foreground">their employees were rarely at desks when they needed urgent HR services</strong>.
          </p>
        </div>

        {/* Architecture Flow Diagram Box */}
        <div className="p-6 rounded-2xl liquid-glass border border-border-glass font-mono text-xs text-foreground-muted space-y-2 bg-foreground/[0.02]">
          <div className="text-xs font-bold text-foreground uppercase tracking-wider">Legacy Workflow Bottleneck</div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs">
            <span className="p-2 rounded-lg liquid-glass text-foreground border border-border-glass">[Legacy Monolith (PHP Desktop)]</span>
            <span className="text-accent font-bold">→ High Friction →</span>
            <span className="p-2 rounded-lg liquid-glass text-foreground border border-border-glass">[Deskless &amp; Mobile Workforce: Unable to access fast HR tasks]</span>
          </div>
        </div>

        <div className="p-6 rounded-3xl liquid-glass-card border border-accent/30 space-y-2">
          <h3 className="text-base font-bold text-foreground flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-accent" />
            <span>The Challenge</span>
          </h3>
          <p className="text-sm text-foreground-muted leading-relaxed">
            Build a standalone <strong className="text-foreground">0→1 cross-platform mobile application (iOS &amp; Android in React Native)</strong> from scratch within a tight 12-week window, without simply "shrinking" complex desktop web tables onto mobile screens.
          </p>
        </div>
      </section>

      {/* 04 — PROBLEM STATEMENT */}
      <section className="space-y-6 pt-12 border-t border-border-glass">
        <div className="space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            02 — Problem Statement
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-sheen">
            Business vs. User Problem Friction
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-3">
            <div className="flex items-center gap-2 text-accent font-bold text-sm">
              <ShieldAlert className="w-4 h-4" />
              <span>Business Problem</span>
            </div>
            <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
              Enterprise clients reported reduced employee engagement and an overwhelming volume of repetitive administrative queries sent to HR departments, slowing down operations and dampening client expansion into fast-growing APAC territories.
            </p>
          </div>

          <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-3">
            <div className="flex items-center gap-2 text-blue-500 font-bold text-sm">
              <Users className="w-4 h-4" />
              <span>User Problem</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-foreground-muted">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">•</span>
                <span><strong>Excessive clicks:</strong> Downloading a payslip or checking leave required 5–8 clicks across dense data tables.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">•</span>
                <span><strong>On-the-go friction:</strong> Clocking in on-site or submitting urgent medical leave could not be done from a phone.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">•</span>
                <span><strong>Information overload:</strong> Desktop screens packed dozens of secondary filters individual contributors never used.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Problem Diagram Placeholder */}
        <div className="pt-2">
          <ImagePlaceholder
            label="Diagram: Legacy Desktop Table vs. Mobile Context Friction"
            sublabel="Miro / Figma comparison map of legacy multi-click desktop flow vs mobile expectation"
            aspectRatio="16:9"
            onClick={() => setActiveModal({
              isOpen: true,
              title: "Legacy vs Mobile Friction Diagram",
              caption: "Detailed diagram showing friction points in legacy PHP portal."
            })}
          />
        </div>
      </section>

      {/* 05 — PROJECT CONSTRAINTS */}
      <section className="space-y-6 pt-12 border-t border-border-glass">
        <div className="space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            03 — Project Constraints
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-sheen">
            Engineering &amp; Regional Boundaries
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
          <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-2">
            <span className="text-xs font-mono font-bold text-accent uppercase">Constraint 01</span>
            <h4 className="font-bold text-foreground">0→1 Native Foundation</h4>
            <p className="text-foreground-muted leading-relaxed">
              Moving from a legacy PHP ecosystem to React Native meant designing a brand-new mobile UI component library compatible with native mobile paradigms.
            </p>
          </div>

          <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-2">
            <span className="text-xs font-mono font-bold text-accent uppercase">Constraint 02</span>
            <h4 className="font-bold text-foreground">12-Week Production Timeline</h4>
            <p className="text-foreground-muted leading-relaxed">
              Discovery, wireframing, component tokens, usability testing, and visual QA had to run across fast, overlapping agile sprints.
            </p>
          </div>

          <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-2">
            <span className="text-xs font-mono font-bold text-accent uppercase">Constraint 03</span>
            <h4 className="font-bold text-foreground">Global &amp; APAC Localization</h4>
            <p className="text-foreground-muted leading-relaxed">
              The architecture had to accommodate multilingual strings, varying regional date/currency formats, and dynamic labor compliance rules without breaking screen layouts.
            </p>
          </div>
        </div>
      </section>

      {/* 06 — RESEARCH & DISCOVERY */}
      <section className="space-y-6 pt-12 border-t border-border-glass">
        <div className="space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            04 — Research &amp; Discovery
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-sheen">
            The 80/20 Rule of Employee Self-Service
          </h2>
          <p className="text-sm text-foreground-muted max-w-2xl">
            Facilitated discovery workshops with internal stakeholders and conducted qualitative user interviews with four core user groups.
          </p>
        </div>

        {/* 4 User Groups Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="p-5 rounded-2xl liquid-glass border border-border-glass space-y-2">
            <span className="font-mono text-accent font-bold">Group 01</span>
            <h4 className="font-bold text-foreground text-sm">Deskless / Field Staff</h4>
            <p className="text-foreground-muted leading-relaxed">Need instant 1-handed clock-in and emergency leave submission.</p>
          </div>
          <div className="p-5 rounded-2xl liquid-glass border border-border-glass space-y-2">
            <span className="font-mono text-accent font-bold">Group 02</span>
            <h4 className="font-bold text-foreground text-sm">Corporate Employees</h4>
            <p className="text-foreground-muted leading-relaxed">Prioritize instant retrieval of payslips, tax sheets, and PF summaries.</p>
          </div>
          <div className="p-5 rounded-2xl liquid-glass border border-border-glass space-y-2">
            <span className="font-mono text-accent font-bold">Group 03</span>
            <h4 className="font-bold text-foreground text-sm">Line Managers</h4>
            <p className="text-foreground-muted leading-relaxed">Need 2-tap approvals for team attendance and time-off requests.</p>
          </div>
          <div className="p-5 rounded-2xl liquid-glass border border-border-glass space-y-2">
            <span className="font-mono text-accent font-bold">Group 04</span>
            <h4 className="font-bold text-foreground text-sm">HR Administrators</h4>
            <p className="text-foreground-muted leading-relaxed">Require standardized requests that reduce back-and-forth email loops.</p>
          </div>
        </div>

        {/* 80/20 Rule Callout Box */}
        <div className="p-8 rounded-3xl liquid-glass-card border border-accent/40 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass text-xs font-bold text-accent border border-accent/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Critical Research Insight</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground">
            80% of daily employee requests centered around only three tasks:
          </h3>
          <ol className="space-y-2 text-sm sm:text-base text-foreground font-medium">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
              <span>1. Clocking in/out and viewing attendance logs.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
              <span>2. Checking leave balance and requesting time off.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
              <span>3. Downloading monthly payslips and PF (Provident Fund) tax certificates.</span>
            </li>
          </ol>
          <p className="text-xs sm:text-sm text-foreground-muted border-t border-border-glass pt-3">
            Thesis: Rather than porting over the full administrative breadth of the desktop platform, our mobile thesis became: <strong className="text-foreground">ruthless prioritization of mobile-native employee workflows</strong>.
          </p>
        </div>

        {/* Persona & Empathy Maps Placeholder */}
        <ImagePlaceholder
          label="Miro Research Artifacts: User Persona Archetypes & Empathy Maps"
          sublabel="Persona templates and empathy mapping boards generated during discovery"
          aspectRatio="16:9"
          onClick={() => setActiveModal({
            isOpen: true,
            title: "Miro Research Artifacts",
            caption: "User persona archetypes and empathy maps created in Miro."
          })}
        />
      </section>

      {/* 07 — INFORMATION ARCHITECTURE & UX STRATEGY */}
      <section className="space-y-6 pt-12 border-t border-border-glass">
        <div className="space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            05 — Information Architecture &amp; UX Strategy
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-sheen">
            Workflow Transformation Architecture
          </h2>
          <p className="text-sm text-foreground-muted">
            Instead of a 1:1 screen port, this engagement was structured as a workflow transformation exercise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
          <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-2">
            <h4 className="font-bold text-foreground text-base">Flat 4-Tab Navigation</h4>
            <p className="text-foreground-muted leading-relaxed">
              Grouped functions into <code className="text-accent bg-foreground/5 px-1 py-0.5 rounded">Home (Actions)</code>, <code className="text-accent bg-foreground/5 px-1 py-0.5 rounded">Attendance</code>, <code className="text-accent bg-foreground/5 px-1 py-0.5 rounded">Documents</code>, and <code className="text-accent bg-foreground/5 px-1 py-0.5 rounded">Profile</code>.
            </p>
          </div>

          <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-2">
            <h4 className="font-bold text-foreground text-base">Above-the-Fold Action Grid</h4>
            <p className="text-foreground-muted leading-relaxed">
              Surfaced primary self-service tasks as accessible action cards directly on the home feed without nested menus.
            </p>
          </div>

          <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-2">
            <h4 className="font-bold text-foreground text-base">Progressive Disclosure</h4>
            <p className="text-foreground-muted leading-relaxed">
              Converted sprawling data tables into card-based components displaying essential summaries up front, expanding on tap for granular breakdowns.
            </p>
          </div>
        </div>

        {/* IA Tree Placeholder */}
        <ImagePlaceholder
          label="Information Architecture: Before vs. After Navigation Tree"
          sublabel="Sitemap comparing legacy multi-level menus with redesigned 4-tab mobile structure"
          aspectRatio="16:9"
          onClick={() => setActiveModal({
            isOpen: true,
            title: "Information Architecture Tree",
            caption: "Before vs. After Information Architecture tree."
          })}
        />
      </section>

      {/* 08 — KEY DESIGN SOLUTIONS */}
      <section className="space-y-12 pt-12 border-t border-border-glass">
        <div className="space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            06 — Key Design Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-sheen">
            Core Features &amp; Component System
          </h2>
        </div>

        {/* Solution A: Instant Action Dashboard */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-accent">Solution A</span>
            <h3 className="text-2xl font-bold text-foreground">The Instant Action Dashboard</h3>
            <p className="text-sm text-foreground-muted leading-relaxed">
              A unified home interface tailored to the employee's current state. If an employee hasn't clocked in, the primary call to action highlights "Punch In" with auto-detected geo-location status.
            </p>
            <div className="inline-flex items-center gap-1.5 text-xs text-accent font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Outcome: Primary task flows reduced from 6 desktop screens to 2 mobile taps.</span>
            </div>
          </div>

          <ImagePlaceholder
            label="Wireframes & Final UI: Dashboard and Punch-in Flow"
            sublabel="Wireframe sketches, geolocation states, and final punch-in screen designs"
            aspectRatio="16:10"
            onClick={() => setActiveModal({
              isOpen: true,
              title: "Dashboard and Punch-in Flow",
              caption: "Wireframes and final UI of the Dashboard and Punch-in flow."
            })}
          >
            <div className="w-full h-full p-6 flex items-center justify-center bg-foreground/[0.02]">
              <DeviceMockup type="mobile" className="w-[240px]">
                <MockupVisualizer projectId="stohrm" type="mobile" />
              </DeviceMockup>
            </div>
          </ImagePlaceholder>
        </div>

        {/* Solution B: Document Vault */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-accent">Solution B</span>
            <h3 className="text-2xl font-bold text-foreground">One-Tap Financial &amp; Document Vault</h3>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Payslips and PF slips are high-anxiety, high-frequency documents. I designed a dedicated document module with direct preview, encrypted download, and one-tap share capabilities.
            </p>
            <div className="inline-flex items-center gap-1.5 text-xs text-accent font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Outcome: Cut monthly HR queries regarding salary certificates by 65%.</span>
            </div>
          </div>

          <ImagePlaceholder
            label="UI Flow: Payslip Breakdown, PDF Export, and PF Summary"
            sublabel="Visual breakdown of monthly net pay, tax deductions, and encrypted share dialog"
            aspectRatio="16:10"
            onClick={() => setActiveModal({
              isOpen: true,
              title: "Payslip Breakdown & Document Vault",
              caption: "UI flow of payslip breakdown, PDF export, and PF summary."
            })}
          />
        </div>

        {/* Solution C: Design System */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-accent">Solution C</span>
            <h3 className="text-2xl font-bold text-foreground">Scalable Cross-Platform Mobile Design System</h3>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Built from the ground up in Adobe XD, aligning with React Native component primitives:
            </p>
            <ul className="space-y-1.5 text-xs text-foreground-muted">
              <li>• Atomic typography scales, 8pt spacing grid, accessible color palettes (WCAG AA compliant).</li>
              <li>• Standardized form components with inline validation for regional phone numbers and currencies.</li>
              <li>• Flexible layouts designed to handle long translated strings across APAC languages without truncation.</li>
            </ul>
          </div>

          <ImagePlaceholder
            label="Adobe XD Component Library Showcase: Buttons, Input Fields, Badges, Navigation Bars"
            sublabel="Design token inventory, component variants, and layout guidelines"
            aspectRatio="16:9"
            onClick={() => setActiveModal({
              isOpen: true,
              title: "Mobile Design System Showcase",
              caption: "Component Library showcase (Buttons, Input Fields, Badges, Navigation bars)."
            })}
          />
        </div>

        {/* Interactive Before / After Slider */}
        <div className="space-y-4 pt-4">
          <h4 className="text-lg font-bold text-foreground">Interactive Experience Comparison</h4>
          <BeforeAfterSlider
            beforeLabel="Legacy PHP Desktop Portal"
            afterLabel="StoHRM 0→1 Mobile App"
            aspectRatio="16:10"
            beforeContent={
              <div className="w-full h-full bg-neutral-900 p-8 text-white/70 font-mono text-xs flex flex-col justify-center items-center space-y-3">
                <div className="text-red-400 font-bold uppercase">Legacy PHP Architecture</div>
                <p className="max-w-md text-center text-white/50 text-[11px]">
                  Multi-nested dropdowns, 5–8 clicks for payslips, non-responsive tables on mobile.
                </p>
              </div>
            }
            afterContent={
              <MockupVisualizer projectId="stohrm" type="desktop" className="w-full h-full" />
            }
          />
        </div>
      </section>

      {/* 09 — USABILITY TESTING & ITERATION */}
      <section className="space-y-6 pt-12 border-t border-border-glass">
        <div className="space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            07 — Usability Testing &amp; Iteration
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-sheen">
            Validated Insights Across 2 Test Rounds
          </h2>
          <p className="text-sm text-foreground-muted">
            Across 2 rounds of prototype testing with representative employees and managers, we validated key friction points.
          </p>
        </div>

        <div className="space-y-4">
          {/* Row 1 */}
          <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-foreground text-sm flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-accent" />
                <span>Hidden Leave Status</span>
              </span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-accent/20 text-accent">Iteration 01</span>
            </div>
            <p className="text-xs text-foreground-muted italic">
              "I submitted leave, but I can't tell if my manager approved it yet."
            </p>
            <div className="p-3 rounded-xl liquid-glass border border-border-glass text-xs text-foreground space-y-1">
              <span className="font-bold text-accent block">Design Solution:</span>
              <p>Replaced subtle list items with visual status badges (Pending, Approved, Rejected) and push alert deep links.</p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-foreground text-sm flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                <span>Accidental Punch-ins</span>
              </span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-accent/20 text-accent">Iteration 02</span>
            </div>
            <p className="text-xs text-foreground-muted italic">
              "I worried I might accidentally tap clock-out while scrolling."
            </p>
            <div className="p-3 rounded-xl liquid-glass border border-border-glass text-xs text-foreground space-y-1">
              <span className="font-bold text-accent block">Design Solution:</span>
              <p>Added a deliberate confirmation swipe pattern for attendance triggers.</p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-foreground text-sm flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-accent" />
                <span>Document Filter Fatigue</span>
              </span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-accent/20 text-accent">Iteration 03</span>
            </div>
            <p className="text-xs text-foreground-muted italic">
              "Finding last year's PF slip takes too much scrolling."
            </p>
            <div className="p-3 rounded-xl liquid-glass border border-border-glass text-xs text-foreground space-y-1">
              <span className="font-bold text-accent block">Design Solution:</span>
              <p>Implemented quick-chip filters (Current Fiscal Year, Last 3 Months, Tax Slips).</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10 — OUTCOMES & BUSINESS RESULTS */}
      <section className="space-y-8 pt-12 border-t border-border-glass">
        <div className="space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            08 — Outcomes &amp; Business Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-sheen">
            Quantified Business Impact
          </h2>
          <p className="text-sm text-foreground-muted">
            The StoHRM mobile app launched successfully on iOS and Android across client organizations within the targeted 12-week schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-2">
            <div className="text-4xl sm:text-5xl font-black text-sheen font-display">85%+</div>
            <div className="text-sm font-bold text-foreground">User Adoption</div>
            <p className="text-xs text-foreground-muted leading-relaxed">
              Surpassed the client's initial 60% adoption benchmark within two months of rollout.
            </p>
          </div>

          <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-2">
            <div className="text-4xl sm:text-5xl font-black text-sheen font-display">-65%</div>
            <div className="text-sm font-bold text-foreground">Support Tickets</div>
            <p className="text-xs text-foreground-muted leading-relaxed">
              HR teams spent significantly less time handling manual document exports and leave inquiries.
            </p>
          </div>

          <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-2">
            <div className="text-4xl sm:text-5xl font-black text-sheen font-display">APAC</div>
            <div className="text-sm font-bold text-foreground">Regional Expansion</div>
            <p className="text-xs text-foreground-muted leading-relaxed">
              Enabled StoHRM commercial teams to pitch enterprise clients across Southeast Asia.
            </p>
          </div>
        </div>

        {/* Client Testimonial Card */}
        <div className="p-8 sm:p-10 rounded-3xl liquid-glass border border-border-glass space-y-4 relative overflow-hidden">
          <Quote className="w-10 h-10 text-accent/30 absolute top-4 right-4" />
          <p className="text-base sm:text-lg text-foreground italic leading-relaxed max-w-3xl">
            "The mobile app transformed our employee self-service. What used to take multiple desktop steps is now handled in seconds on the phone, practically eliminating our routine HR help tickets."
          </p>
          <div className="pt-2 border-t border-border-glass/60 text-xs">
            <span className="font-bold text-foreground block">Head of HR</span>
            <span className="text-foreground-muted">Pilot Enterprise Client (APAC)</span>
          </div>
        </div>
      </section>

      {/* 11 — REFLECTIONS & TAKEAWAYS */}
      <section className="space-y-6 pt-12 border-t border-border-glass">
        <div className="space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            09 — Reflections &amp; Takeaways
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-sheen">
            Senior Product Reflections
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs sm:text-sm">
          <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-2">
            <span className="font-mono text-accent font-bold text-xs uppercase">Takeaway 01</span>
            <h4 className="font-bold text-foreground text-base">Context, Not Parity</h4>
            <p className="text-foreground-muted leading-relaxed">
              True mobile transformation does not mean migrating every desktop button. It requires identifying the moments where mobile provides immediate utility over the browser.
            </p>
          </div>

          <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-2">
            <span className="font-mono text-accent font-bold text-xs uppercase">Takeaway 02</span>
            <h4 className="font-bold text-foreground text-base">Close Cross-Functional Alignment</h4>
            <p className="text-foreground-muted leading-relaxed">
              Partnering directly with React Native engineers early prevented costly redesign cycles and ensured UI fidelity during rapid development.
            </p>
          </div>

          <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-2">
            <span className="font-mono text-accent font-bold text-xs uppercase">Takeaway 03</span>
            <h4 className="font-bold text-foreground text-base">Designing for Accessibility</h4>
            <p className="text-foreground-muted leading-relaxed">
              Clear feedback loops, legible document previews, and forgiving inputs turned complex HR procedures into a stress-free daily experience.
            </p>
          </div>
        </div>
      </section>

      {/* 12 — PAGINATION NAVIGATION */}
      <div className="pt-12 border-t border-border-glass flex items-center justify-between">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-xs font-semibold text-foreground-muted hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Case Studies</span>
        </Link>

        <Link
          to="/work/jofin"
          className="inline-flex items-center gap-2 text-xs font-semibold text-accent hover:underline"
        >
          <span>Next: Jofin FinTech</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={activeModal.isOpen}
        onClose={() => setActiveModal({ isOpen: false })}
        title={activeModal.title}
        caption={activeModal.caption}
      >
        <div className="p-6 max-w-3xl w-full flex items-center justify-center">
          <DeviceMockup type="mobile" className="w-[300px]">
            <MockupVisualizer projectId="stohrm" type="mobile" />
          </DeviceMockup>
        </div>
      </LightboxModal>
    </article>
  );
};
