import React, { useState, useEffect } from 'react';
import { useDemoSequencer } from './hooks/useDemoSequencer';
import { initialReceipts, agentLogs } from './lib/mockData';
import { LeftSidebar } from './components/LeftSidebar';
import { RightSidebar } from './components/RightSidebar';
import { ReceiptStream } from './components/ReceiptStream';
import { LogStream } from './components/LogStream';
import { DecisionSurfaceCard } from './components/DecisionSurfaceCard';
import { ImpactDashboard } from './components/ImpactDashboard';
import { AgentAvatar } from './components/AgentAvatar';
import { Shield, Sparkles, Clock, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<'en' | 'id'>('en');
  const [clockTime, setClockTime] = useState<string>('08:00:01');
  
  const {
    currentPhase,
    phaseStatuses,
    interruptResolved,
    countdown,
    handleResolveInterrupt,
    handleReplay
  } = useDemoSequencer();

  // Live clock tick simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setClockTime(prev => {
        const parts = prev.split(':').map(Number);
        parts[2]++;
        if (parts[2] >= 60) { parts[2] = 0; parts[1]++; }
        if (parts[1] >= 60) { parts[1] = 0; parts[0]++; }
        return parts.map(n => n.toString().padStart(2, '0')).join(':');
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Gather logs for current and previous phases
  const activeLogs = React.useMemo(() => {
    let logs: string[] = [];
    for (let p = 1; p <= currentPhase; p++) {
      if (agentLogs[p as keyof typeof agentLogs]) {
        logs = [...logs, ...agentLogs[p as keyof typeof agentLogs]];
      }
    }
    return logs;
  }, [currentPhase]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex font-sans selection:bg-emerald-500 selection:text-slate-950 overflow-hidden">
      {/* 1. Left Sidebar: 5 Phases Stepper & Lang Toggle */}
      <LeftSidebar
        currentPhase={currentPhase}
        phaseStatuses={phaseStatuses}
        lang={lang}
        setLang={setLang}
        onReplay={handleReplay}
      />

      {/* 2. Center Stage */}
      <main className="flex-1 h-screen overflow-y-auto p-6 lg:p-8 flex flex-col space-y-6">
        {/* Header */}
        <header className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-white text-base">TaxGuard is running in the background...</h2>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
              </div>
              <p className="text-xs text-slate-400">Agents for Humans Hackathon • Autonomous Execution</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <AgentAvatar phase={currentPhase} />
            <div className="hidden sm:flex items-center gap-1.5 font-mono text-xs bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>08:{clockTime}</span>
            </div>
          </div>
        </header>

        {/* Center Main Stage Content */}
        <div className="space-y-6 flex-1">
          {/* Receipt Stream */}
          <ReceiptStream receipts={initialReceipts} currentPhase={currentPhase} />

          {/* Log Stream */}
          <LogStream logs={activeLogs} />

          {/* Phase 3 Interrupt Decision Surface Card OR Phase 5 Impact Dashboard */}
          {currentPhase === 3 && !interruptResolved && (
            <DecisionSurfaceCard
              onResolve={handleResolveInterrupt}
              countdown={countdown}
              lang={lang}
            />
          )}

          {currentPhase >= 5 && (
            <ImpactDashboard lang={lang} onReplay={handleReplay} />
          )}
        </div>
      </main>

      {/* 3. Right Sidebar: Live Agent Context & Judge Notes */}
      <RightSidebar
        currentPhase={currentPhase}
        interruptResolved={interruptResolved}
        lang={lang}
      />
    </div>
  );
}
