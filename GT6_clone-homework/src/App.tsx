import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProtagonistsSection from './components/ProtagonistsSection';
import LocationsSection from './components/LocationsSection';
import TrailerSection from './components/TrailerSection';
import BentoSection from './components/BentoSection';
import Footer from './components/Footer';
import FullscreenMenu from './components/FullscreenMenu';
import PreorderModal from './components/PreorderModal';
import VideoModal from './components/VideoModal';
import AudioPlayer from './components/AudioPlayer';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPreorderOpen, setIsPreorderOpen] = useState(false);
  const [selectedEdition, setSelectedEdition] = useState('standard');
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState('');

  const handlePreorderOpen = (editionId: string = 'standard') => {
    setSelectedEdition(editionId);
    setIsPreorderOpen(true);
  };

  const handleWatchVideo = (videoUrl: string) => {
    setActiveVideoUrl(videoUrl);
    setIsVideoOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden select-none">
      {/* Dynamic Ambient Blur Backdrop Glows for overall landing continuity */}
      <div className="fixed top-1/4 left-1/12 -z-10 h-96 w-96 rounded-full bg-purple-900/10 blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/3 right-1/10 -z-10 h-[500px] w-[500px] rounded-full bg-pink-900/5 blur-3xl pointer-events-none" />

      {/* Sticky Header Navigation bar */}
      <Header
        onMenuOpen={() => setIsMenuOpen(true)}
        onPreorderOpen={() => handlePreorderOpen('standard')}
      />

      {/* Cinematic Main Layout Section Stack */}
      <main className="w-full flex flex-col">
        {/* Section 1: Hero Cover Art Screen */}
        <HeroSection onPreorderOpen={() => handlePreorderOpen('standard')} />

        {/* Anchor point for navigation scroll */}
        <div id="trailer-section-anchor" className="scroll-mt-20" />

        {/* Section 2: Trailer 1 Video Broadcast Bento Card */}
        <TrailerSection onWatchClick={handleWatchVideo} />

        {/* Anchor point for navigation scroll */}
        <div id="locations-section-anchor" className="scroll-mt-20" />

        {/* Section 3: Locations - Vice City, USA */}
        <LocationsSection />

        {/* Anchor point for navigation scroll */}
        <div id="protagonists-section-anchor" className="scroll-mt-20" />
        
        {/* Section 4: Character Profile Explorer & Floating Custom Edition Cards */}
        <ProtagonistsSection onPreorderOpen={handlePreorderOpen} />

        {/* Section 5: Secondary Bento Columns (Leonida & Media) */}
        <BentoSection />
      </main>

      {/* Section: Footer with redesigned sleek multi-column layout */}
      <Footer />

      {/* Fullscreen Navigation Overlay menu */}
      <FullscreenMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onPreorderOpen={() => handlePreorderOpen('standard')}
      />

      {/* Interactive Platform / Edition pre-order wizard checkout */}
      <PreorderModal
        isOpen={isPreorderOpen}
        onClose={() => setIsPreorderOpen(false)}
        initialEditionId={selectedEdition}
      />

      {/* Video Iframe Player overlay for official trailers */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl={activeVideoUrl}
      />

      {/* Ambient Synthesizer background music & equalizer bar control */}
      <AudioPlayer />
    </div>
  );
}
