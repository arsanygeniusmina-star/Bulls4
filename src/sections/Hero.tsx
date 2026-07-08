import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, ChevronRight } from 'lucide-react';
import { ease } from '../lib/motion';

function AnimatedGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const CELL = 44;
    let t = 0;
    let raf: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cols = Math.ceil(canvas.width / CELL) + 2;
      const rows = Math.ceil(canvas.height / CELL) + 2;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const dx = c - cols / 2;
          const dy = r - rows / 2;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const wave = Math.sin(dist * 0.35 - t * 1.4) * 0.5 + 0.5;
          const alpha = wave * 0.06;
          ctx.strokeStyle = `rgba(227,30,36,${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.strokeRect(c * CELL, r * CELL, CELL, CELL);
        }
      }
      t += 0.018;
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

function BullPixel() {
  const pixels = [
    [4,0],[5,0],[6,0],[7,0],[8,0],
    [2,1],[9,1],
    [1,2],[10,2],
    [1,3],[10,3],
    [2,3],[3,3],[4,3],[5,3],[6,3],[7,3],[8,3],[9,3],
    [2,4],[3,4],[4,4],[5,4],[6,4],[7,4],[8,4],[9,4],
    [2,5],[3,5],[9,5],
    [3,6],[4,6],[5,6],[6,6],[7,6],[8,6],
    [3,7],[4,7],[5,7],[6,7],[7,7],[8,7],
    [3,8],[4,8],[5,8],[6,8],[7,8],[8,8],
    [3,9],[4,9],[5,9],[6,9],[7,9],[8,9],
    [3,10],[9,10],[10,10],[11,10],
    [3,11],[4,11],[5,11],[6,11],[7,11],[8,11],[9,11],[10,11],[11,11],
    [3,12],[4,12],[5,12],[6,12],[7,12],[8,12],[9,12],[10,12],[11,12],
    [3,13],[4,13],[5,13],[6,13],[7,13],[8,13],[9,13],[10,13],[11,13],
    [3,14],[9,14],
    [4,15],[8,15],
    [4,16],[8,16],
  ];
  const SIZE = 18;

  return (
    <svg
      width={14 * SIZE}
      height={18 * SIZE}
      viewBox={`0 0 ${14 * SIZE} ${18 * SIZE}`}
      className="w-full h-full"
      aria-hidden="true"
    >
      {pixels.map(([c, r], i) => (
        <rect
          key={i}
          x={c * SIZE + 1}
          y={r * SIZE + 1}
          width={SIZE - 2}
          height={SIZE - 2}
          fill="none"
          stroke="#E31E24"
          strokeWidth="1.5"
          opacity="0.7"
        />
      ))}
    </svg>
  );
}

const statItems = [
  { value: '2016', label: 'Founded' },
  { value: '9+', label: 'Years Active' },
  { value: '40+', label: 'Partners' },
  { value: '9', label: 'Service Lines' },
];

const words = ['We', 'Never', 'Compromise', 'On', 'Quality.'];

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="BULLS ART STUDIO — hero"
      className="relative min-h-screen flex flex-col bg-bulls-black overflow-hidden"
    >
      <AnimatedGrid />

      {/* Radial spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 35% 50%, rgba(227,30,36,0.05) 0%, transparent 65%)' }}
        aria-hidden="true"
      />
      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, transparent, #0A0A0A)' }}
        aria-hidden="true"
      />

      {/* Bull silhouette */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, delay: 0.8, ease }}
        className="absolute right-[-2vw] top-1/2 -translate-y-[45%] w-[38vw] max-w-[480px] min-w-[260px] pointer-events-none hidden lg:block opacity-25"
        aria-hidden="true"
      >
        <BullPixel />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-6 lg:px-8 pt-32 pb-8">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="flex items-center gap-2 border border-bulls-border bg-bulls-surface/60 px-3 py-1.5">
            <span className="w-1.5 h-1.5 bg-bulls-red rounded-full animate-pulse" aria-hidden="true" />
            <span className="font-display text-[10px] uppercase tracking-widest2 text-bulls-muted">
              Cairo, Egypt — Est. 2016
            </span>
          </div>
          <ChevronRight size={12} className="text-bulls-hint" aria-hidden="true" />
          <span className="font-display text-[10px] uppercase tracking-widest2 text-bulls-hint">
            Premium Creative Agency
          </span>
        </motion.div>

        {/* Headline — word by word */}
        <h1 className="display-heading mb-8 overflow-hidden">
          {words.map((word, i) => (
            <span
              key={i}
              className="inline-block overflow-hidden mr-4 last:mr-0"
              aria-hidden="false"
            >
              <motion.span
                className={`inline-block ${word === 'Compromise' ? 'text-gradient-red' : 'text-white'}`}
                style={{ fontSize: 'clamp(3rem, 9vw, 8rem)', lineHeight: 0.92 }}
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, delay: 0.25 + i * 0.1, ease }}
              >
                {word}
              </motion.span>
            </span>
          ))}
          <span className="sr-only">We Never Compromise On Quality.</span>
        </h1>

        {/* Sub + CTAs */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease }}
            className="max-w-lg"
          >
            <p className="font-body text-bulls-muted text-base lg:text-lg leading-relaxed mb-8">
              A premium full-service creative agency. Since 2016, our unique blend of experience
              and passion has been the key to sustainable success for 40+ partners across Egypt.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary group"
                aria-label="Start a project with BULLS ART STUDIO"
              >
                Start a Project
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>
              <button
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-ghost"
                aria-label="Explore our services"
              >
                Explore Services
              </button>
            </div>
          </motion.div>

          {/* Vertical divider + stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1, ease }}
            className="flex items-center gap-0 flex-shrink-0"
            aria-label="Key statistics"
          >
            <div className="w-px h-16 bg-bulls-border hidden lg:block mr-8" aria-hidden="true" />
            <dl className="grid grid-cols-4 lg:grid-cols-2 gap-x-8 gap-y-6">
              {statItems.map((s) => (
                <div key={s.label}>
                  <dt className="font-body text-xs text-bulls-hint uppercase tracking-widest mb-1">{s.label}</dt>
                  <dd className="font-display font-bold text-white text-2xl">{s.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>

      {/* Bottom ticker row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3, ease }}
        className="relative z-10 border-t border-bulls-border"
        aria-hidden="true"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8 overflow-hidden">
            {['Branding', 'Graphic Design', 'Marketing', 'Printing', 'Web Design', 'Media', 'Gifting', 'Packaging', 'Workshop'].map((s, i) => (
              <span key={s} className="flex items-center gap-8 flex-shrink-0 font-display text-[10px] uppercase tracking-widest2 text-bulls-hint">
                {i > 0 && <span className="w-1 h-1 bg-bulls-red" />}
                {s}
              </span>
            ))}
          </div>
          <button
            onClick={() => document.querySelector('#who-we-are')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 ml-8 flex-shrink-0 focus-visible:outline-none"
            aria-label="Scroll down"
          >
            <span className="font-display text-[10px] uppercase tracking-widest2 text-bulls-hint hidden sm:block">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown size={14} className="text-bulls-red" aria-hidden="true" />
            </motion.div>
          </button>
        </div>
      </motion.div>
    </section>
  );
}
