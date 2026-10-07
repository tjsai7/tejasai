import { FC, ReactNode } from 'react';
import { Image as ImageIcon, UploadCloud, ZoomIn } from 'lucide-react';

interface ImagePlaceholderProps {
  label: string;
  sublabel?: string;
  aspectRatio?: '16:9' | '16:10' | '4:3' | '9:16' | '21:9';
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
  id?: string;
}

export const ImagePlaceholder: FC<ImagePlaceholderProps> = ({
  label,
  sublabel = 'Design / Screenshot Placeholder — Ready for image upload',
  aspectRatio = '16:10',
  className = '',
  children,
  onClick,
  id,
}) => {
  const aspectClasses = {
    '16:9': 'aspect-[16/9]',
    '16:10': 'aspect-[16/10]',
    '4:3': 'aspect-[4/3]',
    '9:16': 'aspect-[9/16]',
    '21:9': 'aspect-[21/9]',
  }[aspectRatio];

  return (
    <div
      id={id}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl liquid-glass border border-dashed border-border-glass-strong hover:border-accent/60 transition-all duration-300 ${aspectClasses} ${className} cursor-pointer`}
      title={`${label} (Click to inspect / replace)`}
    >
      {children ? (
        <div className="w-full h-full">{children}</div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-foreground/[0.015] group-hover:bg-foreground/[0.03] transition-colors">
          <div className="w-12 h-12 rounded-2xl liquid-glass border border-border-glass flex items-center justify-center text-foreground-muted group-hover:text-accent group-hover:scale-110 transition-all shadow-sm mb-3">
            <ImageIcon className="w-6 h-6" />
          </div>

          <span className="text-xs sm:text-sm font-bold text-foreground group-hover:text-accent transition-colors max-w-md">
            {label}
          </span>

          <span className="text-[11px] text-foreground-muted mt-1 max-w-sm flex items-center gap-1">
            <UploadCloud className="w-3 h-3 text-accent" />
            <span>{sublabel}</span>
          </span>

          <span className="mt-3 px-3 py-1 rounded-full liquid-glass text-[10px] font-mono text-foreground-muted border border-border-glass opacity-70 group-hover:opacity-100 flex items-center gap-1">
            <ZoomIn className="w-3 h-3" />
            <span>Ratio {aspectRatio}</span>
          </span>
        </div>
      )}
    </div>
  );
};
