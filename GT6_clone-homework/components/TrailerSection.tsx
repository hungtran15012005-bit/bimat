import { Play, Film, Clock, Eye } from 'lucide-react';

interface TrailerSectionProps {
  onWatchClick: (videoUrl: string) => void;
}

export default function TrailerSection({ onWatchClick }: TrailerSectionProps) {
  const TRAILER_1_URL = 'https://www.youtube.com/watch?v=QdBZY2fkU-0';

  return (
    <section id="trailer-section-anchor" className="relative w-full bg-[#020408] py-16 px-6 md:px-16 overflow-hidden">
      <div className="noise-overlay" />

      {/* Ambient glow */}
      <div className="absolute top-0 right-1/4 -z-10 h-80 w-80 rounded-full bg-blue-600/8 blur-[90px]" />

      <div className="w-full max-w-6xl mx-auto space-y-6">
        {/* Section label */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-display font-bold tracking-[0.25em] text-[#00b8ff] uppercase">
            <Film className="h-4 w-4" />
            Official Broadcast · Video Archive
          </div>
          <div className="hidden md:flex items-center gap-1.5 text-[10px] font-sans text-white/30 tracking-wider">
            <Eye className="h-3 w-3" />
            <span>193M+ Views</span>
          </div>
        </div>

        {/* Main Trailer Card */}
        <div
          onClick={() => onWatchClick(TRAILER_1_URL)}
          className="relative w-full rounded-2xl overflow-hidden min-h-[480px] md:min-h-[580px] flex items-end cursor-pointer group shadow-2xl neon-border"
        >
          {/* BG Image */}
          <div
            className="absolute inset-0 bg-cover bg-center select-none transition-transform duration-[2s] ease-out group-hover:scale-[1.04]"
            style={{
              backgroundImage: "url('https://www.rockstargames.com/VI/_next/static/media/Jason_and_Lucia_02_ultrawide.09dke7w7_v~z_.jpg')"
            }}
          />

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-[#020408]/40 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020408]/60 via-transparent to-transparent z-10" />
          {/* Blue tint */}
          <div className="absolute inset-0 bg-[#00b8ff]/5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Center Play Ring */}
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
            <div className="relative flex items-center justify-center">
              {/* Pulse rings */}
              <div className="absolute h-32 w-32 rounded-full border border-[#00b8ff]/20 animate-ping" style={{ animationDuration: '2s' }} />
              <div className="absolute h-24 w-24 rounded-full border border-[#00b8ff]/30 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
              <div className="h-20 w-20 rounded-full border-2 border-[#00b8ff]/50 bg-[#020408]/60 flex items-center justify-center text-white backdrop-blur-sm group-hover:border-[#00b8ff] group-hover:bg-[#00b8ff]/10 group-hover:shadow-[0_0_30px_rgba(0,184,255,0.4)] transition-all duration-400">
                <Play className="h-8 w-8 fill-current stroke-none ml-1 text-[#00b8ff]" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-20 p-8 md:p-14 flex flex-col items-start gap-3 text-left max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="text-[9px] font-display font-bold tracking-[0.35em] text-[#00b8ff] uppercase border border-[#00b8ff]/30 bg-[#00b8ff]/5 px-2 py-0.5 rounded-sm">
                Official Trailer
              </span>
              <span className="flex items-center gap-1 text-[9px] font-sans text-white/40">
                <Clock className="h-3 w-3" />
                1 min 31 sec
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white uppercase leading-none tracking-tight">
              Trailer <span className="text-cyber-gradient">01</span>
            </h2>
            <p className="text-sm md:text-base text-white/75 leading-relaxed font-sans max-w-lg">
              The record-shattering debut transmission. Sun-drenched avenues, midnight heists, and neon-lit highways across the next generation of open-world crime in Vice City.
            </p>

            <div className="pt-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onWatchClick(TRAILER_1_URL);
                }}
                id="trailer-watch-now-btn"
                className="inline-flex items-center gap-2.5 bg-[#00b8ff] hover:bg-white text-[#020408] px-8 py-3.5 rounded font-display text-xs font-bold tracking-[0.2em] uppercase shadow-[0_0_25px_rgba(0,184,255,0.35)] cursor-pointer transition-all"
              >
                <Play className="h-4 w-4 fill-current stroke-none" />
                <span>Play Trailer</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
