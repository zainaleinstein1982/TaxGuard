import React from 'react';
import { Terminal } from 'lucide-react';

interface LogStreamProps {
  logs: string[];
}

export const LogStream: React.FC<LogStreamProps> = ({ logs }) => {
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 shadow-xl font-mono text-xs">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800/80">
        <div className="flex items-center gap-2 text-slate-300">
          <Terminal className="w-4 h-4 text-emerald-400" />
          <span className="font-bold uppercase tracking-wider text-[11px]">Autonomous Agent Execution Log</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span>python3 agent.py</span>
        </div>
      </div>

      <div className="space-y-1.5 max-h-48 overflow-y-auto pr-2">
        {logs.map((log, idx) => (
          <div key={idx} className="text-slate-300 flex items-start gap-2">
            <span className="text-slate-600 select-none">{">"}</span>
            <span className="leading-relaxed">{log}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
