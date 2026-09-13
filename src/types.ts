export type Phase = 1 | 2 | 3 | 4 | 5;

export type Track = 'everyday' | 'professional' | 'good_neighbor';

export type Language = 'en' | 'id';

export type UserRole = 'admin' | 'user' | 'guest';

export interface UserAccount {
  email: string;
  name: string;
  role: UserRole;
}

export interface AgentIdea {
  id: string;
  name: string;
  track: Track;
  oneLinePitch: string;
  repetitiveTask: string;
  audience: string;
  whyItMatters: string;
  strandsUsage: string;
  agentCoreUsage: string;
  backgroundMechanism: string;
  originalityAngle: string;
  complexity: 'Low' | 'Medium' | 'High';
  timeToMvp: string;
  scores: {
    technical: number;
    design: number;
    impact: number;
    creativity: number;
    presentation: number;
  };
}

export interface UserProfile {
  background: string;
  skills: string[];
  interests: string[];
  hoursPerDay: number;
  preferredTrack: Track;
}
