import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ease } from '../lib/motion';

const points = [
  { label: 'Legal Protection', desc: 'Safeguard your innovations with a registered brand.' },
  { label: 'Business Authority', desc: 'Customers remain loyal to brands that provide excellent service.' },
  { label: 'Message Association', desc: 'Convey your message powerfully through your brand identity.' },
  { label: 'Innovative Identity', desc: 'Create a memorable identity that stands apart from the competition.' },
  { label: 'Visual Consistency', desc: 'Establish familiarity across all touchpoints with a consistent message.' },
  { label: 'Cross-Platform Reach', desc: 'Deploy designs across all social media and traditional marketing channels.' },
];

export default function BrandMatters() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="brand-matters"
      ref={ref}
      className="relative bg-bulls-bg overflow-hidden"
    >
      <div className="absolute top-16 right-20 grid grid-cols-4 gap-2 opacity-5 pointer-events-none" aria-hidden="true">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className={`w-4 h-4 ${i % 3 === 0 ? 'bg-bulls-red' : 'border border-white/30'}`} />
        ))}
      </div>
      <div className="absolute bottom-16 left-20 grid grid-cols-3 gap-2 opacity-5 pointer-events-none" aria-hidden="true">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className={`w-4 h-4 ${i % 2 === 0 ? 'bg-bulls-red' : 'border border-white/30'}`} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-px bg-bulls-red" aria-hidden="true" />
              <span className="section-title">Why Brand Matters</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="display-heading text-4xl lg:text-6xl xl:text-7xl leading-[0.95] mb-10"
            >
              Why You Should
              <br />
              Always Associate
              <br />
              <span className="text-gradient-red">With a Brand</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="font-body text-bulls-muted text-xl leading-relaxed mb-10"
            >
              A brand name and logo are at the center of any successful company. They empower your business's marketing and advertising with a strong, recognizable identity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease }}
              className="relative pl-8 py-6 mb-10"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-gradient" aria-hidden="true" />
              <p className="font-display font-bold text-3xl lg:text-4xl text-white leading-tight mb-3">
                "A picture is worth a{' '}
                <span className="text-gradient-red">thousand words.</span>"
              </p>
              <p className="font-body text-bulls-hint text-sm uppercase tracking-widest">— Proven results in graphic design</p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4, ease }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Build Your Brand
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-bulls-border">
            {points.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.25 + i * 0.06, ease }}
                className="group bg-bulls-surface p-6 lg:p-8 hover:bg-bulls-black transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2 h-2 bg-bulls-red flex-shrink-0" />
                  <h4 className="font-display font-bold text-white text-sm uppercase tracking-wide">{p.label}</h4>
                </div>
                <p className="font-body text-bulls-muted text-sm leading-relaxed pl-5">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease }}
          className="mt-24 relative overflow-hidden bg-bulls-surface border border-bulls-border"
        >
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse 100% 80% at 0% 50%, rgba(227,30,36,0.08) 0%, transparent 60%)' }}
            aria-hidden="true"
          />
          <div className="relative py-12 lg:py-16 px-10 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            <p className="font-display font-bold text-3xl lg:text-4xl text-white text-center lg:text-left leading-tight">
              Investing in creative design is
              <span className="text-gradient-red"> crucial</span> for your business.
            </p>
            <button
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-ghost flex-shrink-0"
            >
              View All Services
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
