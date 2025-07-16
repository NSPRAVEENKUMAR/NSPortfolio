import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "praveenkumar2056@gmail.com",
      href: "mailto:praveenkumar2056@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9456586459",
      href: "tel:+919456586459"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pollachi, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/NSPRAVEENKUMAR",
      color: "text-neon-blue"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ns-praveenkumar-738760268",
      color: "text-neon-cyan"
    },
    {
      icon: MessageSquare,
      label: "Discord",
      href: "#",
      color: "text-neon-purple"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's collaborate on something amazing. I'm always open to discussing new opportunities.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="holographic-card border-none">
              <CardHeader>
                <CardTitle className="text-2xl neon-purple-text">
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-neon-cyan">
                        Name
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="glow-border bg-transparent"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-neon-cyan">
                        Email
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="glow-border bg-transparent"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-neon-cyan">
                      Subject
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="glow-border bg-transparent"
                      placeholder="Project discussion, collaboration, etc."
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-neon-cyan">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="glow-border bg-transparent min-h-32"
                      placeholder="Tell me about your project or how we can collaborate..."
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full neon-button">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="holographic-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 neon-text">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 rounded-lg glow-border hover:bg-primary/5 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-5 h-5 text-neon-blue" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-neon-cyan">
                        {info.label}
                      </div>
                      <div className="text-muted-foreground">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="holographic-card p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-6 neon-purple-text">
                Follow Me
              </h3>
              
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 rounded-lg glow-border hover:bg-primary/5 transition-all duration-300 group text-center"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className={`w-8 h-8 mb-2 ${social.color} group-hover:scale-110 transition-transform`} />
                    <span className="text-xs font-semibold">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              className="holographic-card p-6 rounded-xl"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-neon-green rounded-full pulse-glow"></div>
                <div>
                  <div className="font-semibold text-neon-green">
                    Available for Work
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Open to new opportunities and collaborations
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;