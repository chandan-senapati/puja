import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import OpeningScreen from './components/OpeningScreen';
import HeroSection from './components/HeroSection';
import OurStory from './components/OurStory';
import MemoryGallery from './components/MemoryGallery';
import Letter from './components/Letter';
import FunSide from './components/FunSide';
import Appreciation from './components/Appreciation';
import BirthdayCake from './components/BirthdayCake';
import PromiseSection from './components/PromiseSection';
import FinalSurprise from './components/FinalSurprise';
import MusicPlayer from './components/MusicPlayer';
import FloatingElements from './components/FloatingElements';

function App() {
  const [opened, setOpened] = useState(false);
  
  // A ref to pass down to FinalSurprise to trigger replay
  const resetApp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setOpened(false);
    }, 500);
  };

  return (
    <div className="relative min-h-screen overflow-hidden font-sans selection:bg-brand-pink/50">
      <AnimatePresence mode="wait">
        {!opened ? (
          <OpeningScreen key="opening" onOpen={() => setOpened(true)} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <MusicPlayer />
            <FloatingElements />
            
            <HeroSection />
            <OurStory />
            <MemoryGallery />
            <Letter />
            <FunSide />
            <Appreciation />
            <BirthdayCake />
            <PromiseSection />
            <FinalSurprise onReplay={resetApp} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
