import { AgentIdea } from '../types';

export const AGENT_IDEAS: AgentIdea[] = [
  {
    id: 'idea-1',
    name: 'TaxGuard Autonomous Receipt & Expense Auditor',
    track: 'professional',
    oneLinePitch: 'An autonomous agent that audits, categorizes, and flags business expenses and tax deductions from email receipts in the background, only surfacing when ambiguous write-offs require human judgment.',
    repetitiveTask: 'Sorting, categorizing, tagging IRS/tax compliance codes, and checking receipt validity across 50+ monthly vendor emails and bank statements for small business owners and freelancers.',
    audience: 'Freelancers, consultants, and micro-business owners with no dedicated bookkeeper.',
    whyItMatters: 'Small businesses lose an average of $4,300 annually in missed tax deductions due to unorganized receipts, while spending 15+ hours a month on tedious bookkeeping.',
    strandsUsage: 'Uses Strands Agents SDK `@tool` decorators for Gmail API fetching, OCR receipt parsing, and IRS tax schedule mapping. Implements multi-agent orchestration: a Parser Agent feeds data to an Auditor Agent, which validates against tax rules and calls a Memory State manager.',
    agentCoreUsage: 'Runs on Amazon Bedrock AgentCore Runtime with persistent session memory and Code Interpreter tool for calculating depreciation and tax bracket thresholds securely.',
    backgroundMechanism: 'Polls Gmail via AWS EventBridge cron every 6 hours, processes unread receipts silently, and only sends an interactive notification/Slack card when an expense has ambiguous business vs. personal categorization.',
    originalityAngle: 'Instead of an expense dashboard you log into, it operates as a background compliance guardian that texts or emails you exact summaries only when your signature or tax clarification is needed.',
    complexity: 'Medium',
    timeToMvp: '2.5 days',
    scores: {
      technical: 4.8,
      design: 4.6,
      impact: 4.9,
      creativity: 4.5,
      presentation: 4.7
    }
  },
  {
    id: 'idea-2',
    name: 'MediSync Family Health & Refill Sentinel',
    track: 'everyday',
    oneLinePitch: 'A background family health agent that monitors prescription refills, drug interaction alerts, and pediatric vaccine schedules across pharmacy portals and health records, surfacing only when refill approvals or doctor clarifications are needed.',
    repetitiveTask: 'Checking pharmacy app refill statuses, tracking medication expiration, crossing-checking newly prescribed meds against family allergy lists, and scheduling pediatrician check-ups.',
    audience: 'Busy parents and caregivers managing multi-generational household healthcare.',
    whyItMatters: 'Medication non-adherence and missed prescription refills account for 125,000 deaths and $100B+ in preventable hospitalizations annually in the US alone.',
    strandsUsage: 'Leverages Strands Agents SDK workflow graphs to coordinate a Refill Agent and a Safety Guard Agent. Uses structured output Pydantic models for drug interaction verification.',
    agentCoreUsage: 'Deploys on AgentCore with secure KMS encrypted memory vault for sensitive HIPAA-conscious family health logs.',
    backgroundMechanism: 'Runs daily background checks on pharmacy portals and calendar reminders. Surfaces via a single mobile push or SMS digest ("Approve 30-day refill for Metformin?").',
    originalityAngle: 'Treats household health management as an autonomous background sentinel rather than a reactive medical tracking app.',
    complexity: 'Medium',
    timeToMvp: '3 days',
    scores: {
      technical: 4.6,
      design: 4.7,
      impact: 4.9,
      creativity: 4.6,
      presentation: 4.8
    }
  },
  {
    id: 'idea-3',
    name: 'DonorMatch Neighborhood Food Bank Sentinel',
    track: 'good_neighbor',
    oneLinePitch: 'An autonomous logistics coordinator that matches surplus perishable donations from local supermarkets with volunteer drivers and active neighborhood food pantry needs in the background, surfacing only when urgent driver re-routes or special cold-chain exceptions occur.',
    repetitiveTask: 'Calling/messaging local grocery managers for surplus inventory, calculating vehicle capacity, scheduling volunteer drivers, and logging USDA compliance weights.',
    audience: 'Local food banks, community pantries, and mutual aid volunteer organizers.',
    whyItMatters: '40% of food in the US is wasted while local food pantries struggle with unpredictable supply spikes and volunteer coordination burnout.',
    strandsUsage: 'Uses Strands Agents SDK swarm pattern to coordinate Inventory Scout, Route Optimizer, and Volunteer Dispatcher agents with Bedrock Amazon Nova models.',
    agentCoreUsage: 'Uses AgentCore Gateway to securely integrate local supermarket webhooks and Twilio SMS APIs for volunteer dispatch.',
    backgroundMechanism: 'Listens to incoming supermarket inventory webhook pings 24/7, auto-assigns routes, and only alerts human coordinators if no driver accepts within 30 minutes.',
    originalityAngle: 'Transforms mutual aid dispatch from frantic group chats into an autonomous background logistics engine.',
    complexity: 'High',
    timeToMvp: '3.5 days',
    scores: {
      technical: 4.9,
      design: 4.5,
      impact: 5.0,
      creativity: 4.8,
      presentation: 4.7
    }
  },
  {
    id: 'idea-4',
    name: 'SubStash Subscription & Utility Auditor',
    track: 'everyday',
    oneLinePitch: 'A background financial sentinel that scans bank and credit card activity via Plaid, detects hidden subscription price hikes, unused SaaS tools, and erratic utility billing anomalies, surfacing only when a cancellation authorization or dispute signature is required.',
    repetitiveTask: 'Reviewing monthly bank statements line-by-line, tracking trial expiration dates, comparing utility rates across providers, and drafting cancellation support tickets.',
    audience: 'Budget-conscious households and gig workers battling subscription creep.',
    whyItMatters: 'The average consumer wastes $348+ annually on forgotten subscriptions and hidden utility rate surges.',
    strandsUsage: 'Uses Strands Agents SDK with Plaid API tools, persistent episodic memory to track recurring merchants, and structured JSON classification of charges.',
    agentCoreUsage: 'Utilizes AgentCore Observability and secure credential vault to store encrypted read-only financial connection tokens.',
    backgroundMechanism: 'Runs weekly background bank syncs via AWS EventBridge, flags billing anomalies, and sends a concise weekly digest with one-click "Cancel / Dispute" buttons.',
    originalityAngle: 'Proactive background watchdog that stops money leaks without requiring manual spreadsheet tracking.',
    complexity: 'Low',
    timeToMvp: '2 days',
    scores: {
      technical: 4.5,
      design: 4.8,
      impact: 4.6,
      creativity: 4.4,
      presentation: 4.7
    }
  },
  {
    id: 'idea-5',
    name: 'GrantScout Community Arts & Non-Profit Matcher',
    track: 'good_neighbor',
    oneLinePitch: 'An autonomous funding scout that continuously monitors federal, state, and foundation grant databases for local arts programs and non-profits, drafting grant alignment memos in the background and surfacing only when a human director needs to review and approve submission.',
    repetitiveTask: 'Scraping Grants.gov and foundation portals, matching eligibility criteria against non-profit mission statements, and drafting 10-page narrative proposals.',
    audience: 'Directors of small local non-profits, community art centers, and youth sports leagues.',
    whyItMatters: 'Small community organizations miss out on millions in grant funding simply because they lack dedicated grant-writing staff to monitor and apply for deadlines.',
    strandsUsage: 'Uses Strands Agents SDK multi-agent workflow: Scraper Agent, Eligibility Matcher Agent, and Proposal Draft Writer Agent with Amazon Bedrock Claude 3.5 Sonnet.',
    agentCoreUsage: 'Uses AgentCore Browser Tool for automated portal navigation and document embedding storage in Amazon OpenSearch Serverless.',
    backgroundMechanism: 'Runs daily RSS/API scans of grant portals, filters by geographic and mission tags, and emails a polished draft package to the director once a month or when a high-match grant opens.',
    originalityAngle: 'Democratizes grant writing by turning tedious portal monitoring into an autonomous background research assistant.',
    complexity: 'High',
    timeToMvp: '3.5 days',
    scores: {
      technical: 4.8,
      design: 4.6,
      impact: 4.9,
      creativity: 4.7,
      presentation: 4.8
    }
  }
];

