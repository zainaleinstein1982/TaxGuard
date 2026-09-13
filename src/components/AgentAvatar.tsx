import React from 'react';
import { Cpu, Bot, Shield, CheckCircle, Zap } from 'lucide-react';

interface AgentAvatarProps {
  phase: number;
}

export const AgentAvatar: React.FC<AgentAvatarProps> = ({ phase }) => {
  const configs: Record<number, { bg: string; text: string; border: string; name: string; icon: React.ReactNode }> = {
    1: { bg: 'bg-sky-500/20', text: 'text-sky-400', border: 'border-sky-500/40', name: 'Agent 1: Cron Scout', icon: <Zap className="w-4 h-4" /> },
    2: { bg: 'bg-violet-500/20', text: 'text-violet-400', border: 'border-violet-500/40', name: 'Agent 2: Auditor Bot', icon: <Bot className="w-4 h-4" /> },
    3: { bg: 'bg-amber-500/20', text: 'text-amber-400', border: 'border-amber-500/40', name: 'Agent 3: Interrupt Sentinel', icon: <Shield className="w-4 h-4" /> },
    4: { bg: 'bg-emerald-500/20', text: 'text-emerald-400', border: 'border-emerald-500/40', name: 'Agent 4: Resume Engine', icon: <CheckCircle className="w-4 h-4" /> },
    5: { bg: 'bg-rose-500/20', text: 'text-rose-400', border: 'border-rose-500/40', name: 'Agent 5: Impact Reporter', icon: <Cpu className="w-4 h-4" /> }
  };

  const cfg = configs[phase] || configs[1];

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${cfg.bg} ${cfg.text} ${cfg.border} text-xs font-bold shadow-sm`}>
      {cfg.icon}
      <span>{cfg.name}</span>
    </div>
  );
};
