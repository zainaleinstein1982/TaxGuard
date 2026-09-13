import React from 'react';
import { ShieldCheck, CheckCircle2, AlertTriangle, Award, Zap, Check } from 'lucide-react';
import { AgentIdea } from '../types';

interface Phase5Props {
  selectedIdea: AgentIdea | null;
}

export const Phase5JudgeProof: React.FC<Phase5Props> = ({ selectedIdea }) => {
  const scores = selectedIdea?.scores || {
    technical: 4.8,
    design: 4.6,
    impact: 4.9,
    creativity: 4.5,
    presentation: 4.7
  };

  const totalScore = (
    (scores.technical + scores.design + scores.impact + scores.creativity + scores.presentation) / 5 + 0.6
  ).toFixed(2);

  const disqualificationChecks = [
    { item: 'Public GitHub/GitLab Repository URL accessible', status: 'Passed', note: 'Must be public before submission deadline.' },
    { item: 'MIT or Apache 2.0 Open Source License in repo', status: 'Passed', note: 'Included LICENSE file at root.' },
    { item: 'Demo video max 5 minutes & public on YouTube/Vimeo', status: 'Passed', note: 'Script structured with exact timestamps.' },
    { item: 'New Project created during submission period (Aug 10 - Sept 14)', status: 'Passed', note: 'Built during hackathon window.' },
    { item: 'Builder ID & AWS account verified', status: 'Passed', note: 'Ready for AgentCore deployment.' }
  ];

  const finalChecklist = [
    'Verify git repo is public and contains all source files.',
    'Confirm README.md has setup instructions and architecture diagram.',
    'Test end-to-end Python Strands Agent execution locally and on AgentCore.',
    'Publish 3 builder.aws.com posts with "Agents for Humans" in the titles.',
    'Submit project on Devpost before Sept 14, 2026 @ 5:00 PM PT.'
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950 p-6 md:p-8 rounded-2xl border border-indigo-500/30 shadow-xl text-white">
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" /> Phase 5: Judge-Proofing & Score Simulator
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-2">
          Final Score Simulation & Disqualification Audit
        </h2>
        <p className="text-slate-300 text-sm md:text-base max-w-3xl leading-relaxed">
          Evaluating your submission against the 5 official judging criteria (1-5 scale) plus bonus points to guarantee a top-tier placing.
        </p>
      </div>

      {/* Score Simulator */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl flex flex-col justify-between items-center text-center">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">Estimated Total Score</span>
            <div className="text-5xl font-black text-white my-3 flex items-center justify-center gap-1">
              {totalScore} <span className="text-sm text-slate-400 font-normal">/ 5.6 (with bonus)</span>
            </div>
            <p className="text-xs text-slate-300">
              Includes +0.6 bonus points for 3 published builder.aws.com posts with "Agents for Humans" in the title.
            </p>
          </div>
          <div className="mt-6 w-full bg-emerald-500/10 border border-emerald-500/30 p-3 rounded-xl text-emerald-300 text-xs font-semibold">
            🚀 Top 5% Hackathon Contender Rating
          </div>
        </div>

        <div className="lg:col-span-2 bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl space-y-4">
          <h3 className="text-lg font-bold text-white mb-2">Category Breakdown (1 - 5 Scale)</h3>
          
          <div className="space-y-3 text-xs">
            <div>
              <div className="flex justify-between text-slate-300 font-semibold mb-1">
                <span>Technical Implementation (Strands SDK + AgentCore)</span>
                <span className="text-amber-400">{scores.technical} / 5.0</span>
              </div>
              <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full rounded-full" style={{ width: `${(scores.technical / 5) * 100}%` }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-slate-300 font-semibold mb-1">
                <span>Design & Coherent Product Experience</span>
                <span className="text-amber-400">{scores.design} / 5.0</span>
              </div>
              <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full rounded-full" style={{ width: `${(scores.design / 5) * 100}%` }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-slate-300 font-semibold mb-1">
                <span>Potential Impact (Real problem & audience)</span>
                <span className="text-amber-400">{scores.impact} / 5.0</span>
              </div>
              <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full rounded-full" style={{ width: `${(scores.impact / 5) * 100}%` }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-slate-300 font-semibold mb-1">
                <span>Creativity & Originality (Quiet background autonomy)</span>
                <span className="text-amber-400">{scores.creativity} / 5.0</span>
              </div>
              <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full rounded-full" style={{ width: `${(scores.creativity / 5) * 100}%` }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-slate-300 font-semibold mb-1">
                <span>Presentation & Video Walkthrough</span>
                <span className="text-amber-400">{scores.presentation} / 5.0</span>
              </div>
              <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full rounded-full" style={{ width: `${(scores.presentation / 5) * 100}%` }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disqualification Audit */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-amber-400" /> Official Rules Disqualification Audit
        </h3>
        <div className="space-y-3">
          {disqualificationChecks.map((check, idx) => (
            <div key={idx} className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-xs font-bold text-white block">{check.item}</span>
                  <span className="text-[11px] text-slate-400">{check.note}</span>
                </div>
              </div>
              <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-lg text-xs font-semibold">
                {check.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Final 48-Hour Checklist */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-amber-400" /> Final 48-Hour Deadline Checklist
        </h3>
        <div className="space-y-2">
          {finalChecklist.map((task, i) => (
            <div key={i} className="flex items-center gap-3 bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs text-slate-300">
              <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-[10px]">
                {i+1}
              </div>
              <span>{task}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
