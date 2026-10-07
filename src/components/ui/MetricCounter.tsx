import { FC } from 'react';
import { motion } from 'framer-motion';

interface MetricCounterProps {
  value: string;
  label: string;
  description?: string;
  className?: string;
  delay?: number;
}

export const MetricCounter: FC<MetricCounterProps> = ({
  value,
  label,
  description,
  className = '',
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`liquid-glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-border-glass relative overflow-hidden group ${className}`}
    >
      {/* Subtle background glow on hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-colors pointer-events-none" />

      <div>
        <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-sheen mb-2 font-display">
          {value}
        </div>
        <h4 className="text-sm sm:text-base font-semibold text-foreground tracking-tight">
          {label}
        </h4>
      </div>

      {description && (
        <p className="text-xs sm:text-sm text-foreground-muted mt-3 leading-relaxed border-t border-border-glass/40 pt-3">
          {description}
        </p>
      )}
    </motion.div>
  );
};
