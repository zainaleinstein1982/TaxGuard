import React from 'react';
import { Trophy, Clock, ShieldCheck, Terminal, Award, FileText, CheckCircle2 } from 'lucide-react';
import { Phase } from '../types';

interface HeaderProps {
  currentPhase: Phase;
  onSelectPhase: (phase: Phase) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPhase, onSelectPhase }) => {
  const phases = [
    { id: 1, name: 'Phase 1: Track & Idea', icon: Trophy },
    { id: 2, name: 'Phase 2: Architecture & Code', icon: Terminal },
    { id: 3, name: 'Phase 3: Build Plan', icon: Clock },
    { id: 4, name: 'Phase 4: Submission Package', icon: FileText },
    { id: 5, name: 'Phase 5: Judge-Proofing', icon: ShieldCheck },
  ];

  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-amber-500 text-slate-950 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                <Award className="w-3.5 h-3.5" /> AWS & Devpost Hackathon
              </span>
              <span className="text-slate-400 text-xs flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" /> Deadline: Sept 14, 2026 @ 5:00 PM PT
              </span>
            </div>
            <h1 className="text-2xl font-black tracking-tight mt-1 bg-gradient-to-r from-white via-slate-200 to-amber-300 bg-clip-text text-transparent">
              Agents for Humans Hackathon Co-Pilot
            </h1>
            <p className="text-slate-400 text-sm mt-0.5">
              Autonomous background agents built with Strands Agents SDK & Amazon Bedrock AgentCore
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700/60">
            <div className="text-xs text-slate-300 px-3 py-1 font-medium hidden lg:block">
              Prize Pool: <span className="text-amber-400 font-bold">$40,000</span>
            </div>
          </div>
        </div>

        {/* Phase Navigation Tabs */}
        <div className="flex items-center gap-2 mt-6 overflow-x-auto pb-2 scrollbar-none">
          {phases.map((p) => {
            const Icon = p.icon;
            const isActive = currentPhase === p.id;
            return (
              <button
                key={p.id}
                onClick={() => onSelectPhase(p.id as Phase)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-slate-800/70 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-amber-400'}`} />
                <span>{p.name}</span>
                {isActive && <CheckCircle2 className="w-3.5 h-3.5 ml-1" />}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
