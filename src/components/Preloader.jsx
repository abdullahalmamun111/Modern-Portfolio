import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Preloader({ onFinish }) {
  const canvasRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const { t } = useLanguage();

  // Progress animation
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      // Non-linear progress increment to feel realistic
      const increment = Math.max(1, Math.floor(Math.random() * 4) + 1);
      current = Math.min(100, current + increment);
      setProgress(current);

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFading(true);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 650);
        }, 300);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [onFinish]);

  // Particle Sphere Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = 400);
    let height = (canvas.height = 400);

    // Generate 3D sphere points
    const particleCount = 550;
    const radius = 110;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      // Uniform distribution on sphere surface + some interior volume jitter
      const theta = Math.acos(2 * Math.random() - 1);
      const phi = 2 * Math.PI * Math.random();
      const r = radius * (0.82 + Math.random() * 0.28);

      const x = r * Math.sin(theta) * Math.cos(phi);
      const y = r * Math.sin(theta) * Math.sin(phi);
      const z = r * Math.cos(theta);

      particles.push({
        x,
        y,
        z,
        origX: x,
        origY: y,
        origZ: z,
        size: Math.random() * 1.6 + 0.8,
        pulseSpeed: Math.random() * 0.04 + 0.01,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let angleX = 0;
    let angleY = 0;

    const render = (time) => {
      ctx.clearRect(0, 0, width, height);

      // Rotation speeds
      angleY += 0.012;
      angleX += 0.007;

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      const centerX = width / 2;
      const centerY = height / 2;
      const fov = 300;

      // Sort particles by depth Z for correct visual layering
      const projected = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Small breathing pulse
        const pulse = 1 + 0.06 * Math.sin(time * 0.003 + p.phase);
        const curX = p.origX * pulse;
        const curY = p.origY * pulse;
        const curZ = p.origZ * pulse;

        // Rotate around Y
        const x1 = curX * cosY - curZ * sinY;
        const z1 = curZ * cosY + curX * sinY;

        // Rotate around X
        const y2 = curY * cosX - z1 * sinX;
        const z2 = z1 * cosX + curY * sinX;

        // Perspective projection
        const scale = fov / (fov + z2 + 160);
        const projX = centerX + x1 * scale;
        const projY = centerY + y2 * scale;
        const alpha = Math.max(0.12, Math.min(1, (z2 + radius) / (2 * radius) + 0.2));

        projected.push({
          x: projX,
          y: projY,
          scale,
          alpha,
          size: p.size * scale,
          depth: z2,
        });
      }

      // Sort by depth (back to front)
      projected.sort((a, b) => a.depth - b.depth);

      // Draw particles
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.6, p.size), 0, Math.PI * 2);

        // Electric cyan / neon blue colors matching images 4 & 5
        const isBright = p.alpha > 0.65;
        ctx.fillStyle = isBright
          ? `rgba(0, 220, 255, ${p.alpha})`
          : `rgba(0, 140, 255, ${p.alpha * 0.8})`;

        if (isBright && p.scale > 0.9) {
          ctx.shadowColor = '#00e5ff';
          ctx.shadowBlur = 6;
        }

        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Determine current status message
  let statusText = t.preloader?.initializing || 'INITIALIZING';
  if (progress > 30 && progress <= 70) {
    statusText = t.preloader?.buildingModules || 'LOADING MODULES';
  } else if (progress > 70 && progress < 100) {
    statusText = t.preloader?.finalizing || 'FINALIZING';
  } else if (progress === 100) {
    statusText = t.preloader?.complete || 'READY';
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-700 select-none ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* 3D Rotating Particle Sphere Canvas */}
      <div className="relative flex items-center justify-center w-[360px] h-[360px] sm:w-[400px] sm:h-[400px]">
        {/* Subtle center ambient radial glow */}
        <div className="absolute w-44 h-44 rounded-full bg-cyan-500/10 blur-2xl pointer-events-none" />
        <canvas ref={canvasRef} className="relative z-10 w-full h-full" />
      </div>

      {/* Progress & Status Container */}
      <div className="w-[280px] sm:w-[340px] flex flex-col items-center mt-2">
        {/* Futuristic Status Text */}
        <div className="text-[11px] sm:text-[13px] tracking-[0.35em] text-cyan-400 font-orbitron font-medium mb-3 uppercase">
          {statusText}
        </div>

        {/* Glowing Neon Blue Progress Bar */}
        <div className="relative w-full h-[3px] sm:h-[4px] bg-[#09152b] rounded-full overflow-hidden border border-cyan-900/60 shadow-[0_0_10px_rgba(0,180,255,0.2)]">
          <div
            className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-cyan-200 transition-all duration-100 ease-out shadow-[0_0_12px_#00e5ff]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage readout below bar */}
        <div className="w-full flex justify-end mt-2">
          <span className="text-[10px] sm:text-[12px] font-orbitron text-cyan-400/90 tracking-wider">
            {progress}%
          </span>
        </div>
      </div>

      {/* Skip button for convenient developer or user bypass */}
      <button
        onClick={() => {
          setIsFading(true);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 300);
        }}
        className="absolute bottom-6 text-[11px] font-orbitron text-slate-600 hover:text-cyan-400 tracking-widest transition-colors uppercase px-3 py-1 cursor-pointer"
      >
        [ Skip ]
      </button>
    </div>
  );
}
