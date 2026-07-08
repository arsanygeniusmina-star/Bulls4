import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import WhoWeAre from './sections/WhoWeAre';
import Values from './sections/Values';
import Services from './sections/Services';
import BrandMatters from './sections/BrandMatters';
import Partners from './sections/Partners';
import CTABand from './sections/CTABand';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-bulls-bg text-white overflow-x-hidden">
      {/* Accessibility: skip to main content */}
      <a href="#main-content" className="skip-nav">
        Skip to main content
      </a>

      <ScrollProgress />
      <Navbar />

      <main id="main-content">
        <Hero />
        <WhoWeAre />
        <Values />
        <Services />
        <BrandMatters />
        <Partners />
        <CTABand />
        <Contact />
      </main>
    </div>
  );
}
