import React from 'react';
import { translations } from '../lib/i18n';
import { impactMetrics } from '../lib/mockData';
import { Award, Download, CheckCircle2, Clock, Zap } from 'lucide-react';

interface ImpactDashboardProps {
  lang: 'en' | 'id';
  onReplay: () => void;
}

export const ImpactDashboard: React.FC<ImpactDashboardProps> = ({ lang, onReplay }) => {
  const t = translations[lang].impactDashboard;

  return (
    <div className="bg-slate-900 border border-emerald-500/40 rounded-2xl p-6 shadow-2xl animate-in fade-in duration-500">
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">{t.title}</h3>
            <p className="text-xs text-slate-400">TaxGuard Autonomous Agent Execution Complete</p>
          </div>
        </div>
        <button
          onClick={() => alert("Mock PDF downloaded: TaxGuard_Q3_2026_ScheduleC.pdf")}
          className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-2 px-4 rounded-xl text-xs flex items-center gap-2 transition shadow-lg shadow-emerald-500/20 cursor-pointer"
        >
          <Download className="w-4 h-4" /> {t.downloadReport}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
          <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">{t.processed}</span>
          <div className="text-2xl font-black text-white">{impactMetrics.processed}</div>
          <span className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> 100% Verified
          </span>
        </div>

        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
          <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">{t.autonomous}</span>
          <div className="text-2xl font-black text-emerald-400">{impactMetrics.autonomous} (96.6%)</div>
          <span className="text-[10px] text-slate-400 mt-1">Zero human effort</span>
        </div>

        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
          <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">{t.savings}</span>
          <div className="text-2xl font-black text-amber-400">${impactMetrics.savings.toFixed(2)}</div>
          <span className="text-[10px] text-amber-400 mt-1">IRS Schedule C Deductible</span>
        </div>

        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
          <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">{t.hoursSaved}</span>
          <div className="text-2xl font-black text-sky-400">{impactMetrics.hoursSaved} hrs</div>
          <span className="text-[10px] text-slate-400 mt-1">Vs. manual bookkeeping</span>
        </div>
      </div>

      <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-slate-300">
          <Zap className="w-4 h-4 text-amber-400" />
          <span>Autonomous workflow achieved via Strands Agents SDK & Amazon Bedrock AgentCore.</span>
        </div>
        <button
          onClick={onReplay}
          className="text-emerald-400 hover:text-emerald-300 font-bold underline underline-offset-4 cursor-pointer"
        >
          Replay Full Demo
        </button>
      </div>
    </div>
  );
};
