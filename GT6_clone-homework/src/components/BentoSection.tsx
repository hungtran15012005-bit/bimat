import { Image, Compass, ArrowRight } from 'lucide-react';

export default function BentoSection() {
  return (
    <section id="bento-section-anchor" className="relative w-full bg-[#050505] py-10 pb-20 px-6 md:px-16 overflow-hidden">
      <div className="noise-overlay" />

      {/* Bento columns Grid */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Bento Card 1: Only in Leonida */}
        <div className="relative rounded-3xl overflow-hidden min-h-[500px] flex items-end group shadow-xl border border-white/5">
          <div
            className="absolute inset-0 bg-cover bg-center select-none transition-transform duration-[1.5s] group-hover:scale-105"
            style={{
              backgroundImage: "url('https://www.rockstargames.com/VI/_next/static/media/Cal_Hampton_03.0.q68~pt1to9z.jpg')"
            }}
          />
          {/* Gradient shades */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10 z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent z-10 pointer-events-none" />

          {/* Content panel */}
          <div className="relative z-20 p-8 md:p-12 flex flex-col items-start gap-4 text-left max-w-md">
            <span className="flex items-center gap-1.5 text-[10px] md:text-xs font-bold tracking-[0.25em] text-white/50 uppercase">
              <Compass className="h-4 w-4 text-white/50" />
              People & Places
            </span>
            <h3 className="font-display text-2xl md:text-4xl font-black text-white uppercase leading-none tracking-tight">
              Only in Leonida
            </h3>
            <p className="text-xs md:text-sm text-white/75 leading-relaxed font-sans font-light">
              Vice City, USA. The darkest, wildest side of the sunniest place in America. From the high rises of the beaches to the depths of the state bayous.
            </p>
            
            <div className="pt-2">
              <a
                href="https://www.rockstargames.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[10px] md:text-xs font-black tracking-widest text-black bg-[#ffc4af] hover:bg-white px-6 py-3 rounded-full uppercase shadow-md transition-all"
              >
                <span>Explore More</span>
                <ArrowRight className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bento Card 2: Media & Artwork */}
        <div className="relative rounded-3xl overflow-hidden min-h-[500px] flex items-end group shadow-xl border border-white/5">
          <div
            className="absolute inset-0 bg-cover bg-center select-none transition-transform duration-[1.5s] group-hover:scale-105"
            style={{
              backgroundImage: "url('https://www.rockstargames.com/VI/_next/static/media/DreQuan_Priest_landscape.0_b7hszyze6cy.jpg')"
            }}
          />
          {/* Gradient shades */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/10 z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent z-10 pointer-events-none" />

          {/* Content panel */}
          <div className="relative z-20 p-8 md:p-12 flex flex-col items-start gap-4 text-left max-w-md">
            <span className="flex items-center gap-1.5 text-[10px] md:text-xs font-bold tracking-[0.25em] text-white/50 uppercase">
              <Image className="h-4 w-4 text-white/50" />
              Downloads
            </span>
            <h3 className="font-display text-2xl md:text-4xl font-black text-white uppercase leading-none tracking-tight">
              Media & Artwork
            </h3>
            <p className="text-xs md:text-sm text-white/75 leading-relaxed font-sans font-light">
              Download and share official game artwork, cinematic high-res wallpapers, vector trailers, character profiles, and special digital collectibles.
            </p>
            
            <div className="pt-2">
              <a
                href="https://www.rockstargames.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[10px] md:text-xs font-black tracking-widest text-black bg-[#e1f98e] hover:bg-white px-6 py-3 rounded-full uppercase shadow-md transition-all"
              >
                <span>See All</span>
                <ArrowRight className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
