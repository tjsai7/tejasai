import { 
  Printer, ArrowUpRight, Mail, Phone, MapPin, 
  Linkedin 
} from 'lucide-react';
import { 
  PROFILE_INFO, CAREER_ROLES, 
  CERTIFICATIONS, EDUCATION, AWARDS 
} from '../data/profileData';
import { usePageSEO } from '../hooks/usePageSEO';

export const Resume = () => {
  usePageSEO({
    title: 'Curriculum Vitae & Credentials',
    description: 'Senior Product & UX Designer resume: 10+ years experience, Google UX Design Certification, APAC enterprise leadership.',
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 pt-32 pb-28 space-y-12">
      {/* Top Header Actions Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border-glass print:hidden">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
            Curriculum Vitae
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-sheen font-display">
            Resume &amp; Credentials
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full liquid-glass hover:bg-surface-glass-hover text-foreground font-semibold text-xs transition-all border border-border-glass shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Printer className="w-3.5 h-3.5 text-accent" />
            <span>Print / Save PDF</span>
          </button>

          <a
            href={PROFILE_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-foreground text-background font-semibold text-xs hover:opacity-90 transition-all shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
            <span>LinkedIn Profile</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>
        </div>
      </div>

      {/* Main Resume Sheet */}
      <div className="liquid-glass-card rounded-3xl p-8 sm:p-14 border border-border-glass shadow-2xl space-y-12 print:shadow-none print:border-none print:p-0 print:bg-transparent">
        {/* Resume Top Header */}
        <div className="space-y-4 pb-8 border-b border-border-glass/80">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground font-display">
              {PROFILE_INFO.fullName.toUpperCase()}
            </h2>
            <p className="text-lg font-bold text-accent mt-1">
              {PROFILE_INFO.title}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-foreground-muted">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              {PROFILE_INFO.location}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-accent" />
              {PROFILE_INFO.phone}
            </span>
            <span>•</span>
            <a href={`mailto:${PROFILE_INFO.email}`} className="flex items-center gap-1 text-accent hover:underline">
              <Mail className="w-3.5 h-3.5" />
              {PROFILE_INFO.email}
            </a>
            <span>•</span>
            <a href={PROFILE_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-accent hover:underline">
              <Linkedin className="w-3.5 h-3.5" />
              linkedin.com/in/tjsai7
            </a>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="space-y-3">
          <h3 className="text-xs uppercase font-mono tracking-widest font-extrabold text-accent">
            Professional Summary
          </h3>
          <p className="text-sm text-foreground-muted leading-relaxed">
            Senior Product &amp; UX Designer with 10+ years of experience architecting scalable, data-intensive B2B SaaS, HRMS, Global Payroll, and FinTech ecosystems. Proven track record collaborating directly with executive leadership to transform complex legacy systems into intuitive, high-adoption enterprise applications across APAC. Recognized for establishing scalable multi-brand design systems, pioneering AI-driven workflow automations, and driving measurable business outcomes across multi-lingual web and mobile platforms.
          </p>
        </div>

        {/* Core Competencies Matrix */}
        <div className="space-y-4">
          <h3 className="text-xs uppercase font-mono tracking-widest font-extrabold text-accent">
            Core Competencies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl liquid-glass border border-border-glass space-y-1">
              <span className="font-bold text-foreground block">UX Strategy &amp; Research</span>
              <p className="text-foreground-muted leading-relaxed">
                User Journey Mapping, Information Architecture (IA), Heuristic Evaluation, User Research, Usability Testing, Rapid Prototyping, JTBD.
              </p>
            </div>
            <div className="p-4 rounded-xl liquid-glass border border-border-glass space-y-1">
              <span className="font-bold text-foreground block">Product &amp; UI Design</span>
              <p className="text-foreground-muted leading-relaxed">
                Design Systems &amp; Component Libraries, Responsive Web &amp; Mobile (iOS/Android), Interaction Design, WCAG 2.1 Accessibility, Design Tokens.
              </p>
            </div>
            <div className="p-4 rounded-xl liquid-glass border border-border-glass space-y-1">
              <span className="font-bold text-foreground block">Leadership &amp; Tooling</span>
              <p className="text-foreground-muted leading-relaxed">
                Figma, FigJam, Adobe XD, Cross-functional Alignment, Agile/Scrum, Developer Handoff, Design Mentorship, Stakeholder Management.
              </p>
            </div>
          </div>
        </div>

        {/* Professional Experience */}
        <div className="space-y-8">
          <h3 className="text-xs uppercase font-mono tracking-widest font-extrabold text-accent">
            Professional Experience
          </h3>

          <div className="space-y-8">
            {CAREER_ROLES.map((role) => (
              <div key={role.period} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h4 className="text-base font-bold text-foreground">
                      {role.role} <span className="font-normal text-foreground-muted">| {role.company}</span>
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-accent font-semibold">
                    {role.period}
                  </span>
                </div>
                <span className="text-xs text-foreground-muted block">{role.location}</span>

                <ul className="space-y-1.5 pt-1 text-xs text-foreground-muted">
                  {role.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Licenses & Certifications */}
        <div className="space-y-4 pt-6 border-t border-border-glass/80">
          <h3 className="text-xs uppercase font-mono tracking-widest font-extrabold text-accent">
            Licenses &amp; Certifications
          </h3>
          <div className="p-4 rounded-xl liquid-glass border border-border-glass flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div>
              <span className="font-bold text-foreground block">{CERTIFICATIONS[0].title} — {CERTIFICATIONS[0].issuer}</span>
              <span className="text-foreground-muted">Credential ID: {CERTIFICATIONS[0].credentialId}</span>
            </div>
            {CERTIFICATIONS[0].url && (
              <a
                href={CERTIFICATIONS[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-semibold hover:underline inline-flex items-center gap-1"
              >
                <span>Verify Credential</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>

        {/* Education & Awards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-border-glass/80 text-xs">
          <div className="space-y-2">
            <h3 className="text-xs uppercase font-mono tracking-widest font-extrabold text-accent">
              Education
            </h3>
            <div>
              <div className="font-bold text-foreground">{EDUCATION[0].degree}</div>
              <div className="text-foreground-muted">{EDUCATION[0].institution}, {EDUCATION[0].location}</div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs uppercase font-mono tracking-widest font-extrabold text-accent">
              Honors &amp; Awards
            </h3>
            <div className="space-y-1.5">
              {AWARDS.map((award) => (
                <div key={award.title}>
                  <span className="font-bold text-foreground">{award.title}</span> — <span className="text-foreground-muted">{award.organization}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
