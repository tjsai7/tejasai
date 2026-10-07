import { useState, useEffect, useRef, FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Grid3X3, Waves, CircleDot, Network, Orbit, Eye } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export type MeshStyle = 'perspective-warp' | 'liquid-wave' | 'dot-matrix' | 'gradient-mesh' | 'node-constellation';

interface HeroInteractiveMeshProps {
  initialStyle?: MeshStyle;
  showSelector?: boolean;
}

export const HeroInteractiveMesh: FC<HeroInteractiveMeshProps> = ({
  initialStyle = 'perspective-warp',
  showSelector = true,
}) => {
  const { theme } = useTheme();
  const [activeStyle, setActiveStyle] = useState<MeshStyle>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('hero-mesh-style') as MeshStyle;
      if (saved) return saved;
    }
    return initialStyle;
  });

  const [isControlsOpen, setIsControlsOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, radius: 240, active: false });

  const handleStyleChange = (style: MeshStyle) => {
    setActiveStyle(style);
    localStorage.setItem('hero-mesh-style', style);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left;
      mouseRef.current.targetY = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Node constellation particles
    const particles: Array<{ x: number; y: number; vx: number; vy: number; radius: number }> = [];
    const numParticles = 48;
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1.5,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;

      // Smooth mouse easing
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      const isDark = theme === 'dark';
      const accentColor = isDark ? '139, 124, 255' : '107, 92, 255';
      const gridStroke = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)';

      // 1. PERSPECTIVE 3D WARP GRID (Full-Width Responsive Engine)
      if (activeStyle === 'perspective-warp') {
        const gridSpacing = 44;
        ctx.lineWidth = 0.9;
        ctx.strokeStyle = gridStroke;

        const numCols = Math.ceil(width / gridSpacing);
        const numRows = Math.ceil(height / gridSpacing);

        // Vertical lines
        for (let i = 0; i <= numCols; i++) {
          ctx.beginPath();
          for (let j = 0; j <= numRows; j++) {
            const x = i * gridSpacing;
            const y = j * gridSpacing;
            const dx = mouseRef.current.x - x;
            const dy = mouseRef.current.y - y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const influence = Math.max(0, 1 - dist / 260);

            // Gravity warp towards mouse
            const warpX = x + dx * influence * 0.22;
            const warpY = y + dy * influence * 0.22;

            if (j === 0) ctx.moveTo(warpX, warpY);
            else ctx.lineTo(warpX, warpY);
          }
          ctx.stroke();
        }

        // Horizontal lines
        for (let j = 0; j <= numRows; j++) {
          ctx.beginPath();
          for (let i = 0; i <= numCols; i++) {
            const x = i * gridSpacing;
            const y = j * gridSpacing;
            const dx = mouseRef.current.x - x;
            const dy = mouseRef.current.y - y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const influence = Math.max(0, 1 - dist / 260);

            const warpX = x + dx * influence * 0.22;
            const warpY = y + dy * influence * 0.22;

            if (i === 0) ctx.moveTo(warpX, warpY);
            else ctx.lineTo(warpX, warpY);

            // Crosshair intersection marks near cursor
            if (influence > 0.28) {
              ctx.fillStyle = `rgba(${accentColor}, ${influence * 0.85})`;
              ctx.fillRect(warpX - 2, warpY - 2, 4, 4);

              // Proximity light pulse on main nodes
              if (influence > 0.6) {
                ctx.beginPath();
                ctx.arc(warpX, warpY, 3, 0, Math.PI * 2);
                ctx.fill();
              }
            }
          }
          ctx.stroke();
        }
      }

      // 2. LIQUID GLASS WAVE MESH
      else if (activeStyle === 'liquid-wave') {
        const cols = Math.ceil(width / 50);
        const rows = Math.ceil(height / 45);
        const colSpacing = width / cols;
        const rowSpacing = height / rows;

        ctx.strokeStyle = isDark ? 'rgba(139, 124, 255, 0.15)' : 'rgba(107, 92, 255, 0.18)';
        ctx.lineWidth = 1;

        for (let j = 0; j <= rows; j++) {
          ctx.beginPath();
          for (let i = 0; i <= cols; i++) {
            const baseX = i * colSpacing;
            const baseY = j * rowSpacing;

            const dx = mouseRef.current.x - baseX;
            const dy = mouseRef.current.y - baseY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const influence = Math.max(0, 1 - dist / 220);

            const waveY = Math.sin(time + i * 0.25 + j * 0.2) * 12;
            const waveX = Math.cos(time + j * 0.25) * 8;
            const mousePushX = -dx * influence * 0.25;
            const mousePushY = -dy * influence * 0.25;

            const finalX = baseX + waveX + mousePushX;
            const finalY = baseY + waveY + mousePushY;

            if (i === 0) ctx.moveTo(finalX, finalY);
            else ctx.lineTo(finalX, finalY);

            if (i % 2 === 0 && j % 2 === 0) {
              const nodeGlow = influence * 0.7;
              ctx.fillStyle = `rgba(${accentColor}, ${0.15 + nodeGlow * 0.6})`;
              ctx.beginPath();
              ctx.arc(finalX, finalY, 1.5 + nodeGlow * 3, 0, Math.PI * 2);
              ctx.fill();
            }
          }
          ctx.stroke();
        }
      }

      // 3. LUMINOUS DOT MATRIX & PROXIMITY GLOW
      else if (activeStyle === 'dot-matrix') {
        const spacing = 32;
        const cols = Math.ceil(width / spacing);
        const rows = Math.ceil(height / spacing);

        for (let i = 0; i <= cols; i++) {
          for (let j = 0; j <= rows; j++) {
            const x = i * spacing;
            const y = j * spacing;
            const dx = mouseRef.current.x - x;
            const dy = mouseRef.current.y - y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxDist = 180;
            const proximity = Math.max(0, 1 - dist / maxDist);

            const baseRadius = 1.2;
            const radius = baseRadius + proximity * 3.5;
            const alpha = 0.12 + proximity * 0.8;

            ctx.fillStyle = proximity > 0.4
              ? `rgba(${accentColor}, ${alpha})`
              : (isDark ? `rgba(255, 255, 255, ${alpha})` : `rgba(0, 0, 0, ${alpha * 0.8})`);

            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fill();

            if (proximity > 0.6) {
              ctx.strokeStyle = `rgba(${accentColor}, ${proximity * 0.3})`;
              ctx.lineWidth = 0.7;
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
              ctx.stroke();
            }
          }
        }
      }

      // 4. FLUID CHROMATIC GRADIENT MESH
      else if (activeStyle === 'gradient-mesh') {
        const gradX = width / 2 + Math.sin(time * 0.8) * 120 + (mouseRef.current.x - width / 2) * 0.15;
        const gradY = height / 2 + Math.cos(time * 0.6) * 80 + (mouseRef.current.y - height / 2) * 0.15;

        const rad1 = ctx.createRadialGradient(gradX, gradY, 20, gradX, gradY, 360);
        rad1.addColorStop(0, `rgba(${accentColor}, ${isDark ? 0.35 : 0.25})`);
        rad1.addColorStop(0.5, `rgba(99, 102, 241, ${isDark ? 0.15 : 0.1})`);
        rad1.addColorStop(1, 'transparent');

        ctx.fillStyle = rad1;
        ctx.fillRect(0, 0, width, height);

        const orb2X = width / 2 - Math.sin(time * 0.5) * 180;
        const orb2Y = height / 2 - Math.cos(time * 0.7) * 100;
        const rad2 = ctx.createRadialGradient(orb2X, orb2Y, 10, orb2X, orb2Y, 280);
        rad2.addColorStop(0, `rgba(59, 130, 246, ${isDark ? 0.25 : 0.18})`);
        rad2.addColorStop(1, 'transparent');

        ctx.fillStyle = rad2;
        ctx.fillRect(0, 0, width, height);
      }

      // 5. GENERATIVE NODE CONSTELLATION
      else if (activeStyle === 'node-constellation') {
        particles.forEach((p, idx) => {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;

          const dx = mouseRef.current.x - p.x;
          const dy = mouseRef.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            p.x -= (dx / dist) * 1.5;
            p.y -= (dy / dist) * 1.5;
          }

          ctx.fillStyle = `rgba(${accentColor}, ${isDark ? 0.7 : 0.6})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();

          for (let j = idx + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const djx = p.x - p2.x;
            const djy = p.y - p2.y;
            const d = Math.sqrt(djx * djx + djy * djy);
            if (d < 130) {
              const alpha = (1 - d / 130) * (isDark ? 0.25 : 0.2);
              ctx.strokeStyle = `rgba(${accentColor}, ${alpha})`;
              ctx.lineWidth = 0.75;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }

          if (dist < 160) {
            const mAlpha = (1 - dist / 160) * 0.45;
            ctx.strokeStyle = `rgba(${accentColor}, ${mAlpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.stroke();
          }
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [activeStyle, theme]);

  const STYLES_CONFIG: Array<{ id: MeshStyle; name: string; icon: any; desc: string }> = [
    {
      id: 'perspective-warp',
      name: 'Perspective 3D Warp',
      icon: Grid3X3,
      desc: 'Precision architectural grid with localized gravity well deformation (Selected)',
    },
    {
      id: 'liquid-wave',
      name: 'Liquid Wave Mesh',
      icon: Waves,
      desc: 'Fluid mathematical sine-wave grid with dynamic mouse displacement',
    },
    {
      id: 'dot-matrix',
      name: 'Luminous Dot Matrix',
      icon: CircleDot,
      desc: 'High-density micro-dot array with cursor proximity scaling and filaments',
    },
    {
      id: 'gradient-mesh',
      name: 'Chromatic Aura Mesh',
      icon: Orbit,
      desc: 'Apple-inspired dynamic multi-point morphing gradient illumination',
    },
    {
      id: 'node-constellation',
      name: 'Topology Constellation',
      icon: Network,
      desc: 'Interactive enterprise system nodes with elastic physics repulsion',
    },
  ];

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0 select-none">
      {/* Full-width Live Interactive Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block pointer-events-auto" />

      {/* Top & Bottom Subtle Fade Gradients to seamlessly blend into page */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      {/* Floating Interactive Mesh Selector Pill */}
      {showSelector && (
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-8 z-30 pointer-events-auto">
          <div className="relative">
            <button
              onClick={() => setIsControlsOpen(!isControlsOpen)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-glass hover:bg-surface-glass-hover text-xs font-semibold text-foreground border border-border-glass shadow-glass transition-all hover:scale-105 active:scale-95"
              aria-label="Customize Hero Mesh Background"
              title="Click to preview different interactive mesh styles"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent animate-spin-slow" />
              <span className="hidden sm:inline">Hero Canvas:</span>
              <span className="text-accent">{STYLES_CONFIG.find((s) => s.id === activeStyle)?.name}</span>
              <Eye className="w-3.5 h-3.5 opacity-60" />
            </button>

            {/* Dropdown / Popover Drawer */}
            <AnimatePresence>
              {isControlsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-12 right-0 w-80 p-4 rounded-3xl liquid-glass-card border border-border-glass shadow-2xl space-y-2.5 backdrop-blur-3xl"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-border-glass">
                    <span className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-accent" />
                      Select Hero Background
                    </span>
                    <span className="text-[10px] text-foreground-muted font-mono">5 Styles</span>
                  </div>

                  <div className="space-y-1.5">
                    {STYLES_CONFIG.map((style) => {
                      const Icon = style.icon;
                      const isSelected = activeStyle === style.id;
                      return (
                        <button
                          key={style.id}
                          onClick={() => {
                            handleStyleChange(style.id);
                            setIsControlsOpen(false);
                          }}
                          className={`w-full text-left p-2.5 rounded-2xl border transition-all flex items-start gap-3 ${
                            isSelected
                              ? 'bg-accent/15 border-accent text-accent shadow-sm'
                              : 'liquid-glass border-border-glass text-foreground hover:bg-surface-glass-hover'
                          }`}
                        >
                          <div className={`p-2 rounded-xl flex-shrink-0 mt-0.5 ${isSelected ? 'bg-accent text-white' : 'liquid-glass text-foreground-muted'}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="space-y-0.5 flex-1 min-w-0">
                            <div className="text-xs font-bold tracking-tight truncate">
                              {style.name}
                            </div>
                            <div className="text-[10px] text-foreground-muted leading-tight">
                              {style.desc}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="pt-2 text-[10px] text-foreground-muted text-center border-t border-border-glass/60">
                    Interactive • Move cursor over the hero to interact
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
};
