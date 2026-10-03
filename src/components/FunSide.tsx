import { useState } from 'react';
import { motion } from 'framer-motion';
import { SITE_CONTENT } from '../data';

export default function FunSide() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-handwriting text-5xl md:text-6xl text-pink-500 mb-16"
        >
          Because Our Friendship Is Not Always Emotional 😂💗
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {SITE_CONTENT.funMoments.map((moment, index) => (
            <FlipCard key={index} front={moment.front} back={moment.back} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlipCard({ front, back, delay }: { front: string; back: string; delay: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="w-full max-w-sm h-64 perspective-1000 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative transform-style-3d transition-transform duration-700 ease-in-out"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-pink-100 flex items-center justify-center p-6 text-center">
          <h3 className="font-handwriting text-3xl text-pink-600">{front}</h3>
        </div>
        
        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl shadow-lg border border-pink-200 flex items-center justify-center p-6 text-center">
          <p className="text-xl text-gray-800 font-medium">{back}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
