import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h1 
              className="text-6xl md:text-8xl font-bold"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="gradient-text">NS</span>{' '}
              <span className="neon-text">PRAVEENKUMAR</span>
            </motion.h1>
            
            <motion.div
              className="text-xl md:text-2xl text-muted-foreground space-y-2"
              variants={itemVariants}
            >
              <div className="neon-purple-text font-semibold">Full Stack Developer</div>
              <div>Artificial Intelligence & Data Science Enthusiast</div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto text-lg text-muted-foreground"
          >
            Passionate about creating innovative web solutions with cutting-edge technologies.
            Specialized in React, Node.js, Python, and AI/ML integration.
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button className="neon-button px-8 py-3 text-lg">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/NSPRAVEENKUMAR"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glow-border hover:bg-primary/10 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/ns-praveenkumar-738760268"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glow-border hover:bg-primary/10 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              
              <motion.a
                href="mailto:praveenkumar2056@gmail.com"
                className="p-3 rounded-full glow-border hover:bg-primary/10 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-4 h-4 bg-neon-blue rounded-full floating"
          animate={{ 
            y: [-10, 10, -10],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-40 right-20 w-6 h-6 bg-neon-purple rounded-full floating-delayed"
          animate={{ 
            y: [10, -10, 10],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-primary" />
        </motion.div>
      </div>

      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;