import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const AmbientLightField = () => {
  const [isClient, setIsClient] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for pointer lag effect
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsClient(true);
    // Initialize to center
    if (typeof window !== 'undefined') {
      mouseX.set(window.innerWidth / 2);
      mouseY.set(300);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY + window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  if (!isClient) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Dynamic Cursor-following Glow Orb */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-accent/15 via-indigo-500/10 to-transparent blur-[140px] opacity-70 dark:opacity-40"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Ambient Top Static Glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] sm:w-[1100px] h-[500px] bg-gradient-to-b from-accent/10 dark:from-accent/15 via-purple-600/5 to-transparent blur-[160px] opacity-60 dark:opacity-40" />

      {/* Ambient Secondary Accent Orb */}
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-bl from-blue-500/10 to-transparent blur-[150px] opacity-40 animate-pulse-glow" />

      {/* Ambient Tertiary Accent Orb */}
      <div className="absolute top-[75%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500/10 to-transparent blur-[160px] opacity-30" />
    </div>
  );
};
