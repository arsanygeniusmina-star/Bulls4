import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, Palette, PenTool, BarChart2, Printer, Globe, Camera, Gift, Package, Wrench, ArrowRight, ArrowUpRight } from 'lucide-react';
import { ease } from '../lib/motion';

interface Service {
  id: string;
  icon: React.ElementType;
  title: string;
  tagline: string;
  desc: string;
  bullets: string[];
}

const services: Service[] = [
  {
    id: 'branding',
    icon: Palette,
    title: 'Branding',
    tagline: 'Build authority. Command recognition.',
    desc: 'A brand name and logo are at the center of any successful company. They empower your marketing and advertising with a strong identity.',
    bullets: ['Legal protection for your innovations', 'Build lasting business authority', 'Convey your message through your brand logo', 'Create a memorable identity with an innovative logo'],
  },
  {
    id: 'graphic-design',
    icon: PenTool,
    title: 'Graphic Design',
    tagline: 'A picture is worth a thousand words.',
    desc: 'Modern and innovative graphic designs that attract customers and provide your business with unique visibility across every channel.',
    bullets: ['Logo & stationery design', 'Web & UX design', 'Brochures, labels & packaging', 'Magazines, newsletters & catalogues', 'Advertising & book design'],
  },
  {
    id: 'marketing',
    icon: BarChart2,
    title: 'Marketing',
    tagline: 'Storytelling with strategy.',
    desc: "Marketing is more than promotion — it's storytelling with strategy. We craft campaigns connecting creativity with measurable impact.",
    bullets: ['Content strategy & branding', 'Creative production', 'Community growth & management', 'Paid media & analytics', 'Social media marketing'],
  },
  {
    id: 'printing',
    icon: Printer,
    title: 'Printing Service',
    tagline: 'Every surface is a canvas.',
    desc: 'Comprehensive printing services covering every medium and technique, from traditional offset to cutting-edge 3D and laser engraving.',
    bullets: ['Offset, digital, indoor & outdoor printing', 'UV, 3D, silkscreen & transfer printing', 'Thermal, laser engraving & DTF', 'Business cards, catalogs & brochures', 'Banners, rollups, bags & uniforms'],
  },
  {
    id: 'web-design',
    icon: Globe,
    title: 'Web Design',
    tagline: 'Your brand, live 24/7.',
    desc: 'High-quality digital presence that professionally showcases your brand, building credibility and engaging customers across every device.',
    bullets: ['Websites & web applications', 'Mobile applications', 'E-commerce platforms', 'SEO optimization'],
  },
  {
    id: 'media',
    icon: Camera,
    title: 'Media Coverage',
    tagline: 'Visual storytelling that resonates.',
    desc: 'Photography and videography that bring your products, services, and story to life — building credibility and engaging customers personally.',
    bullets: ['Events & ceremonies', 'Product & promo shoots', 'Landscape & project sites', 'Fashion & food photography', 'Corporate videography'],
  },
  {
    id: 'gifts',
    icon: Gift,
    title: 'Corporate Gifts',
    tagline: 'Who could forget a gift?',
    desc: 'Giveaways are a powerful way to boost brand recognition and loyalty. Promotional items that keep your brand top of mind beyond standard marketing.',
    bullets: ['Corporate sets & branded pens', 'Custom blocknotes & agendas', 'T-shirts & branded apparel', 'Summer giveaway campaigns', 'Fully customized branded products'],
  },
  {
    id: 'packaging',
    icon: Package,
    title: 'Packaging',
    tagline: 'First impressions that last.',
    desc: "Packaging is often a customer's first physical interaction with your product, making it a critical component of the customer experience.",
    bullets: ['Paper packaging solutions', 'Carton packaging design', 'Plastic packaging options', 'Communicates quality & protects product', 'Reinforces brand message'],
  },
  {
    id: 'workshop',
    icon: Wrench,
    title: 'Production Workshop',
    tagline: 'From concept to reality.',
    desc: 'Our dedicated production workshop specializes in custom projects, unique installations, and high-quality fabrications — transforming creative concepts into physical reality.',
    bullets: ['Exhibition booths & facades', 'Display stands & commercial signs', 'Internal & wall branding', 'Customized giveaways fabrication', 'Quality-controlled production'],
  },
];

