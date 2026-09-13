import React from 'react';
import { translations } from '../lib/i18n';
import { interruptPayload } from '../lib/mockData';
import { AlertCircle, CheckCircle2, XCircle, RotateCcw, DollarSign, Timer } from 'lucide-react';

interface DecisionSurfaceCardProps {
  onResolve: () => void;
  countdown: number;
  lang: 'en' | 'id';
}

export const DecisionSurfaceCard: React.FC<DecisionSurfaceCardProps> = ({ onResolve, countdown, lang }) => {
  const t = translations[lang].decisionCard;

  return (
    <div className="bg-slate-900 border-2 border-amber-500/50 rounded-2xl p-6 shadow-2xl relative overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-500">
      <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500 animate-pulse"></div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4" /> {t.title}
          </span>
          <span className="text-xs text-slate-400 font-mono">ID: R-2026-0913-003</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-amber-400 font-mono bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/20">
          <Timer className="w-3.5 h-3.5 animate-spin" />
          <span>{t.autoApproving.replace('{seconds}', countdown.toString())}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
          <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Receipt Vendor</span>
          <h4 className="text-base font-bold text-white">{interruptPayload.receipt.vendor}</h4>
          <span className="text-xs text-slate-400">{interruptPayload.receipt.date}</span>
        </div>

        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
          <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Transaction Amount</span>
          <div className="text-2xl font-black text-amber-400 flex items-center">
            <DollarSign className="w-5 h-5" />{interruptPayload.receipt.amount.toFixed(2)}
          </div>
        </div>

        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
          <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">{t.savingsLabel}</span>
          <div className="text-2xl font-black text-emerald-400">
            +${interruptPayload.estimatedSavings.toFixed(2)}
          </div>
        </div>
      </div>

      <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 mb-5 space-y-2 text-xs">
        <div>
          <span className="text-amber-400 font-bold block mb-0.5">{t.reasonLabel}:</span>
          <p className="text-slate-300 italic">"{interruptPayload.reason}"</p>
        </div>
        <div>
          <span className="text-slate-400 font-semibold block mb-0.5">{t.historyLabel}:</span>
          <p className="text-slate-300 font-mono">{interruptPayload.history}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={onResolve}
          className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition shadow-lg shadow-emerald-500/20 cursor-pointer"
        >
          <CheckCircle2 className="w-4 h-4" /> {t.approve}
        </button>
        <button
          onClick={onResolve}
          className="flex-1 bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/30 font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition cursor-pointer"
        >
          <XCircle className="w-4 h-4" /> {t.reject}
        </button>
        <button
          onClick={onResolve}
          className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition cursor-pointer"
        >
          <RotateCcw className="w-4 h-4 text-amber-400" /> {t.reclassify}
        </button>
      </div>
    </div>
  );
};
