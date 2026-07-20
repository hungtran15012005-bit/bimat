import { motion, AnimatePresence } from 'motion/react';
import { X, Globe, Eye } from 'lucide-react';

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onPreorderOpen: () => void;
}

export default function FullscreenMenu({ isOpen, onClose, onPreorderOpen }: FullscreenMenuProps) {
  const handleLinkClick = (id: string) => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="fullscreen-menu-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[99999] flex flex-col md:flex-row overflow-hidden bg-black font-sans"
        >
          {/* LEFT PANEL (60% on desktop) - Sunset gradient & palm silhouettes */}
          <div className="relative w-full md:w-[60%] h-[40%] md:h-full flex flex-col justify-between p-6 md:p-12 bg-gradient-to-br from-[#18112c] via-[#29122c] to-[#0e0716] overflow-hidden">
            <div className="absolute inset-0 z-10 bg-radial-vignette pointer-events-none" style={{ background: 'radial-gradient(circle, transparent 30%, rgba(0,0,0,0.6) 100%)' }} />
            <div className="absolute inset-0 z-10 noise-overlay opacity-3 pointer-events-none" />

            {/* Premium custom-drawn vector GTA VI Palm Logo */}
            <div className="relative z-20 flex-grow flex items-center justify-center">
              <svg className="w-full max-w-[280px] md:max-w-[340px] h-auto drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <clipPath id="vi-letter-clip-menu">
                    {/* V shape */}
                    <path d="M 50,40 L 170,260 L 290,40 L 235,40 L 170,165 L 105,40 Z" />
                    {/* I shape */}
                    <path d="M 310,40 L 370,40 L 370,260 L 310,260 Z" />
                  </clipPath>
                </defs>
                
                {/* Outlines */}
                <path d="M 50,40 L 170,260 L 290,40 L 235,40 L 170,165 L 105,40 Z" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinejoin="miter" />
                <path d="M 310,40 L 370,40 L 370,260 L 310,260 Z" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinejoin="miter" />
                
                {/* Clipped sunset gradients with palm tree silhouettes */}
                <g clipPath="url(#vi-letter-clip-menu)">
                  <image
                    href="https://images.weserv.nl/?url=www.rockstargames.com/VI/_next/static/media/Official_Cover_Art_landscape.12.uu2irr.2_a.jpg"
                    x="0"
                    y="0"
                    width="400"
                    height="300"
                    preserveAspectRatio="xMidYMid slice"
                    referrerPolicy="no-referrer"
                  />
                </g>
              </svg>
            </div>

            {/* Left Panel Footer */}
            <div className="relative z-20 flex justify-between items-center w-full">
              <div className="flex flex-col gap-1 text-left">
                <span className="font-display text-[10px] font-bold tracking-widest text-white/50">COMING</span>
                <span className="font-display text-sm md:text-base font-black tracking-wider text-white font-mono">NOVEMBER 19, 2026</span>
              </div>

              <div>
                <button
                  type="button"
                  id="menu-preorder-btn"
                  onClick={() => {
                    onClose();
                    onPreorderOpen();
                  }}
                  className="rounded-full bg-[#fbc6d0] hover:bg-[#ffced7] text-[#0d0d14] px-6 py-3 font-display text-xs font-black tracking-widest uppercase transition-all cursor-pointer transform hover:scale-105"
                >
                  Pre-Order Now
                </button>
              </div>

              <div className="hidden md:flex items-center gap-4">
                <img src="https://www.bing.com/th/id/OIP.3x_0RemJXjy73-8GNyq6qgHaE8?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.9&pid=ImgAns&rm=2" alt="PS5 Logo" className="h-5 w-auto opacity-70 mix-blend-screen" />
                <img src="https://tse2.mm.bing.net/th/id/OIP.ZTJdDvQ-Fp8RvcZLwlbgwwHaCL?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Xbox Logo" className="h-5 w-auto opacity-70 mix-blend-screen" />
              </div>
            </div>
          </div>

          {/* RIGHT PANEL (40% on desktop) - Navigation list */}
          <div className="w-full md:w-[40%] h-[60%] md:h-full flex flex-col justify-between p-6 md:p-12 bg-[#08080c] border-t md:border-t-0 md:border-l border-white/10 relative z-30">
            {/* Top Row: Meta & Close */}
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-[#fec20c] flex items-center justify-center shadow-[0_0_10px_rgba(254,194,12,0.3)]">
                  <svg
                    className="h-6 w-6 text-black select-none"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Rockstar Games Logo"
                  >
                    <path
                      d="M26 24h24c13 0 19 6 19 14 0 7-5 12-13 13.5l14 22.5H57L44 51.5H38V74H26V24zm12 17.5h11c5 0 8-2 8-5.5s-3-5.5-8-5.5H38v11z"
                      fill="black"
                    />
                    <path
                      d="M62 62l2.5 7.5h7.5l-6 5 2.5 7.5-6.5-4.5-6.5 4.5 2.5-7.5-6-5h7.5z"
                      fill="white"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-white/20">|</span>
                <span className="font-display text-xs font-bold tracking-widest uppercase text-white/70">Grand Theft Auto VI</span>
              </div>

              <button
                id="menu-overlay-close-btn"
                onClick={onClose}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 text-white transition-all cursor-pointer"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col gap-6 md:gap-8 my-auto text-left">
              <button
                onClick={() => handleLinkClick('hero-section-anchor')}
                className="flex justify-between items-center text-[#e2fc52] hover:text-[#eeff80] font-display text-2xl md:text-3xl font-black tracking-widest text-left cursor-pointer transition-all border-none bg-transparent outline-none w-full"
              >
                <span>HOME</span>
              </button>

              <button
                onClick={() => handleLinkClick('trailer-section-anchor')}
                className="flex justify-between items-center text-white hover:text-[#ff9e8a] hover:pl-2 font-display text-2xl md:text-3xl font-black tracking-widest text-left cursor-pointer transition-all border-none bg-transparent outline-none w-full"
              >
                <span>TRAILERS</span>
              </button>

              <button
                onClick={() => handleLinkClick('locations-section-anchor')}
                className="flex justify-between items-center text-white hover:text-[#ff9e8a] hover:pl-2 font-display text-2xl md:text-3xl font-black tracking-widest text-left cursor-pointer transition-all border-none bg-transparent outline-none w-full"
              >
                <span>ONLY IN LEONIDA</span>
              </button>

              <button
                onClick={() => handleLinkClick('protagonists-section-anchor')}
                className="flex justify-between items-center text-white hover:text-[#ff9e8a] hover:pl-2 font-display text-2xl md:text-3xl font-black tracking-widest text-left cursor-pointer transition-all border-none bg-transparent outline-none w-full"
              >
                <span>PROTAGONISTS</span>
              </button>

              <button
                onClick={() => handleLinkClick('ultimate-card-anchor')}
                className="flex justify-between items-center text-white hover:text-[#ff9e8a] hover:pl-2 font-display text-2xl md:text-3xl font-black tracking-widest text-left cursor-pointer transition-all border-none bg-transparent outline-none w-full"
              >
                <span>ULTIMATE EDITION</span>
              </button>
            </nav>

            {/* Dropdowns */}
            <div className="flex justify-between items-center w-full border-t border-white/10 pt-6">
              <div className="flex items-center gap-2 text-white/60 hover:text-white text-xs font-bold tracking-wider cursor-pointer">
                <Globe className="h-4 w-4" />
                <span>English</span>
              </div>

              <div className="flex items-center gap-2 text-white/60 hover:text-white text-xs font-bold tracking-wider cursor-pointer">
                <Eye className="h-4 w-4" />
                <span className="font-mono">Cinematic Mode</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
