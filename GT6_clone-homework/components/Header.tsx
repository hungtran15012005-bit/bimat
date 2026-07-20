import { Menu, Zap } from 'lucide-react';

interface HeaderProps {
  onMenuOpen: () => void;
  onPreorderOpen: () => void;
}

export default function Header({ onMenuOpen, onPreorderOpen }: HeaderProps) {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="mainHeader"
      className="fixed top-0 left-0 w-full flex justify-between items-center z-50 px-6 md:px-14 py-5 md:py-6 pointer-events-none"
      style={{
        background: 'linear-gradient(to bottom, rgba(2,4,8,0.97) 0%, rgba(2,4,8,0.6) 60%, transparent 100%)'
      }}
    >
      {/* Brand logo */}
      <div className="flex items-center gap-3 pointer-events-auto">
        <div
          className="flex items-center gap-2.5 cursor-pointer group"
          onClick={() => handleScrollTo('hero-section-anchor')}
        >
          {/* Custom logo badge */}
          <div className="h-9 w-9 md:h-10 md:w-10 rounded-lg bg-[#ffb800] flex items-center justify-center shadow-[0_0_20px_rgba(255,184,0,0.4)] group-hover:shadow-[0_0_30px_rgba(255,184,0,0.6)] transition-all duration-300">
            <svg
              className="h-6 w-6 text-black select-none"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Rockstar Logo"
            >
              <path
                d="M26 24h24c13 0 19 6 19 14 0 7-5 12-13 13.5l14 22.5H57L44 51.5H38V74H26V24zm12 17.5h11c5 0 8-2 8-5.5s-3-5.5-8-5.5H38v11z"
                fill="black"
              />
              <path
                d="M62 62l2.5 7.5h7.5l-6 5 2.5 7.5-6.5-4.5-6.5 4.5 2.5-7.5-6-5h7.5z"
                fill="#111"
                stroke="#111"
                strokeWidth="1"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-sm md:text-base tracking-[0.15em] text-white uppercase">
              ROCKSTAR
            </span>
            <span className="text-[7px] font-sans tracking-[0.25em] text-[#00b8ff] uppercase opacity-80">
              Games
            </span>
          </div>
        </div>

        {/* Nav separator */}
        <div className="hidden md:flex items-center gap-5 ml-6 pl-6 border-l border-white/10">
          <span className="text-[10px] font-display font-bold tracking-[0.2em] text-white/40 uppercase hover:text-[#00b8ff] transition-colors cursor-pointer"
            onClick={() => handleScrollTo('trailer-section-anchor')}>Trailers</span>
          <span className="text-[10px] font-display font-bold tracking-[0.2em] text-white/40 uppercase hover:text-[#00b8ff] transition-colors cursor-pointer"
            onClick={() => handleScrollTo('locations-section-anchor')}>Locations</span>
          <span className="text-[10px] font-display font-bold tracking-[0.2em] text-white/40 uppercase hover:text-[#00b8ff] transition-colors cursor-pointer"
            onClick={() => handleScrollTo('protagonists-section-anchor')}>Characters</span>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3 md:gap-4 pointer-events-auto">
        {/* Pre-Order Button */}
        <button
          onClick={onPreorderOpen}
          id="header-preorder-btn"
          className="flex items-center gap-1.5 bg-[#ffb800] hover:bg-[#ffd040] text-[#020408] text-[10px] md:text-[11px] font-display font-bold tracking-[0.15em] uppercase px-4 md:px-6 py-2.5 md:py-3 shadow-[0_0_20px_rgba(255,184,0,0.3)] cursor-pointer transition-all rounded-sm"
        >
          <Zap className="h-3 w-3 fill-current" />
          Pre-Order
        </button>

        {/* Menu Button */}
        <button
          onClick={onMenuOpen}
          id="burgerMenu"
          className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#00b8ff]/20 bg-[#00b8ff]/5 hover:bg-[#00b8ff]/10 hover:border-[#00b8ff]/40 text-white transition-all cursor-pointer"
          aria-label="Menu"
        >
          <Menu className="h-4.5 w-4.5" />
        </button>
      </div>
    </header>
  );
}
