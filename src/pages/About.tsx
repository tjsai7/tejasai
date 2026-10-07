import { motion } from 'framer-motion';
import { 
  Sparkles, Award, GraduationCap, 
  MapPin, CheckCircle2, ArrowUpRight, HeartHandshake,
  Workflow, Code2, Globe
} from 'lucide-react';
import { 
  PROFILE_INFO, CAREER_ROLES, SKILLS_DATA, 
  CERTIFICATIONS, EDUCATION, AWARDS 
} from '../data/profileData';
import { usePageSEO } from '../hooks/usePageSEO';

export const About = () => {
  usePageSEO({
    title: 'About & Career Journey',
    description: '10+ years architecting scalable enterprise SaaS, HRMS, FinTech, and AI platforms.',
  });
  return (
    <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 pt-32 pb-28 space-y-24">
      {/* 01 — HERO NARRATIVE */}
      <section className="space-y-6 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-xs font-semibold uppercase tracking-wider text-accent border border-accent/25">
          <Sparkles className="w-3.5 h-3.5" />
          <span>About Teja Sai</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-sheen font-display">
          Designing at the intersection of people, systems and business.
        </h1>

        <div className="space-y-4 text-base sm:text-lg text-foreground-muted leading-relaxed">
          {PROFILE_INFO.aboutNarrative.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-4 text-xs sm:text-sm text-foreground">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full liquid-glass border border-border-glass">
            <MapPin className="w-4 h-4 text-accent" />
            <span>{PROFILE_INFO.location}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full liquid-glass border border-border-glass">
            <Award className="w-4 h-4 text-accent" />
            <span>10+ Years Experience</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full liquid-glass border border-border-glass">
            <Sparkles className="w-4 h-4 text-accent" />
            <span>Open to Senior / Staff / Lead Roles</span>
          </div>
        </div>
      </section>

      {/* 02 — CAREER TIMELINE */}
      <section className="space-y-10 pt-12 border-t border-border-glass">
        <div className="space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-sheen">
            Experience &amp; Leadership
          </h2>
          <p className="text-sm text-foreground-muted max-w-xl">
            A track record of driving UX strategy, founding design systems, and scaling high-adoption enterprise platforms.
          </p>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l border-border-glass space-y-12">
          {CAREER_ROLES.map((item, index) => (
            <motion.div
              key={item.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="relative space-y-3"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-accent border-4 border-background shadow-sm" />

              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs font-bold text-accent px-2.5 py-0.5 rounded-full liquid-glass border border-accent/30">
                  {item.period}
                </span>
                <span className="text-xs text-foreground-muted flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-foreground-muted/60" />
                  {item.location}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground">{item.role}</h3>
                <div className="text-sm font-semibold text-foreground-muted">{item.company}</div>
              </div>

              <ul className="space-y-2 pt-2 text-xs sm:text-sm text-foreground-muted">
                {item.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent/80 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 03 — SKILLS & TOOLING MATRIX */}
      <section className="space-y-8 pt-12 border-t border-border-glass">
        <div className="space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            Capabilities &amp; Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-sheen">
            Skills, Tooling &amp; Fluency
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Strategy */}
          <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-4">
            <div className="flex items-center gap-2 text-accent font-semibold text-sm">
              <Workflow className="w-4 h-4" />
              <span>UX Strategy &amp; Research</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {SKILLS_DATA.strategy.map((skill) => (
                <span key={skill} className="px-3 py-1 rounded-full liquid-glass text-xs text-foreground font-medium border border-border-glass/60">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Product & UI Craft */}
          <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-4">
            <div className="flex items-center gap-2 text-accent font-semibold text-sm">
              <Code2 className="w-4 h-4" />
              <span>Product &amp; Systems Craft</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {SKILLS_DATA.craft.map((skill) => (
                <span key={skill} className="px-3 py-1 rounded-full liquid-glass text-xs text-foreground font-medium border border-border-glass/60">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools & Languages */}
          <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-4">
            <div className="flex items-center gap-2 text-accent font-semibold text-sm">
              <Globe className="w-4 h-4" />
              <span>Tools &amp; Languages</span>
            </div>
            <div className="space-y-3">
              <div>
                <span className="text-[11px] uppercase font-bold text-foreground-muted block mb-1.5">Tooling</span>
                <div className="flex flex-wrap gap-1.5">
                  {SKILLS_DATA.tools.map((t) => (
                    <span key={t} className="px-2.5 py-0.5 rounded-md liquid-glass text-xs text-foreground border border-border-glass/50">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[11px] uppercase font-bold text-foreground-muted block mb-1.5">Languages</span>
                <div className="flex flex-wrap gap-1.5">
                  {SKILLS_DATA.languages.map((lang) => (
                    <span key={lang} className="px-2.5 py-0.5 rounded-md liquid-glass text-xs text-foreground border border-border-glass/50">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — EDUCATION, CERTIFICATIONS & HONORS */}
      <section className="space-y-8 pt-12 border-t border-border-glass">
        <div className="space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
            Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-sheen">
            Education, Certifications &amp; Honors
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Certification */}
          <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-3">
            <div className="w-8 h-8 rounded-xl bg-accent/15 flex items-center justify-center text-accent">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-foreground-muted">Professional Certification</span>
              <h4 className="text-base font-bold text-foreground mt-1">{CERTIFICATIONS[0].title}</h4>
              <p className="text-xs text-foreground-muted mt-0.5">{CERTIFICATIONS[0].issuer}</p>
            </div>
            {CERTIFICATIONS[0].url && (
              <a
                href={CERTIFICATIONS[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-accent font-semibold hover:underline pt-2"
              >
                <span>Verify Credential ID ({CERTIFICATIONS[0].credentialId})</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            )}
          </div>

          {/* Education */}
          <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-3">
            <div className="w-8 h-8 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-500">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-foreground-muted">Formal Education</span>
              <h4 className="text-base font-bold text-foreground mt-1">{EDUCATION[0].degree}</h4>
              <p className="text-xs text-foreground-muted mt-0.5">{EDUCATION[0].institution}</p>
              <span className="text-[11px] text-foreground-muted block mt-1">{EDUCATION[0].location}</span>
            </div>
          </div>

          {/* Awards */}
          <div className="liquid-glass-card rounded-2xl p-6 border border-border-glass space-y-3">
            <div className="w-8 h-8 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-500">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-foreground-muted">Honors &amp; Awards</span>
              <div className="space-y-2 mt-2">
                {AWARDS.map((award) => (
                  <div key={award.title}>
                    <div className="text-sm font-bold text-foreground">{award.title}</div>
                    <div className="text-xs text-foreground-muted">{award.organization}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Community & Volunteering */}
        <div className="p-6 rounded-2xl liquid-glass border border-border-glass flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-accent/15 flex items-center justify-center text-accent flex-shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-foreground">Community Leadership &amp; Mentorship</h4>
              <p className="text-xs text-foreground-muted">
                Marketing &amp; Communications Volunteer at AIESEC (2011–2013) • Youth Mentor Volunteer at Make a Difference (MAD) (2013–2015)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
