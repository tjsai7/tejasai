import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Linkedin, ArrowUpRight, 
  Send, Sparkles, CheckCircle2, Copy, Check 
} from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';
import { usePageSEO } from '../hooks/usePageSEO';

export const Contact = () => {
  usePageSEO({
    title: 'Contact & Opportunities',
    description: "Get in touch with Teja Sai for Senior, Staff, and Lead Product Designer roles or Enterprise UX consulting.",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    opportunityType: 'Senior / Staff Product Design Role',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setFormSubmitted(true);
  };

  return (
    <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 pt-32 pb-28 space-y-16">
      {/* 01 — HEADER */}
      <section className="space-y-6 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-xs font-semibold uppercase tracking-wider text-accent border border-accent/25">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-sheen font-display">
          Let's design something meaningful.
        </h1>

        <p className="text-base sm:text-xl text-foreground-muted leading-relaxed">
          Open to Senior Product Design, Staff Product Design and Lead Product Design opportunities. Whether you're building a complex enterprise platform, scaling a design system, or architecting AI workflows, let's talk.
        </p>
      </section>

      {/* 02 — MAIN CONTACT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Info Column */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct Email Card */}
          <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border border-border-glass space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-accent font-semibold">
              Direct Contact
            </span>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-2xl liquid-glass border border-border-glass">
                <div className="flex items-center gap-2.5 text-xs text-foreground">
                  <Mail className="w-4 h-4 text-accent" />
                  <span className="font-semibold">{PROFILE_INFO.email}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg liquid-glass hover:bg-surface-glass-hover text-foreground-muted hover:text-foreground transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <a
                href={`tel:${PROFILE_INFO.phone}`}
                className="flex items-center gap-2.5 p-3 rounded-2xl liquid-glass border border-border-glass text-xs text-foreground hover:border-accent/40 transition-colors"
              >
                <Phone className="w-4 h-4 text-accent" />
                <span className="font-semibold">{PROFILE_INFO.phone}</span>
              </a>

              <div className="flex items-center gap-2.5 p-3 rounded-2xl liquid-glass border border-border-glass text-xs text-foreground-muted">
                <MapPin className="w-4 h-4 text-accent" />
                <span>{PROFILE_INFO.location}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={PROFILE_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#0A66C2] text-white font-semibold text-xs hover:opacity-95 transition-all shadow-md"
              >
                <Linkedin className="w-4 h-4" />
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Notice Card */}
          <div className="p-6 rounded-3xl liquid-glass border border-border-glass space-y-2 text-xs text-foreground-muted">
            <span className="font-bold text-foreground block">Response Time Commitment</span>
            <p className="leading-relaxed">
              I typically respond to serious product design inquiries and interview invitations within 24 hours.
            </p>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="lg:col-span-7">
          <div className="liquid-glass-card rounded-3xl p-8 sm:p-10 border border-border-glass">
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Message Received!</h3>
                <p className="text-sm text-foreground-muted max-w-sm mx-auto">
                  Thank you for reaching out. I'll review your note and get back to you promptly at <span className="font-semibold text-foreground">{formData.email}</span>.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', opportunityType: 'Senior / Staff Product Design Role', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-full liquid-glass text-xs font-semibold text-foreground hover:bg-surface-glass-hover transition-all"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground">Send an Inquiry</h3>
                  <p className="text-xs text-foreground-muted mt-1">
                    Fill out the form below or email me directly at {PROFILE_INFO.email}.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs uppercase font-bold text-foreground-muted block mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g., Alex Vance"
                      className="w-full px-4 py-3 rounded-xl liquid-glass border border-border-glass text-sm text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase font-bold text-foreground-muted block mb-1.5">
                      Your Work Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-xl liquid-glass border border-border-glass text-sm text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase font-bold text-foreground-muted block mb-1.5">
                      Inquiry / Opportunity Type
                    </label>
                    <select
                      value={formData.opportunityType}
                      onChange={(e) => setFormData({ ...formData, opportunityType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl liquid-glass border border-border-glass text-sm text-foreground bg-background focus:outline-none focus:border-accent"
                    >
                      <option value="Senior / Staff Product Design Role">Senior / Staff Product Designer Role</option>
                      <option value="Lead Product / UX Designer Role">Lead Product / UX Designer Role</option>
                      <option value="Enterprise UX Advisory / Consulting">Enterprise UX Advisory / Consulting</option>
                      <option value="General Conversation / Coffee Chat">General Conversation / Coffee Chat</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs uppercase font-bold text-foreground-muted block mb-1.5">
                      Message / Project Scope
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your product, team, or opportunity..."
                      className="w-full px-4 py-3 rounded-xl liquid-glass border border-border-glass text-sm text-foreground placeholder:text-foreground-muted/50 focus:outline-none focus:border-accent resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-foreground text-background font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
