import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ease } from '../lib/motion';
import Logo from './Logo';

const navLinks = [
  { label: 'Who We Are', href: '#who-we-are' },
  { label: 'Values', href: '#values' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#brand-matters' },
  { label: 'Partners', href: '#partners' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-bulls-black/96 backdrop-blur-xl border-b border-bulls-border'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="BULLS ART STUDIO — scroll to top"
              className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bulls-red"
            >
              <Logo size="sm" />
            </button>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-10" role="list">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  role="listitem"
                  onClick={() => handleNav(link.href)}
                  className="relative font-display text-[11px] uppercase tracking-widest2 text-bulls-muted hover:text-white transition-colors duration-300 group pb-0.5 focus-visible:outline-none"
                  aria-label={`Navigate to ${link.label}`}
                >
                  {link.label}
                  <span
                    className="absolute bottom-0 left-0 h-px bg-bulls-red transition-all duration-400 w-0 group-hover:w-full"
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleNav('#contact')}
                className="hidden lg:inline-flex btn-primary py-2.5 px-5 text-[11px]"
                aria-label="Get in touch with BULLS ART STUDIO"
              >
                Get in Touch
              </button>
              <button
                className="lg:hidden w-10 h-10 flex items-center justify-center text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bulls-red"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                <AnimatePresence mode="wait">
                  {menuOpen ? (
                    <motion.span key="close" initial={{ rotate: -45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 45, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <X size={20} />
                    </motion.span>
                  ) : (
                    <motion.span key="open" initial={{ rotate: 45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -45, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <Menu size={20} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease }}
            className="fixed inset-0 z-40 bg-bulls-black flex flex-col pt-20 pb-12 px-8 overflow-y-auto"
          >
            {/* Red accent top bar */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-red-gradient" aria-hidden="true" />

            <nav aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, ease }}
                >
                  <button
                    onClick={() => handleNav(link.href)}
                    className="w-full text-left font-display font-bold text-3xl sm:text-4xl uppercase tracking-tight text-white py-5 border-b border-bulls-border hover:text-bulls-red hover:border-bulls-red transition-all duration-300 flex items-center justify-between group focus-visible:outline-none"
                  >
                    <span>{link.label}</span>
                    <span className="text-bulls-hint group-hover:text-bulls-red text-sm font-normal tracking-widest2 transition-colors">
                      0{i + 1}
                    </span>
                  </button>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, ease }}
              className="mt-10 flex flex-col gap-4"
            >
              <button
                onClick={() => handleNav('#contact')}
                className="btn-primary self-start text-sm"
              >
                Get in Touch
              </button>
              <p className="font-body text-bulls-hint text-sm mt-2">info@bulls-art.com</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
