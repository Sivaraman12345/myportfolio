import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Hero = () => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = [
    'Mechanical R&D Engineer',
    'NASA Space Apps Finalist',
    'Award-Winning Innovator',
    'CAD/FEA Enthusiast',
    'Open to Collaborations'
  ]

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex]
      
      if (!isDeleting) {
        setCurrentText(current.substring(0, currentText.length + 1))
        
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setCurrentText(current.substring(0, currentText.length - 1))
        
        if (currentText === '') {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, texts])

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="block text-foreground">Hey, I'm</span>
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Sivaraman
            </span>
            <span className="block text-foreground/90 text-3xl sm:text-4xl lg:text-5xl mt-2">
              Engineer. Innovator. Space Dreamer.
            </span>
          </motion.h1>

          {/* Animated Description */}
          <motion.div
            variants={itemVariants}
            className="h-16 flex items-center justify-center"
          >
            <div className="text-xl sm:text-2xl lg:text-3xl text-foreground/80 font-medium">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {currentText}
              </span>
              <span className="animate-pulse text-cyan-400">|</span>
            </div>
          </motion.div>

          {/* Brief Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed"
          >
            Mechanical Engineering student passionate about robotics, CAD design, and space exploration. 
            Currently seeking IT internship opportunities to leverage my skills in Python, SQL, and cloud technologies.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              onClick={() => window.open('/SivaramanResume2025_IT.pdf', '_blank')}
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download CV
            </Button>

            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-2 border-cyan-400/50 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
                onClick={() => window.open('mailto:sivaraman.m12345@gmail.com', '_blank')}
              >
                <Mail className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-2 border-cyan-400/50 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
                onClick={() => window.open('https://linkedin.com/in/siivaraman', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-2 border-cyan-400/50 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
                onClick={() => window.open('https://github.com/Sivaraman12345', '_blank')}
              >
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNext}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-foreground/60 hover:text-foreground/80 transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