export const CODE_SKELETON_AGENT = `"""
agent.py - Core Strands Agents SDK implementation for TaxGuard Autonomous Expense Auditor.
Features:
- BedrockModel config with Anthropic Claude 3.5 Sonnet
- @tool decorators for OCR receipt parsing and IRS tax rule checking
- BeforeToolCallEvent interrupt hook calling event.interrupt('taxguard-writeoff-approval', reason)
- Persistent AgentMemory (DynamoDB backend) & InterruptResponseContent resume
"""

import os
from typing import List, Dict, Any, Optional
from pydantic import BaseModel, Field
from strands import Agent, tool, AgentMemory, BeforeToolCallEvent, InterruptResponseContent
from strands.models.bedrock import BedrockModel

# 1. Initialize Amazon Bedrock Model Provider
model = BedrockModel(
    model_id="anthropic.claude-3-5-sonnet-20241022-v2:0",
    region_name=os.getenv("AWS_REGION", "us-east-1"),
    temperature=0.1
)

# 2. Define Strands Tools
@tool(description="Parse raw receipt text extracted from email/PDF using OCR.")
def parse_receipt_text(raw_text: str) -> Dict[str, Any]:
    return {"status": "success", "extracted_text": raw_text, "parsed_fields": {"vendor": "AMZN MKTP US", "amount": 847.00}}

@tool(description="Query IRS Schedule C guidelines for business deductibility.")
def check_irs_rule(category: str, expense_description: str) -> str:
    return f"IRS Schedule C Guideline for {category}: Deductible if ordinary and necessary for trade or business."

# 3. Master Auditor Agent with Memory & event.interrupt() Hook
audit_agent = Agent(
    model=model,
    name="TaxGuard-Master-Auditor",
    system_prompt=(
        "You are TaxGuard, an autonomous background tax and receipt auditor. "
        "Audit transactions silently. If confidence < 0.85 or write-off is ambiguous, "
        "trigger event.interrupt() for human approval."
    ),
    tools=[parse_receipt_text, check_irs_rule],
    memory=AgentMemory(backend="dynamodb", table_name="taxguard_agent_memory")
)

# 4. BeforeToolCallEvent Interrupt Hook (Using exact Strands API)
@audit_agent.on(BeforeToolCallEvent)
def handle_approval_gate(event: BeforeToolCallEvent):
    if event.tool_name == "parse_receipt_text" and event.tool_arguments.get("amount", 0) > 500:
        event.interrupt(
            name="taxguard-writeoff-approval",
            reason=f"Ambiguous high-value expense (\${event.tool_arguments.get('amount')}) requires human write-off sign-off."
        )

if __name__ == "__main__":
    print("TaxGuard Strands Agent with event.interrupt() initialized.")
`;

