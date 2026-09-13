import React from 'react';
import { Receipt } from '../lib/mockData';
import { CheckCircle2, AlertTriangle, Clock, FileText } from 'lucide-react';

interface ReceiptStreamProps {
  receipts: Receipt[];
  currentPhase: number;
}

export const ReceiptStream: React.FC<ReceiptStreamProps> = ({ receipts, currentPhase }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl">
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-emerald-400" />
          <h3 className="text-xs font-bold text-white uppercase tracking-wider">Live Receipt Stream</h3>
        </div>
        <span className="text-[10px] font-mono text-slate-400">IMAP Polling: active</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {receipts.map((r, idx) => {
          const isPending = currentPhase === 1 || (currentPhase === 2 && idx === 2);
          const isAmbiguous = r.status === 'ambiguous' && currentPhase >= 3;

          return (
            <div
              key={r.id}
              className={`bg-slate-950 border rounded-xl p-4 transition-all relative overflow-hidden ${
                isAmbiguous
                  ? 'border-amber-500/50 bg-amber-500/5 shadow-lg shadow-amber-500/10'
                  : r.status === 'approved'
                  ? 'border-emerald-500/30 bg-emerald-500/5'
                  : 'border-slate-800'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-slate-400">{r.id}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase flex items-center gap-1 ${
                  r.status === 'approved' ? 'bg-emerald-500/20 text-emerald-300' :
                  isAmbiguous ? 'bg-amber-500/20 text-amber-300 animate-pulse' :
                  'bg-slate-800 text-slate-400'
                }`}>
                  {r.status === 'approved' ? <CheckCircle2 className="w-3 h-3" /> :
                   isAmbiguous ? <AlertTriangle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                  {r.status}
                </span>
              </div>

              <h4 className="font-bold text-white text-sm truncate">{r.vendor}</h4>
              <div className="flex items-baseline justify-between mt-2">
                <span className="text-lg font-black text-emerald-400">${r.amount.toFixed(2)}</span>
                <span className="text-xs text-slate-400">{r.date}</span>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-900 text-[11px] text-slate-400 truncate flex items-center justify-between">
                <span>Category:</span>
                <span className="font-mono text-slate-300">{r.category}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
