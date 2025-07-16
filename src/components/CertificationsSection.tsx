import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CertificationsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [comparisonValue, setComparisonValue] = useState(50);

  const certifications = [
    {
      title: "Honors Diploma in Computer Applications (HDCA)",
      issuer: "Regional Academic Center",
      date: "February 2023",
      description: "Comprehensive computer applications course covering system navigation, data management, and practical computer skills.",
      skills: ["Computer Applications", "Data Management", "System Operations"],
      type: "Diploma",
      level: "Advanced"
    },
    {
      title: "Lean Six Sigma Green Belt Certification",
      issuer: "TMA356",
      date: "February 2024",
      description: "Process improvement methodology focusing on eliminating waste and improving business processes efficiently.",
      skills: ["Process Improvement", "DMAIC", "Statistical Analysis", "Project Management"],
      type: "Professional",
      level: "Green Belt"
    },
    {
      title: "Oracle Certified Foundations Associate",
      issuer: "Oracle",
      date: "March 2025",
      description: "Essential knowledge of Human Capital Management concepts within the Oracle Cloud environment.",
      skills: ["Oracle Cloud", "HCM", "HR Processes", "Cloud Navigation", "Workforce Management"],
      type: "Technical",
      level: "Associate"
    }
  ];

  const nextCertification = () => {
    setCurrentIndex((prev) => (prev + 1) % certifications.length);
  };

  const prevCertification = () => {
    setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  const currentCert = certifications[currentIndex];
  const nextCert = certifications[(currentIndex + 1) % certifications.length];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span> & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications and continuous learning journey
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mt-6"></div>
        </motion.div>

        {/* Certificate Comparison Slider */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Certificate <span className="neon-text">Comparison</span>
          </h3>
          
          <div className="relative holographic-card rounded-xl p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 relative">
              {/* Current Certificate */}
              <div 
                className="space-y-4"
                style={{ opacity: comparisonValue / 100 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="w-6 h-6 text-neon-blue" />
                  <span className="text-sm font-semibold text-neon-blue">{currentCert.type}</span>
                </div>
                
                <h4 className="text-xl font-bold neon-purple-text">
                  {currentCert.title}
                </h4>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {currentCert.date}
                  </div>
                  <div className="text-sm font-semibold">
                    Issued by: <span className="text-neon-cyan">{currentCert.issuer}</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  {currentCert.description}
                </p>
                
                <div className="space-y-2">
                  <h5 className="font-semibold text-sm">Skills Covered:</h5>
                  <div className="flex flex-wrap gap-1">
                    {currentCert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-neon-blue/20 text-neon-blue rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Next Certificate */}
              <div 
                className="space-y-4"
                style={{ opacity: (100 - comparisonValue) / 100 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="w-6 h-6 text-neon-purple" />
                  <span className="text-sm font-semibold text-neon-purple">{nextCert.type}</span>
                </div>
                
                <h4 className="text-xl font-bold neon-text">
                  {nextCert.title}
                </h4>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {nextCert.date}
                  </div>
                  <div className="text-sm font-semibold">
                    Issued by: <span className="text-neon-cyan">{nextCert.issuer}</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  {nextCert.description}
                </p>
                
                <div className="space-y-2">
                  <h5 className="font-semibold text-sm">Skills Covered:</h5>
                  <div className="flex flex-wrap gap-1">
                    {nextCert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Slider */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-neon-blue">
                  {currentCert.title.split(' ').slice(0, 3).join(' ')}...
                </span>
                <span className="text-sm font-semibold text-neon-purple">
                  {nextCert.title.split(' ').slice(0, 3).join(' ')}...
                </span>
              </div>
              
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={comparisonValue}
                  onChange={(e) => setComparisonValue(Number(e.target.value))}
                  className="w-full h-2 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, hsl(var(--neon-blue)) 0%, hsl(var(--neon-blue)) ${comparisonValue}%, hsl(var(--neon-purple)) ${comparisonValue}%, hsl(var(--neon-purple)) 100%)`
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* All Certifications Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="holographic-card border-none h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      cert.type === 'Technical' ? 'bg-neon-blue/20 text-neon-blue' :
                      cert.type === 'Professional' ? 'bg-neon-purple/20 text-neon-purple' :
                      'bg-neon-cyan/20 text-neon-cyan'
                    }`}>
                      {cert.type}
                    </span>
                    <Award className="w-5 h-5 text-neon-blue" />
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {cert.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {cert.date}
                    </div>
                    <div className="text-sm font-semibold">
                      <span className="text-neon-cyan">{cert.issuer}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {cert.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h5 className="font-semibold text-sm">Skills:</h5>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-secondary/30 rounded-full text-xs glow-border"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="px-2 py-1 text-xs text-muted-foreground">
                          +{cert.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full glow-border hover:bg-primary/10">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certificate
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Controls */}
        <motion.div
          className="flex justify-center items-center space-x-4 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outline"
            size="sm"
            onClick={prevCertification}
            className="glow-border"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <div className="flex space-x-2">
            {certifications.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-neon-blue w-6' 
                    : 'bg-muted'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={nextCertification}
            className="glow-border"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;