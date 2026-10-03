import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONTENT } from '../data';
import { MailOpen } from 'lucide-react';

export default function Letter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-24 relative z-10 flex flex-col items-center">
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-handwriting text-5xl md:text-6xl text-pink-500 mb-4"
        >
          A Little Letter for You 💌
        </motion.h2>
      </div>

      <div className="relative w-full max-w-3xl px-6 flex flex-col items-center justify-center min-h-[400px]">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="envelope"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.5 }}
              onClick={() => setIsOpen(true)}
              className="cursor-pointer relative w-64 h-48 bg-pink-100 rounded-lg shadow-xl border border-pink-200 flex items-center justify-center group hover:shadow-2xl transition-all"
            >
              {/* Envelope Flap styling */}
              <div className="absolute inset-0 overflow-hidden rounded-lg">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-pink-200 origin-top transform scale-y-100 shadow-sm z-10 clip-triangle"></div>
              </div>
              <MailOpen size={48} className="text-pink-400 z-20 group-hover:scale-110 transition-transform" />
              <div className="absolute bottom-4 z-20 font-handwriting text-2xl text-pink-500">Tap to Open</div>
            </motion.div>
          ) : (
            <motion.div
              key="letter"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full bg-white/90 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-2xl border border-pink-100"
            >
              <div className="prose prose-pink max-w-none font-sans text-gray-700 leading-loose whitespace-pre-wrap">
                {SITE_CONTENT.letter}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