function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-bulls-black/95 backdrop-blur-md" aria-hidden="true" />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 32 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 32 }}
        transition={{ duration: 0.4, ease }}
        className="relative w-full max-w-2xl bg-bulls-surface border border-bulls-border overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={service.title}
      >
        <div className="h-1 bg-red-gradient" />

        <div className="p-10 lg:p-12">
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 flex items-center justify-center border-2 border-bulls-red bg-bulls-red/10">
                <Icon size={28} className="text-bulls-red" />
              </div>
              <div>
                <p className="font-display text-xs uppercase tracking-widest text-bulls-hint mb-1">Service</p>
                <h3 className="font-display font-bold text-white text-2xl uppercase tracking-tight">{service.title}</h3>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center text-bulls-hint hover:text-white hover:bg-bulls-elevated transition-colors"
              aria-label="Close"
            >
              <X size={22} />
            </button>
          </div>

          <p className="font-display text-bulls-red text-lg italic mb-6">"{service.tagline}"</p>
          <p className="font-body text-bulls-muted text-lg leading-relaxed mb-8">{service.desc}</p>

          <div className="grid sm:grid-cols-2 gap-3">
            {service.bullets.map((b, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-bulls-elevated/50">
                <span className="w-1.5 h-1.5 bg-bulls-red mt-2 flex-shrink-0" />
                <span className="font-body text-sm text-bulls-muted">{b}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-bulls-border flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => { onClose(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-primary flex-1 justify-center"
            >
              Start This Project
              <ArrowRight size={16} />
            </button>
            <button
              onClick={onClose}
              className="btn-ghost flex-1 justify-center"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState<Service | null>(null);

  return (
    <section
      id="services"
      ref={ref}
      className="relative bg-bulls-bg overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-40 relative z-10">
        <div className="mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-px bg-bulls-red" aria-hidden="true" />
            <span className="section-title">Services</span>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="display-heading text-4xl lg:text-6xl xl:text-7xl leading-[0.95]"
            >
              Full-Service
              <br />
              <span className="text-gradient-red">Creative Partnership</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="font-body text-bulls-muted text-xl lg:text-2xl leading-relaxed"
            >
              A comprehensive suite of services to support our partners in achieving their market goals.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-bulls-border">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.button
                key={svc.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.05, ease }}
                onClick={() => setActive(svc)}
                className="group relative bg-bulls-surface p-8 lg:p-10 text-left min-h-[280px] lg:min-h-[320px] flex flex-col justify-between hover:bg-bulls-elevated transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-bulls-red focus-visible:ring-inset"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: 'radial-gradient(ellipse 120% 80% at 50% 0%, rgba(227,30,36,0.1) 0%, transparent 70%)' }}
                  aria-hidden="true"
                />

                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center border group-hover:border-bulls-red bg-bulls-elevated group-hover:bg-bulls-red/10 transition-all duration-500">
                      <Icon size={24} className="text-bulls-red" />
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="text-bulls-hint group-hover:text-bulls-red transition-colors duration-300 opacity-0 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="font-display font-bold text-white text-lg lg:text-xl uppercase tracking-tight leading-tight mb-3">
                    {svc.title}
                  </h3>
                  <p className="font-body text-bulls-muted text-sm leading-relaxed line-clamp-2">
                    {svc.tagline}
                  </p>
                </div>

                <div className="relative flex items-center justify-between mt-6 pt-6 border-t border-bulls-border group-hover:border-bulls-red/30 transition-colors duration-500">
                  <span className="font-display text-xs text-bulls-hint uppercase tracking-widest">
                    0{i + 1}
                  </span>
                  <span className="font-display text-xs text-bulls-red uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {active && <ServiceModal service={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}
