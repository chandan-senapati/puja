import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { SITE_CONTENT } from '../data';

export default function OurStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  return (
    <section id="our-story" className="py-24 relative z-10" ref={containerRef}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-handwriting text-5xl md:text-6xl text-pink-500 mb-4"
          >
            From Strangers to My Forever Bestie 🥹💗
          </motion.h2>
        </div>

        <div className="relative md:flex md:flex-col md:items-center space-y-16 md:space-y-24 before:absolute before:inset-0 before:ml-5 md:before:ml-[-2px] md:before:left-1/2 before:-translate-x-px md:before:translate-x-0 before:h-full before:w-1 before:bg-pink-200">
          {SITE_CONTENT.timeline.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className={`relative flex flex-col md:flex-row items-center w-full max-w-4xl ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[13px] md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-pink-400 border-4 border-white shadow-md z-10" />

                {/* Content Container (Spacer for one side, Content for the other) */}
                <div className={`w-full md:w-1/2 pl-12 pr-4 py-2 md:px-8 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="w-full bg-white/60 backdrop-blur-md p-5 md:p-6 rounded-2xl shadow-lg border border-white/50">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">{item.description}</p>
                    <div className="w-full bg-pink-50/50 rounded-xl overflow-hidden border-2 border-white shadow-inner flex items-center justify-center">
                      <img 
                        src={item.imagePath} 
                        alt={item.title} 
                        className="w-full h-auto max-h-[300px] md:max-h-[400px] object-cover sm:object-contain object-center" 
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
