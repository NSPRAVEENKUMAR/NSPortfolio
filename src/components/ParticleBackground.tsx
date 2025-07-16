import { motion } from 'framer-motion';

const ParticleBackground = () => {
  return (
    <div className="particle-bg">
      {/* Animated Background Particles */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 rounded-full ${
            i % 4 === 0 ? 'bg-neon-blue' :
            i % 4 === 1 ? 'bg-neon-purple' :
            i % 4 === 2 ? 'bg-neon-cyan' :
            'bg-neon-pink'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.1, 0.8, 0.1],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Larger Floating Orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className={`absolute w-20 h-20 rounded-full blur-xl ${
            i % 2 === 0 ? 'bg-neon-blue/10' : 'bg-neon-purple/10'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--neon-blue)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--neon-blue)) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-neon-blue/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-neon-purple/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-neon-cyan/3 via-transparent to-neon-pink/3 rounded-full blur-3xl"></div>
    </div>
  );
};

export default ParticleBackground;