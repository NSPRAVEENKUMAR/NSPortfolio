import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-Powered Traffic Management System",
      description: "Developed an AI-driven traffic control model using computer vision and machine learning to improve traffic flow by 40% through real-time congestion analysis.",
      technologies: ["Python", "OpenCV", "TensorFlow", "YOLO", "Computer Vision"],
      duration: "April 2025",
      features: [
        "Real-time vehicle detection and counting",
        "Adaptive signal control based on traffic density",
        "Performance metrics and analytics dashboard"
      ],
      status: "In Development"
    },
    {
      title: "Fake Currency Detection System",
      description: "Engineered a CNN-based deep learning solution for detecting counterfeit currency with high accuracy, enabling accurate model training and classification.",
      technologies: ["Python", "TensorFlow", "CNN", "Image Processing", "Machine Learning"],
      duration: "May 2024",
      features: [
        "Convolutional Neural Network architecture",
        "High-resolution image analysis",
        "Real-time detection capabilities"
      ],
      status: "Completed"
    },
    {
      title: "Web Design Internship Project",
      description: "Designed and developed responsive websites using modern web technologies, focusing on user experience and accessibility best practices.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Responsive Design"],
      duration: "June 2024 - July 2024",
      features: [
        "Responsive design implementation",
        "Cross-browser compatibility",
        "Performance optimization"
      ],
      status: "Completed"
    }
  ];

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my latest work in web development, AI/ML, and innovative technology solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mt-6"></div>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Info */}
              <motion.div
                className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="holographic-card p-8 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Completed' 
                        ? 'bg-neon-green/20 text-neon-green border border-neon-green/30' 
                        : 'bg-neon-blue/20 text-neon-blue border border-neon-blue/30'
                    }`}>
                      {project.status}
                    </span>
                    
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.duration}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 neon-purple-text">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-neon-cyan mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1 h-1 bg-neon-blue rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-neon-cyan mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-secondary/30 rounded-full text-xs glow-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4 mt-6">
                    <Button variant="outline" className="glow-border hover:bg-primary/10">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                    <Button className="neon-button">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Project Visual */}
              <motion.div
                className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="holographic-card aspect-video rounded-xl p-8 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 opacity-50"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple p-1">
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                        <span className="text-2xl font-bold gradient-text">
                          {project.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
                        </span>
                      </div>
                    </div>
                    <h4 className="font-semibold text-lg mb-2">{project.title}</h4>
                    <p className="text-sm text-muted-foreground">Project Preview</p>
                  </div>
                  
                  {/* Floating particles */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-neon-blue rounded-full floating"></div>
                  <div className="absolute bottom-4 right-4 w-3 h-3 bg-neon-purple rounded-full floating-delayed"></div>
                  <div className="absolute top-1/2 right-8 w-1 h-1 bg-neon-cyan rounded-full floating"></div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;