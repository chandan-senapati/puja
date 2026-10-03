import { motion } from 'framer-motion';
import { SITE_CONTENT } from '../data';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const scrollToStory = () => {
    document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center p-6 text-center z-10 pt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-2xl mx-auto space-y-8"
      >
        <h1 className="font-handwriting text-6xl md:text-8xl text-pink-500 drop-shadow-sm">
          Happy Birthday, {SITE_CONTENT.friendName}! 🎂💗
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
          To my favourite human, my forever bestie, and a part of so many of my favourite memories.
        </p>

        <motion.div 
          className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mt-12 mb-12 rounded-full p-2 bg-white/40 backdrop-blur-sm border border-white/60 shadow-xl"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-pink-100 flex items-center justify-center border-4 border-white">
            <img src={SITE_CONTENT.heroImagePath} alt="Us" className="w-full h-full object-cover" />
          </div>
          
          {/* Decorative elements around frame */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 border-2 border-dashed border-pink-300 rounded-full pointer-events-none"
          />
        </motion.div>

        <motion.button
          onClick={scrollToStory}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 bg-white/80 backdrop-blur px-8 py-4 rounded-full font-semibold text-pink-600 shadow-md border border-pink-200 flex items-center gap-2 mx-auto hover:bg-pink-50 transition-colors"
        >
          Let's Take a Trip Down Memory Lane ✨
          <ChevronDown size={20} className="animate-bounce mt-1" />
        </motion.button>
      </motion.div>
    </section>
  );
}
