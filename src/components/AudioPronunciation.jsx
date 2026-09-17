import React, { useState } from 'react';
import { Volume2, Music } from 'lucide-react';

/**
 * Modern Futuristic Ambient Synth Tone generator using Web Audio API
 */
export default function AudioPronunciation() {
  const [isPlaying, setIsPlaying] = useState(false);

  const playCoolTone = (e) => {
    e.stopPropagation();

    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;

      const ctx = new AudioContext();
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      setIsPlaying(true);

      // Harmonious futuristic chord notes (frequencies in Hz): F4, A4, C5, E5, A5
      const notes = [349.23, 440.0, 523.25, 659.25, 880.0];
      const now = ctx.currentTime;

      notes.forEach((freq, index) => {
        const startTime = now + index * 0.09;
        const duration = 1.2;

        // Dual oscillators for rich analog synth warmth
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gainNode = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc1.type = 'sine';
        osc2.type = 'triangle';

        osc1.frequency.setValueAtTime(freq, startTime);
        osc2.frequency.setValueAtTime(freq * 1.003, startTime); // subtle detune for chorus warmth

        // Lowpass filter for smooth space-age softness
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1400, startTime);
        filter.frequency.exponentialRampToValueAtTime(300, startTime + duration);

        // Smooth envelope: fast attack, gentle decay
        gainNode.gain.setValueAtTime(0.001, startTime);
        gainNode.gain.exponentialRampToValueAtTime(0.18 / (index * 0.3 + 1), startTime + 0.04);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc1.start(startTime);
        osc2.start(startTime);
        osc1.stop(startTime + duration);
        osc2.stop(startTime + duration);
      });

      setTimeout(() => {
        setIsPlaying(false);
      }, 1500);
    } catch (err) {
      console.error('Audio playback error', err);
      setIsPlaying(false);
    }
  };

  return (
    <button
      onClick={playCoolTone}
      title="Play ambient tone"
      className={`inline-flex items-center justify-center p-1.5 rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:bg-[var(--color-nav-hover-bg)] transition-all cursor-pointer ${
        isPlaying ? 'text-[var(--color-accent)] scale-110' : 'opacity-75 hover:opacity-100'
      }`}
    >
      <Volume2 className={`w-4 h-4 ${isPlaying ? 'animate-bounce text-[var(--color-accent)]' : ''}`} />
    </button>
  );
}
