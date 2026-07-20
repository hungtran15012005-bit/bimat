import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Crosshair, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onPreorderOpen: () => void;
}

export default function HeroSection({ onPreorderOpen }: HeroSectionProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const frameRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: relativeY * -10,
      y: relativeX * 10,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      id="hero-section-anchor"
      className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden pt-32 pb-16 px-4 md:px-16"
      style={{
        background: 'radial-gradient(ellipse at 50% 0%, rgba(0,100,200,0.12) 0%, #020408 55%), radial-gradient(ellipse at 50% 110%, rgba(255,184,0,0.06) 0%, #020408 60%)'
      }}
    >
      <div className="vignette-overlay" />
      <div className="noise-overlay" />

      {/* Animated grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,184,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,184,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating ambient orbs */}
      <div className="absolute top-1/4 left-1/6 -z-10 h-72 w-72 rounded-full bg-blue-600/8 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/5 -z-10 h-96 w-96 rounded-full bg-amber-500/5 blur-[100px] pointer-events-none" />

      <div className="relative z-20 flex flex-col items-center w-full max-w-6xl mx-auto gap-10 mt-4">

        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-2 border border-[#00b8ff]/25 bg-[#00b8ff]/5 rounded-full px-4 py-1.5 backdrop-blur-sm"
        >
          <Crosshair className="h-3.5 w-3.5 text-[#00b8ff]" />
          <span className="text-[10px] font-display font-bold tracking-[0.3em] uppercase text-[#00b8ff]">
            Target Acquired · November 19, 2026
          </span>
        </motion.div>

        {/* Cover Art 3D Frame */}
        <motion.div
          ref={frameRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transformStyle: 'preserve-3d',
            transition: 'transform 0.12s ease-out',
          }}
          className="w-full neon-border bg-[#00b8ff]/5 p-2 md:p-3 rounded-xl shadow-[0_40px_100px_rgba(0,0,0,0.98),0_0_60px_rgba(0,184,255,0.08)] cursor-crosshair group overflow-hidden"
        >
          <div className="relative overflow-hidden rounded-lg w-full aspect-video" style={{ transform: 'translateZ(15px)' }}>
            <img
              className="w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-[1.012]"
              src="https://www.rockstargames.com/VI/_next/static/media/Official_Cover_Art_landscape.12.uu2irr.2_a.jpg"
              alt="GTA VI Official Cover Art"
              referrerPolicy="no-referrer"
            />
            {/* Blue tint overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00b8ff]/8 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020408]/30 via-transparent to-transparent pointer-events-none" />

            {/* Corner scan marks */}
            <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#00b8ff]/60" />
            <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#00b8ff]/60" />
            <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[#00b8ff]/60" />
            <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[#00b8ff]/60" />
          </div>
        </motion.div>

        {/* Bottom CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 w-full items-center"
        >
          {/* Release date */}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-display text-[10px] font-bold tracking-[0.3em] text-[#00b8ff]/60 uppercase mb-1">
              Deployment Date
            </span>
            <span className="font-display text-2xl md:text-3xl font-bold text-white uppercase tracking-wide">
              19.11.2026
            </span>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button
              onClick={onPreorderOpen}
              className="relative bg-[#00b8ff] text-[#020408] text-[11px] md:text-xs font-display font-bold tracking-[0.2em] uppercase px-10 py-4 rounded border border-[#00b8ff] shadow-[0_0_30px_rgba(0,184,255,0.35)] hover:bg-transparent hover:text-[#00b8ff] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer overflow-hidden group"
            >
              <span className="relative z-10">Secure Your Copy</span>
              <div className="absolute inset-0 bg-[#00b8ff] translate-x-full group-hover:translate-x-0 transition-transform duration-300" style={{zIndex: 0}} />
            </button>
          </div>

          {/* Platform logos */}
          <div className="flex justify-center md:justify-end items-center gap-6">
            <img
              src="https://www.bing.com/th/id/OIP.3x_0RemJXjy73-8GNyq6qgHaE8?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.9&pid=ImgAns&rm=2"
              alt="PlayStation 5"
              className="h-14 md:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity mix-blend-screen brightness-150 select-none"
              referrerPolicy="no-referrer"
            />
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.ZTJdDvQ-Fp8RvcZLwlbgwwHaCL?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Xbox Series X|S"
              className="h-10 md:h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity mix-blend-screen brightness-125 select-none"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col items-center gap-1 text-[#00b8ff]/40"
        >
          <span className="text-[9px] font-display tracking-[0.4em] uppercase">Scroll to explore</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
