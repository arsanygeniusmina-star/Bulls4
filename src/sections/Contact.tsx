import { useState, useRef, FormEvent } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, MapPin, Mail, Globe, Instagram, Facebook, Linkedin, Send, CheckCircle, ArrowUpRight } from 'lucide-react';
import Logo from '../components/Logo';
import { ease } from '../lib/motion';

const serviceOptions = [
  'Branding', 'Graphic Design', 'Marketing', 'Printing Service',
  'Web Design', 'Media Coverage', 'Corporate Gifts', 'Packaging', 'Production Workshop', 'Other',
];

const navLinks = [
  { label: 'Who We Are', href: '#who-we-are' },
  { label: 'Values', href: '#values' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#brand-matters' },
  { label: 'Partners', href: '#partners' },
];

const inputClass = "w-full bg-bulls-black border border-bulls-border text-white placeholder-bulls-hint text-sm font-body py-4 px-5 focus:outline-none focus:border-bulls-red transition-colors duration-300";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative bg-bulls-black overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bulls-red/40 to-transparent" aria-hidden="true" />

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
              <span className="section-title">Contact</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="display-heading text-4xl lg:text-6xl xl:text-7xl leading-[0.95] mb-10"
            >
              Let's Start
              <br />
              <span className="text-gradient-red">A Conversation</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="font-body text-bulls-muted text-xl lg:text-2xl leading-relaxed mb-12"
            >
              Ready to elevate your brand? Reach out and let's discuss how we can bring your vision to life.
            </motion.p>

            <div className="space-y-6">
              {[
                { icon: Phone, lines: ['+2 012 878 111 20', '+2 01000 11 99 05', '02 2182 6360 (Landline)'] },
                { icon: MapPin, lines: ['26 Gesr Elsuez St., Cairo, Egypt'] },
                { icon: Mail, lines: ['info@bulls-art.com'] },
                { icon: Globe, lines: ['www.bulls-art.com'] },
              ].map(({ icon: Icon, lines }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.08, ease }}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-bulls-surface border border-bulls-border group-hover:border-bulls-red transition-colors duration-500">
                    <Icon size={20} className="text-bulls-red" />
                  </div>
                  <div className="pt-3">
                    {lines.map((line, j) => (
                      <p key={j} className="font-body text-bulls-muted text-base leading-relaxed">{line}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7, ease }}
              className="flex gap-3 mt-12"
            >
              {[
                { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/bulls.art.studio/' },
                { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61560644945092' },
                { icon: Linkedin, label: 'LinkedIn', href: 'https://www.instagram.com/bulls.art.studio/' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 flex items-center justify-center bg-bulls-surface border border-bulls-border hover:border-bulls-red hover:bg-bulls-red/10 text-bulls-muted hover:text-bulls-red transition-all duration-500"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-24 text-center bg-bulls-surface border border-bulls-border p-12">
                <CheckCircle size={56} className="text-bulls-red mb-8" />
                <h3 className="font-display font-bold text-white text-2xl uppercase mb-4">Message Sent!</h3>
                <p className="font-body text-bulls-muted text-lg max-w-sm leading-relaxed mb-8">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }); }}
                  className="btn-ghost"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-bulls-surface border border-bulls-border p-10 lg:p-12 space-y-6" noValidate>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-display text-xs uppercase tracking-widest text-bulls-hint mb-3" htmlFor="name">
                      Full Name *
                    </label>
                    <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" className={inputClass} />
                  </div>
                  <div>
                    <label className="block font-display text-xs uppercase tracking-widest text-bulls-hint mb-3" htmlFor="email">
                      Email *
                    </label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputClass} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-display text-xs uppercase tracking-widest text-bulls-hint mb-3" htmlFor="phone">
                      Phone
                    </label>
                    <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+20 ..." className={inputClass} />
                  </div>
                  <div>
                    <label className="block font-display text-xs uppercase tracking-widest text-bulls-hint mb-3" htmlFor="service">
                      Service *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none cursor-pointer`}
                    >
                      <option value="" className="bg-bulls-black">Select a service</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s} className="bg-bulls-black">{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-display text-xs uppercase tracking-widest text-bulls-hint mb-3" htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center py-5 disabled:opacity-60 disabled:cursor-not-allowed group"
                >
                  {loading ? (
                    <span className="flex items-center gap-3">
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} className="transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-bulls-border bg-bulls-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-16">
            <div className="lg:col-span-2">
              <Logo size="sm" />
              <p className="font-body text-bulls-muted text-base leading-relaxed max-w-md mt-6">
                A premium full-service creative agency based in Cairo, Egypt. Founded 2016. Never compromising on quality or service.
              </p>
            </div>

            <div>
              <h4 className="font-display text-xs uppercase tracking-widest text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                      className="group flex items-center gap-2 font-body text-base text-bulls-muted hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-xs uppercase tracking-widest text-white mb-6">Get in Touch</h4>
              <div className="space-y-3">
                <p className="font-body text-bulls-muted">info@bulls-art.com</p>
                <p className="font-body text-bulls-muted">+2 012 878 111 20</p>
                <p className="font-body text-bulls-muted">26 Gesr Elsuez St., Cairo</p>
              </div>
            </div>
          </div>

          <div className="border-t border-bulls-border pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="font-body text-sm text-bulls-hint">
              2026 BULLS ART STUDIO. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-bulls-red" />
              <span className="font-display text-xs uppercase tracking-widest text-bulls-hint">Cairo, Egypt</span>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
