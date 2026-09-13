import React, { useState } from 'react';
import { Trophy, CheckCircle, Sparkles, AlertTriangle, ArrowRight, Zap, Target, Users, Cpu } from 'lucide-react';
import { AgentIdea, Track } from '../types';
import { AGENT_IDEAS } from '../data/hackathonData';

interface Phase1Props {
  selectedIdea: AgentIdea | null;
  onSelectIdea: (idea: AgentIdea) => void;
  onProceedToPhase2: () => void;
}

export const Phase1Selector: React.FC<Phase1Props> = ({ selectedIdea, onSelectIdea, onProceedToPhase2 }) => {
  const [activeTrackFilter, setActiveTrackFilter] = useState<Track | 'all'>('all');
  const [userBackground, setUserBackground] = useState('Python developer with experience in AWS Lambda, FastAPI, and LangChain.');
  const [hoursAvailable, setHoursAvailable] = useState(4);

  const filteredIdeas = activeTrackFilter === 'all' 
    ? AGENT_IDEAS 
    : AGENT_IDEAS.filter(i => i.track === activeTrackFilter);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Introduction banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-6 md:p-8 rounded-2xl border border-indigo-500/30 shadow-xl text-white">
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Phase 1: Track & Idea Selection
          </span>
          <span className="text-slate-400 text-xs">Agents for Humans Hackathon</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white mb-2">
          Design the Ultimate Background Autonomous Agent
        </h2>
        <p className="text-slate-300 text-sm md:text-base max-w-3xl leading-relaxed">
          The core hackathon theme is <strong className="text-amber-300">quiet background autonomy</strong>: agents that handle routine, repetitive tasks and only surface when there is a real decision for a human to make. Choose your track and winning idea below.
        </p>

        {/* User profile interactive questionnaire */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-900/80 p-4 rounded-xl border border-slate-700/60">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
              Your Background & Skills
            </label>
            <input
              type="text"
              value={userBackground}
              onChange={(e) => setUserBackground(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
              placeholder="e.g., Python dev, full-stack, AI enthusiast"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
              Available Time (Hours / Day)
            </label>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min="1"
                max="12"
                value={hoursAvailable}
                onChange={(e) => setHoursAvailable(Number(e.target.value))}
                className="w-full accent-amber-500"
              />
              <span className="text-amber-400 font-bold text-sm bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                {hoursAvailable} hrs/day
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Track filters */}
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Filter Track:</span>
        <button
          onClick={() => setActiveTrackFilter('all')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTrackFilter === 'all'
              ? 'bg-amber-500 text-slate-950 shadow-md'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 border border-slate-700/60'
          }`}
        >
          All Tracks (5 Ideas)
        </button>
        <button
          onClick={() => setActiveTrackFilter('professional')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTrackFilter === 'professional'
              ? 'bg-amber-500 text-slate-950 shadow-md'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 border border-slate-700/60'
          }`}
        >
          💼 Professional Agents
        </button>
        <button
          onClick={() => setActiveTrackFilter('everyday')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTrackFilter === 'everyday'
              ? 'bg-amber-500 text-slate-950 shadow-md'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 border border-slate-700/60'
          }`}
        >
          🏠 Everyday Agents
        </button>
        <button
          onClick={() => setActiveTrackFilter('good_neighbor')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTrackFilter === 'good_neighbor'
              ? 'bg-amber-500 text-slate-950 shadow-md'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 border border-slate-700/60'
          }`}
        >
          🤝 Good Neighbor Agents
        </button>
      </div>

      {/* Ideas grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredIdeas.map((idea) => {
          const isSelected = selectedIdea?.id === idea.id;
          const avgScore = ((idea.scores.technical + idea.scores.design + idea.scores.impact + idea.scores.creativity + idea.scores.presentation) / 5).toFixed(2);

          return (
            <div
              key={idea.id}
              className={`bg-slate-900 rounded-2xl border transition-all p-6 flex flex-col justify-between relative ${
                isSelected
                  ? 'border-amber-500 ring-2 ring-amber-500/30 shadow-2xl shadow-amber-500/10'
                  : 'border-slate-800 hover:border-slate-700 shadow-lg'
              }`}
            >
              {isSelected && (
                <div className="absolute top-4 right-4 bg-amber-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow">
                  <CheckCircle className="w-3.5 h-3.5" /> Selected Winning Idea
                </div>
              )}

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-slate-800 text-amber-400 border border-slate-700 px-2.5 py-0.5 rounded-md text-xs font-semibold uppercase">
                    {idea.track.replace('_', ' ')}
                  </span>
                  <span className="text-slate-400 text-xs flex items-center gap-1">
                    <Zap className="w-3 h-3 text-amber-400" /> MVP: {idea.timeToMvp} ({idea.complexity} Complexity)
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{idea.name}</h3>
                <p className="text-slate-300 text-sm font-medium mb-4 italic">"{idea.oneLinePitch}"</p>

                <div className="space-y-3 text-xs text-slate-300 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                  <div>
                    <strong className="text-amber-400">Repetitive Task:</strong> {idea.repetitiveTask}
                  </div>
                  <div>
                    <strong className="text-amber-400">Target Audience:</strong> {idea.audience}
                  </div>
                  <div>
                    <strong className="text-amber-400">Why It Matters:</strong> {idea.whyItMatters}
                  </div>
                  <div>
                    <strong className="text-amber-400">Strands SDK & AgentCore:</strong> {idea.strandsUsage}
                  </div>
                  <div>
                    <strong className="text-amber-400">Quiet Background Mechanism:</strong> <span className="text-emerald-300 font-semibold">{idea.backgroundMechanism}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400">Judging Score Estimate:</span>
                  <div className="text-amber-400 font-black text-lg flex items-center gap-1">
                    {avgScore} <span className="text-xs text-slate-400 font-normal">/ 5.0</span>
                  </div>
                </div>

                <button
                  onClick={() => onSelectIdea(idea)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'
                      : 'bg-amber-500 text-slate-950 hover:bg-amber-400'
                  }`}
                >
                  {isSelected ? 'Selected for Architecture' : 'Select This Idea'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {selectedIdea && (
        <div className="bg-gradient-to-r from-emerald-950/80 via-slate-900 to-slate-900 p-6 rounded-2xl border border-emerald-500/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
              <CheckCircle className="w-4 h-4" /> Ready for Phase 2: Technical Architecture
            </div>
            <h4 className="text-xl font-bold text-white">
              Selected: {selectedIdea.name}
            </h4>
            <p className="text-slate-300 text-sm mt-1">
              You have chosen a high-impact idea tailored for the <strong className="text-white">{selectedIdea.track}</strong> track. Proceed to generate the Mermaid architecture diagram and runnable Python Strands SDK code skeleton.
            </p>
          </div>
          <button
            onClick={onProceedToPhase2}
            className="px-6 py-3 bg-emerald-500 text-slate-950 rounded-xl font-bold text-sm hover:bg-emerald-400 transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/20 whitespace-nowrap cursor-pointer"
          >
            <span>Proceed to Architecture & Code</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
