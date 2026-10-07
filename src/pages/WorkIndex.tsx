import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, SlidersHorizontal } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projectsData';
import { DeviceMockup } from '../components/ui/DeviceMockup';
import { MockupVisualizer } from '../components/ui/MockupVisualizer';
import { usePageSEO } from '../hooks/usePageSEO';

const CATEGORIES = [
  'All Work',
  'HCM & HRMS',
  'FinTech & Payroll',
  'Enterprise SaaS',
  'Conversational AI',
  'Design Systems',
  'Mobile Apps',
];

export const WorkIndex = () => {
  usePageSEO({
    title: 'Selected Work & Case Studies',
    description: 'Explore 6 comprehensive enterprise UX case studies across SaaS, HRMS, FinTech, and Conversational AI.',
  });

  const [selectedCategory, setSelectedCategory] = useState('All Work');

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (selectedCategory === 'All Work') return true;
    if (selectedCategory === 'HCM & HRMS')
      return project.category.includes('HCM') || project.category.includes('HRMS') || project.category.includes('HR');
    if (selectedCategory === 'FinTech & Payroll')
      return project.category.includes('FinTech') || project.category.includes('Payroll') || project.category.includes('Financial');
    if (selectedCategory === 'Enterprise SaaS')
      return project.category.includes('SaaS') || project.category.includes('Enterprise') || project.category.includes('Wealth');
    if (selectedCategory === 'Conversational AI')
      return project.category.includes('AI') || project.category.includes('Conversational');
    if (selectedCategory === 'Design Systems')
      return project.category.includes('Design System') || project.tags.includes('Design System');
    if (selectedCategory === 'Mobile Apps')
      return project.platform.toLowerCase().includes('mobile') || project.category.includes('Mobile');
    return true;
  });

  return (
    <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 pt-32 pb-24 space-y-16">
      {/* Work Page Header */}
      <section className="space-y-6 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-xs font-semibold uppercase tracking-wider text-accent border border-accent/25">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Case Study Directory</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-sheen font-display">
          Crafted for scale, clarity, and measurable impact.
        </h1>

        <p className="text-base sm:text-xl text-foreground-muted leading-relaxed">
          Deep dives into complex product challenges across enterprise SaaS, HRMS, FinTech, and AI copilots. Each case study documents the end-to-end UX strategy, research, information architecture, and validated outcomes.
        </p>
      </section>

      {/* Category Filter Chips */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-foreground-muted uppercase tracking-wider">
          <SlidersHorizontal className="w-3.5 h-3.5 text-accent" />
          <span>Filter by Domain</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all border ${
                  isActive
                    ? 'bg-foreground text-background border-foreground font-semibold shadow-md'
                    : 'liquid-glass border-border-glass text-foreground-muted hover:text-foreground hover:bg-surface-glass-hover'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Filtered Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.article
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="group liquid-glass-card rounded-3xl p-6 sm:p-8 border border-border-glass flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Top Number & Category */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-accent px-2.5 py-0.5 rounded-full liquid-glass border border-accent/30">
                    {project.projectNumber}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-foreground-muted">
                    {project.company}
                  </span>
                </div>

                {/* Project Title & Tagline */}
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-xs text-foreground-muted uppercase font-medium tracking-wide mt-1">
                    {project.category}
                  </p>
                  <p className="text-sm text-foreground-muted mt-3 line-clamp-2 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Live Preview Thumbnail Container */}
                <Link
                  to={`/work/${project.id}`}
                  className="block relative rounded-xl overflow-hidden border border-border-glass bg-foreground/[0.02] p-3 group-hover:border-accent/40 transition-colors"
                >
                  <div className="aspect-[16/10] overflow-hidden rounded-lg">
                    {project.platform.toLowerCase().includes('mobile') ? (
                      <div className="w-full h-full flex items-center justify-center p-2">
                        <DeviceMockup type="mobile" className="w-[180px] sm:w-[200px]">
                          <MockupVisualizer projectId={project.id} type="mobile" />
                        </DeviceMockup>
                      </div>
                    ) : (
                      <MockupVisualizer projectId={project.id} type="desktop" className="w-full h-full" />
                    )}
                  </div>
                </Link>
              </div>

              {/* Bottom Card Footer with Highlight Metric & CTA */}
              <div className="pt-4 border-t border-border-glass flex items-center justify-between gap-4">
                <div>
                  <div className="text-xl font-extrabold text-sheen">
                    {project.highlightMetric.value}
                  </div>
                  <div className="text-[11px] text-foreground-muted font-medium">
                    {project.highlightMetric.label}
                  </div>
                </div>

                <Link
                  to={`/work/${project.id}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-foreground text-background font-semibold text-xs uppercase tracking-wider hover:opacity-90 group-hover:bg-accent group-hover:text-white transition-all shadow-sm"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
