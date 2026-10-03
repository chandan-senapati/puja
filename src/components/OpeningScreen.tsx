import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Props {
  onOpen: () => void;
}

export default function OpeningScreen({ onOpen }: Props) {
  const handleOpen = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ffc0cb', '#ffb6c1', '#ff69b4', '#ff1493', '#db7093']
    });
    
    setTimeout(() => {
      onOpen();
    }, 1500);
  };

  return (
    <motion.div 
      className="fixed inset-0 bg-gradient-to-br from-brand-pink/40 via-brand-cream to-brand-lavender/40 flex flex-col items-center justify-center p-6 z-50"
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="font-handwriting text-5xl md:text-7xl text-pink-500 mb-4 drop-shadow-sm">
          Hey Pujaaa! 💗
        </h1>
        <p className="text-lg md:text-xl text-gray-700 font-medium mb-12">
          Someone has made something special just for you...
        </p>
      </motion.div>

      <motion.button
        onClick={handleOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative group flex flex-col items-center gap-4"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="bg-white/60 backdrop-blur-md p-8 rounded-full shadow-lg border border-white/50 group-hover:bg-white/80 transition-colors"
        >
          <Gift size={64} className="text-pink-400 group-hover:text-pink-500 transition-colors" />
        </motion.div>
        <span className="bg-white/80 backdrop-blur px-6 py-3 rounded-full font-semibold text-pink-600 shadow-sm border border-pink-100">
          Open Your Surprise 🎁
        </span>
      </motion.button>
    </motion.div>
  );
}
