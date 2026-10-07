import { type FC } from 'react';
import { 
  CheckCircle2, BarChart3,
  ShieldCheck, ArrowUpRight
} from 'lucide-react';

interface MockupVisualizerProps {
  projectId: string;
  type?: 'hero' | 'mobile' | 'desktop' | 'table' | 'flow' | 'chat';
  className?: string;
}

export const MockupVisualizer: FC<MockupVisualizerProps> = ({
  projectId,
  type: _type = 'hero',
  className = '',
}) => {
  // StoHRM HCM Mobile / APAC Platform
  if (projectId === 'stohrm') {
    return (
      <div className={`w-full h-full bg-gradient-to-br from-indigo-950/90 via-slate-900 to-black p-4 sm:p-6 text-white flex flex-col justify-between select-none ${className}`}>
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center text-xs font-bold">
              ST
            </div>
            <div>
              <div className="text-xs font-bold tracking-tight">StoHRM APAC</div>
              <div className="text-[10px] text-white/50">Employee Self-Service</div>
            </div>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            Active Shift • In Office
          </span>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-2 gap-2.5 my-3">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
            <span className="text-[10px] text-white/60">Leave Balance</span>
            <div className="text-xl font-bold text-white mt-1">18.5 <span className="text-xs text-white/50">Days</span></div>
            <span className="text-[9px] text-accent mt-1 flex items-center gap-0.5">Apply Leave <ArrowUpRight className="w-2.5 h-2.5" /></span>
          </div>

          <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
            <span className="text-[10px] text-white/60">Attendance</span>
            <div className="text-xl font-bold text-emerald-400 mt-1">98.4%</div>
            <span className="text-[9px] text-white/50 mt-1">On-Time Clock In</span>
          </div>
        </div>

        {/* Pending Approvals Card */}
        <div className="p-3 rounded-xl bg-accent/15 border border-accent/30 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-white">Managerial Approvals (3)</span>
            <span className="text-[10px] text-accent">View All</span>
          </div>
          <div className="space-y-1.5">
            <div className="p-2 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between text-xs">
              <div>
                <div className="font-medium text-white/90">Sarah Chen • Annual Leave</div>
                <div className="text-[10px] text-white/50">Oct 12 – Oct 16 • Singapore Entity</div>
              </div>
              <div className="flex gap-1">
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">Approve</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-2 flex items-center justify-around border-t border-white/10 text-[10px] text-white/60">
          <span className="text-accent font-semibold">Home</span>
          <span>Approvals</span>
          <span>Payroll</span>
          <span>Profile</span>
        </div>
      </div>
    );
  }

  // Jofin Split-Salary FinTech
  if (projectId === 'jofin') {
    return (
      <div className={`w-full h-full bg-gradient-to-br from-emerald-950/80 via-slate-900 to-black p-4 sm:p-6 text-white flex flex-col justify-between select-none ${className}`}>
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center text-xs font-bold text-black">
              JF
            </div>
            <div>
              <div className="text-xs font-bold">Jofin Split-Salary</div>
              <div className="text-[10px] text-white/50">Smart Salary Allocation</div>
            </div>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            Auto-Split Active
          </span>
        </div>

        {/* Salary Allocation Breakdown */}
        <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2.5 my-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-white/60">Next Paycheck Disbursement</span>
            <span className="font-mono font-bold text-white">$8,450.00</span>
          </div>
          {/* Progress split bar */}
          <div className="w-full h-3 rounded-full bg-white/10 flex overflow-hidden">
            <div className="h-full bg-emerald-500 w-[50%]" title="Primary Account (50%)" />
            <div className="h-full bg-blue-500 w-[30%]" title="High-Yield Savings (30%)" />
            <div className="h-full bg-purple-500 w-[20%]" title="Investment Pot (20%)" />
          </div>
          <div className="grid grid-cols-3 gap-1 text-[9px] text-white/60 text-center">
            <div>Primary: 50%</div>
            <div>Savings: 30%</div>
            <div>Invest: 20%</div>
          </div>
        </div>

        {/* Earned Wage Access */}
        <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="text-xs font-semibold text-white">Earned Wage Available</div>
            <div className="text-[10px] text-white/50">Instant transfer to primary card</div>
          </div>
          <div className="text-right">
            <div className="text-sm font-bold text-emerald-400">$1,850.00</div>
            <span className="text-[9px] text-accent underline cursor-pointer">Transfer Now</span>
          </div>
        </div>

        <div className="text-[10px] text-center text-white/40 pt-2 border-t border-white/10">
          Secured by Enterprise Banking Gateway &amp; SOC2 Type II
        </div>
      </div>
    );
  }

  // Smart Reports Suite
  if (projectId === 'smart-reports') {
    return (
      <div className={`w-full h-full bg-slate-950 p-4 sm:p-6 text-white flex flex-col justify-between font-mono select-none ${className}`}>
        <div className="flex items-center justify-between pb-3 border-b border-white/10 font-sans">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-xs font-bold">
              SR
            </div>
            <div>
              <div className="text-xs font-bold">Smart Reports Suite</div>
              <div className="text-[10px] text-white/50">Payroll &amp; Bank Advice Automation</div>
            </div>
          </div>
          <div className="flex gap-1.5 text-[10px]">
            <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">100% Scheduled</span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-white/70">Export .CSV / .XML</span>
          </div>
        </div>

        {/* Table View Header */}
        <div className="space-y-1.5 my-3 text-[11px]">
          <div className="grid grid-cols-5 gap-2 px-2 py-1 bg-white/5 rounded text-white/50 font-sans text-[10px] font-semibold uppercase">
            <span>Report Entity</span>
            <span>Batch Cycles</span>
            <span>Audited Records</span>
            <span>Status</span>
            <span>Bank Delivery</span>
          </div>
          <div className="grid grid-cols-5 gap-2 px-2 py-1.5 bg-white/[0.02] border border-white/5 rounded text-white/90 items-center">
            <span className="font-sans font-medium text-xs">APAC Payroll Main</span>
            <span>Oct 2026</span>
            <span>14,820</span>
            <span className="text-emerald-400 flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Reconciled</span>
            <span className="text-blue-400">Scheduled 18:00</span>
          </div>
          <div className="grid grid-cols-5 gap-2 px-2 py-1.5 bg-white/[0.02] border border-white/5 rounded text-white/90 items-center">
            <span className="font-sans font-medium text-xs">SG Branch Advice</span>
            <span>Oct 2026</span>
            <span>3,190</span>
            <span className="text-emerald-400 flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Reconciled</span>
            <span className="text-emerald-400">Delivered</span>
          </div>
          <div className="grid grid-cols-5 gap-2 px-2 py-1.5 bg-white/[0.02] border border-white/5 rounded text-white/90 items-center">
            <span className="font-sans font-medium text-xs">PH Entity Statutory</span>
            <span>Oct 2026</span>
            <span>5,410</span>
            <span className="text-amber-400 flex items-center gap-1">Reviewing</span>
            <span className="text-white/40">Pending Auth</span>
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs font-sans text-white/60">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-blue-400" />
            <span>90% Cognitive Load Reduction vs Legacy PowerBuilder Grid</span>
          </div>
          <span className="text-accent text-[11px]">Zero Export Failures</span>
        </div>
      </div>
    );
  }

  // SJP Financial Onboarding & Design System
  if (projectId === 'sjp') {
    return (
      <div className={`w-full h-full bg-gradient-to-br from-purple-950/80 via-slate-900 to-black p-4 sm:p-6 text-white flex flex-col justify-between select-none ${className}`}>
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-purple-600 flex items-center justify-center text-xs font-bold">
              SJP
            </div>
            <div>
              <div className="text-xs font-bold">SJP Financial Onboarding</div>
              <div className="text-[10px] text-white/50">Multi-Brand Component System</div>
            </div>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
            Step 3 of 5 • Identity Verification
          </span>
        </div>

        {/* Stepper & Form UI Preview */}
        <div className="space-y-2.5 my-2">
          <div className="flex items-center justify-between text-xs text-white/70">
            <span className="font-semibold text-white">Entity Compliance Verification</span>
            <span className="text-purple-400 text-[10px]">Auto-validated KYC</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-[10px] text-white/50">Business ID / LEI</span>
              <div className="font-mono text-white/90">9845-LEI-EU-8821</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-[10px] text-white/50">Tax Jurisdiction</span>
              <div className="text-white/90">United Kingdom / APAC</div>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-purple-400" />
              <span>Biometric &amp; Document Match: 99.8%</span>
            </div>
            <span className="text-emerald-400 font-semibold text-[10px]">Verified</span>
          </div>
        </div>

        {/* Design System Token Chip */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] text-white/50">
          <span className="font-mono">Tokens: --color-brand-sjp • --radius-lg</span>
          <span className="text-purple-300">Design System V2.4</span>
        </div>
      </div>
    );
  }

  // Wealthforce Desktop Application (eMACH.ai RM Portal)
  if (projectId === 'wealthforce') {
    return (
      <div className={`relative w-full h-full bg-neutral-950 overflow-hidden flex flex-col group ${className}`}>
        <img
          src="/images/case-studies/wealthforce-thumbnail.png"
          alt="Wealthforce eMACH.ai RM Portal — Mutual Fund Portfolio & Holdings Management by Teja Sai"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
        {/* Subtle Bottom Specular Overlay */}
        <div className="absolute inset-x-0 bottom-0 py-2 px-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between text-[10px] text-white/90 backdrop-blur-[2px]">
          <span className="font-semibold tracking-wide flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            eMACH.ai RM Portal • Mutual Fund Holdings
          </span>
          <span className="font-mono text-white/70">Wealthforce FinTech</span>
        </div>
      </div>
    );
  }

  // TIA (AI HR & IT Assistant / Analytics Dashboard)
  return (
    <div className={`relative w-full h-full bg-white dark:bg-slate-950 overflow-hidden flex flex-col group ${className}`}>
      <img
        src="/images/case-studies/tia-thumbnail.png"
        alt="TIA AI HR & IT Assistant — StoHRM Analytics, Interaction & Satisfaction Dashboard by Teja Sai"
        className="w-full h-full object-cover [object-position:center_top] transition-transform duration-500 group-hover:scale-[1.02]"
        loading="lazy"
      />
      {/* Subtle Bottom Specular Overlay */}
      <div className="absolute inset-x-0 bottom-0 py-2 px-3 bg-gradient-to-t from-black/85 via-black/50 to-transparent flex items-center justify-between text-[10px] text-white/90 backdrop-blur-[2px]">
        <span className="font-semibold tracking-wide flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          StoHRM AI Analytics • Performance &amp; User Satisfaction
        </span>
        <span className="font-mono text-indigo-300">TIA Copilot Admin</span>
      </div>
    </div>
  );
};
