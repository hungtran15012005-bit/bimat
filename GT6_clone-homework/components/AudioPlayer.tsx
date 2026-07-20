import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const synthIntervalRef = useRef<number | null>(null);
  const currentStepRef = useRef<number>(0);

  // Synthwave arpeggio notes in G Minor (frequencies in Hz)
  // G2 (98.00), Bb2 (116.54), D3 (146.83), F3 (174.61), G3 (196.00), Bb3 (233.08)
  const NOTES = [98.00, 116.54, 146.83, 116.54, 196.00, 174.61, 146.83, 233.08];

  const startSynth = () => {
    try {
      // Initialize Audio Context safely
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const audioCtx = new AudioContextClass();
      audioCtxRef.current = audioCtx;

      // Master gain node for volume control
      const masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(0.12, audioCtx.currentTime); // keep it ambient and pleasing, not too loud
      masterGain.connect(audioCtx.destination);

      // Lowpass filter for 80s retro warmth
      const filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, audioCtx.currentTime);
      filter.Q.setValueAtTime(1, audioCtx.currentTime);
      filter.connect(masterGain);

      // Delay effect for retro space echo
      const delay = audioCtx.createDelay(1.0);
      delay.delayTime.setValueAtTime(0.375, audioCtx.currentTime); // sync delay
      const delayGain = audioCtx.createGain();
      delayGain.gain.setValueAtTime(0.3, audioCtx.currentTime); // feedback level

      delay.connect(delayGain);
      delayGain.connect(delay); // feedback loop
      delayGain.connect(filter); // feed delay back into filter

      // Synth sequencer loop
      let stepTime = 180; // BPM 125, sixteenth notes is ~120ms, let's do 150ms eighth notes

      const playStep = () => {
        if (!audioCtx || audioCtx.state === 'closed') return;
        const now = audioCtx.currentTime;

        // Current frequency in sequence
        const freq = NOTES[currentStepRef.current % NOTES.length];

        // 1. Bass / Lead Voice (Sawtooth wave)
        const osc1 = audioCtx.createOscillator();
        osc1.type = 'sawtooth';
        osc1.frequency.setValueAtTime(freq, now);

        // Sub oscillator for depth (sine wave 1 octave lower)
        const oscSub = audioCtx.createOscillator();
        oscSub.type = 'triangle';
        oscSub.frequency.setValueAtTime(freq / 2, now);

        // Envelope node
        const env = audioCtx.createGain();
        env.gain.setValueAtTime(0, now);
        env.gain.linearRampToValueAtTime(0.4, now + 0.02); // attack
        env.gain.exponentialRampToValueAtTime(0.001, now + 0.25); // decay/release

        // Connect everything
        osc1.connect(env);
        oscSub.connect(env);
        env.connect(filter);
        env.connect(delay); // route directly to delay echo too

        // Start & Stop oscillators
        osc1.start(now);
        oscSub.start(now);
        osc1.stop(now + 0.3);
        oscSub.stop(now + 0.3);

        currentStepRef.current += 1;
      };

      // Play immediate first step
      playStep();

      // Start interval
      const intervalId = window.setInterval(playStep, stepTime);
      synthIntervalRef.current = intervalId;
      setIsPlaying(true);
    } catch (err) {
      console.error('Failed to initialize Web Audio API synth:', err);
    }
  };

  const stopSynth = () => {
    if (synthIntervalRef.current !== null) {
      clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close();
      audioCtxRef.current = null;
    }
    setIsPlaying(false);
  };

  const togglePlayback = () => {
    if (isPlaying) {
      stopSynth();
    } else {
      startSynth();
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (synthIntervalRef.current !== null) {
        clearInterval(synthIntervalRef.current);
      }
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <div
      id="vice-city-audio-player"
      className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3 rounded-full border border-white/10 bg-[#0d0a1b]/90 py-2.5 pl-4 pr-3 text-white shadow-xl backdrop-blur-md transition-all hover:border-white/20 hover:bg-[#0d0a1b]"
    >
      <div className="flex items-center gap-2">
        <Music className={`h-4 w-4 text-pink-400 ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
        <div className="flex flex-col">
          <span className="font-display text-[10px] font-black uppercase tracking-wider text-pink-300">VICE CITY SYNTH</span>
          <span className="text-[8px] font-mono text-white/50 tracking-widest uppercase">
            {isPlaying ? 'PLAYING LOOP (125 BPM)' : 'MUSIC OFF'}
          </span>
        </div>
      </div>

      {/* Visualizer bars */}
      <div className="flex items-end gap-0.5 h-5 px-1.5 w-10">
        {isPlaying ? (
          <>
            <div className="w-1 rounded-t bg-pink-400 bar bar-1" />
            <div className="w-1 rounded-t bg-purple-500 bar bar-2" />
            <div className="w-1 rounded-t bg-indigo-500 bar bar-3" />
            <div className="w-1 rounded-t bg-pink-500 bar bar-4" />
            <div className="w-1 rounded-t bg-rose-400 bar bar-5" />
          </>
        ) : (
          <>
            <div className="w-1 h-1 bg-white/20 rounded-t" />
            <div className="w-1 h-1 bg-white/20 rounded-t" />
            <div className="w-1 h-1 bg-white/20 rounded-t" />
            <div className="w-1 h-1 bg-white/20 rounded-t" />
            <div className="w-1 h-1 bg-white/20 rounded-t" />
          </>
        )}
      </div>

      {/* Action button */}
      <button
        id="audio-toggle-btn"
        onClick={togglePlayback}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 hover:bg-[#ff9e8a]/20 hover:text-[#ff9e8a] text-white cursor-pointer transition-colors"
        title={isPlaying ? 'Mute Theme Synth' : 'Play Theme Synth'}
      >
        {isPlaying ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
      </button>
    </div>
  );
}
