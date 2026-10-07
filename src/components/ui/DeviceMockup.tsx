import { FC, ReactNode } from 'react';

interface DeviceMockupProps {
  type: 'mobile' | 'laptop' | 'desktop' | 'tablet';
  children?: ReactNode;
  imgSrc?: string;
  alt?: string;
  className?: string;
  title?: string;
}

export const DeviceMockup: FC<DeviceMockupProps> = ({
  type,
  children,
  imgSrc,
  alt = 'Product Interface',
  className = '',
  title = 'Enterprise Platform Interface',
}) => {
  if (type === 'mobile') {
    return (
      <div className={`relative mx-auto w-[280px] sm:w-[320px] aspect-[9/19] rounded-[44px] p-3 bg-neutral-900/90 shadow-2xl border-[4px] border-neutral-700/60 dark:border-neutral-800 ${className}`}>
        {/* Dynamic Island / Speaker */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30 flex items-center justify-end px-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#1c1c1e] border border-neutral-800" />
        </div>

        {/* Screen Area */}
        <div className="relative w-full h-full rounded-[34px] overflow-hidden bg-background border border-border-glass flex flex-col">
          {imgSrc ? (
            <img src={imgSrc} alt={alt} className="w-full h-full object-cover" loading="lazy" />
          ) : (
            children
          )}
          {/* Home indicator bar */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-foreground/20 rounded-full z-20 pointer-events-none" />
        </div>
      </div>
    );
  }

  if (type === 'laptop') {
    return (
      <div className={`relative mx-auto w-full max-w-4xl ${className}`}>
        {/* Screen Frame */}
        <div className="relative aspect-[16/10] bg-neutral-950 rounded-t-2xl p-2.5 sm:p-3 border border-neutral-800 shadow-2xl">
          {/* Camera Notch Dot */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-neutral-800 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-neutral-900" />
          </div>

          {/* Screen Content */}
          <div className="relative w-full h-full rounded-lg overflow-hidden bg-background border border-border-glass">
            {imgSrc ? (
              <img src={imgSrc} alt={alt} className="w-full h-full object-cover" loading="lazy" />
            ) : (
              children
            )}
          </div>
        </div>

        {/* Laptop Base Chin */}
        <div className="relative h-3 sm:h-4 bg-gradient-to-b from-neutral-300 to-neutral-400 dark:from-neutral-700 dark:to-neutral-800 rounded-b-xl shadow-lg border-t border-neutral-400/40">
          {/* Trackpad indentation notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 sm:w-28 h-1 bg-neutral-500/40 rounded-b-sm" />
        </div>
      </div>
    );
  }

  if (type === 'tablet') {
    return (
      <div className={`relative mx-auto w-full max-w-2xl aspect-[4/3] rounded-[32px] p-3 sm:p-4 bg-neutral-900 border-[3px] border-neutral-700 shadow-2xl ${className}`}>
        {/* Camera */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-neutral-700" />
        
        {/* Screen Content */}
        <div className="w-full h-full rounded-[22px] overflow-hidden bg-background border border-border-glass">
          {imgSrc ? (
            <img src={imgSrc} alt={alt} className="w-full h-full object-cover" loading="lazy" />
          ) : (
            children
          )}
        </div>
      </div>
    );
  }

  // Desktop Monitor Frame
  return (
    <div className={`relative mx-auto w-full max-w-5xl ${className}`}>
      <div className="relative aspect-[16/10] bg-neutral-950 rounded-2xl p-3 border border-neutral-800 shadow-2xl flex flex-col">
        {/* Browser / OS Chrome bar */}
        <div className="flex items-center justify-between px-3 py-1.5 mb-2 border-b border-white/5 text-xs text-neutral-400">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <div className="text-[11px] font-mono tracking-tight text-neutral-400/80 px-3 py-0.5 rounded-md bg-white/5 truncate max-w-xs sm:max-w-md">
            {title}
          </div>
          <div className="w-10" />
        </div>

        {/* Screen viewport */}
        <div className="relative flex-1 rounded-lg overflow-hidden bg-background border border-border-glass">
          {imgSrc ? (
            <img src={imgSrc} alt={alt} className="w-full h-full object-cover" loading="lazy" />
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
};
