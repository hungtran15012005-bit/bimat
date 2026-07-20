import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Gamepad2, Sparkles, Mail, CheckCircle2 } from 'lucide-react';
import { EDITIONS, PLATFORMS } from '../data';

interface PreorderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialEditionId?: string;
}

export default function PreorderModal({ isOpen, onClose, initialEditionId = 'standard' }: PreorderModalProps) {
  const [selectedPlatform, setSelectedPlatform] = useState(PLATFORMS[0].id);
  const [selectedEdition, setSelectedEdition] = useState(initialEditionId);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const currentEdition = EDITIONS.find((e) => e.id === selectedEdition) || EDITIONS[0];
  const currentPlatform = PLATFORMS.find((p) => p.id === selectedPlatform) || PLATFORMS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setEmail('');
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="preorder-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/90 p-4 md:p-6 backdrop-blur-md overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            id="preorder-modal-content"
            initial={{ scale: 0.95, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 30, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#0d0a1b]/95 shadow-2xl text-white my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient Background Gradient Glows */}
            <div className="absolute top-0 left-0 -z-10 h-64 w-64 rounded-full bg-pink-600/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 -z-10 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl" />

            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 p-6">
              <div className="flex items-center gap-3">
                <svg className="h-6 w-auto text-white" viewBox="0 0 45 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0H8.5L14.5 16.5L20.5 0H29L18.5 24H10.5L0 0Z" fill="currentColor" />
                  <rect x="33" y="0" width="8" height="24" fill="currentColor" />
                </svg>
                <h2 className="font-display text-lg font-bold tracking-wider text-pink-300">PRE-ORDER PLATFORM</h2>
              </div>
              <button
                id="preorder-close-btn"
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white cursor-pointer transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
                {/* 1. CHOOSE PLATFORM */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2 font-display text-xs font-bold uppercase tracking-widest text-white/50">
                    <Gamepad2 className="h-4 w-4 text-pink-400" />
                    1. Select Console Platform
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {PLATFORMS.map((platform) => (
                      <button
                        type="button"
                        key={platform.id}
                        onClick={() => setSelectedPlatform(platform.id)}
                        className={`relative flex flex-col items-center gap-3 rounded-xl border p-4 text-center cursor-pointer transition-all ${
                          selectedPlatform === platform.id
                            ? 'border-[#ff9e8a] bg-[#ff9e8a]/10 shadow-[0_0_15px_rgba(255,158,138,0.15)]'
                            : 'border-white/10 bg-white/5 hover:border-white/20'
                        }`}
                      >
                        {selectedPlatform === platform.id && (
                          <span className="absolute top-3 right-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#ff9e8a] text-black">
                            <Check className="h-3 w-3 stroke-[3]" />
                          </span>
                        )}
                        <span className="font-display text-sm font-bold tracking-wider">{platform.name}</span>
                        <span className="text-[10px] text-white/40 font-mono">Released {platform.releaseDate}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. CHOOSE EDITION */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2 font-display text-xs font-bold uppercase tracking-widest text-white/50">
                    <Sparkles className="h-4 w-4 text-pink-400" />
                    2. Select Game Edition
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {EDITIONS.map((edition) => (
                      <button
                        type="button"
                        key={edition.id}
                        onClick={() => setSelectedEdition(edition.id)}
                        className={`relative flex flex-col justify-between items-start rounded-xl border p-5 text-left cursor-pointer transition-all ${
                          selectedEdition === edition.id
                            ? 'border-purple-500 bg-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.15)]'
                            : 'border-white/10 bg-white/5 hover:border-white/20'
                        }`}
                      >
                        {selectedEdition === edition.id && (
                          <span className="absolute top-4 right-4 flex h-5 w-5 items-center justify-center rounded-full bg-purple-500 text-white">
                            <Check className="h-3 w-3 stroke-[3]" />
                          </span>
                        )}
                        <div className="space-y-1 pr-6">
                          <span className="font-display text-sm font-bold tracking-wider uppercase">{edition.name}</span>
                          <p className="text-xs text-white/60 line-clamp-2">{edition.description}</p>
                        </div>
                        <div className="mt-4 flex items-baseline gap-2">
                          <span className="text-xl font-black text-pink-300 font-mono">{edition.price}</span>
                          <span className="text-[10px] text-white/40">Digital Pre-Order</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. ORDER SUMMARY */}
                <div className="rounded-xl bg-black/40 p-5 border border-white/5 space-y-3">
                  <div className="flex justify-between text-xs font-mono text-white/50 border-b border-white/5 pb-2">
                    <span>Selected Items</span>
                    <span>Subtotal</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex flex-col">
                        <span className="font-bold text-[#ff9e8a]">{currentEdition.name}</span>
                        <span className="text-xs text-white/40">{currentPlatform.name} Digital Key</span>
                      </div>
                      <span className="font-mono font-bold text-[#ff9e8a]">{currentEdition.price}</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-white/5 space-y-1">
                    <span className="text-[10px] text-white/30 uppercase font-bold tracking-widest block">BONUS ITEMS INCLUDED:</span>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 text-xs text-green-400">
                      {currentEdition.features.slice(1, 4).map((f, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                          <span className="truncate">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 4. EMAIL REGISTRATION */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2 font-display text-xs font-bold uppercase tracking-widest text-white/50">
                    <Mail className="h-4 w-4 text-pink-400" />
                    3. Account Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email to receive pre-order receipt"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-black/50 py-3.5 pl-12 pr-4 text-sm text-white placeholder-white/30 outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/20 transition-all font-sans"
                    />
                    <Mail className="absolute left-4 top-3.5 h-5 w-5 text-white/30" />
                  </div>
                  {error && <p className="text-xs text-red-400">{error}</p>}
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 py-4 font-display text-sm font-extrabold tracking-widest text-white uppercase shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all cursor-pointer transform hover:-translate-y-0.5"
                >
                  Confirm Pre-Order Reservation
                </button>
              </form>
            ) : (
              <motion.div
                id="preorder-success-screen"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 md:p-12 text-center space-y-6"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                  <CheckCircle2 className="h-12 w-12" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-black uppercase tracking-wider text-green-400">RESERVATION CONFIRMED</h3>
                  <p className="text-sm text-white/70 max-w-md mx-auto">
                    Your pre-order for <strong>{currentEdition.name}</strong> ({currentPlatform.name}) has been registered to <strong>{email}</strong>.
                  </p>
                </div>

                {/* Receipt Details card */}
                <div className="mx-auto max-w-md rounded-xl border border-white/10 bg-black/50 p-6 text-left space-y-4 font-mono text-xs">
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-white/40">TRANSACTION ID</span>
                    <span className="text-[#ff9e8a]">#GTA6-{Math.floor(100000 + Math.random() * 900000)}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-white/40">ITEM</span>
                      <span>{currentEdition.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40">CONSOLE</span>
                      <span>{currentPlatform.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40">PRICE</span>
                      <span>{currentEdition.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/40">EST. CHARGED AT RELEASE</span>
                      <span>$0.00 (Auth Only)</span>
                    </div>
                  </div>
                  <div className="border-t border-white/10 pt-3 flex justify-between text-sm font-bold text-green-400">
                    <span>ORDER STATUS</span>
                    <span>COMPLETED</span>
                  </div>
                </div>

                <p className="text-[10px] text-white/40 font-mono">
                  Receipt and code activation instructions will be sent to {email} around early {currentPlatform.releaseDate}.
                </p>

                <button
                  type="button"
                  onClick={handleReset}
                  className="px-8 py-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-bold uppercase tracking-widest cursor-pointer transition-all"
                >
                  Back to Vice City
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
