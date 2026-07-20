import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

export default function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
  // Extract video ID if it's a YouTube URL to play it in iframe safely
  const getEmbedUrl = (url: string) => {
    try {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      const match = url.match(regExp);
      if (match && match[2].length === 11) {
        return `https://www.youtube.com/embed/${match[2]}?autoplay=1&modestbranding=1&rel=0`;
      }
      return url;
    } catch {
      return url;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="video-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-md"
          onClick={onClose}
        >
          {/* Close button outside container */}
          <button
            id="video-modal-close-btn"
            onClick={onClose}
            className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white hover:bg-white/10 hover:border-white/40 transition-colors cursor-pointer z-[100001]"
            aria-label="Close video"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Modal Container */}
          <motion.div
            id="video-modal-content"
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 180 }}
            className="relative w-full max-w-5xl aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-purple-500/10"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              id="trailer-youtube-iframe"
              src={getEmbedUrl(videoUrl)}
              title="Grand Theft Auto VI Official Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full object-cover"
            ></iframe>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
