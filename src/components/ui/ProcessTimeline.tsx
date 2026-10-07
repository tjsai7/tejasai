import { useState, FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export interface ProcessStep {
  step: string;
  title: string;
  summary: string;
  deliverables?: string[];
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
  className?: string;
}

export const ProcessTimeline: FC<ProcessTimelineProps> = ({ steps, className = '' }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Step Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {steps.map((item, index) => {
          const isActive = index === activeStep;
          return (
            <button
              key={item.step}
              onClick={() => setActiveStep(index)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-medium transition-all flex items-center gap-2 border ${
                isActive
                  ? 'bg-accent text-white border-accent shadow-md shadow-accent/25'
                  : 'liquid-glass border-border-glass text-foreground-muted hover:text-foreground hover:bg-surface-glass-hover'
              }`}
            >
              <span className="opacity-70 font-mono">{item.step}</span>
              <span>{item.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Step Content Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="liquid-glass-card rounded-2xl p-6 sm:p-8 border border-border-glass space-y-4"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
              Phase {steps[activeStep].step}
            </span>
            <span className="text-xs text-foreground-muted">
              Step {activeStep + 1} of {steps.length}
            </span>
          </div>

          <h4 className="text-xl sm:text-2xl font-bold text-foreground">
            {steps[activeStep].title}
          </h4>

          <p className="text-sm sm:text-base text-foreground-muted leading-relaxed">
            {steps[activeStep].summary}
          </p>

          {steps[activeStep].deliverables && steps[activeStep].deliverables!.length > 0 && (
            <div className="pt-4 border-t border-border-glass/60">
              <span className="text-xs uppercase font-bold tracking-wider text-foreground-muted block mb-2">
                Key Artifacts &amp; Outcomes
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {steps[activeStep].deliverables!.map((deliv, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
