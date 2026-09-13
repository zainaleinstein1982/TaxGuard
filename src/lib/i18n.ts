export const translations = {
  en: {
    appTitle: "TaxGuard Co-Pilot",
    subtitle: "Agents for Humans Hackathon",
    runningStatus: "TaxGuard is running in the background...",
    replayDemo: "Replay Demo",
    phases: {
      1: "Background Trigger",
      2: "Autonomous Processing",
      3: "Human Decision Surface",
      4: "Resume & Completion",
      5: "Impact Report"
    },
    phaseDescs: {
      1: "EventBridge cron fires hourly scan silently",
      2: "Strands Agent audits receipts & IRS rules",
      3: "Agent pauses for ambiguous high-value write-off",
      4: "User approves & agent resumes execution",
      5: "Quarterly tax report & savings generated"
    },
    liveContext: {
      title: "Live Agent Context",
      agentName: "Current Agent",
      tool: "Active Tool",
      memory: "DynamoDB Memory",
      confidence: "Confidence Score",
      interruptStatus: "Interrupt Status",
      idle: "Idle",
      waiting: "Waiting for Human",
      resolved: "Resolved"
    },
    judgeNotes: {
      title: "Judge Notes & Criteria",
      criterion: "Scoring Focus",
      1: "Technical Implementation: EventBridge cron triggers & Bedrock model config.",
      2: "Technical Implementation: @tool decorators & IRS rule verification.",
      3: "Design & UX: BeforeToolCallEvent interrupt hook & decision surface card.",
      4: "Technical Implementation: InterruptResponseContent resume workflow.",
      5: "Impact & Presentation: 96.6% autonomous workflow with $4,847+ savings."
    },
    decisionCard: {
      title: "Human Decision Required",
      subtitle: "TaxGuard Autonomous Expense Auditor",
      reasonLabel: "Agent Reasoning",
      historyLabel: "Past Purchase History",
      savingsLabel: "Estimated Tax Savings",
      approve: "Approve Write-off",
      reject: "Mark Personal",
      reclassify: "Reclassify",
      autoApproving: "Auto-approving in {seconds}s (demo mode)..."
    },
    impactDashboard: {
      title: "Q3 2026 Tax Audit Impact Report",
      processed: "Receipts Processed",
      autonomous: "Autonomous (96.6%)",
      human: "Human Decisions (3.4%)",
      savings: "Total Tax Savings",
      hoursSaved: "Hours Saved",
      downloadReport: "Download Q3 Tax Report (PDF)"
    },
    status: {
      pending: "Pending",
      running: "Running",
      done: "Completed"
    }
  },
  id: {
    appTitle: "TaxGuard Co-Pilot",
    subtitle: "Agents for Humans Hackathon",
    runningStatus: "TaxGuard berjalan di latar belakang...",
    replayDemo: "Ulangi Demo",
    phases: {
      1: "Pemicu Latar Belakang",
      2: "Pemrosesan Otonom",
      3: "Permukaan Keputusan Manusia",
      4: "Lanjutkan & Selesaikan",
      5: "Laporan Dampak"
    },
    phaseDescs: {
      1: "EventBridge cron memicu pemindaian senyap",
      2: "Strands Agent mengaudit receipt & aturan IRS",
      3: "Agent berhenti untuk write-off ambigu",
      4: "User menyetujui & agent melanjutkan eksekusi",
      5: "Laporan pajak kuartalan & penghematan dibuat"
    },
    liveContext: {
      title: "Konteks Agent Langsung",
      agentName: "Agent Saat Ini",
      tool: "Tool Aktif",
      memory: "Memori DynamoDB",
      confidence: "Skor Keyakinan",
      interruptStatus: "Status Interupsi",
      idle: "Siaga",
      waiting: "Menunggu Manusia",
      resolved: "Diselesaikan"
    },
    judgeNotes: {
      title: "Catatan Juri & Kriteria",
      criterion: "Fokus Penilaian",
      1: "Implementasi Teknis: Trigger EventBridge cron & konfigurasi model Bedrock.",
      2: "Implementasi Teknis: Dekorator @tool & verifikasi aturan IRS.",
      3: "Desain & UX: Hook interupsi BeforeToolCallEvent & kartu keputusan.",
      4: "Implementasi Teknis: Alur resume InterruptResponseContent.",
      5: "Dampak & Presentasi: Alur otonom 96.6% dengan penghematan $4,847+."
    },
    decisionCard: {
      title: "Keputusan Manusia Diperlukan",
      subtitle: "TaxGuard Auditor Pengeluaran Otonom",
      reasonLabel: "Analisis Agent",
      historyLabel: "Riwayat Pembelian Lalu",
      savingsLabel: "Estimasi Penghematan Pajak",
      approve: "Setujui Write-off",
      reject: "Tandai Pribadi",
      reclassify: "Klasifikasi Ulang",
      autoApproving: "Auto-approve dalam {seconds}d (mode demo)..."
    },
    impactDashboard: {
      title: "Laporan Dampak Audit Pajak Q3 2026",
      processed: "Receipt Diproses",
      autonomous: "Otonom (96.6%)",
      human: "Keputusan Manusia (3.4%)",
      savings: "Total Penghematan Pajak",
      hoursSaved: "Jam Dihemat",
      downloadReport: "Unduh Laporan Pajak Q3 (PDF)"
    },
    status: {
      pending: "Menunggu",
      running: "Berjalan",
      done: "Selesai"
    }
  }
};
