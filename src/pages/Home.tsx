import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Sparkles, ChevronDown, Layers, 
  Cpu, Compass, CheckCircle2, Download 
} from 'lucide-react';
import { PROFILE_INFO, VERIFIED_METRICS } from '../data/profileData';
import { PROJECTS_DATA } from '../data/projectsData';
import { MetricCounter } from '../components/ui/MetricCounter';
import { MockupVisualizer } from '../components/ui/MockupVisualizer';
import { DeviceMockup } from '../components/ui/DeviceMockup';
import { HeroInteractiveMesh } from '../components/ui/HeroInteractiveMesh';
import { usePageSEO } from '../hooks/usePageSEO';

export const Home = () => {
  usePageSEO({
    title: 'Senior Product & UX Designer',
    description: '10+ years designing enterprise SaaS, HRMS, FinTech, AI, mobile and web experiences across complex product ecosystems.',
  });
  return (
    <div className="relative z-10 space-y-24 sm:space-y-36">
      {/* 01 — HERO SECTION WITH FULL-WIDTH INTERACTIVE 3D WARP MESH */}
      <section className="relative w-full min-h-[92vh] flex flex-col justify-center items-center text-center px-6 sm:px-8 pt-32 pb-20 overflow-hidden">
        {/* Full-Width Interactive Background Mesh Canvas */}
        <HeroInteractiveMesh initialStyle="perspective-warp" />

        {/* Centered Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-xs font-semibold tracking-wider uppercase text-accent border border-accent/25 shadow-sm mb-6"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>SENIOR PRODUCT &amp; UX DESIGNER</span>
        </motion.div>

        {/* Large Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.06] text-sheen max-w-4xl font-display"
        >
          {PROFILE_INFO.primaryHeadline}
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg sm:text-xl lg:text-2xl text-foreground-muted mt-6 max-w-2xl font-normal leading-relaxed"
        >
          {PROFILE_INFO.supportingCopy}
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          <a
            href="#selected-work"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-foreground text-background font-semibold text-sm hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span>Explore my work</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="/Teja_Sai_Resume.pdf"
            download="Tejasai_Thunuguntla_Resume.pdf"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full liquid-glass hover:bg-surface-glass-hover text-foreground font-semibold text-sm transition-all border border-border-glass hover:border-accent/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            title="Download Teja Sai's Resume (PDF)"
          >
            <span>Download CV</span>
            <Download className="w-4 h-4 text-accent" />
          </a>
        </motion.div>

        {/* Subtle Scroll Indicator placed cleanly below CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-14 sm:mt-18 flex flex-col items-center gap-1 text-xs text-foreground-muted pointer-events-none"
        >
          <span className="tracking-widest uppercase text-[10px] font-medium opacity-60">Scroll to explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce opacity-40 text-accent" />
        </motion.div>
        </div>
      </section>

      {/* 02 — VERIFIED METRICS ROW */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            Measurable Product Impact
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-sheen">
            Quantified Outcomes at Scale
          </h2>
          <p className="text-sm text-foreground-muted">
            Proven business and user efficiency metrics achieved across APAC enterprise platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VERIFIED_METRICS.map((metric, index) => (
            <MetricCounter
              key={metric.label}
              value={metric.value}
              label={metric.label}
              description={metric.description}
              delay={0.08 * index}
            />
          ))}
        </div>
      </section>

      {/* 03 — SELECTED WORK (EDITORIAL CARDS) */}
      <section id="selected-work" className="max-w-6xl mx-auto px-6 sm:px-8 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border-glass">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
              Case Studies
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-sheen font-display">
              Selected Work
            </h2>
            <p className="text-base sm:text-lg text-foreground-muted leading-relaxed">
              A selection of products, systems, and experiences I've designed across enterprise SaaS, HRMS, FinTech, and AI.
            </p>
          </div>

          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline group"
          >
            <span>View all 6 case studies</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Large Editorial Project Cards */}
        <div className="space-y-16 sm:space-y-24">
          {PROJECTS_DATA.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative liquid-glass-card rounded-3xl p-6 sm:p-10 border border-border-glass overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}>
                  {/* Left / Info Column */}
                  <div className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-accent px-3 py-1 rounded-full liquid-glass border border-accent/30">
                        {project.projectNumber}
                      </span>
                      <span className="text-xs font-semibold text-foreground-muted uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-foreground group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Highlight Metric Pill */}
                    <div className="p-4 rounded-2xl liquid-glass border border-border-glass space-y-1 bg-foreground/[0.02]">
                      <div className="text-2xl sm:text-3xl font-extrabold text-sheen">
                        {project.highlightMetric.value}
                      </div>
                      <div className="text-xs font-semibold text-foreground">
                        {project.highlightMetric.label}
                      </div>
                      <div className="text-[11px] text-foreground-muted">
                        {project.highlightMetric.description}
                      </div>
                    </div>

                    {/* Metadata Specs */}
                    <div className="grid grid-cols-2 gap-3 text-xs border-t border-border-glass/60 pt-4">
                      <div>
                        <span className="text-foreground-muted block text-[11px] uppercase">Company</span>
                        <span className="font-medium text-foreground">{project.company}</span>
                      </div>
                      <div>
                        <span className="text-foreground-muted block text-[11px] uppercase">Platform</span>
                        <span className="font-medium text-foreground">{project.platform}</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-2">
                      <Link
                        to={`/work/${project.id}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-semibold text-xs uppercase tracking-wider hover:opacity-90 group-hover:bg-accent group-hover:text-white transition-all shadow-md"
                      >
                        <span>Read Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Right / Visual Preview Column */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <Link
                      to={`/work/${project.id}`}
                      className="block relative rounded-2xl overflow-hidden border border-border-glass shadow-2xl group-hover:scale-[1.015] transition-transform duration-500"
                    >
                      {project.platform.toLowerCase().includes('mobile') ? (
                        <div className="bg-foreground/[0.03] p-4 sm:p-8 flex items-center justify-center min-h-[360px] sm:min-h-[460px]">
                          <DeviceMockup type="mobile">
                            <MockupVisualizer projectId={project.id} type="mobile" />
                          </DeviceMockup>
                        </div>
                      ) : (
                        <div className="bg-foreground/[0.03] p-2 sm:p-6 flex items-center justify-center min-h-[320px] sm:min-h-[420px]">
                          <DeviceMockup type="desktop" title={`${project.title} — Enterprise Workspace`}>
                            <MockupVisualizer projectId={project.id} type="desktop" />
                          </DeviceMockup>
                        </div>
                      )}
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* 04 — CORE CAPABILITIES & PHILOSOPHY */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="liquid-glass-card rounded-3xl p-8 sm:p-14 border border-border-glass space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
              Approach &amp; Discipline
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-sheen">
              Designing at the intersection of people, systems and business.
            </h2>
            <p className="text-base text-foreground-muted leading-relaxed">
              Great enterprise UX is not merely visual styling—it is the disciplined simplification of complex data architectures, strict regulatory constraints, and high-velocity operator workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 border-t border-border-glass">
            {/* Pillar 1 */}
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground">UX Strategy &amp; Research</h3>
              <p className="text-sm text-foreground-muted leading-relaxed">
                Grounding product roadmaps in user journeys, JTBD, heuristic evaluations, and field usability tests with real enterprise operators.
              </p>
              <ul className="space-y-1.5 text-xs text-foreground-muted">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-accent" /> Information Architecture</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-accent" /> Usability Benchmarking</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-accent" /> Cross-team Discovery</li>
              </ul>
            </div>

            {/* Pillar 2 */}
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-500">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Design Systems &amp; Scale</h3>
              <p className="text-sm text-foreground-muted leading-relaxed">
                Founding multi-brand design tokens, accessible components, and developer-ready specifications that accelerate squad velocity.
              </p>
              <ul className="space-y-1.5 text-xs text-foreground-muted">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-500" /> Token Architectures</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-500" /> WCAG 2.1 AA Compliance</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-500" /> Reusable UI Libraries</li>
              </ul>
            </div>

            {/* Pillar 3 */}
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-500">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground">AI &amp; Complex SaaS UX</h3>
              <p className="text-sm text-foreground-muted leading-relaxed">
                Transforming dense payroll engines, algorithmic wealth terminals, and conversational AI assistants into effortless flows.
              </p>
              <ul className="space-y-1.5 text-xs text-foreground-muted">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-purple-500" /> Conversational Copilots</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-purple-500" /> Data-dense Tables &amp; Grids</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-purple-500" /> Legacy System Modernization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