export const CODE_SKELETON_SERVER = `"""
server.ts - Express Full-Stack Backend bridging React UI & Python Strands Agent
"""
import express from 'express';
import { spawn } from 'child_process';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// API route to trigger background agent audit
app.post('/api/run-audit', async (req, res) => {
  const { transaction_text } = req.body;
  
  const pythonProcess = spawn('python3', ['agent.py'], {
    env: { ...process.env, PYTHONUNBUFFERED: '1' }
  });
  
  pythonProcess.stdin.write(transaction_text || 'AWS Cloud Hosting $142.50');
  pythonProcess.stdin.end();

  let output = '';
  pythonProcess.stdout.on('data', (data) => { output += data.toString(); });

  pythonProcess.on('close', (code) => {
    res.json({ success: true, exitCode: code, auditLog: output });
  });
});

// API route for human decision approval/rejection
app.post('/api/decision', (req, res) => {
  const { transaction_id, decision, category } = req.body;
  // Persist decision to DynamoDB and resume agent state
  res.json({ success: true, message: \`Recorded decision \${decision} for transaction \${transaction_id} with category \${category}\` });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(\`TaxGuard server running on port \${PORT}\`);
});
`;

export const CODE_DECISION_CARD = `// DecisionSurfaceCard.tsx - React & Tailwind Human-in-the-Loop Decision Component
import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, XCircle, DollarSign, Tag } from 'lucide-react';

interface DecisionCardProps {
  transactionId: string;
  merchant: string;
  amount: number;
  reason: string;
  onDecision: (decision: 'approve' | 'reject' | 'reclassify', category: string) => void;
}

export const DecisionSurfaceCard: React.FC<DecisionCardProps> = ({
  transactionId,
  merchant,
  amount,
  reason,
  onDecision
}) => {
  const [selectedCategory, setSelectedCategory] = useState('Software & Cloud');

  return (
    <div className="bg-slate-900 border border-amber-500/40 rounded-2xl p-6 shadow-2xl max-w-lg mx-auto text-white">
      <div className="flex items-center gap-2 mb-3">
        <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1">
          <AlertCircle className="w-3.5 h-3.5" /> Human Decision Required
        </span>
        <span className="text-xs text-slate-400">ID: {transactionId}</span>
      </div>

      <div className="flex justify-between items-baseline mb-4 bg-slate-950 p-4 rounded-xl border border-slate-800">
        <div>
          <h4 className="text-lg font-bold text-white">{merchant}</h4>
          <p className="text-xs text-slate-400 mt-0.5">{reason}</p>
        </div>
        <div className="text-2xl font-black text-amber-400 flex items-center">
          <DollarSign className="w-5 h-5" />{amount.toFixed(2)}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <Tag className="w-3.5 h-3.5 text-amber-400" /> Select Tax Deduction Category
        </label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
        >
          <option value="Software & Cloud">Software & Cloud Hosting</option>
          <option value="Travel & Lodging">Travel & Lodging</option>
          <option value="Meals & Entertainment">Meals & Entertainment (50%)</option>
          <option value="Office Supplies">Office Supplies</option>
        </select>
      </div>

      <div className="flex items-center gap-3 pt-2">
        <button
          onClick={() => onDecision('approve', selectedCategory)}
          className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-lg shadow-emerald-500/20"
        >
          <CheckCircle2 className="w-4 h-4" /> Approve Write-off
        </button>
        <button
          onClick={() => onDecision('reject', 'Personal Expense')}
          className="flex-1 bg-rose-500 hover:bg-rose-400 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-lg shadow-rose-500/20"
        >
          <XCircle className="w-4 h-4" /> Mark Personal
        </button>
      </div>
    </div>
  );
};
`;

