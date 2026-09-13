import React, { useState } from 'react';
import { FileText, Copy, Check, Video, Award, ShieldCheck, BookOpen, Layers, ArrowRight } from 'lucide-react';
import { AgentIdea } from '../types';

interface Phase4Props {
  selectedIdea: AgentIdea | null;
  onProceedToPhase5: () => void;
}

export const Phase4Submission: React.FC<Phase4Props> = ({ selectedIdea, onProceedToPhase5 }) => {
  const [activeTab, setActiveTab] = useState<'readme' | 'video' | 'devpost' | 'posts' | 'license'>('readme');
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const ideaName = selectedIdea?.name || 'TaxGuard Autonomous Receipt & Expense Auditor';
  const trackName = selectedIdea?.track.replace('_', ' ') || 'professional';

  const readmeContent = `# ${ideaName}

> **Submission for the AWS & Devpost Agents for Humans Hackathon**  
> **Track:** ${trackName.toUpperCase()}  
> **Core Tech:** Strands Agents SDK, Amazon Bedrock AgentCore, Claude 3.5 Sonnet, AWS EventBridge, DynamoDB

---

## 🚀 Overview
${selectedIdea?.oneLinePitch || 'An autonomous agent that audits, categorizes, and flags business expenses and tax deductions from email receipts in the background, only surfacing when ambiguous write-offs require human judgment.'}

### The Core Theme: Quiet Background Autonomy
Instead of another app people open and manage, **${ideaName}** runs autonomously in the background via AWS EventBridge and webhook listeners. It performs tedious routine tasks silently and **only surfaces when there is a real decision to make** (e.g., when confidence is below 0.85 or expense classification is ambiguous).

---

## 🛠️ Technical Architecture & Strands SDK Implementation
- **Strands Agents SDK:** Uses \`Agent(...)\`, custom \`@tool\` decorators for receipt parsing and IRS tax rule checking, and \`AgentMemory\` with DynamoDB persistence.
- **Amazon Bedrock AgentCore:** Deployed on AgentCore Runtime for secure persistent sessions and Code Interpreter execution.
- **Model Provider:** Amazon Bedrock (Anthropic Claude 3.5 Sonnet).

---

## 📦 Quick Start & Setup

1. **Clone the Repository:**
   \`\`\`bash
   git clone https://github.com/yourusername/taxguard-agent.git
   cd taxguard-agent
   \`\`\`

2. **Configure Environment Variables:**
   \`\`\`bash
   cp .env.example .env
   # Add your AWS credentials and Bedrock region
   \`\`\`

3. **Install Dependencies:**
   \`\`\`bash
   pip install -r requirements.txt
   npm install
   \`\`\`

4. **Run the Agent & Dashboard:**
   \`\`\`bash
   npm run dev
   \`\`\`

---

## 📄 License
Distributed under the **MIT License**. See \`LICENSE\` for more information.
`;

  const videoScript = `
🎥 DEMO VIDEO SCRIPT (Max 5 Minutes)
Target Audience: Judges evaluating Technical Implementation, Design, Potential Impact, Creativity, and Presentation.

[0:00 - 0:30] HOOK & PROBLEM
- Narration: "Small business owners and freelancers lose thousands every year in missed tax deductions while spending 15+ hours a month sorting through receipts. Existing expense apps require constant manual data entry and active dashboard management. What if your financial assistant worked entirely in the background and only interrupted you when your expert judgment was actually required?"

[0:30 - 1:00] WHO IT'S FOR
- Narration: "Meet TaxGuard, built for freelancers, consultants, and micro-business owners who need automated tax compliance without the busywork."

[1:00 - 1:30] WHY IT MATTERS
- Narration: "By automating 90% of receipt parsing and IRS rule checking silently in the background, TaxGuard eliminates missed write-offs while respecting the human's time."

[1:30 - 3:30] LIVE END-TO-END DEMO
- Screen Recording: Show AWS EventBridge triggering the background agent. Show terminal logs of Strands Agents SDK parsing an incoming email receipt. Show the DynamoDB audit log. Finally, show the human decision surface surfacing an ambiguous expense ("Is this client dinner 50% or 100% deductible?") with a one-click approval button.

[3:30 - 4:30] TECHNICAL ARCHITECTURE WALKTHROUGH
- Narration: "Built with the Strands Agents SDK using custom @tool decorators, Amazon Bedrock Claude 3.5 Sonnet, and Amazon Bedrock AgentCore runtime deployment for secure persistent memory and code execution."

[4:30 - 5:00] IMPACT, CREATIVITY & CLOSE
- Narration: "TaxGuard redefines human-agent interaction—true quiet background autonomy. Thank you!"
`;

  const devpostText = `
Project Name: ${ideaName}
Track: ${trackName.toUpperCase()}

Inspiration:
Small business owners lose over $4,300 annually in missed tax deductions and spend hours on tedious bookkeeping. We wanted an agent that doesn't add more app fatigue, but instead operates quietly in the background.

What It Does:
${selectedIdea?.oneLinePitch}

How We Built It:
- Strands Agents SDK for agent orchestration, custom @tool decorators, and state memory.
- Amazon Bedrock AgentCore for secure runtime deployment and Code Interpreter.
- Amazon Bedrock Claude 3.5 Sonnet for reasoning.
- AWS EventBridge & DynamoDB for background cron triggers and persistent storage.

Accomplishments We're Proud Of:
Achieving true quiet background autonomy—the agent runs silently for weeks and only interrupts when human judgment is indispensable.
`;

  const bonusPosts = `
📝 BUILDER.AWS.COM BONUS POST 1 (Worth +0.2 pts)
Title: Agents for Humans: Why Background Autonomy Beats Another Dashboard
Content: 
In this post, we explore the core thesis of the Agents for Humans Hackathon. Instead of building another app that users have to log into and manage, we designed ${ideaName} using the Strands Agents SDK to operate as a silent background sentinel. Powered by Amazon Bedrock and AWS EventBridge, it handles routine tasks and only surfaces when human decision-making is required...

---

📝 BUILDER.AWS.COM BONUS POST 2 (Worth +0.2 pts)
Title: Agents for Humans: Deep Dive into Strands Agents SDK & Amazon Bedrock AgentCore
Content:
Technical breakdown of how we implemented custom @tool decorators, multi-agent workflows, and persistent DynamoDB memory using the Strands Agents SDK. We also discuss deploying our runtime container to Amazon Bedrock AgentCore for secure execution and robust observability...

---

📝 BUILDER.AWS.COM BONUS POST 3 (Worth +0.2 pts)
Title: Agents for Humans: Lessons Learned, Impact, and What's Next for Autonomous Workflows
Content:
Reflecting on our hackathon journey building ${ideaName}. We share key learnings around handling ambiguous human-in-the-loop decision triggers, reducing cognitive load, and our roadmap for bringing autonomous background agents to thousands of independent professionals...
`;

  const licenseContent = `MIT License

Copyright (c) 2026 Hackathon Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIESS LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`;

  const handleCopy = (text: string, section: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(section);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950 p-6 md:p-8 rounded-2xl border border-indigo-500/30 shadow-xl text-white">
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5" /> Phase 4: Submission Package & Artifacts
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-2">
          Submission-Ready Artifacts for Devpost & AWS
        </h2>
        <p className="text-slate-300 text-sm md:text-base max-w-3xl leading-relaxed">
          Every required artifact generated and polished to maximize your scores across Technical Implementation, Design, Impact, Creativity, and Presentation.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-4">
        <button
          onClick={() => setActiveTab('readme')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'readme' ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          📄 README.md
        </button>
        <button
          onClick={() => setActiveTab('video')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'video' ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          🎥 Video Script
        </button>
        <button
          onClick={() => setActiveTab('devpost')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'devpost' ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          🏆 Devpost Text
        </button>
        <button
          onClick={() => setActiveTab('posts')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'posts' ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          ✍️ Bonus Posts (+0.6 pts)
        </button>
        <button
          onClick={() => setActiveTab('license')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'license' ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          ⚖️ LICENSE
        </button>
      </div>

      {/* Content Box */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-xl relative">
        <div className="absolute top-6 right-6">
          <button
            onClick={() => {
              const content = 
                activeTab === 'readme' ? readmeContent :
                activeTab === 'video' ? videoScript :
                activeTab === 'devpost' ? devpostText :
                activeTab === 'posts' ? bonusPosts : licenseContent;
              handleCopy(content, activeTab);
            }}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow"
          >
            {copiedSection === activeTab ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedSection === activeTab ? 'Copied to Clipboard!' : 'Copy Section'}
          </button>
        </div>

        <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 max-h-[500px] overflow-y-auto">
          <pre className="text-xs text-indigo-100 font-mono whitespace-pre-wrap leading-relaxed">
            {activeTab === 'readme' && readmeContent}
            {activeTab === 'video' && videoScript}
            {activeTab === 'devpost' && devpostText}
            {activeTab === 'posts' && bonusPosts}
            {activeTab === 'license' && licenseContent}
          </pre>
        </div>
      </div>

      {/* Proceed to Phase 5 */}
      <div className="bg-gradient-to-r from-emerald-950/80 via-slate-900 to-slate-900 p-6 rounded-2xl border border-emerald-500/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4" /> Ready for Phase 5: Judge-Proofing
          </div>
          <h4 className="text-xl font-bold text-white">
            Submission Artifacts Generated
          </h4>
          <p className="text-slate-300 text-sm mt-1">
            Proceed to score simulator and disqualification audit to ensure your submission is 100% judge-proof.
          </p>
        </div>
        <button
          onClick={onProceedToPhase5}
          className="px-6 py-3 bg-emerald-500 text-slate-950 rounded-xl font-bold text-sm hover:bg-emerald-400 transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/20 whitespace-nowrap cursor-pointer"
        >
          <span>Proceed to Judge-Proofing</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
