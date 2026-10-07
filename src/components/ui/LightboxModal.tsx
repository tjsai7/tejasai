import { useEffect, FC, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  caption?: string;
}

export const LightboxModal: FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  caption,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/85 backdrop-blur-3xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 max-w-6xl w-full max-h-[90vh] flex flex-col liquid-glass rounded-3xl overflow-hidden border border-border-glass shadow-2xl"
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border-glass">
              <div>
                {title && <h3 className="text-sm font-semibold text-foreground">{title}</h3>}
                {caption && <p className="text-xs text-foreground-muted">{caption}</p>}
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full liquid-glass hover:bg-surface-glass-hover text-foreground hover:text-accent transition-colors border border-border-glass"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Viewport Content */}
            <div className="flex-1 overflow-auto p-4 sm:p-8 flex items-center justify-center bg-foreground/[0.02]">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export const ExpandableImageWrapper: FC<{
  children: ReactNode;
  onClick?: () => void;
  caption?: string;
  title?: string;
}> = ({ children, onClick, caption, title }) => {
  return (
    <div
      onClick={onClick}
      className="relative group cursor-pointer overflow-hidden rounded-2xl border border-border-glass"
      title={title || caption || 'Click to expand'}
    >
      {children}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-semibold text-foreground pointer-events-none">
        <span className="px-3 py-1.5 rounded-full liquid-glass border border-border-glass shadow-lg flex items-center gap-1.5">
          <ZoomIn className="w-3.5 h-3.5 text-accent" />
          <span>{title || 'Click to expand'}</span>
        </span>
      </div>
    </div>
  );
};
