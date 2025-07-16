import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, Music, Volume2, VolumeX, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingElements = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 300;
      setShowScrollTop(scrolled);
      
      if (!hasScrolled && window.scrollY > 100) {
        setHasScrolled(true);
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 5000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                onClick={scrollToTop}
                className="w-12 h-12 rounded-full neon-button p-0"
              >
                <ChevronUp className="w-6 h-6" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Music Player */}
      <motion.div
        className="fixed bottom-6 left-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.div
          className="holographic-card rounded-full p-4 flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
        >
          <Button
            onClick={toggleMusic}
            variant="ghost"
            className="w-10 h-10 rounded-full p-0 hover:bg-primary/20"
          >
            {isPlaying ? (
              <Volume2 className="w-5 h-5 text-neon-blue" />
            ) : (
              <VolumeX className="w-5 h-5 text-muted-foreground" />
            )}
          </Button>
          
          <AnimatePresence>
            {isPlaying && (
              <motion.div
                className="flex items-center space-x-2"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Music className="w-4 h-4 text-neon-purple" />
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  Ambient Focus
                </span>
                <div className="flex space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-3 bg-neon-blue rounded-full"
                      animate={{
                        scaleY: [1, 2, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Floating CTA Button */}
      <motion.div
        className="fixed top-1/2 right-0 transform -translate-y-1/2 z-40"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.a
          href="#contact"
          className="block bg-gradient-to-r from-neon-blue to-neon-purple p-4 rounded-l-xl text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ x: -10, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center space-x-2">
            <Phone className="w-5 h-5" />
            <span className="hidden sm:block">Let's Talk</span>
          </div>
        </motion.a>
      </motion.div>

      {/* Scroll Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed top-20 right-6 z-50 max-w-sm"
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <div className="holographic-card p-4 rounded-xl border border-neon-blue/30">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 pulse-glow"></div>
                <div>
                  <h4 className="font-semibold text-sm text-neon-blue mb-1">
                    Welcome to my portfolio!
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Scroll down to explore my projects and experience, or use the navigation menu.
                  </p>
                </div>
                <button
                  onClick={() => setShowPopup(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  ×
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              i % 2 === 0 ? 'bg-neon-blue' : 'bg-neon-purple'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </>
  );
};

export default FloatingElements;