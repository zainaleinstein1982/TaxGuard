import React from 'react';
import { translations } from '../lib/i18n';
import { Cpu, Terminal, Database, ShieldAlert, Award } from 'lucide-react';

interface RightSidebarProps {
  currentPhase: number;
  interruptResolved: boolean;
  lang: 'en' | 'id';
}

export const RightSidebar: React.FC<RightSidebarProps> = ({ currentPhase, interruptResolved, lang }) => {
  const t = translations[lang];

  const agentNames: Record<number, string> = {
    1: "Agent 1 (EventBridge Cron)",
    2: "Agent 2 (Strands Auditor)",
    3: "Agent 3 (Interrupt Sentinel)",
    4: "Agent 4 (Resume Engine)",
    5: "Agent 5 (Impact Reporter)"
  };

  const activeTools: Record<number, string> = {
    1: "imap_fetch_receipts()",
    2: "parse_receipt_text() & check_irs_rule()",
    3: "request_human_writeoff_approval()",
    4: "InterruptResponseContent resume",
    5: "generate_tax_report()"
  };

  const confidenceScores: Record<number, string> = {
    1: "1.00 (System Event)",
    2: "0.72 (Ambiguous AMZN)",
    3: "0.00 (Paused for Human)",
    4: "0.98 (Verified Write-off)",
    5: "0.96 (Autonomous Avg)"
  };

  return (
    <aside className="w-80 bg-slate-900 border-l border-slate-800 flex flex-col h-screen select-none shrink-0 overflow-y-auto p-5 space-y-5">
      {/* Live Agent Context */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 shadow-lg">
        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-800">
          <Terminal className="w-4 h-4 text-emerald-400" />
          <h2 className="text-xs font-bold text-white uppercase tracking-wider">{t.liveContext.title}</h2>
        </div>

        <div className="space-y-3 text-xs">
          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">{t.liveContext.agentName}</span>
            <span className="font-bold text-emerald-400">{agentNames[currentPhase]}</span>
          </div>

          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">{t.liveContext.tool}</span>
            <span className="font-mono text-slate-300 text-[11px] bg-slate-900 px-2 py-1 rounded border border-slate-800 block mt-0.5 truncate">
              {activeTools[currentPhase]}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-semibold">{t.liveContext.memory}</span>
              <span className="font-mono text-slate-200 text-[11px]">47 rows (DynamoDB)</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-semibold">{t.liveContext.confidence}</span>
              <span className="font-mono text-amber-400 font-bold">{confidenceScores[currentPhase]}</span>
            </div>
          </div>

          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">{t.liveContext.interruptStatus}</span>
            <span className={`inline-block mt-0.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
              currentPhase === 3 && !interruptResolved ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 animate-pulse' :
              currentPhase >= 4 || interruptResolved ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
              'bg-slate-800 text-slate-400'
            }`}>
              {currentPhase === 3 && !interruptResolved ? t.liveContext.waiting : currentPhase >= 4 || interruptResolved ? t.liveContext.resolved : t.liveContext.idle}
            </span>
          </div>
        </div>
      </div>

      {/* Judge Notes & Criteria */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 shadow-lg">
        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-800">
          <Award className="w-4 h-4 text-amber-400" />
          <h2 className="text-xs font-bold text-white uppercase tracking-wider">{t.judgeNotes.title}</h2>
        </div>

        <div className="space-y-3 text-xs text-slate-300">
          <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
              Phase {currentPhase} Scoring Focus
            </span>
            <p className="text-[11px] leading-relaxed text-slate-300">
              {t.judgeNotes[currentPhase as keyof typeof t.judgeNotes]}
            </p>
          </div>
        </div>
      </div>

      {/* Hackathon Footer Info */}
      <div className="mt-auto bg-slate-950/60 border border-slate-800 rounded-xl p-4 text-xs space-y-2">
        <div className="text-emerald-400 font-bold flex items-center gap-1.5">
          <ShieldAlert className="w-4 h-4" />
          <span>Agents for Humans</span>
        </div>
        <p className="text-[11px] text-slate-400 leading-relaxed">
          Autonomous background agents built with Strands Agents SDK & Amazon Bedrock AgentCore.
        </p>
      </div>
    </aside>
  );
};
