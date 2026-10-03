import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function BirthdayCake() {
  const [wished, setWished] = useState(false);

  const handleWish = () => {
    setWished(true);
    
    // Confetti explosion
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ffc0cb', '#ffb6c1', '#ff69b4']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ffc0cb', '#ffb6c1', '#ff69b4']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  return (
    <section className="py-24 relative z-10 flex flex-col items-center min-h-[70vh] justify-center">
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-handwriting text-5xl md:text-6xl text-pink-500 mb-4"
        >
          Okay Puja, it's time to make a wish! 🎂✨
        </motion.h2>
      </div>

      <div className="relative flex flex-col items-center">
        {/* Simple CSS Cake */}
        <motion.div 
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          className="relative w-64 h-64 flex flex-col items-center justify-end"
        >
          {/* Candles */}
          <div className="flex gap-4 mb-[-10px] z-20">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-4 h-16 bg-pink-300 rounded-t-md relative flex justify-center">
                <div className="w-full h-2 bg-pink-400 absolute top-2"></div>
                <div className="w-full h-2 bg-pink-400 absolute top-6"></div>
                <div className="w-full h-2 bg-pink-400 absolute top-10"></div>
                {/* Flame */}
                <motion.div 
                  animate={{ 
                    scale: wished ? 0 : [1, 1.2, 1],
                    opacity: wished ? 0 : 1
                  }}
                  transition={{ 
                    repeat: wished ? 0 : Infinity, 
                    duration: 0.5 + Math.random() * 0.5 
                  }}
                  className="w-4 h-6 bg-yellow-400 rounded-full absolute -top-8 origin-bottom filter drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]"
                  style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}
                />
              </div>
            ))}
          </div>
          
          {/* Cake Tiers */}
          <div className="w-48 h-16 bg-pink-200 rounded-t-xl border-t-4 border-white shadow-inner z-10 relative">
             <div className="absolute top-0 w-full h-4 bg-white/50 rounded-full blur-[2px]"></div>
          </div>
          <div className="w-64 h-24 bg-pink-300 rounded-xl border-t-4 border-white shadow-xl relative overflow-hidden">
             <div className="absolute top-0 w-full h-6 bg-white/40 rounded-full blur-[2px]"></div>
             <div className="absolute inset-0 flex justify-around items-center opacity-50">
               {[1,2,3,4,5].map(i => <div key={i} className="w-2 h-full bg-pink-400 transform rotate-12"></div>)}
             </div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {!wished ? (
            <motion.button
              key="btn"
              onClick={handleWish}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 bg-white/80 backdrop-blur px-8 py-4 rounded-full font-semibold text-pink-600 shadow-md border border-pink-200 text-xl"
            >
              Make a Wish 💫
            </motion.button>
          ) : (
            <motion.div
              key="msg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 text-center"
            >
              <h3 className="font-handwriting text-4xl text-pink-500">
                May all your beautiful wishes come true, Puja! 💗
              </h3>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
