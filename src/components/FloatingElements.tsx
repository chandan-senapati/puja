import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function FloatingElements() {
  const [elements, setElements] = useState<{ id: number; left: string; delay: number; duration: number }[]>([]);

  useEffect(() => {
    const newElements = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + '%',
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 20,
    }));
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute bottom-[-5%] text-pink-300/40 opacity-50"
          initial={{ y: '100vh', x: 0, rotate: 0 }}
          animate={{
            y: '-10vh',
            x: Math.sin(el.id) * 50,
            rotate: 360,
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: 'linear',
          }}
          style={{ left: el.left }}
        >
          {el.id % 2 === 0 ? '✨' : '🌸'}
        </motion.div>
      ))}
    </div>
  );
}
