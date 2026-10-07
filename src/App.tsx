import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AmbientLightField } from './components/ui/AmbientLightField';
import { Home } from './pages/Home';
import { WorkIndex } from './pages/WorkIndex';
import { CaseStudyDetail } from './pages/CaseStudyDetail';
import { About } from './pages/About';
import { Resume } from './pages/Resume';
import { Contact } from './pages/Contact';

// Scroll to top on route change helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 relative selection:bg-accent/20 selection:text-accent flex flex-col justify-between">
      <ScrollToTop />
      {/* Background Ambient Light Field */}
      <AmbientLightField />

      {/* Floating Liquid Glass Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<WorkIndex />} />
          <Route path="/work/:id" element={<CaseStudyDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Editorial Senior Footer */}
      <Footer />
    </div>
  );
}
