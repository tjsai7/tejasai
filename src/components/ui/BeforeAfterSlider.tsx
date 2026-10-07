import { useState, useRef, useCallback, FC, ReactNode } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeLabel?: string;
  afterLabel?: string;
  beforeContent: ReactNode;
  afterContent: ReactNode;
  aspectRatio?: '16:9' | '16:10' | '4:3';
  className?: string;
}

export const BeforeAfterSlider: FC<BeforeAfterSliderProps> = ({
  beforeLabel = 'Before (Legacy)',
  afterLabel = 'After (Redesign)',
  beforeContent,
  afterContent,
  aspectRatio = '16:10',
  className = '',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const aspectClass = {
    '16:9': 'aspect-[16/9]',
    '16:10': 'aspect-[16/10]',
    '4:3': 'aspect-[4/3]',
  }[aspectRatio];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      className={`relative select-none overflow-hidden rounded-2xl border border-border-glass shadow-glass bg-card-bg slider-touch-contain ${aspectClass} ${className}`}
      role="region"
      aria-label="Before and After Comparison"
    >
      {/* After Layer (Underneath / Right side) */}
      <div className="absolute inset-0 w-full h-full">
        {afterContent}
        <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full liquid-glass text-xs font-semibold text-accent border border-accent/30 shadow-sm">
          {afterLabel}
        </div>
      </div>

      {/* Before Layer (Clipped / Left side) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        {beforeContent}
        <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full liquid-glass text-xs font-semibold text-foreground-muted border border-border-glass shadow-sm">
          {beforeLabel}
        </div>
      </div>

      {/* Divider Bar & Glass Handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-accent/80 shadow-[0_0_12px_rgba(107,92,255,0.6)] cursor-ew-resize z-20"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
      >
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full liquid-glass border border-accent/40 shadow-xl flex items-center justify-center text-foreground hover:scale-110 active:scale-95 transition-transform"
          tabIndex={0}
          role="slider"
          aria-valuenow={Math.round(sliderPosition)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Comparison slider"
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') setSliderPosition((p) => Math.max(0, p - 5));
            if (e.key === 'ArrowRight') setSliderPosition((p) => Math.min(100, p + 5));
          }}
        >
          <ChevronsLeftRight className="w-5 h-5 text-accent" />
        </div>
      </div>
    </div>
  );
};