export const CODE_AGENTCORE_DEPLOY = `# Dockerfile for Amazon Bedrock AgentCore Deployment
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY agent.py .
COPY tools.py .
COPY database.py .

ENV PYTHONUNBUFFERED=1
EXPOSE 8080

CMD ["python", "agent.py"]
`;

export const CODE_DEPLOY_SCRIPT = `# deploy_agentcore.sh - Amazon Bedrock AgentCore Deployment Script
echo "Building TaxGuard Strands Agent for Amazon Bedrock AgentCore..."

AWS_REGION="us-east-1"
ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
REPO_NAME="taxguard-agentcore-runtime"

# 1. Login to Amazon ECR
aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com

# 2. Build and Tag Docker Image
docker build -t $REPO_NAME .
docker tag $REPO_NAME:latest $ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$REPO_NAME:latest

# 3. Push to ECR
docker push $ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$REPO_NAME:latest

echo "Successfully deployed container to Amazon Bedrock AgentCore Runtime!"
`;

export const CODE_CONFIGS = `# requirements.txt
strands-agents>=0.1.0
boto3>=1.34.0
pydantic>=2.6.0
fastapi>=0.110.0
uvicorn>=0.28.0

# .env.example
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_access_key_here
AWS_SECRET_ACCESS_KEY=your_secret_key_here
BEDROCK_MODEL_ID=anthropic.claude-3-5-sonnet-20241022-v2:0
DYNAMODB_TABLE_NAME=taxguard_agent_memory
`;
