import React, { useState } from 'react';
import { Terminal, Copy, Check, Cpu, Server, Database, Shield, Layers, ArrowRight } from 'lucide-react';
import { AgentIdea } from '../types';
import { CODE_SKELETON_AGENT, CODE_SKELETON_SERVER } from '../data/hackathonData';

interface Phase2Props {
  selectedIdea: AgentIdea | null;
  onProceedToPhase3: () => void;
}

export const Phase2Architecture: React.FC<Phase2Props> = ({ selectedIdea, onProceedToPhase3 }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'agent' | 'server' | 'repo'>('agent');

  const handleCopy = (code: string, tabName: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(tabName);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const ideaName = selectedIdea?.name || 'TaxGuard Autonomous Receipt & Expense Auditor';

  const mermaidDiagram = `
graph TD
    subgraph Background Autonomy
        EB[AWS EventBridge Cron] -->|Trigger every 6h| AG[Strands Agent Worker]
        API[Webhook / Gmail Push] -->|Real-time Ingestion| AG
    end

    subgraph Strands Agents SDK
        AG -->|Bedrock Model| CL[Claude 3.5 Sonnet]
        AG -->|Tool Execution| TOOLS[@tool Decorators]
        TOOLS -->|Parse & Audit| OCR[OCR / Receipt Parser]
        TOOLS -->|Rule Check| IRS[Tax Rules Engine]
    end

    subgraph Amazon Bedrock AgentCore
        AG -->|Runtime & Memory| AC[AgentCore Persistent Memory]
        AG -->|Secure Compute| CI[Code Interpreter Tool]
    end

    subgraph Persistence & Decision Surface
        TOOLS -->|Save State| DB[(DynamoDB Table)]
        AG -->|Low Confidence / Ambiguous| NOTIFY[Human Decision Surface / Slack / SMS]
        NOTIFY -->|Approve / Reject| DB
    end
  `;

  const asciiFallback = `
  +-------------------------------------------------------------+
  |              BACKGROUND AUTONOMY TRIGGER                    |
  |    (AWS EventBridge Cron / Gmail Webhook / Twilio SMS)      |
  +-------------------------------------------------------------+
                                 |
                                 v
  +-------------------------------------------------------------+
  |                   STRANDS AGENTS SDK                        |
  |  - Agent Definition (model=BedrockModel)                    |
  |  - Custom @tool decorators for OCR & Rule Checking          |
  |  - Persistent Memory (AgentMemory backend="dynamodb")       |
  +-------------------------------------------------------------+
            |                                    |
            v                                    v
  +-----------------------+            +------------------------+
  | AMAZON BEDROCK        |            | DYNAMODB STATE STORE   |
  | AgentCore Runtime     |            | - Audit Logs           |
  | Code Interpreter      |            | - TTL 30 Days          |
  +-----------------------+            +------------------------+
            |                                    |
            +-----------------+------------------+
                              |
                              v
  +-------------------------------------------------------------+
  |             HUMAN-IN-THE-LOOP DECISION SURFACE              |
  |       (Surfaces ONLY when confidence < 0.85 or ambiguous)    |
  +-------------------------------------------------------------+
  `;

  const repoStructure = `
/hackathon-submission
├── .env.example                # Required environment variables (AWS, Bedrock, API keys)
├── .gitignore                  # Ignore node_modules, .env, __pycache__, dist
├── README.md                   # Comprehensive judge-facing documentation
├── LICENSE                     # MIT or Apache 2.0 Open Source License
├── pyproject.toml              # Python project metadata and dependencies
├── requirements.txt            # Python dependencies (strands-agents, boto3, pydantic)
├── package.json                # Node.js Express server & React dashboard scripts
├── server.ts                   # Full-stack Express backend bridging web UI & Python agent
├── agent.py                    # Core Strands Agent definition, @tool decorators, Bedrock config
├── tools.py                    # Modular tool implementations (OCR, API integrations, DB write)
├── database.py                 # DynamoDB connection & schema setup
├── deploy_agentcore.sh         # Amazon Bedrock AgentCore deployment script
└── src/                        # React Frontend Dashboard
    ├── App.tsx                 # Main UI component for live demo & agent logs
    ├── main.tsx                # React DOM entry point
    └── index.css               # Tailwind CSS styles
  `;

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950 p-6 md:p-8 rounded-2xl border border-indigo-500/30 shadow-xl text-white">
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5" /> Phase 2: Technical Architecture & Code Skeleton
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-2">
          Architecture for: <span className="text-amber-400">{ideaName}</span>
        </h2>
        <p className="text-slate-300 text-sm md:text-base max-w-3xl leading-relaxed">
          Designed specifically for the <strong className="text-white">Strands Agents SDK</strong> and <strong className="text-amber-300">Amazon Bedrock AgentCore</strong>. This architecture ensures rigorous background autonomy with secure state persistence and human-in-the-loop decision routing.
        </p>
      </div>

      {/* Architecture Diagram Section */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Layers className="w-5 h-5 text-amber-400" /> Architecture Diagram (Mermaid & ASCII)
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 block">Mermaid Flowchart</span>
            <div className="bg-slate-900/80 p-4 rounded-lg overflow-x-auto text-xs text-emerald-300 font-mono">
              <pre>{mermaidDiagram.trim()}</pre>
            </div>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 block">ASCII Fallback (For Submission)</span>
            <div className="bg-slate-900/80 p-4 rounded-lg overflow-x-auto text-xs text-amber-300 font-mono whitespace-pre">
              {asciiFallback.trim()}
            </div>
          </div>
        </div>
      </div>

      {/* Repository Structure */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Server className="w-5 h-5 text-amber-400" /> Repository Structure & Conventions
        </h3>
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto whitespace-pre">
          {repoStructure.trim()}
        </div>
      </div>

      {/* Code Skeletons Section */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Cpu className="w-5 h-5 text-amber-400" /> Strands Agents SDK Code Skeleton (Runnable Python)
          </h3>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('agent')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'agent' ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              agent.py
            </button>
            <button
              onClick={() => setActiveTab('server')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'server' ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              server.ts
            </button>
            <button
              onClick={() => handleCopy(activeTab === 'agent' ? CODE_SKELETON_AGENT : CODE_SKELETON_SERVER, activeTab)}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ml-2"
            >
              {copiedCode === activeTab ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedCode === activeTab ? 'Copied!' : 'Copy Code'}
            </button>
          </div>
        </div>

        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 overflow-x-auto">
          <pre className="text-xs text-indigo-200 font-mono">
            {activeTab === 'agent' ? CODE_SKELETON_AGENT : CODE_SKELETON_SERVER}
          </pre>
        </div>
      </div>

      {/* Proceed to Phase 3 */}
      <div className="bg-gradient-to-r from-emerald-950/80 via-slate-900 to-slate-900 p-6 rounded-2xl border border-emerald-500/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Check className="w-4 h-4" /> Ready for Phase 3: Build Plan
          </div>
          <h4 className="text-xl font-bold text-white">
            Architecture Locked In
          </h4>
          <p className="text-slate-300 text-sm mt-1">
            The Strands Agents SDK and Amazon Bedrock AgentCore blueprints are ready. Proceed to the day-by-day hackathon execution plan.
          </p>
        </div>
        <button
          onClick={onProceedToPhase3}
          className="px-6 py-3 bg-emerald-500 text-slate-950 rounded-xl font-bold text-sm hover:bg-emerald-400 transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/20 whitespace-nowrap cursor-pointer"
        >
          <span>Proceed to Build Plan</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
