import { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Users, ChevronRight } from 'lucide-react';
import { CHARACTERS } from '../data';

interface ProtagonistsSectionProps {
  onPreorderOpen: (editionId?: string) => void;
}

export default function ProtagonistsSection({ onPreorderOpen }: ProtagonistsSectionProps) {
  const [selectedChar, setSelectedChar] = useState('lucia');
  const currentChar = CHARACTERS.find((c) => c.id === selectedChar) || CHARACTERS[0];

  return (
    <section id="protagonists-section-anchor" className="relative w-full bg-[#020408] py-20 px-4 md:px-16 overflow-hidden">
      <div className="noise-overlay" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[600px] w-[600px] rounded-full bg-blue-900/6 blur-[120px] pointer-events-none" />

      {/* === 1. CHARACTER DOSSIER EXPLORER === */}
      <div className="relative w-full max-w-6xl mx-auto mb-24">

        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="flex items-center justify-center gap-2 text-[10px] md:text-xs font-display font-bold tracking-[0.3em] uppercase text-[#00b8ff]">
            <Users className="h-3.5 w-3.5" />
            Character Dossiers
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold uppercase text-white tracking-tight">
            Two Criminals. <span className="text-amber-gradient">One Chance.</span>
          </h2>
          <p className="text-sm text-white/45 max-w-xl mx-auto font-sans">
            Select an operative to access their classified profile, psychological assessment, and criminal record.
          </p>
        </div>

        {/* Character Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch bg-[#030b15] border border-[#00b8ff]/12 rounded-2xl p-5 md:p-8 backdrop-blur-md relative overflow-hidden">
          
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#00b8ff]/30 rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#00b8ff]/30 rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#00b8ff]/30 rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#00b8ff]/30 rounded-br-2xl" />

          {/* Character Image */}
          <div className="lg:col-span-5 relative aspect-[4/5] rounded-xl overflow-hidden border border-white/8 group">
            <motion.img
              key={currentChar.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              src={currentChar.image}
              alt={currentChar.name}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-[#020408]/10 to-transparent" />
            
            {/* Scan line effect */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,184,255,0.015)_2px,rgba(0,184,255,0.015)_4px)] pointer-events-none" />

            {/* Name overlay */}
            <div className="absolute bottom-5 left-5 space-y-1">
              <span className="text-[9px] font-display font-bold tracking-[0.35em] text-[#00b8ff] uppercase block">
                {currentChar.role}
              </span>
              <h3 className="font-display text-3xl font-bold text-white uppercase tracking-wide">
                {currentChar.name}
              </h3>
              <span className="text-[9px] font-sans text-white/40 tracking-wider uppercase">
                Voice: {currentChar.actor}
              </span>
            </div>

            {/* Status badge */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-green-500/10 border border-green-500/30 rounded px-2 py-1">
              <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[8px] font-display font-bold text-green-400 tracking-widest uppercase">Active</span>
            </div>
          </div>

          {/* Character Details */}
          <div className="lg:col-span-7 flex flex-col justify-between text-left space-y-5 lg:pl-4">
            
            {/* Tab Selector */}
            <div className="flex gap-3 border-b border-white/8 pb-4">
              {CHARACTERS.map((char) => (
                <button
                  key={char.id}
                  onClick={() => setSelectedChar(char.id)}
                  className={`px-5 py-2 rounded font-display text-xs font-bold tracking-[0.15em] uppercase transition-all cursor-pointer ${
                    selectedChar === char.id
                      ? 'bg-[#00b8ff]/15 border border-[#00b8ff]/50 text-[#00b8ff] shadow-[0_0_20px_rgba(0,184,255,0.12)]'
                      : 'bg-white/4 border border-white/8 hover:border-white/15 text-white/50 hover:text-white'
                  }`}
                >
                  {char.name}
                </button>
              ))}
            </div>

            {/* Quote */}
            <div className="relative pl-5 border-l-2 border-[#00b8ff]/50">
              <p className="font-display text-lg md:text-xl font-bold text-[#00b8ff] italic leading-relaxed">
                {currentChar.quote}
              </p>
            </div>

            {/* Bio */}
            <div className="space-y-2">
              <span className="text-[9px] font-display font-bold uppercase tracking-[0.3em] text-white/30">
                ◆ Classified Profile
              </span>
              <p className="text-sm md:text-base text-white/65 leading-relaxed font-sans">
                {currentChar.bio}
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 border-t border-white/8 pt-4">
              <div>
                <span className="block text-[8px] font-display tracking-widest text-white/25 uppercase mb-1">Partnership</span>
                <span className="text-xs font-bold text-green-400 font-sans">Active</span>
              </div>
              <div>
                <span className="block text-[8px] font-display tracking-widest text-white/25 uppercase mb-1">Territory</span>
                <span className="text-xs font-bold text-white/70 font-sans">Leonida State</span>
              </div>
              <div>
                <span className="block text-[8px] font-display tracking-widest text-white/25 uppercase mb-1">Status</span>
                <span className="text-xs font-bold text-[#ffb800] font-sans">Wanted</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === 2. CINEMATIC BANNER === */}
      <div className="relative w-full max-w-6xl mx-auto mb-14 rounded-2xl overflow-hidden h-[55vh] md:h-[75vh] min-h-[400px] border border-white/8 shadow-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://www.rockstargames.com/VI/_next/static/media/Jason_and_Lucia_01_With_Logos_landscape.04a3h9o2l4tmn.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-[#020408]/15 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020408]/50 via-transparent to-transparent" />
        {/* Blue scan tint */}
        <div className="absolute inset-0 bg-[#00b8ff]/4" />
      </div>

      {/* === 3. EDITION CARDS === */}
      <div className="relative w-full max-w-5xl mx-auto -mt-40 md:-mt-56 z-30 space-y-10">

        {/* ULTIMATE EDITION */}
        <div id="ultimate-card-anchor" className="relative bg-gradient-to-br from-[#020d1f] via-[#031226] to-[#051830] rounded-2xl border border-[#00b8ff]/20 p-6 md:p-14 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.9),0_0_60px_rgba(0,184,255,0.06)]">
          
          {/* Decorative grid */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: 'linear-gradient(rgba(0,184,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,184,255,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-14 text-center md:text-left">
            {/* Cover Art */}
            <div className="flex flex-col items-center gap-4 flex-shrink-0">
              <span className="font-display text-[10px] font-bold tracking-[0.5em] text-[#00b8ff]/60 uppercase">
                Ultimate Edition
              </span>
              <div className="cover-art-container-new max-w-[260px] md:max-w-[320px] rounded-xl">
                <img
                  className="cover-art-img select-none"
                  src="https://www.rockstargames.com/VI/_next/static/media/Official_Cover_Art_tablet.02g1-9rnvku2p.jpg"
                  alt="GTA VI Cover Art"
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-5 max-w-md items-center md:items-start">
              <div className="flex items-center gap-2 text-[10px] font-display tracking-[0.3em] text-[#00b8ff] uppercase">
                <Shield className="h-3.5 w-3.5" />
                Maximum Loadout Package
              </div>
              <h3 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight text-white leading-[0.9]">
                ULTIMATE<br /><span className="text-cyber-gradient">EDITION</span>
              </h3>
              <p className="text-sm md:text-base text-white/75 font-sans leading-relaxed">
                The complete arsenal. Every exclusive skin, vehicle pack, outfit collection, and weapon mastery bonus unlocked from day one — Jason and Lucia's full story at maximum intensity.
              </p>
              <button
                onClick={() => onPreorderOpen('ultimate')}
                className="inline-flex items-center gap-2.5 bg-[#00b8ff] hover:bg-[#40cfff] text-[#020408] px-8 py-3.5 rounded font-display text-xs font-bold tracking-[0.2em] uppercase shadow-[0_0_30px_rgba(0,184,255,0.3)] cursor-pointer transition-all"
              >
                <span>Learn More</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* PRE-ORDER BONUS CARD */}
        <div
          className="relative bg-cover bg-center rounded-2xl overflow-hidden border border-white/5 p-8 md:p-14 shadow-2xl min-h-[440px] flex items-center"
          style={{ backgroundImage: "url('https://www.rockstargames.com/VI/_next/static/media/VINTAGE_VICE_CITY_PACK_01.05zaof7o1uz.3.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#020408]/15 via-[#020408]/45 to-[#020408]/92 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent z-10" />

          <div className="relative z-20 grid grid-cols-1 md:grid-cols-12 w-full gap-8">
            <div className="md:col-span-5 hidden md:block" />
            <div className="md:col-span-7 flex flex-col justify-center items-start text-left space-y-4">
              <div className="flex items-center gap-1.5 text-[10px] font-display font-bold tracking-[0.3em] text-[#ffb800] uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ffb800] animate-pulse" />
                Pre-Order Exclusive
              </div>
              <h3 className="font-display text-3xl md:text-5xl font-bold text-white uppercase leading-none tracking-tight">
                Vintage<br /><span className="text-amber-gradient">Vice City</span><br />Pack
              </h3>
              <p className="text-sm text-white/65 max-w-md leading-relaxed font-sans">
                Lock in your pre-order to unlock retro cosmetics, vintage rides, and throwback gear from the legendary era when Leonida's neon burned its brightest.
              </p>
              <button
                onClick={() => onPreorderOpen('standard')}
                className="inline-flex items-center gap-2.5 border border-[#ffb800] bg-[#ffb800]/8 hover:bg-[#ffb800] hover:text-[#020408] text-[#ffb800] px-8 py-3.5 rounded font-display text-xs font-bold uppercase tracking-[0.2em] transition-all cursor-pointer"
              >
                <span>Claim Bonus</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
