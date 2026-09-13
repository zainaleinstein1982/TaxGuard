export interface Receipt {
  id: string;
  vendor: string;
  amount: number;
  date: string;
  category: string;
  status: 'processing' | 'approved' | 'ambiguous';
  confidence: number;
}

export const initialReceipts: Receipt[] = [
  { id: 'R-001', vendor: 'Adobe Creative Cloud', amount: 54.99, date: '12 Sep 2026', category: 'Schedule C, Line 18', status: 'approved', confidence: 0.97 },
  { id: 'R-002', vendor: 'Google Workspace', amount: 12.00, date: '12 Sep 2026', category: 'Schedule C, Line 18', status: 'approved', confidence: 0.99 },
  { id: 'R-003', vendor: 'AMZN MKTP US', amount: 847.00, date: '12 Sep 2026', category: 'Pending Approval', status: 'ambiguous', confidence: 0.72 },
];

export const agentLogs = {
  1: [
    "[08:00:01] TaxGuard agent waking (cron: hourly-scan)",
    "[08:00:01] Checking inbox: receipts@taxguard.aws",
    "[08:00:02] Found 3 new receipts (IMAP fetch)",
    "[08:00:02] Strands Agent initialized (Bedrock Claude 3.5 Sonnet)",
    "[08:00:03] Loading DynamoDB memory (user: freelancer-001)",
    "[08:00:03] Memory loaded: 47 past receipts, 12 approved write-offs"
  ],
  2: [
    "[08:00:04] Receipt #R-001 | Adobe Creative Cloud | $54.99",
    "[08:00:04]   └─ @tool parse_receipt_text() → vendor=Adobe",
    "[08:00:05]   └─ @tool check_irs_rule(category=\"software_subscription\")",
    "[08:00:05]   └─ IRS Rule 162 → DEDUCTIBLE",
    "[08:00:06]   └─ ✅ Auto-categorized: Schedule C, Line 18",
    "[08:00:07] Receipt #R-002 | Google Workspace | $12.00",
    "[08:00:08]   └─ ✅ Auto-categorized: Schedule C, Line 18",
    "[08:00:09] Receipt #R-003 | AMZN MKTP US | $847.00",
    "[08:00:10]   └─ ⚠️ Ambiguity detected: high-value ($847 > $500)",
    "[08:00:10]   └─ 🔔 TRIGGERING INTERRUPT: taxguard-writeoff-approval",
    "[08:00:10]   └─ 💤 Agent paused. Awaiting human decision."
  ],
  3: [
    "[08:14:20] 🔔 Interrupt raised: taxguard-writeoff-approval",
    "[08:14:20] ⏱️  Waiting for human input on AMZN MKTP US $847.00...",
    "[08:14:21] Context retrieved: 8 of 10 past Amazon purchases = office supplies",
    "[08:14:21] Estimated tax savings: $254.10"
  ],
  4: [
    "[08:14:22] 🔓 Interrupt resolved: approved by user",
    "[08:14:22] └─ Receipt #R-003 categorized: Schedule C, Line 27a",
    "[08:14:23] └─ Saving to DynamoDB (memory persistence)",
    "[08:14:23] └─ Updating tax_summary: +$254.10 deductible",
    "[08:14:24] └─ Generating quarterly tax report (Q3 2026)",
    "[08:14:24] └─ stop_reason = \"end_turn\"",
    "[08:14:24] ✅ Agent task COMPLETE. Sleeping until next cron."
  ],
  5: [
    "[08:14:25] 📊 Q3 report generated. 96.6% autonomous workflow.",
    "[08:14:25] Total deductions verified: $4,847.30",
    "[08:14:25] Total time saved: 18 hours vs. manual bookkeeping"
  ]
};

export const interruptPayload = {
  name: "taxguard-writeoff-approval",
  reason: "Nilai tinggi & vendor marketplace campuran. Saya butuh konfirmasi Anda.",
  receipt: {
    vendor: "AMZN MKTP US",
    amount: 847.00,
    date: "12 Sep 2026"
  },
  history: "8 of 10 last Amazon purchases = office supplies",
  estimatedSavings: 254.10
};

export const impactMetrics = {
  processed: 147,
  autonomous: 142,
  human: 5,
  savings: 4847.30,
  hoursSaved: 18
};
