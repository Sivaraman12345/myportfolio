import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  Github, 
  MessageSquare,
  Download,
  ExternalLink
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject || 'Portfolio Contact')
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )
      window.open(`mailto:sivaraman.m12345@gmail.com?subject=${subject}&body=${body}`)
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sivaraman.m12345@gmail.com",
      action: () => window.open('mailto:sivaraman.m12345@gmail.com'),
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 89252 02427",
      action: () => window.open('tel:+918925202427'),
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, India",
      action: () => window.open('https://maps.google.com/?q=Chennai,India'),
      color: "from-purple-500 to-pink-500"
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/siivaraman",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/Sivaraman12345",
      color: "from-gray-700 to-gray-800"
    },
    {
      icon: MessageSquare,
      label: "WhatsApp",
      url: "https://wa.me/918925202427",
      color: "from-green-500 to-green-600"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Get In <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Ready to collaborate on innovative projects or discuss opportunities? Let's connect!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mt-4"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's Start a Conversation</h3>
                <p className="text-foreground/70 mb-8 leading-relaxed">
                  I'm always excited to discuss new opportunities, innovative projects, or potential collaborations. 
                  Whether you're looking for a passionate engineer, have a project idea, or just want to connect, 
                  I'd love to hear from you!
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    onClick={info.action}
                    className="flex items-center p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-blue-400/50 transition-all duration-300 cursor-pointer group"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.label}</h4>
                      <p className="text-foreground/70 text-sm">{info.value}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 ml-auto text-foreground/40 group-hover:text-blue-400 transition-colors" />
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Connect on Social Media</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.button
                      key={social.label}
                      variants={itemVariants}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(social.url, '_blank')}
                      className={`p-3 rounded-lg bg-gradient-to-r ${social.color} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Resume Download */}
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-6 border border-blue-400/20"
              >
                <h4 className="text-lg font-semibold mb-3">Download My Resume</h4>
                <p className="text-foreground/70 text-sm mb-4">
                  Get a comprehensive overview of my skills, experience, and achievements.
                </p>
                <Button
                  onClick={() => window.open('/SivaramanResume2025_IT.pdf', '_blank')}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border/50">
                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        className="border-border/50 focus:border-blue-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                        className="border-border/50 focus:border-blue-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Collaboration"
                      className="border-border/50 focus:border-blue-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={5}
                      required
                      className="border-border/50 focus:border-blue-400 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-3"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="mt-20 text-center border-t border-border/30 pt-8"
          >
            <p className="text-foreground/60 text-sm">
              © 2025 Sivaraman M. Built with React, Tailwind CSS, and Framer Motion.
            </p>
            <p className="text-foreground/40 text-xs mt-2">
              Designed and developed with passion for innovation and excellence.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

