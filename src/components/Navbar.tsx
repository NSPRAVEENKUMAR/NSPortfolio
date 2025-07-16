import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, User, Code, Award, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Projects', href: '#projects', icon: Code },
    { name: 'Certifications', href: '#certifications', icon: Award },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            NS PRAVEENKUMAR
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="w-4 h-4 group-hover:text-neon-blue transition-colors" />
                <span className="relative">
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden bg-card/95 backdrop-blur-md rounded-lg m-4 p-4 border border-border"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 py-3 text-foreground hover:text-primary transition-colors duration-300"
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 10 }}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;