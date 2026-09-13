import React from 'react';
import { Clock, Calendar, AlertTriangle, ShieldCheck, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

interface Phase3Props {
  onProceedToPhase4: () => void;
}

export const Phase3BuildPlan: React.FC<Phase3Props> = ({ onProceedToPhase4 }) => {
  const timelineDays = [
    {
      day: 'Day 1 (Today / Sept 12)',
      title: 'Environment Setup & Core Agent Engine',
      tasks: [
        'Initialize repository, set up pyproject.toml and requirements.txt with Strands Agents SDK & boto3.',
        'Implement agent.py with Amazon Bedrock model configuration (Claude 3.5 Sonnet).',
        'Write core @tool decorators for data ingestion and mock processing.'
      ]
    },
    {
      day: 'Day 2 (Sept 13)',
      title: 'Background Trigger & Persistence Layer',
      tasks: [
        'Configure AWS EventBridge cron schedule or webhook listener for autonomous background runs.',
        'Integrate AgentMemory with DynamoDB state table for persistent episodic logs.',
        'Build the human-in-the-loop decision surface (Slack/Email/Dashboard notification card for ambiguous states).'
      ]
    },
    {
      day: 'Day 3 (Sept 14 - Submission Day)',
      title: 'AgentCore Deployment, Testing & Video Recording',
      tasks: [
        'Deploy runtime package to Amazon Bedrock AgentCore for maximum Technical Implementation points.',
        'Record 5-minute end-to-end demo video showing background autonomy and decision-making.',
        'Publish 3 builder.aws.com bonus posts containing "Agents for Humans" in the titles (+0.6 score boost).',
        'Final review of Devpost submission text, MIT/Apache license, and public GitHub repo.'
      ]
    }
  ];

  const risks = [
    {
      risk: 'Bedrock AgentCore deployment latency or IAM permission errors.',
      mitigation: 'Fallback to local Python execution via FastAPI / Express backend if AgentCore runtime packaging hits snags. Strands Agents SDK runs identically locally.'
    },
    {
      risk: 'Video recording goes over 5 minutes or misses the 3 required pitch segments.',
      mitigation: 'Use the strict timestamp script provided in Phase 4 (0:00 problem, 0:30 audience, 1:00 impact, 1:30 demo, 3:30 tech, 4:30 close).'
    },
    {
      risk: 'Missing builder.aws.com bonus post submission before deadline.',
      mitigation: 'Draft all 3 posts ahead of time in Phase 4 and schedule 10-minute publishing blocks on Sept 13.'
    }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950 p-6 md:p-8 rounded-2xl border border-indigo-500/30 shadow-xl text-white">
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" /> Phase 3: Day-by-Day Hackathon Build Plan
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-2">
          Execution Roadmap to Submission (Sept 14, 2026 @ 5:00 PM PT)
        </h2>
        <p className="text-slate-300 text-sm md:text-base max-w-3xl leading-relaxed">
          A disciplined timeline designed to balance core agent mechanics, Amazon Bedrock AgentCore deployment, and the mandatory 5-minute video presentation.
        </p>
      </div>

      {/* Timeline */}
      <div className="space-y-4">
        {timelineDays.map((item, idx) => (
          <div key={idx} className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-amber-500/10 text-amber-400 border border-amber-500/30 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap">
              {item.day}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <ul className="space-y-2">
                {item.tasks.map((task, tidx) => (
                  <li key={tidx} className="text-sm text-slate-300 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Risk Mitigation */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-400" /> High-Risk Items & Mitigation Strategies
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {risks.map((r, i) => (
            <div key={i} className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block mb-1">Risk #{i+1}</span>
                <p className="text-xs font-semibold text-white mb-3">{r.risk}</p>
              </div>
              <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                <span className="text-xs font-bold text-emerald-400 block mb-0.5">Mitigation:</span>
                <p className="text-xs text-slate-300">{r.mitigation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Minimum Viable Demo (MVD) Path */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl">
        <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
          <Zap className="w-5 h-5 text-amber-400" /> Minimum Viable Demo (MVD) Fallback Path
        </h3>
        <p className="text-xs text-slate-300 mb-4">
          If time runs short before the deadline, follow this guaranteed submission path:
        </p>
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs text-indigo-200 font-mono space-y-2">
          <p>1. Run Strands Agent locally with 3 simulated email receipts or data events.</p>
          <p>2. Record terminal output showing autonomous background check + human decision prompt.</p>
          <p>3. Embed screen recording in a clean React Tailwind UI dashboard.</p>
          <p>4. Submit public GitHub repo with MIT License and README.md.</p>
        </div>
      </div>

      {/* Proceed to Phase 4 */}
      <div className="bg-gradient-to-r from-emerald-950/80 via-slate-900 to-slate-900 p-6 rounded-2xl border border-emerald-500/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4" /> Ready for Phase 4: Submission Package
          </div>
          <h4 className="text-xl font-bold text-white">
            Build Plan Secured
          </h4>
          <p className="text-slate-300 text-sm mt-1">
            Proceed to generate submission-ready artifacts, README, video script, Devpost text, and builder.aws.com bonus posts.
          </p>
        </div>
        <button
          onClick={onProceedToPhase4}
          className="px-6 py-3 bg-emerald-500 text-slate-950 rounded-xl font-bold text-sm hover:bg-emerald-400 transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/20 whitespace-nowrap cursor-pointer"
        >
          <span>Proceed to Submission Package</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
