import React from 'react';
import { translations } from '../lib/i18n';
import { Shield, CheckCircle2, Clock, Loader2, Globe, RotateCcw } from 'lucide-react';

interface LeftSidebarProps {
  currentPhase: number;
  phaseStatuses: Record<number, 'pending' | 'running' | 'done'>;
  lang: 'en' | 'id';
  setLang: (lang: 'en' | 'id') => void;
  onReplay: () => void;
}

export const LeftSidebar: React.FC<LeftSidebarProps> = ({
  currentPhase,
  phaseStatuses,
  lang,
  setLang,
  onReplay
}) => {
  const t = translations[lang];

  const phases = [1, 2, 3, 4, 5];

  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800 flex flex-col h-screen select-none shrink-0">
      {/* Brand Header */}
      <div className="p-5 border-b border-slate-800">
        <div className="flex items-center gap-2.5 mb-1">
          <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-emerald-500/30">
            <Shield className="w-4 h-4" />
          </div>
          <div>
            <h1 className="font-bold text-white text-sm tracking-wide">TaxGuard</h1>
            <p className="text-[10px] text-emerald-400 font-medium">Agents for Humans</p>
          </div>
        </div>
      </div>

      {/* Language & Status Bar */}
      <div className="px-4 py-2.5 bg-slate-950/50 border-b border-slate-800/80 flex items-center justify-between text-xs">
        <div className="flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-400">Lang:</span>
          <button
            onClick={() => setLang(lang === 'en' ? 'id' : 'en')}
            className="font-bold text-emerald-400 hover:text-emerald-300 uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 cursor-pointer"
          >
            {lang.toUpperCase()}
          </button>
        </div>
        <div className="flex items-center gap-1 text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span className="text-[10px] font-mono">Live Demo</span>
        </div>
      </div>

      {/* Stepper list */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 mb-1">
          Autonomous Execution Stepper
        </div>

        {phases.map((p) => {
          const status = phaseStatuses[p];
          const isActive = currentPhase === p;

          return (
            <div
              key={p}
              className={`p-3 rounded-xl border transition-all flex items-start gap-3 ${
                isActive
                  ? 'bg-emerald-500/10 border-emerald-500/50 text-white shadow-lg shadow-emerald-500/5'
                  : status === 'done'
                  ? 'bg-slate-950/60 border-slate-800 text-slate-300'
                  : 'bg-slate-950/30 border-slate-800/50 text-slate-500 opacity-60'
              }`}
            >
              <div className="mt-0.5">
                {status === 'done' ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : status === 'running' ? (
                  <Loader2 className="w-4 h-4 text-amber-400 animate-spin" />
                ) : (
                  <Clock className="w-4 h-4 text-slate-600" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold truncate flex items-center justify-between">
                  <span>Phase {p}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded uppercase font-mono ${
                    status === 'done' ? 'bg-emerald-500/20 text-emerald-300' :
                    status === 'running' ? 'bg-amber-500/20 text-amber-300 animate-pulse' :
                    'bg-slate-800 text-slate-400'
                  }`}>
                    {status}
                  </span>
                </div>
                <div className="text-xs text-slate-300 mt-0.5 truncate font-medium">
                  {t.phases[p as keyof typeof t.phases]}
                </div>
                <div className="text-[10px] text-slate-400 mt-1 line-clamp-1">
                  {t.phaseDescs[p as keyof typeof t.phaseDescs]}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Replay Button */}
      <div className="p-4 border-t border-slate-800 bg-slate-950/60">
        <button
          onClick={onReplay}
          className="w-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition shadow cursor-pointer"
        >
          <RotateCcw className="w-4 h-4 text-emerald-400" /> {t.replayDemo}
        </button>
      </div>
    </aside>
  );
};
