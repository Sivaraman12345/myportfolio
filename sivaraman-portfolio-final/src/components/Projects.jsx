import { motion } from 'framer-motion'
import { ExternalLink, Github, Award, Rocket, Sun, Wrench, Smartphone, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Import project images
import marsRoverImg from '../assets/iVuwCcZ3g2Tx.jpg'
import solarTrackerImg from '../assets/n9q73SYtKbJA.jpg'
import vesselCleaningImg from '../assets/QrEn9WRbPY3a.jpg'

const Projects = () => {
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

  const projects = [
    {
      title: "Ad Astra Mars Rover",
      description: "R&D Engineer for Mars rover project achieving 15th place globally in IRC-25. Recognized by the President of India for innovative rocker-bogie suspension design and system integration.",
      image: marsRoverImg,
      technologies: ["CAD Design", "Robotics", "System Integration", "Team Leadership"],
      achievements: ["15th Place Globally", "Presidential Recognition", "IRC-25 Competition"],
      icon: Rocket,
      color: "from-red-500 to-orange-500",
      status: "Ongoing",
      year: "2024"
    },
    {
      title: "Streamlined Solution for Efficient Cleaning (SSEC)",
      description: "Engineered a semi-automated system for industrial kitchen vessels, reducing water and energy consumption. Published research paper at ICASER 2024 conference.",
      image: vesselCleaningImg,
      technologies: ["Mechanical Design", "Automation", "Research", "Technical Writing"],
      achievements: ["Published Paper", "ICASER 2024", "Water/Energy Efficiency"],
      icon: Wrench,
      color: "from-blue-500 to-cyan-500",
      status: "Published",
      year: "2024"
    },
    {
      title: "Solar Tracking System (Non-Electric)",
      description: "Designing a passive solar tracker that adjusts panel angles using heat and light variation without electronics, improving energy efficiency in off-grid areas.",
      image: solarTrackerImg,
      technologies: ["Renewable Energy", "Mechanical Design", "Sustainability", "Innovation"],
      achievements: ["Passive Design", "Off-Grid Solution", "Energy Efficiency"],
      icon: Sun,
      color: "from-yellow-500 to-orange-500",
      status: "In Development",
      year: "2024"
    },
    {
      title: "Process Control Valves Optimization",
      description: "Technical internship project improving inspection efficiency by 15% through defect pattern analysis and QC team collaboration. Supported ISO audit readiness.",
      image: vesselCleaningImg,
      technologies: ["Quality Control", "Data Analysis", "Process Improvement", "ISO Standards"],
      achievements: ["15% Efficiency Improvement", "ISO Audit Support", "QC Analysis"],
      icon: Trophy,
      color: "from-green-500 to-emerald-500",
      status: "Completed",
      year: "2024"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-background relative">
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
              Featured <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Innovative engineering solutions spanning robotics, automation, and sustainable technology
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mt-4"></div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden border border-border/50 hover:border-blue-400/50 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white shadow-lg`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Project Icon */}
                  <div className="absolute bottom-4 left-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} shadow-lg`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Year */}
                  <div className="absolute bottom-4 right-4">
                    <span className="text-white/90 text-sm font-medium">{project.year}</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-foreground/70 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-foreground/80">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-background/50 rounded text-xs border border-border/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-2 text-foreground/80">Key Achievements:</h4>
                    <div className="space-y-1">
                      {project.achievements.map((achievement, achIndex) => (
                        <div key={achievement} className="flex items-center text-sm text-foreground/70">
                          <Award className="w-3 h-3 mr-2 text-yellow-500" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-blue-400/50 hover:border-blue-400 hover:bg-blue-400/10"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Learn More
                    </Button>
                    {index === 0 && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-green-400/50 hover:border-green-400 hover:bg-green-400/10"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Projects Teaser */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-8 border border-blue-400/20">
              <h3 className="text-xl font-bold mb-4">More Projects Coming Soon</h3>
              <p className="text-foreground/70 mb-6">
                Currently working on innovative solutions in robotics, IoT, and sustainable engineering. 
                Stay tuned for updates on my latest projects and research initiatives.
              </p>
              <Button
                variant="outline"
                className="border-blue-400/50 hover:border-blue-400 hover:bg-blue-400/10"
                onClick={() => window.open('https://github.com/Sivaraman12345', '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                View All Projects
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

