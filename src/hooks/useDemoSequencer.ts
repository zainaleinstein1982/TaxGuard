import { useState, useEffect, useCallback } from 'react';

export function useDemoSequencer() {
  const [currentPhase, setCurrentPhase] = useState<number>(1);
  const [phaseStatuses, setPhaseStatuses] = useState<Record<number, 'pending' | 'running' | 'done'>>({
    1: 'running',
    2: 'pending',
    3: 'pending',
    4: 'pending',
    5: 'pending'
  });
  const [interruptResolved, setInterruptResolved] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number>(10);

  // Advance phase helper
  const advancePhase = useCallback((nextPhase: number) => {
    setCurrentPhase(nextPhase);
    setPhaseStatuses(prev => {
      const updated = { ...prev };
      for (let i = 1; i < nextPhase; i++) {
        updated[i] = 'done';
      }
      updated[nextPhase] = 'running';
      return updated;
    });
  }, []);

  // Main automated timeline sequencer
  useEffect(() => {
    let timer1: NodeJS.Timeout;
    let timer2: NodeJS.Timeout;
    let timer3: NodeJS.Timeout;
    let timer4: NodeJS.Timeout;

    if (currentPhase === 1) {
      // Phase 1 runs for ~4 seconds then moves to Phase 2
      timer1 = setTimeout(() => {
        setPhaseStatuses(prev => ({ ...prev, 1: 'done' }));
        advancePhase(2);
      }, 4000);
    } else if (currentPhase === 2) {
      // Phase 2 runs for ~5 seconds then moves to Phase 3 (Interrupt)
      timer2 = setTimeout(() => {
        setPhaseStatuses(prev => ({ ...prev, 2: 'done' }));
        advancePhase(3);
        setInterruptResolved(false);
        setCountdown(10);
      }, 5500);
    } else if (currentPhase === 3 && !interruptResolved) {
      // Phase 3 countdown timer (auto-approve after 10s if user doesn't click)
      const countInterval = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(countInterval);
            handleResolveInterrupt();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(countInterval);
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [currentPhase, interruptResolved, advancePhase]);

  const handleResolveInterrupt = () => {
    setInterruptResolved(true);
    setPhaseStatuses(prev => ({ ...prev, 3: 'done' }));
    advancePhase(4);

    // After 4 seconds in Phase 4, move to Phase 5 (Impact)
    setTimeout(() => {
      setPhaseStatuses(prev => ({ ...prev, 4: 'done' }));
      advancePhase(5);
      setPhaseStatuses(prev => ({ ...prev, 5: 'done' }));
    }, 4500);
  };

  const handleReplay = () => {
    setCurrentPhase(1);
    setPhaseStatuses({
      1: 'running',
      2: 'pending',
      3: 'pending',
      4: 'pending',
      5: 'pending'
    });
    setInterruptResolved(false);
    setCountdown(10);
  };

  return {
    currentPhase,
    phaseStatuses,
    interruptResolved,
    countdown,
    handleResolveInterrupt,
    handleReplay
  };
}
