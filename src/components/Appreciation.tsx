import { motion } from 'framer-motion';
import { SITE_CONTENT } from '../data';
import { Heart } from 'lucide-react';

export default function Appreciation() {
  return (
    <section className="py-24 relative z-10 bg-white/20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-handwriting text-5xl md:text-6xl text-pink-500 mb-16"
        >
          Reasons Why You're So Special, Puja 💗
        </motion.h2>

        <div className="flex flex-col gap-6 items-center">
          {SITE_CONTENT.appreciation.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/70 backdrop-blur-md px-8 py-4 rounded-full shadow-md border border-pink-100 flex items-center gap-4 max-w-full"
            >
              <Heart className="text-pink-400 fill-pink-200 shrink-0" size={24} />
              <span className="text-lg text-gray-700 font-medium text-left">{msg}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
