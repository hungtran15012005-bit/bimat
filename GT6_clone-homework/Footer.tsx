import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, ShieldAlert, ExternalLink, Globe } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubscribed(true);
    }
  };

  return (
    <footer id="rockstarFooter" className="relative bg-[#070708] border-t border-white/5 py-16 md:py-24 px-6 md:px-16 flex flex-col z-10 text-white select-text">
      {/* Absolute Ambient Background Highlights */}
      <div className="absolute top-0 right-1/4 -z-10 h-72 w-72 rounded-full bg-yellow-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 -z-10 h-80 w-80 rounded-full bg-pink-500/5 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 z-0 noise-overlay opacity-5 pointer-events-none" />

      {/* Main Multi-Column Grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
        
        {/* Column 1: Rockstar Brand Hub (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col items-start space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-[#fec20c] flex items-center justify-center shadow-[0_0_20px_rgba(254,194,12,0.3)] hover:rotate-2 transition-transform duration-300">
              <svg
                className="h-8 w-8 text-black select-none"
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
            <div>
              <span className="font-display text-base font-black tracking-widest uppercase text-white leading-none block">
                ROCKSTAR GAMES*
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#fec20c] uppercase">
                ESTABLISHED 1998
              </span>
            </div>
          </div>

          <p className="text-xs text-white/50 leading-relaxed font-sans max-w-sm text-left">
            Crafting premium interactive entertainment across high-fidelity virtual realms. Experience the vanguard of open-world adventure.
          </p>

          {/* Clean minimal social badges row */}
          <div className="flex items-center gap-4 pt-2">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[#fec20c] hover:scale-110 transition-all duration-300 p-2 rounded-lg bg-white/5 border border-white/5 hover:border-[#fec20c]/30"
                aria-label={link.name}
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d={link.svgPath} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Core Directory Links (4 Cols - split into 2 sub-columns) */}
        <div className="lg:col-span-4 grid grid-cols-2 gap-8 text-left">
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-[#fec20c] uppercase">
              NETWORK
            </h4>
            <ul className="space-y-2.5">
              {['Newswire', 'Games', 'Videos', 'Downloads', 'Launcher'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-xs text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-1 group">
                    <span className="w-1 h-1 bg-[#fec20c] rounded-full scale-0 group-hover:scale-100 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[10px] font-bold tracking-[0.2em] text-pink-400 uppercase">
              COMPANY
            </h4>
            <ul className="space-y-2.5">
              {['Support', 'Careers', 'Corporate', 'Take-Two Store', 'Press'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-xs text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-1 group">
                    <span className="w-1 h-1 bg-pink-400 rounded-full scale-0 group-hover:scale-100 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 3: Custom Glass Propaganda Newsletter (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col space-y-4 text-left">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-7 backdrop-blur-xl space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
            <h4 className="text-xs font-bold tracking-[0.18em] text-white uppercase flex items-center gap-2">
              <Globe className="h-4 w-4 text-[#fec20c] animate-pulse" />
              JOIN THE PROPAGANDA
            </h4>
            <p className="text-[11px] text-white/50 leading-relaxed font-sans">
              Enter your email to receive direct intelligence alerts, exclusive offers, and critical updates directly from Rockstar Games HQ.
            </p>

            <AnimatePresence mode="wait">
              {!isSubscribed ? (
                <motion.form
                  key="redesigned-subscribe"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  onSubmit={handleSubscribe}
                  className="space-y-2.5"
                >
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="Agency Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-black/60 px-4 py-3 text-xs text-white placeholder-white/30 outline-none focus:border-[#fec20c]/40 focus:ring-1 focus:ring-[#fec20c]/20 transition-all font-mono"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-[#fec20c] font-display text-[10px] font-black tracking-widest uppercase py-3 rounded-xl transition-all duration-300 cursor-pointer shadow-md hover:shadow-[0_4px_15px_rgba(254,194,12,0.3)]"
                  >
                    <span>TRANSMIT DETAILS</span>
                    <Send className="h-3 w-3" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="redesigned-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-start gap-3 text-green-400 bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-left"
                >
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <div className="text-[11px]">
                    <span className="font-bold block uppercase tracking-wider mb-0.5">TRANSMISSION SECURED</span>
                    <span className="text-white/60 font-sans block">You have been compiled into Rockstar's active dispatch ledger.</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>

      {/* Secondary Bottom Section */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Rating and Description block (Left/Center) */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
          <div className="border-[3px] border-white p-1.5 bg-black w-12 h-15 flex flex-col items-center justify-center select-none flex-shrink-0">
            <span className="font-sans font-black text-xl text-white leading-none">RP</span>
            <span className="text-[4px] font-black text-white text-center mt-1 tracking-tighter leading-none">RATING PENDING</span>
          </div>
          <div className="space-y-1">
            <h5 className="text-[11px] font-bold text-white uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1.5">
              <ShieldAlert className="h-3.5 w-3.5 text-pink-400" />
              ESRB RATING PENDING
            </h5>
            <p className="text-[11px] text-white/50 max-w-md font-sans leading-relaxed">
              May contain content inappropriate for children. Visit{' '}
              <a href="https://esrb.org" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-[#fec20c]">
                esrb.org
              </a>{' '}
              for rating information.
            </p>
          </div>
        </div>

        {/* Legal Policies Stack (Right) */}
        <div className="flex flex-col items-center md:items-end space-y-3.5">
          <div className="flex flex-wrap justify-center md:justify-end gap-x-5 gap-y-2 text-[10px] font-mono font-bold tracking-wider text-white/40">
            {POLICY_LINKS.map((link, i) => (
              <a
                key={i}
                href="#"
                className="hover:text-white uppercase transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
          
          <div className="text-[9px] font-mono text-white/30 tracking-widest uppercase text-center md:text-right">
            © 2026 Rockstar Games, Inc. Rockstar, Grand Theft Auto, GTA VI, Leonida are trademarks of Take-Two Interactive. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}

// Custom modern social media brand links
const SOCIAL_LINKS = [
  {
    id: 'x',
    name: 'X (Twitter)',
    url: 'https://twitter.com',
    svgPath: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://instagram.com',
    svgPath: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z'
  },
  {
    id: 'youtube',
    name: 'YouTube',
    url: 'https://youtube.com',
    svgPath: 'M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'
  },
  {
    id: 'facebook',
    name: 'Facebook',
    url: 'https://facebook.com',
    svgPath: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
  },
  {
    id: 'twitch',
    name: 'Twitch',
    url: 'https://twitch.tv',
    svgPath: 'M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z'
  },
  {
    id: 'discord',
    name: 'Discord',
    url: 'https://discord.com',
    svgPath: 'M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.67 4.367a.07.07 0 00-.031.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 01-1.873-.894.077.077 0 01-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 01.077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 01.078.009c.12.099.246.195.373.289a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.894.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z'
  }
];

const POLICY_LINKS = [
  'Privacy Policy',
  'Legal Warnings',
  'Cookie Settings',
  'Do Not Sell My Info'
];
