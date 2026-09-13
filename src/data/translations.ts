export const translations = {
  en: {
    appTitle: "Agents for Humans Hackathon Co-Pilot",
    subtitle: "Autonomous background agents built with Strands Agents SDK & Amazon Bedrock AgentCore",
    prize: "Prize Pool: $40,000",
    deadline: "Deadline: Sept 14, 2026 @ 5:00 PM PT",
    phases: {
      1: "Phase 1: Track & Idea",
      2: "Phase 2: Architecture & Code",
      3: "Phase 3: Build Plan",
      4: "Phase 4: Submission Package",
      5: "Phase 5: Judge-Proofing"
    },
    phaseExplanations: {
      1: {
        title: "Phase 1: Track & Idea Selection",
        description: "Choose one of the 3 hackathon tracks (Everyday, Professional, Good Neighbor) and select an agent idea that embodies 'quiet background autonomy'.",
        tips: [
          "Focus on routine, repetitive tasks.",
          "Ensure the agent only interrupts for genuine human decisions.",
          "Verify your eligibility and track requirements."
        ]
      },
      2: {
        title: "Phase 2: Technical Architecture",
        description: "Design the full architecture using Strands Agents SDK, @tool decorators, Amazon Bedrock Claude 3.5 Sonnet, and AgentCore runtime.",
        tips: [
          "Use 'Agents as Tools' pattern for modularity.",
          "Implement BeforeToolCallEvent for human-in-the-loop approval gates.",
          "Persist state securely in DynamoDB."
        ]
      },
      3: {
        title: "Phase 3: Build Plan",
        description: "A day-by-day roadmap from today until submission deadline, accounting for agent core, triggers, decision surface, and bonus posts.",
        tips: [
          "Follow the MVD (Minimum Viable Demo) fallback path if pressed for time.",
          "Schedule 10-minute blocks for publishing builder.aws.com posts.",
          "Test end-to-end Python Strands Agent execution."
        ]
      },
      4: {
        title: "Phase 4: Submission Package",
        description: "Ready-to-use artifacts including README.md, 5-minute video script, Devpost submission text, and three builder.aws.com bonus posts.",
        tips: [
          "Ensure video covers problem, audience, and why it matters.",
          "Include MIT or Apache 2.0 open source license.",
          "Verify all bonus post titles contain 'Agents for Humans'."
        ]
      },
      5: {
        title: "Phase 5: Judge-Proofing",
        description: "Simulate your score against the 5 judging criteria (Technical, Design, Impact, Creativity, Presentation) and run the disqualification audit.",
        tips: [
          "Check public GitHub repository accessibility.",
          "Verify 5-minute video link works without restrictions.",
          "Review the final 48-hour checklist."
        ]
      }
    },
    auth: {
      signIn: "Sign In",
      signUp: "Sign Up",
      signOut: "Sign Out",
      email: "Email Address",
      password: "Password",
      name: "Full Name",
      role: "Role",
      admin: "Admin",
      user: "User",
      guest: "Guest",
      modalTitle: "Authentication & Role Selection",
      welcomeBack: "Welcome back",
      loginAsGuest: "Continue as Guest",
      submit: "Confirm"
    },
    language: "Language",
    roleLabel: "Current Role"
  },
  id: {
    appTitle: "Co-Pilot Hackathon Agents for Humans",
    subtitle: "Agent otonom background yang dibangun dengan Strands Agents SDK & Amazon Bedrock AgentCore",
    prize: "Total Hadiah: $40,000",
    deadline: "Tenggat Waktu: 14 Sept 2026 @ 17:00 PT",
    phases: {
      1: "Fase 1: Track & Ide",
      2: "Fase 2: Arsitektur & Kode",
      3: "Fase 3: Rencana Build",
      4: "Fase 4: Paket Submission",
      5: "Fase 5: Validasi Juri"
    },
    phaseExplanations: {
      1: {
        title: "Fase 1: Pemilihan Track & Ide",
        description: "Pilih salah satu dari 3 track hackathon (Everyday, Professional, Good Neighbor) dan tentukan ide agent yang mengusung konsep 'quiet background autonomy'.",
        tips: [
          "Fokus pada tugas rutin yang repetitif.",
          "Pastikan agent hanya melakukan interrupt untuk keputusan penting manusia.",
          "Verifikasi kelayakan dan persyaratan track."
        ]
      },
      2: {
        title: "Fase 2: Arsitektur Teknis",
        description: "Rancang arsitektur lengkap menggunakan Strands Agents SDK, dekorator @tool, Amazon Bedrock Claude 3.5 Sonnet, dan runtime AgentCore.",
        tips: [
          "Gunakan pola 'Agents as Tools' untuk modularitas.",
          "Terapkan BeforeToolCallEvent untuk gerbang persetujuan manusia.",
          "Simpan state dengan aman di DynamoDB."
        ]
      },
      3: {
        title: "Fase 3: Rencana Pembangunan",
        description: "Roadmap hari ke hari hingga tenggat waktu pengumpulan, memperhitungkan core agent, trigger, decision surface, dan post bonus.",
        tips: [
          "Gunakan jalur MVD (Minimum Viable Demo) jika waktu mendesak.",
          "Jadwalkan publikasi artikel builder.aws.com.",
          "Uji eksekusi Strands Agent Python end-to-end."
        ]
      },
      4: {
        title: "Fase 4: Paket Submission",
        description: "Artefak siap pakai termasuk README.md, skrip video 5 menit, teks submission Devpost, dan 3 post bonus builder.aws.com.",
        tips: [
          "Pastikan video mencakup masalah, audiens, dan signifikansinya.",
          "Sertakan lisensi open source MIT atau Apache 2.0.",
          "Pastikan judul post bonus mengandung 'Agents for Humans'."
        ]
      },
      5: {
        title: "Fase 5: Validasi Penilaian Juri",
        description: "Simulasikan skor terhadap 5 kriteria penilaian dan jalankan audit disualifikasi agar submission Anda sempurna.",
        tips: [
          "Periksa aksesibilitas repositori GitHub publik.",
          "Verifikasi link video demo dapat diakses publik.",
          "Tinjau checklist 48 jam terakhir."
        ]
      }
    },
    auth: {
      signIn: "Masuk",
      signUp: "Daftar",
      signOut: "Keluar",
      email: "Alamat Email",
      password: "Kata Sandi",
      name: "Nama Lengkap",
      role: "Peran",
      admin: "Admin",
      user: "Pengguna",
      guest: "Tamu",
      modalTitle: "Autentikasi & Pemilihan Peran",
      welcomeBack: "Selamat datang kembali",
      loginAsGuest: "Lanjutkan sebagai Tamu",
      submit: "Konfirmasi"
    },
    language: "Bahasa",
    roleLabel: "Peran Aktif"
  }
};
