import { motion } from 'framer-motion';
import { SITE_CONTENT } from '../data';
import { Infinity as InfinityIcon } from 'lucide-react';

export default function PromiseSection() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-handwriting text-5xl md:text-6xl text-pink-500 mb-8"
        >
          Our Story Isn't Over Yet... ♾️
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed mb-12 max-w-2xl"
        >
          We've already made so many memories since 4th grade, and I hope this is just the beginning of many more beautiful moments, laughs, adventures, and stories together.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-[90%] max-w-[280px] h-[360px] md:w-72 md:h-96 bg-white p-3 md:p-4 pb-14 md:pb-16 rounded-sm shadow-2xl border border-gray-100 rotate-2 hover:rotate-0 transition-transform duration-500"
        >
          <div className="w-full h-full bg-pink-50 flex items-center justify-center overflow-hidden">
            <img src={SITE_CONTENT.promiseImagePath} alt="Us forever" className="w-full h-full object-cover object-center" />
          </div>
          <div className="absolute bottom-2 md:bottom-4 left-0 right-0 flex justify-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <InfinityIcon size={32} className="text-pink-400" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
