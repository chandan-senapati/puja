import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONTENT } from '../data';
import { X } from 'lucide-react';

export default function MemoryGallery() {
  const [selectedImg, setSelectedImg] = useState<number | null>(null);

  const selectedData = SITE_CONTENT.gallery.find(g => g.id === selectedImg);

  return (
    <section className="py-24 relative z-10 bg-white/20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-handwriting text-5xl md:text-6xl text-pink-500 mb-16"
        >
          A Few Moments, A Million Memories 💕
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-8">
          {SITE_CONTENT.gallery.map((item, index) => {
            const rotation = (index % 2 === 0 ? 1 : -1) * (Math.random() * 6 + 2);
            
            return (
              <motion.div
                key={item.id}
                layoutId={`card-${item.id}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                onClick={() => setSelectedImg(item.id)}
                style={{ rotate: rotation }}
                className="cursor-pointer bg-white p-3 md:p-4 pb-10 md:pb-12 rounded-sm shadow-xl w-[90%] max-w-[260px] sm:w-64 border border-gray-100 flex flex-col relative"
              >
                <div className="w-full h-56 sm:h-64 bg-pink-50 overflow-hidden flex items-center justify-center">
                  <img 
                    src={item.imagePath} 
                    alt="Memory" 
                    className="w-full h-full object-cover object-center" 
                  />
                </div>
                <p className="font-handwriting text-lg md:text-xl text-gray-700 absolute bottom-2 md:bottom-4 left-0 right-0 text-center px-4">
                  {item.caption}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedImg && selectedData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              layoutId={`card-${selectedImg}`}
              className="bg-white p-4 pb-16 rounded-sm max-w-2xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 p-2 bg-white/80 rounded-full shadow-md z-10 text-gray-500 hover:text-gray-800"
                onClick={() => setSelectedImg(null)}
              >
                <X size={24} />
              </button>
              <div className="w-full h-[50vh] md:h-[60vh] bg-pink-50 flex items-center justify-center overflow-hidden rounded-sm">
                 <img src={selectedData.imagePath} alt="Memory" className="w-full h-full object-contain" />
              </div>
              <p className="font-handwriting text-2xl md:text-3xl text-gray-700 text-center mt-4 md:mt-6">
                {selectedData.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
