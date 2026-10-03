import { motion } from 'framer-motion';
import { RotateCcw } from 'lucide-react';
import { SITE_CONTENT } from '../data';

interface Props {
  onReplay: () => void;
}

export default function FinalSurprise({ onReplay }: Props) {
  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center p-6 text-center z-10 bg-gradient-to-t from-brand-pink/30 to-transparent">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto space-y-8 bg-white/40 backdrop-blur-md p-10 md:p-16 rounded-3xl shadow-xl border border-white/50"
      >
        <h2 className="font-handwriting text-5xl md:text-7xl text-pink-500 mb-6 drop-shadow-sm">
          Once Again, Happy Birthday, {SITE_CONTENT.friendName}! 🎂💗
        </h2>
        
        <p className="text-xl text-gray-800 font-medium leading-relaxed">
          From Dream India School in 4th grade to today, I'm so happy that our paths crossed. Thank you for being my bestie and for being part of my story.
        </p>

        <p className="text-xl text-gray-800 font-medium leading-relaxed mt-4">
          Some friendships are simply too special to put into words. Ours is one of them. Here's to all the memories we've made and all the ones still waiting for us. 💗♾️
        </p>

        <div className="mt-8">
          <p className="font-handwriting text-4xl text-pink-600">Forever your bestie! 🫂💖</p>
          <p className="text-gray-500 mt-2">- {SITE_CONTENT.yourName}</p>
        </div>

        <motion.button
          onClick={onReplay}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 bg-white/80 backdrop-blur px-8 py-4 rounded-full font-semibold text-pink-600 shadow-md border border-pink-200 flex items-center gap-2 mx-auto hover:bg-pink-50 transition-colors"
        >
          <RotateCcw size={20} />
          Replay Our Memories ✨
        </motion.button>
      </motion.div>
    </section>
  );
}
