import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, CheckCircle2, Clock, Users,
  ShieldCheck, MessageSquare,
  Search, Bot, UserCheck, HelpCircle, Layers,
  Workflow, ThumbsUp, Zap, Lock
} from 'lucide-react';
import { Project } from '../../types';
import { DeviceMockup } from '../ui/DeviceMockup';
import { ImagePlaceholder } from '../ui/ImagePlaceholder';

interface TIACaseStudyProps {
  project: Project;
}

export const TIACaseStudy: FC<TIACaseStudyProps> = ({ project }) => {
  const [activeTab, setActiveTab] = useState<'recruiter' | 'employee'>('recruiter');

  return (
    <article className="space-y-28 sm:space-y-36">
      {/* =========================================================================
          01. HERO & METADATA SECTION
          ========================================================================= */}
      <section className="space-y-12">
        {/* Breadcrumb & Project Tag */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-xs font-semibold uppercase tracking-wider text-accent border border-accent/25">
            <Bot className="w-3.5 h-3.5" />
            <span>0→1 Product • Enterprise Conversational AI &amp; ATS</span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-foreground-muted">
            <span className="px-3 py-1 rounded-full liquid-glass border border-border-glass">
              Case Study {project.projectNumber}
            </span>
            <span>Ascent HR Technologies</span>
          </div>
        </div>

        {/* Title & Tagline */}
        <div className="space-y-4 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-sheen font-display leading-[1.08]">
            TIA – Conversational HR &amp; ATS System
          </h1>
          <p className="text-lg sm:text-2xl text-foreground-muted leading-relaxed font-normal">
            Accelerating enterprise recruitment and automating statutory HR support through a role-adaptive conversational workspace.
          </p>
        </div>

        {/* Executive Metadata Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl liquid-glass border border-border-glass bg-foreground/[0.015]">
          <div>
            <span className="text-foreground-muted block uppercase tracking-wider text-[10px] font-semibold mb-1">
              Role
            </span>
            <span className="font-bold text-foreground text-sm">Senior UX Designer</span>
            <span className="text-[11px] text-foreground-muted block">Solo UX Lead</span>
          </div>
          <div>
            <span className="text-foreground-muted block uppercase tracking-wider text-[10px] font-semibold mb-1">
              Timeline
            </span>
            <span className="font-bold text-foreground text-sm">3-Week Rapid Sprint</span>
            <span className="text-[11px] text-foreground-muted block">Discovery → Handoff</span>
          </div>
          <div>
            <span className="text-foreground-muted block uppercase tracking-wider text-[10px] font-semibold mb-1">
              Platform &amp; Tools
            </span>
            <span className="font-bold text-foreground text-sm">Desktop Web &amp; AI</span>
            <span className="text-[11px] text-foreground-muted block">Adobe XD, Miro, PHP Stack</span>
          </div>
          <div>
            <span className="text-foreground-muted block uppercase tracking-wider text-[10px] font-semibold mb-1">
              Primary Metric
            </span>
            <span className="font-extrabold text-accent text-base">-45% Screening Time</span>
            <span className="text-[10px] text-foreground-muted block leading-tight">-65% Support Tickets</span>
          </div>
        </div>

        {/* Main Hero Screen: MacBook Screen Display */}
        <div className="relative rounded-3xl overflow-hidden liquid-glass border border-border-glass p-4 sm:p-8 shadow-2xl">
          <DeviceMockup type="macbook-screen" title="TIA AI HR & ATS System — Analytics & Knowledge Overview">
            <div className="relative w-full aspect-[16/10] bg-slate-950 overflow-hidden group">
              <img
                src="/images/case-studies/tia/tia-dashboard.png"
                alt="TIA AI HR & ATS Dashboard Overview by Teja Sai"
                className="w-full h-full object-cover [object-position:center_top]"
                loading="eager"
              />
              <div className="absolute inset-x-0 bottom-0 py-2.5 px-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between text-xs text-white/90 backdrop-blur-[2px]">
                <span className="font-semibold tracking-wide flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  StoHRM AI Engine • FAQ Ingestion, Model Performance &amp; Satisfaction Telemetry
                </span>
                <span className="font-mono text-indigo-300 text-[11px]">Production Desktop Web App</span>
              </div>
            </div>
          </DeviceMockup>
        </div>
      </section>

      {/* =========================================================================
          02. AT A GLANCE & EXECUTIVE IMPACT METRICS
          ========================================================================= */}
      <section className="space-y-12">
        <div className="space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            Executive Summary
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-sheen font-display">
            At a Glance &amp; Quantified Outcomes
          </h2>
        </div>

        {/* 3 Large Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="liquid-glass-card rounded-3xl p-8 border border-border-glass relative overflow-hidden space-y-3"
          >
            <div className="text-4xl sm:text-5xl font-black text-sheen font-display">-45%</div>
            <h3 className="text-base font-bold text-foreground">Candidate Screening Time</h3>
            <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
              Slashed initial resume evaluation cycles by nearly half via OCR natural-language parsing, scoring candidates directly against job description parameters.
            </p>
            <div className="pt-2 border-t border-border-glass/40 text-[11px] font-mono text-accent">
              Talent Acquisition Velocity
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="liquid-glass-card rounded-3xl p-8 border border-border-glass relative overflow-hidden space-y-3"
          >
            <div className="text-4xl sm:text-5xl font-black text-sheen font-display">-65%</div>
            <h3 className="text-base font-bold text-foreground">Repetitive Support Tickets</h3>
            <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
              Deflected high-volume routine inquiries across HR, statutory payroll, tax deductions, and IT helpdesk through verified policy answer retrieval.
            </p>
            <div className="pt-2 border-t border-border-glass/40 text-[11px] font-mono text-accent">
              Support Desk Capacity Reclaimed
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="liquid-glass-card rounded-3xl p-8 border border-border-glass relative overflow-hidden space-y-3"
          >
            <div className="text-4xl sm:text-5xl font-black text-sheen font-display">Instant</div>
            <h3 className="text-base font-bold text-foreground">SLA &amp; Resolution Speed</h3>
            <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
              Eliminated multi-day ticket queues for routine payroll and leave queries with instant verified statutory citations and zero-friction self-service.
            </p>
            <div className="pt-2 border-t border-border-glass/40 text-[11px] font-mono text-accent">
              Zero-Day Ticket Backlog
            </div>
          </motion.div>
        </div>

        {/* Project Scope & Deliverables Table */}
        <div className="p-6 sm:p-8 rounded-3xl liquid-glass border border-border-glass space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground flex items-center gap-2">
            <Layers className="w-4 h-4 text-accent" />
            <span>Core Deliverables &amp; Artifacts</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-foreground/[0.02] border border-border-glass space-y-1.5">
              <span className="font-semibold text-foreground block">Miro Conversational Trees</span>
              <p className="text-foreground-muted text-[11px]">Entity-intent mapping, disambiguation flows, and fallback logic.</p>
            </div>
            <div className="p-4 rounded-2xl bg-foreground/[0.02] border border-border-glass space-y-1.5">
              <span className="font-semibold text-foreground block">Role-Based Desktop Layouts</span>
              <p className="text-foreground-muted text-[11px]">Dual-pane recruiter workspace vs. floating contextual employee widget.</p>
            </div>
            <div className="p-4 rounded-2xl bg-foreground/[0.02] border border-border-glass space-y-1.5">
              <span className="font-semibold text-foreground block">State &amp; Latency Specs</span>
              <p className="text-foreground-muted text-[11px]">Progressive multi-stage loaders, OCR parsing indicators, and fallback dialogs.</p>
            </div>
            <div className="p-4 rounded-2xl bg-foreground/[0.02] border border-border-glass space-y-1.5">
              <span className="font-semibold text-foreground block">PHP Engineering Handoff</span>
              <p className="text-foreground-muted text-[11px]">Design tokens, component state matrices, and front-end visual QA.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          03. CONTEXT, STAKEHOLDERS & CONSTRAINTS
          ========================================================================= */}
      <section className="space-y-12 pt-12 border-t border-border-glass">
        <div className="space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            01 — Background &amp; Setup
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-sheen font-display">
            Business Context &amp; 3-Week Sprint Boundaries
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Business Context Story */}
          <div className="lg:col-span-7 space-y-6 text-base text-foreground-muted leading-relaxed">
            <p>
              Ascent HR and its enterprise client base were experiencing severe operational bottlenecks across two major business arms:
            </p>
            <div className="space-y-4">
              <div className="p-5 rounded-2xl liquid-glass border border-border-glass space-y-2">
                <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                  <UserCheck className="w-4 h-4 text-accent" />
                  <span>1. Talent Acquisition Bottleneck</span>
                </div>
                <p className="text-xs text-foreground-muted leading-relaxed">
                  Recruiters spent hours manually combing through hundreds of PDF and Word resumes to shortlist candidates against specific job descriptions (JDs), causing slow time-to-hire and severe reviewer fatigue.
                </p>
              </div>

              <div className="p-5 rounded-2xl liquid-glass border border-border-glass space-y-2">
                <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                  <HelpCircle className="w-4 h-4 text-accent" />
                  <span>2. Employee Operations &amp; Support Overload</span>
                </div>
                <p className="text-xs text-foreground-muted leading-relaxed">
                  HR and IT service desks were flooded with thousands of repetitive, manual tickets regarding company policies, payroll slips, statutory tax declarations, and leave entitlement rules.
                </p>
              </div>
            </div>
            <p>
              <strong>TIA</strong> was initiated to build an automated, conversational AI workforce assistant capable of intelligently screening applicants via resume parsing while delivering instant, organization-specific policy and IT answers.
            </p>
          </div>

          {/* Stakeholders & Collaboration Matrix */}
          <div className="lg:col-span-5 space-y-6">
            <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border border-border-glass space-y-5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground flex items-center gap-2">
                <Users className="w-4 h-4 text-accent" />
                <span>Lean Cross-Functional Team</span>
              </h3>
              <ul className="space-y-3 text-xs">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground">VP of Technology</span>
                    <span className="text-foreground-muted block text-[11px]">Strategic direction, architectural feasibility &amp; executive alignment.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground">PHP &amp; Backend Engineering Team</span>
                    <span className="text-foreground-muted block text-[11px]">API contracts, data ingestion pipelines, OCR parser, and system logic.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground">Core HR &amp; Talent Acquisition Teams</span>
                    <span className="text-foreground-muted block text-[11px]">Subject-matter expertise, ATS recruitment workflows, policy mapping.</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground">IT Operations &amp; Security Admins</span>
                    <span className="text-foreground-muted block text-[11px]">Security boundaries, statutory rules, ticket escalation protocols.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4 Core Constraints */}
        <div className="space-y-4 pt-4">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            Technical Boundaries &amp; Realities
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl liquid-glass border border-border-glass space-y-2">
              <div className="w-8 h-8 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                <Clock className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-foreground">Ultra-Tight Timebox</h4>
              <p className="text-xs text-foreground-muted leading-relaxed">
                3-week end-to-end design turnaround from discovery to developer handoff and staging QA.
              </p>
            </div>

            <div className="p-5 rounded-2xl liquid-glass border border-border-glass space-y-2">
              <div className="w-8 h-8 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                <Zap className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-foreground">Latency Perception</h4>
              <p className="text-xs text-foreground-muted leading-relaxed">
                AI inference, OCR parsing, and database queries introduced latency requiring deliberate feedback states.
              </p>
            </div>

            <div className="p-5 rounded-2xl liquid-glass border border-border-glass space-y-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-foreground">Zero Hallucinations</h4>
              <p className="text-xs text-foreground-muted leading-relaxed">
                Statutory answers regarding tax laws, leave quotas, and payroll could not risk ambiguity or fabricated clauses.
              </p>
            </div>

            <div className="p-5 rounded-2xl liquid-glass border border-border-glass space-y-2">
              <div className="w-8 h-8 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                <Lock className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-foreground">Data Privacy &amp; Isolation</h4>
              <p className="text-xs text-foreground-muted leading-relaxed">
                High sensitivity around salary disclosures, candidate CVs, and multi-tenant enterprise data segregation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          04. THE CORE PROBLEM & USER BREAKDOWN
          ========================================================================= */}
      <section className="space-y-12 pt-12 border-t border-border-glass">
        <div className="space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            02 — The Problem
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-sheen font-display">
            Dual Operational Bottlenecks Across the Enterprise
          </h2>
          <p className="text-base text-foreground-muted max-w-3xl">
            Recruiters were drowning in manual resume screening, while HR and IT teams were bogged down answering repetitive payroll, leave, attendance, and policy queries—stalling hiring velocity and creating SLA timeouts.
          </p>
        </div>

        {/* 3-Column User Pain Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* For Recruiters */}
          <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border border-border-glass space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/15 flex items-center justify-center text-indigo-400">
              <Search className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-wider font-bold text-foreground-muted">User Archetype 01</span>
              <h3 className="text-lg font-bold text-foreground">Recruiters &amp; Hiring Managers</h3>
            </div>
            <ul className="space-y-2.5 text-xs text-foreground-muted leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                <span>Evaluating hundreds of resumes against detailed JDs was a tedious, manual task.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                <span>Sorting through legacy ATS tables caused severe context switching and delayed hiring cycles.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent font-bold">•</span>
                <span>Lack of unified candidate scoring led to inconsistent shortlisting criteria.</span>
              </li>
            </ul>
          </div>

          {/* For HR & IT Helpdesk */}
          <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border border-border-glass space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/15 flex items-center justify-center text-amber-400">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-wider font-bold text-foreground-muted">User Archetype 02</span>
              <h3 className="text-lg font-bold text-foreground">HR &amp; IT Helpdesk Teams</h3>
            </div>
            <ul className="space-y-2.5 text-xs text-foreground-muted leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span>Answering identical questions regarding leave allowances, flexi benefits, and tax rules took hours daily.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span>Support queues became backlogged, leading to high SLA timeouts and burned-out agents.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span>No automated triage to deflect routine inquiries from high-priority human escalation.</span>
              </li>
            </ul>
          </div>

          {/* For Employees */}
          <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border border-border-glass space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-purple-500/15 flex items-center justify-center text-purple-400">
              <Users className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-wider font-bold text-foreground-muted">User Archetype 03</span>
              <h3 className="text-lg font-bold text-foreground">Enterprise Employees</h3>
            </div>
            <ul className="space-y-2.5 text-xs text-foreground-muted leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold">•</span>
                <span>Accessing internal policy documentation was convoluted across multi-nested intranet pages.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold">•</span>
                <span>Routine queries regarding payroll slips or leave encashment waited days for support response.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400 font-bold">•</span>
                <span>High frustration when tickets were auto-closed without clear statutory citations or guidance.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* =========================================================================
          05. SOLUTION STRATEGY & ROLE-BASED ERGONOMICS
          ========================================================================= */}
      <section className="space-y-12 pt-12 border-t border-border-glass">
        <div className="space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            03 — Solution Strategy
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-sheen font-display">
            The Hybrid Conversational Workspace
          </h2>
          <p className="text-base text-foreground-muted max-w-3xl leading-relaxed">
            Rather than building a generic standalone chatbot, the strategy centered on a <strong>hybrid conversational workspace</strong>: pairing conversational prompts with structured, interactive data widgets and establishing strict <strong>role-based ergonomics</strong>.
          </p>
        </div>

        {/* Interactive Role Switcher Showcase */}
        <div className="p-6 sm:p-10 rounded-3xl liquid-glass border border-border-glass space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border-glass/60 pb-6">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-foreground">Role-Adaptive Interaction Architecture</h3>
              <p className="text-xs text-foreground-muted">Tailoring density, interface controls, and viewport footprint to user intent.</p>
            </div>

            {/* Toggle Tabs */}
            <div className="flex items-center gap-2 p-1 rounded-full bg-foreground/[0.04] border border-border-glass">
              <button
                onClick={() => setActiveTab('recruiter')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeTab === 'recruiter'
                    ? 'bg-foreground text-background shadow-md'
                    : 'text-foreground-muted hover:text-foreground'
                }`}
              >
                Recruiter / Admin Mode
              </button>
              <button
                onClick={() => setActiveTab('employee')}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeTab === 'employee'
                    ? 'bg-foreground text-background shadow-md'
                    : 'text-foreground-muted hover:text-foreground'
                }`}
              >
                Employee Mode
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'recruiter' ? (
              <motion.div
                key="recruiter"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-xs font-mono font-bold text-accent px-2.5 py-1 rounded-full liquid-glass border border-accent/30">
                    Dual-Pane Workspace
                  </span>
                  <h4 className="text-xl font-bold text-foreground">High-Density Candidate Evaluation</h4>
                  <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                    Designed for heavy ATS power-users. Features natural language conversational search on the left while populating structured candidate dossiers, skill match %, and multi-attribute filters on the right.
                  </p>
                  <ul className="space-y-2 text-xs text-foreground-muted">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                      <span>Conversational query: "Show 5+ yrs React developers in Bangalore"</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                      <span>Instant match score telemetry (10% to 80% fit)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                      <span>Thumbs up / down training feedback loop</span>
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-border-glass shadow-xl bg-slate-950">
                  <img
                    src="/images/case-studies/tia/tia-ats-validation.png"
                    alt="TIA Recruiter Mode ATS Screening"
                    className="w-full object-cover [object-position:center_top]"
                  />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="employee"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-xs font-mono font-bold text-purple-400 px-2.5 py-1 rounded-full liquid-glass border border-purple-500/30">
                    Floating Contextual Assistant
                  </span>
                  <h4 className="text-xl font-bold text-foreground">Non-Intrusive Statutory Self-Service</h4>
                  <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">
                    Designed for everyday enterprise staff. A minimal widget accessible across intranet pages that answers policy questions with verified statutory citations, payslip breakdowns, and 1-click human manager escalation.
                  </p>
                  <ul className="space-y-2 text-xs text-foreground-muted">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                      <span>Direct answers with verified policy document citations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                      <span>Instant payslip, FBP &amp; IT declaration guidance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                      <span>1-Click ticket escalation with pre-filled context</span>
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-border-glass shadow-xl bg-slate-950">
                  <img
                    src="/images/case-studies/tia/tia-test-tune-faqs.png"
                    alt="TIA Employee Policy Ingestion and Q&A Engine"
                    className="w-full object-cover [object-position:center_top]"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Miro Conversational Architecture Dropzone */}
        <div className="space-y-3 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-foreground-muted flex items-center gap-1.5">
              <Workflow className="w-3.5 h-3.5 text-accent" />
              <span>Miro Artifact: Conversational Flow Mapping &amp; Intent Disambiguation</span>
            </span>
            <span className="text-[11px] font-mono text-accent">Artifact: Miro Architecture</span>
          </div>
          <ImagePlaceholder
            aspectRatio="16:9"
            label="Miro Conversational Trees & Fallback Logic"
            sublabel="Comprehensive conversational decision tree mapped in Miro: intent classification, disambiguation prompts, low-confidence disclaimers, and human agent handoff logic."
          />
        </div>
      </section>

      {/* =========================================================================
          06. 3-WEEK RAPID SPRINT METHODOLOGY
          ========================================================================= */}
      <section className="space-y-12 pt-12 border-t border-border-glass">
        <div className="space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            04 — Process &amp; Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-sheen font-display">
            3-Week Rapid Design Sprint
          </h2>
          <p className="text-base text-foreground-muted max-w-2xl leading-relaxed">
            From initial research and intent mapping to interactive Adobe XD prototyping, developer handoff, and visual staging QA.
          </p>
        </div>

        {/* 3-Week Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Week 1 */}
          <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border border-border-glass space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-accent px-2.5 py-0.5 rounded-full liquid-glass border border-accent/30">
                Week 01
              </span>
              <span className="text-[11px] text-foreground-muted uppercase font-semibold">Discovery</span>
            </div>
            <h3 className="text-lg font-bold text-foreground">Discovery, Benchmarking &amp; Intent Architecture</h3>
            <ul className="space-y-2.5 text-xs text-foreground-muted leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                <span><strong>Stakeholder Interviews:</strong> Shadowed recruiters and HR leads to audit support ticket categories and screening pain points.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                <span><strong>Tier-1 Banking Benchmarking:</strong> Analyzed high-density financial bots for trust-building patterns during high-latency queries.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                <span><strong>Miro Intent Trees:</strong> Mapped entity extraction, fallback matrices, and statutory policy citation schemas.</span>
              </li>
            </ul>
          </div>

          {/* Week 2 */}
          <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border border-border-glass space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-accent px-2.5 py-0.5 rounded-full liquid-glass border border-accent/30">
                Week 02
              </span>
              <span className="text-[11px] text-foreground-muted uppercase font-semibold">Interaction UI</span>
            </div>
            <h3 className="text-lg font-bold text-foreground">Role-Based Architecture &amp; Latency Engineering</h3>
            <ul className="space-y-2.5 text-xs text-foreground-muted leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                <span><strong>Adobe XD Layouts:</strong> Crafted dual-pane recruiter ATS workspace and non-intrusive floating employee assistant.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                <span><strong>State &amp; Latency Engineering:</strong> Designed multi-stage skeleton loaders and status-aware progress indicators.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                <span><strong>Edge-Case Matrix:</strong> Designed out-of-policy dialog states, low-confidence disclaimers, and human handoff triggers.</span>
              </li>
            </ul>
          </div>

          {/* Week 3 */}
          <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border border-border-glass space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-accent px-2.5 py-0.5 rounded-full liquid-glass border border-accent/30">
                Week 03
              </span>
              <span className="text-[11px] text-foreground-muted uppercase font-semibold">QA &amp; Handoff</span>
            </div>
            <h3 className="text-lg font-bold text-foreground">Usability Testing, PHP Handoff &amp; Visual QA</h3>
            <ul className="space-y-2.5 text-xs text-foreground-muted leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                <span><strong>Prototype Walkthroughs:</strong> Tested desktop click-through prototypes with recruiters and employees to validate scanning speed.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                <span><strong>Technical Specs:</strong> Delivered component state matrices, error handling specs, and design tokens to PHP engineers.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                <span><strong>Staging Visual QA:</strong> Conducted comprehensive visual audits during front-end staging to resolve layout discrepancies.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* =========================================================================
          07. DEEP-DIVE SOLUTION PILLARS WITH LIVE SCREENS
          ========================================================================= */}
      <section className="space-y-16 pt-12 border-t border-border-glass">
        <div className="space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            05 — Key Design Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-sheen font-display">
            Deep Dive: Core Architectural Pillars
          </h2>
        </div>

        {/* PILLAR 01: Intelligent ATS Candidate Screening */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-accent uppercase">Pillar 01</span>
            <h3 className="text-2xl font-bold text-foreground">
              Intelligent ATS Screening &amp; Profile Match Scores
            </h3>
            <p className="text-sm text-foreground-muted max-w-3xl leading-relaxed">
              Natural-language search powered by OCR resume parsing. Recruiters query requirements (e.g. <em>"Show React Developers with 5+ yrs in Bangalore"</em>) and instantly receive candidate cards with quantified match scores (10% to 80%) and multi-attribute filters.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden liquid-glass border border-border-glass p-3 sm:p-6 shadow-2xl">
            <DeviceMockup type="macbook-screen" title="TIA ATS Candidate Screening — Model Validation Console">
              <img
                src="/images/case-studies/tia/tia-ats-validation.png"
                alt="TIA ATS Candidate Screening with Match Scores"
                className="w-full object-cover [object-position:center_top]"
                loading="lazy"
              />
            </DeviceMockup>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-2xl liquid-glass border border-border-glass space-y-1">
              <span className="font-bold text-foreground block">Quantified Match Scores</span>
              <p className="text-foreground-muted text-[11px]">Visual color-coded score indicators (10% to 80%) reflect candidate skill parity against JDs.</p>
            </div>
            <div className="p-4 rounded-2xl liquid-glass border border-border-glass space-y-1">
              <span className="font-bold text-foreground block">Multi-Facet Filter Hierarchy</span>
              <p className="text-foreground-muted text-[11px]">Dynamic facets for Job Type, City, Core Skills, Company Industry, and Salary Range slider.</p>
            </div>
            <div className="p-4 rounded-2xl liquid-glass border border-border-glass space-y-1">
              <span className="font-bold text-foreground block">OCR Resume Transparency</span>
              <p className="text-foreground-muted text-[11px]">Parses PDF, JPEG, and Word resumes with exact file size and verification status.</p>
            </div>
          </div>
        </div>

        {/* PILLAR 02: Human-in-the-Loop Model Fine-Tuning */}
        <div className="space-y-6 pt-10 border-t border-border-glass/60">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-accent uppercase">Pillar 02</span>
            <h3 className="text-2xl font-bold text-foreground">
              Human-in-the-Loop Calibration (Test &amp; Tune)
            </h3>
            <p className="text-sm text-foreground-muted max-w-3xl leading-relaxed">
              To continuously refine recommendation precision without requiring technical coding knowledge, designed a one-click <strong>Thumbs Up / Thumbs Down</strong> feedback loop directly inside the recruiter evaluation stream.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden liquid-glass border border-border-glass p-3 sm:p-6 shadow-2xl">
            <DeviceMockup type="macbook-screen" title="TIA Model Calibration — Test & Tune Candidates">
              <img
                src="/images/case-studies/tia/tia-test-tune-candidates.png"
                alt="TIA Model Calibration and Feedback Loop"
                className="w-full object-cover [object-position:center_top]"
                loading="lazy"
              />
            </DeviceMockup>
          </div>

          <div className="p-5 rounded-2xl liquid-glass border border-border-glass flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-400">
                <ThumbsUp className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-foreground block">Continuous Reinforcement Learning</span>
                <span className="text-foreground-muted text-[11px]">Recruiter feedback feeds directly into model retraining pipelines for higher scoring accuracy.</span>
              </div>
            </div>
            <span className="font-mono text-accent text-xs">1,000 FAQ / JD Batches Processed</span>
          </div>
        </div>

        {/* PILLAR 03: Contextual Policy & FAQ Ingestion */}
        <div className="space-y-6 pt-10 border-t border-border-glass/60">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-accent uppercase">Pillar 03</span>
            <h3 className="text-2xl font-bold text-foreground">
              Contextual Statutory HR Policy &amp; FAQ Ingestion
            </h3>
            <p className="text-sm text-foreground-muted max-w-3xl leading-relaxed">
              Direct policy answers extracted from client documentation—complete with statutory compliance clauses, investment declaration formulas, and flexible benefit plan (FBP) navigation.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden liquid-glass border border-border-glass p-3 sm:p-6 shadow-2xl">
            <DeviceMockup type="macbook-screen" title="TIA Policy Ingestion — Searched FAQ Results & Statutory Clauses">
              <img
                src="/images/case-studies/tia/tia-test-tune-faqs.png"
                alt="TIA FAQ Results and Statutory Clauses"
                className="w-full object-cover [object-position:center_top]"
                loading="lazy"
              />
            </DeviceMockup>
          </div>
        </div>
      </section>

      {/* =========================================================================
          08. TECHNICAL CHALLENGES & ENTERPRISE GUARDRAILS
          ========================================================================= */}
      <section className="space-y-12 pt-12 border-t border-border-glass">
        <div className="space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            06 — Challenges &amp; Trade-offs
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-sheen font-display">
            Designing Within Real Technical Boundaries
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Challenge 01 */}
          <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border border-border-glass space-y-4">
            <div className="text-xs font-mono font-bold text-accent uppercase">Trade-off 01</div>
            <div>
              <span className="text-[11px] text-foreground-muted uppercase font-bold block">The Challenge</span>
              <h3 className="text-base font-bold text-foreground mt-0.5">Information Density vs. Ergonomics</h3>
            </div>
            <p className="text-xs text-foreground-muted leading-relaxed">
              ATS shortlisting requires comprehensive resume data, while conversational chats are fundamentally vertical and narrow.
            </p>
            <div className="pt-3 border-t border-border-glass/40 space-y-1">
              <span className="text-[11px] text-accent uppercase font-bold block">Design Solution</span>
              <p className="text-xs text-foreground font-medium">
                Separated views by role: lightweight floating assistant for employees, integrated split-screen workspace with side-by-side comparison tables for recruiters.
              </p>
            </div>
          </div>

          {/* Challenge 02 */}
          <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border border-border-glass space-y-4">
            <div className="text-xs font-mono font-bold text-accent uppercase">Trade-off 02</div>
            <div>
              <span className="text-[11px] text-foreground-muted uppercase font-bold block">The Challenge</span>
              <h3 className="text-base font-bold text-foreground mt-0.5">AI Latency &amp; User Perception</h3>
            </div>
            <p className="text-xs text-foreground-muted leading-relaxed">
              OCR resume parsing and multi-tenant policy queries introduced processing delays, creating risk of user abandonment.
            </p>
            <div className="pt-3 border-t border-border-glass/40 space-y-1">
              <span className="text-[11px] text-accent uppercase font-bold block">Design Solution</span>
              <p className="text-xs text-foreground font-medium">
                Engineered multi-stage skeleton loaders with status-aware feedback (<em>"Analyzing candidate skills against JD..."</em>) inspired by top banking bots.
              </p>
            </div>
          </div>

          {/* Challenge 03 */}
          <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border border-border-glass space-y-4">
            <div className="text-xs font-mono font-bold text-accent uppercase">Trade-off 03</div>
            <div>
              <span className="text-[11px] text-foreground-muted uppercase font-bold block">The Challenge</span>
              <h3 className="text-base font-bold text-foreground mt-0.5">Zero-Hallucination Compliance</h3>
            </div>
            <p className="text-xs text-foreground-muted leading-relaxed">
              Inaccurate advice on statutory tax exemptions or leave quotas could lead to legal disputes or payroll penalties.
            </p>
            <div className="pt-3 border-t border-border-glass/40 space-y-1">
              <span className="text-[11px] text-accent uppercase font-bold block">Design Solution</span>
              <p className="text-xs text-foreground font-medium">
                Strictly constrained answers to verified company policy documents with transparent citations and 1-click routing to human managers for policy exceptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          09. RESULTS, QUALITATIVE FEEDBACK & TESTIMONIALS
          ========================================================================= */}
      <section className="space-y-12 pt-12 border-t border-border-glass">
        <div className="space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            07 — Impact &amp; Reception
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-sheen font-display">
            Measurable Outcomes &amp; Stakeholder Feedback
          </h2>
        </div>

        {/* Stakeholder Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="liquid-glass-card rounded-3xl p-8 border border-border-glass space-y-4 relative">
            <div className="text-3xl font-serif text-accent opacity-40">“</div>
            <blockquote className="text-sm sm:text-base text-foreground font-medium leading-relaxed -mt-4">
              Rather than drowning in hundreds of portal resumes, our team can immediately zero in on the most eligible profiles based on the exact JD criteria. It has cut our initial screening effort by more than half.
            </blockquote>
            <div className="pt-2 border-t border-border-glass/40">
              <div className="font-bold text-sm text-foreground">Talent Acquisition Lead</div>
              <div className="text-xs text-foreground-muted">Enterprise Client Recruitment Team</div>
            </div>
          </div>

          <div className="liquid-glass-card rounded-3xl p-8 border border-border-glass space-y-4 relative">
            <div className="text-3xl font-serif text-accent opacity-40">“</div>
            <blockquote className="text-sm sm:text-base text-foreground font-medium leading-relaxed -mt-4">
              Employees no longer have to wait days for a simple leave policy clarification or payslip query, and tickets aren't timing out unresolved. The instant policy citations give everyone confidence.
            </blockquote>
            <div className="pt-2 border-t border-border-glass/40">
              <div className="font-bold text-sm text-foreground">HR Operations Lead</div>
              <div className="text-xs text-foreground-muted">Ascent HR Client Services</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. REFLECTIONS & V2 ROADMAP
          ========================================================================= */}
      <section className="space-y-12 pt-12 border-t border-border-glass">
        <div className="space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            08 — Reflections
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-sheen font-display">
            Senior UX Learnings &amp; Future V2 Vision
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Senior Design Reflections */}
          <div className="p-6 sm:p-8 rounded-3xl liquid-glass border border-border-glass space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>Key Designer Reflections</span>
            </h3>
            <ul className="space-y-3 text-xs text-foreground-muted leading-relaxed">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Designing Within Technical Realities:</strong> Building enterprise AI under statutory constraints reinforced that UX leads must deeply understand model boundaries. Designing for confidence, accuracy, and clear fallback paths is just as important as designing happy paths.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Restraint Over Complexity:</strong> Rather than overwhelming users with raw conversational transcripts, the biggest UX win was showing concise, role-specific cards with only the data necessary to take the next action.
                </span>
              </li>
            </ul>
          </div>

          {/* V2 Future Roadmap */}
          <div className="p-6 sm:p-8 rounded-3xl liquid-glass border border-border-glass space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground flex items-center gap-2">
              <Zap className="w-4 h-4 text-accent" />
              <span>Future Roadmap (V2 Opportunities)</span>
            </h3>
            <div className="space-y-3 text-xs text-foreground-muted leading-relaxed">
              <div className="p-4 rounded-2xl bg-foreground/[0.02] border border-border-glass space-y-1">
                <span className="font-semibold text-foreground block">Proactive Seasonal Nudges</span>
                <p className="text-[11px]">Automated tax declaration assistance and statutory reminder alerts before end-of-year compliance deadlines.</p>
              </div>
              <div className="p-4 rounded-2xl bg-foreground/[0.02] border border-border-glass space-y-1">
                <span className="font-semibold text-foreground block">Predictive Interview Scheduling</span>
                <p className="text-[11px]">Expanding natural-language screening directly into automated calendar invite booking from comparison cards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};
