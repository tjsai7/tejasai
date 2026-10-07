import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Download, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { PROFILE_INFO } from '../../data/profileData';

const NAV_ITEMS = [
  { name: 'Work', path: '/work' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-4 sm:pt-6 pointer-events-none transition-all duration-300">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`pointer-events-auto flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? 'py-2 px-4 sm:px-6 w-full max-w-4xl liquid-glass rounded-full shadow-2xl scale-[0.98]'
              : 'py-3 px-5 sm:px-8 w-full max-w-5xl liquid-glass rounded-full shadow-glass'
          }`}
          aria-label="Main Navigation"
        >
          {/* Logo / Monogram */}
          <Link
            to="/"
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full py-1 pr-2"
          >
            <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center border border-border-glass group-hover:border-accent/50 transition-colors duration-300">
              <span className="font-semibold text-xs tracking-tight text-foreground">TS</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-foreground transition-colors group-hover:text-accent">
                {PROFILE_INFO.name.toUpperCase()}
              </span>
              <span className="text-[10px] uppercase tracking-wider text-foreground-muted font-medium hidden sm:inline-block">
                Product Designer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-foreground/[0.03] dark:bg-foreground/[0.05] p-1 rounded-full border border-border-glass/40">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.path === '/work'
                  ? location.pathname === '/work' || location.pathname.startsWith('/work/')
                  : location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    isActive
                      ? 'text-foreground font-semibold'
                      : 'text-foreground-muted hover:text-foreground'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-surface-glass-hover rounded-full border border-border-glass shadow-sm"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Controls: Download CV CTA & Theme Switcher */}
          <div className="flex items-center gap-2">
            {/* Header Download CV CTA Button */}
            <a
              href="/Teja_Sai_Resume.pdf"
              download="Tejasai_Thunuguntla_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-foreground text-background font-semibold text-xs hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              title="Download Teja Sai's Resume (PDF)"
            >
              <Download className="w-3.5 h-3.5 text-accent" />
              <span>Download CV</span>
            </a>

            {/* Light / Dark Mode Switch */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-foreground-muted hover:text-foreground liquid-glass hover:bg-surface-glass-hover transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent border border-border-glass"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-foreground hover:text-accent liquid-glass transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent border border-border-glass"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Full-Screen Liquid Glass Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden bg-background/85 backdrop-blur-2xl flex flex-col justify-between p-6 pt-28"
          >
            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-widest text-foreground-muted font-semibold px-4">
                Navigation
              </span>
              {NAV_ITEMS.map((item, index) => {
                const isActive =
                  item.path === '/work'
                    ? location.pathname === '/work' || location.pathname.startsWith('/work/')
                    : location.pathname === item.path;

                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * index, duration: 0.3 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between p-4 rounded-2xl border text-xl font-semibold transition-all ${
                        isActive
                          ? 'bg-accent/10 border-accent/40 text-accent shadow-sm'
                          : 'liquid-glass border-border-glass text-foreground'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight className="w-5 h-5 opacity-60" />
                    </Link>
                  </motion.div>
                );
              })}

              {/* Mobile Download CV Action Card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="pt-2"
              >
                <a
                  href="/Teja_Sai_Resume.pdf"
                  download="Tejasai_Thunuguntla_Resume.pdf"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-4 rounded-2xl bg-foreground text-background text-base font-bold shadow-lg"
                >
                  <div className="flex items-center gap-2.5">
                    <Download className="w-5 h-5 text-accent" />
                    <span>Download CV (PDF)</span>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded bg-background/20 text-background font-mono">10+ Yrs</span>
                </a>
              </motion.div>
            </div>

            {/* Mobile Footer Info in Drawer */}
            <div className="p-4 rounded-2xl liquid-glass border border-border-glass space-y-2 text-xs text-foreground-muted">
              <div className="font-semibold text-foreground">{PROFILE_INFO.title}</div>
              <div>{PROFILE_INFO.location}</div>
              <a
                href={`mailto:${PROFILE_INFO.email}`}
                className="text-accent hover:underline block pt-1"
              >
                {PROFILE_INFO.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
