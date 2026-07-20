import { useState } from 'react';
import { MapPin, Navigation, Thermometer } from 'lucide-react';

interface Hotspot {
  id: string;
  name: string;
  desc: string;
  tag: string;
  temp: string;
  tempLabel: string;
  accentColor: string;
}

const REGIONS: Hotspot[] = [
  {
    id: 'vice-beaches',
    name: 'Vice Beaches',
    desc: 'Hyperreal coastlines of chrome and glass, where luxury yachts shadow underground trafficking networks. The duality of paradise and crime, side by side on the same strip.',
    tag: 'METRO COASTAL ZONE',
    temp: '94°F',
    tempLabel: 'NEON TWILIGHT',
    accentColor: '#00b8ff',
  },
  {
    id: 'leonida-keys',
    name: 'Leonida Keys',
    desc: 'A chain of tropical islands with secret coves, abandoned military outposts, and smuggling channels stretching into international waters. Off the grid — off the law.',
    tag: 'SOUTHERN ARCHIPELAGO',
    temp: '88°F',
    tempLabel: 'OCEAN STATIC',
    accentColor: '#00ff9d',
  },
  {
    id: 'kelly-county',
    name: 'Kelly County',
    desc: 'Deep swamp country — alligator territory, militia compounds, and trailer towns with their own justice system. Zero federal oversight, unlimited criminal opportunity.',
    tag: 'DELTA BAYOU TERRITORY',
    temp: '91°F',
    tempLabel: 'SWAMP HEAT',
    accentColor: '#ffb800',
  },
];

export default function LocationsSection() {
  const [activeRegion, setActiveRegion] = useState('vice-beaches');
  const currentRegion = REGIONS.find((r) => r.id === activeRegion) || REGIONS[0];

  return (
    <section
      id="locations-section-anchor"
      className="relative w-full min-h-screen flex flex-col justify-end py-20 md:py-24 px-6 md:px-16"
      style={{
        backgroundImage: "url('https://www.rockstargames.com/VI/_next/static/media/Vice_City_08.0bbg_xp4hqdvz.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-[#020408]/65 to-[#020408]/15 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[#00b8ff]/3 z-10 pointer-events-none" />
      <div className="absolute inset-0 noise-overlay pointer-events-none z-10" />

      <div className="relative z-20 w-full max-w-6xl mx-auto flex flex-col gap-10 text-left">

        {/* Header text */}
        <div className="space-y-4 max-w-5xl">
          <div className="flex items-center gap-2 text-[10px] font-display font-bold tracking-[0.3em] text-[#00b8ff] uppercase">
            <Navigation className="h-3.5 w-3.5" />
            State of Leonida · Interactive Map
          </div>
          <h2 className="font-display text-5xl md:text-8xl font-bold tracking-tighter text-white leading-none">
            Vice City,{' '}
            <span className="text-cyber-gradient">USA.</span>
          </h2>
          <p className="text-base md:text-xl font-sans font-light leading-relaxed text-white/65 max-w-4xl">
            Jason and Lucia move through a city of contradictions — sun, chrome, blood money, and desperate survival. 
            One wrong score and the entire state becomes hostile territory.
          </p>
        </div>

        {/* Region Explorer */}
        <div className="bg-[#020408]/75 border border-[#00b8ff]/15 rounded-xl p-5 md:p-8 max-w-5xl backdrop-blur-xl space-y-5 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
          
          {/* Region Tabs */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/8 pb-4">
            <div className="flex items-center gap-2 text-xs font-display font-bold tracking-[0.2em] text-[#00b8ff] uppercase">
              <Navigation className="h-4 w-4" />
              Sector Navigator
            </div>
            <div className="flex flex-wrap gap-2">
              {REGIONS.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setActiveRegion(region.id)}
                  className={`px-4 py-2 rounded text-xs font-display font-bold tracking-wider cursor-pointer transition-all duration-300 uppercase ${
                    activeRegion === region.id
                      ? 'bg-[#00b8ff]/15 border border-[#00b8ff]/60 text-[#00b8ff] shadow-[0_0_15px_rgba(0,184,255,0.15)]'
                      : 'bg-white/5 border border-white/0 hover:border-white/10 text-white/50 hover:text-white'
                  }`}
                >
                  {region.name}
                </button>
              ))}
            </div>
          </div>

          {/* Region Detail */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-1.5 text-[9px] font-display font-bold tracking-widest border px-2 py-0.5 rounded uppercase"
                style={{ color: currentRegion.accentColor, borderColor: `${currentRegion.accentColor}30`, backgroundColor: `${currentRegion.accentColor}08` }}>
                <MapPin className="h-3 w-3" />
                {currentRegion.tag}
              </div>
              <h4 className="font-display text-2xl font-bold text-white uppercase tracking-wide">
                {currentRegion.name}
              </h4>
              <p className="text-sm text-white/75 leading-relaxed font-sans">
                {currentRegion.desc}
              </p>
            </div>

            <div className="md:col-span-4 flex justify-start md:justify-end">
              <div className="flex items-center gap-3 bg-white/4 border border-white/8 rounded-lg px-4 py-3 text-xs font-sans">
                <Thermometer className="h-5 w-5 animate-pulse" style={{ color: currentRegion.accentColor }} />
                <div className="text-left">
                  <span className="block text-[9px] text-white/35 uppercase tracking-widest leading-none mb-0.5">LIVE CONDITIONS</span>
                  <span className="font-bold text-sm" style={{ color: currentRegion.accentColor }}>{currentRegion.temp}</span>
                  <span className="block text-[8px] text-white/40 font-display uppercase tracking-wider mt-0.5">{currentRegion.tempLabel}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
