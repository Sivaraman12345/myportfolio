import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Award, Target } from 'lucide-react'
import profileImage from '../assets/sivaraman_profile.png'

const About = () => {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const stats = [
    { label: 'CGPA', value: '9.14', icon: Award },
    { label: 'Department', value: 'Topper', icon: GraduationCap },
    { label: 'Projects', value: '10+', icon: Target },
    { label: 'Location', value: 'Chennai', icon: MapPin }
  ]

  return (
    <section id="about" className="py-20 bg-background relative">
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
              About <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              variants={imageVariants}
              className="relative"
            >
              <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-cyan-400 shadow-2xl">
                  <img
                    src={profileImage}
                    alt="Sivaraman M"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center shadow-lg"
                >
                  <GraduationCap className="w-8 h-8 text-white" />
                </motion.div>
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Award className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
                  Passionate Engineer & Innovator
                </h3>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    I'm a dedicated Mechanical Engineering student at Sri Sairam Engineering College, 
                    Chennai, with a strong passion for robotics, CAD design, and space exploration. 
                    Currently maintaining a CGPA of 9.14 and serving as Department Topper and Class Representative.
                  </p>
                  <p>
                    My journey spans from traditional mechanical engineering to cutting-edge IT technologies. 
                    I'm actively seeking IT internship opportunities to leverage my skills in Python, SQL, 
                    and cloud technologies, particularly Google Cloud Platform where I hold multiple certifications.
                  </p>
                  <p>
                    As an R&D Engineer at Ad Astra, I contributed to our Mars rover project that achieved 
                    15th place globally in IRC-25, earning recognition from the President of India. 
                    This experience has fueled my passion for space exploration and innovative engineering solutions.
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
                <h4 className="text-xl font-semibold mb-3 flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2 text-blue-400" />
                  Education
                </h4>
                <div className="space-y-2">
                  <div>
                    <p className="font-medium">B.E. Mechanical Engineering</p>
                    <p className="text-sm text-foreground/70">Sri Sairam Engineering College, Chennai</p>
                    <p className="text-sm text-foreground/70">Oct 2022 - May 2026 | CGPA: 9.14</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="bg-card/30 backdrop-blur-sm rounded-lg p-4 text-center border border-border/30 hover:border-blue-400/50 transition-all duration-300"
                  >
                    <stat.icon className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                    <div className="text-lg font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-foreground/70">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

