import { motion } from 'framer-motion';
import { Code, Database, Brain, Palette, Server, Smartphone } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    {
      category: "Frontend",
      icon: Code,
      technologies: ["React", "JavaScript", "HTML", "CSS", "Bootstrap", "Pandas", "NumPy"]
    },
    {
      category: "Backend",
      icon: Server,
      technologies: ["Node.js", "Python", "OpenCV", "Scikit-learn", "R"]
    },
    {
      category: "Database",
      icon: Database,
      technologies: ["MySQL", "MongoDB", "PostgreSQL"]
    },
    {
      category: "AI/ML",
      icon: Brain,
      technologies: ["Machine Learning", "Deep Learning", "Computer Vision", "Data Analysis"]
    },
    {
      category: "Tools",
      icon: Palette,
      technologies: ["Visual Studio Code", "IntelliJ IDEA", "Eclipse", "Google Colab", "GDB"]
    },
    {
      category: "Platforms",
      icon: Smartphone,
      technologies: ["Windows", "Linux", "Android"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="holographic-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 neon-purple-text">
                Computer Science Student & Developer
              </h3>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a passionate Computer Science student specializing in 
                  <span className="text-neon-cyan"> Artificial Intelligence and Data Science</span> 
                  at Dr. Mahalingam College of Engineering and Technology, Pollachi.
                </p>
                
                <p>
                  Currently pursuing my Bachelor of Technology with a strong foundation in 
                  <span className="text-neon-blue"> full-stack development</span>, 
                  machine learning, and data analysis. I have experience working on various 
                  projects ranging from web applications to AI-powered solutions.
                </p>
                
                <p>
                  My goal is to leverage technology to create innovative solutions that make 
                  a positive impact. I'm particularly interested in the intersection of 
                  <span className="text-neon-purple"> web development and artificial intelligence</span>.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-semibold text-neon-blue">Email:</span>
                  <div className="text-muted-foreground">praveenkumar2056@gmail.com</div>
                </div>
                <div>
                  <span className="font-semibold text-neon-blue">Location:</span>
                  <div className="text-muted-foreground">Pollachi, India</div>
                </div>
                <div>
                  <span className="font-semibold text-neon-blue">Education:</span>
                  <div className="text-muted-foreground">B.Tech AI & Data Science</div>
                </div>
                <div>
                  <span className="font-semibold text-neon-blue">Languages:</span>
                  <div className="text-muted-foreground">Tamil, English</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">
              Skills & <span className="neon-text">Technologies</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  variants={itemVariants}
                  className="holographic-card p-6 rounded-xl group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-4">
                    <skill.icon className="w-6 h-6 text-neon-blue mr-3 group-hover:text-neon-purple transition-colors" />
                    <h4 className="font-bold text-lg">{skill.category}</h4>
                  </div>
                  
                  <div className="space-y-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        className="bg-secondary/30 px-3 py-1 rounded-full text-sm inline-block mr-2 mb-2 glow-border"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;