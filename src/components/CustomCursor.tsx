import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  const springX = useSpring(cursorX, { stiffness: 500, damping: 40 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 40 });

  const trailX = useSpring(cursorX, { stiffness: 120, damping: 22 });
  const trailY = useSpring(cursorY, { stiffness: 120, damping: 22 });

  const rafRef = useRef<number>();

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleEnter = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest('a, button, [role="button"], input, textarea, select, label')) {
        setHovered(true);
      }
    };
    const handleLeave = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest('a, button, [role="button"], input, textarea, select, label')) {
        setHovered(false);
      }
    };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', handleEnter);
    document.addEventListener('mouseout', handleLeave);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', handleEnter);
      document.removeEventListener('mouseout', handleLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [cursorX, cursorY, visible]);

  if (!visible) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          animate={{ scale: hovered ? 2.5 : 1, opacity: hovered ? 0.6 : 1 }}
          transition={{ duration: 0.2 }}
          className="w-3 h-3 bg-white rounded-full"
        />
      </motion.div>

      {/* Ring trail */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: trailX, y: trailY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          animate={{
            scale: hovered ? 1.8 : 1,
            borderColor: hovered ? '#E31E24' : 'rgba(227,30,36,0.4)',
          }}
          transition={{ duration: 0.25 }}
          className="w-8 h-8 rounded-full border"
          style={{ borderColor: 'rgba(227,30,36,0.4)' }}
        />
      </motion.div>
    </>
  );
}
