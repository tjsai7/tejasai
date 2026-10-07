import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Linkedin, MapPin, Sparkles } from 'lucide-react';
import { PROFILE_INFO } from '../../data/profileData';

export const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border-glass mt-24 sm:mt-36 bg-foreground/[0.015] backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
        {/* Top Callout Box */}
        <div className="liquid-glass-card rounded-3xl p-8 sm:p-12 mb-16 relative overflow-hidden border border-border-glass">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full liquid-glass text-xs font-medium text-accent border border-accent/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Available for Design Leadership &amp; Senior Roles</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-sheen">
                Have a complex product problem? Let's talk.
              </h2>
              <p className="text-sm sm:text-base text-foreground-muted">
                Open to Senior Product Design, Staff Product Design and Lead Product Design opportunities.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${PROFILE_INFO.email}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-foreground text-background font-medium text-sm hover:opacity-90 transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Mail className="w-4 h-4" />
                <span>Email me</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={PROFILE_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full liquid-glass hover:bg-surface-glass-hover text-foreground font-medium text-sm transition-all border border-border-glass focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 opacity-70" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Navigation & Brand Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-border-glass/60">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tight text-foreground">
                {PROFILE_INFO.name.toUpperCase()}
              </span>
            </div>
            <p className="text-sm text-foreground-muted max-w-sm leading-relaxed">
              {PROFILE_INFO.title} shaping complex enterprise SaaS, HRMS, FinTech, and AI platforms into intuitive product experiences.
            </p>
            <div className="flex items-center gap-2 text-xs text-foreground-muted">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              <span>{PROFILE_INFO.location}</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase font-bold tracking-widest text-foreground-muted mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/work" className="text-foreground hover:text-accent transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-foreground hover:text-accent transition-colors">
                  About &amp; Philosophy
                </Link>
              </li>
              <li>
                <Link to="/resume" className="text-foreground hover:text-accent transition-colors">
                  Resume &amp; Credentials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase font-bold tracking-widest text-foreground-muted mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${PROFILE_INFO.email}`}
                  className="text-foreground hover:text-accent transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{PROFILE_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={PROFILE_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors inline-flex items-center gap-1.5"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </li>
              <li>
                <span className="text-foreground-muted text-xs">
                  Phone: {PROFILE_INFO.phone}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground-muted">
          <p>© {new Date().getFullYear()} Teja Sai. Crafted with Liquid Glass architecture.</p>
          <p className="flex items-center gap-1">
            <span>Enterprise UX &amp; Design Systems</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
