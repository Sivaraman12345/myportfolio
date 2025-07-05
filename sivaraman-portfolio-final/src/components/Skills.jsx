import { motion } from 'framer-motion'
import { 
  Code, 
  Database, 
  Cloud, 
  Wrench, 
  BarChart3, 
  Palette, 
  Users, 
  MessageSquare,
  Target,
  Clock,
  Lightbulb,
  Shield
} from 'lucide-react'

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const technicalSkills = [
    {
      category: "Programming",
      icon: Code,
      skills: ["Python", "SQL", "C", "C++", "HTML", "CSS", "JavaScript"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Cloud & Data",
      icon: Cloud,
      skills: ["Google Cloud Platform", "MongoDB", "Vertex AI", "Power BI", "Tableau"],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Engineering Tools",
      icon: Wrench,
      skills: ["SolidWorks", "Fusion 360", "NX", "CAD", "FEA"],
      color: "from-orange-500 to-red-500"
    },
    {
      category: "Development",
      icon: Database,
      skills: ["VS Code", "Jupyter Notebook", "Git", "Microsoft Office"],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Design",
      icon: Palette,
      skills: ["Figma", "Canva", "Notion"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      category: "Analytics",
      icon: BarChart3,
      skills: ["Data Analysis", "Research", "Technical Writing"],
      color: "from-teal-500 to-cyan-500"
    }
  ]

  const softSkills = [
    { name: "Team Collaboration", icon: Users },
    { name: "Communication", icon: MessageSquare },
    { name: "Problem Solving", icon: Lightbulb },
    { name: "Leadership", icon: Shield },
    { name: "Time Management", icon: Clock },
    { name: "Adaptability", icon: Target }
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30 relative">
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
              My <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              A comprehensive toolkit spanning mechanical engineering, software development, and data analytics
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mt-4"></div>
          </motion.div>

          {/* Technical Skills */}
          <div className="mb-16">
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold mb-8 text-center"
            >
              Technical Skills
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSkills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-blue-400/50 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${skillGroup.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <skillGroup.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold">{skillGroup.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        className="px-3 py-1 bg-background/50 rounded-full text-sm border border-border/30 hover:border-blue-400/50 transition-colors duration-200"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold mb-8 text-center"
            >
              Soft Skills
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-card/30 backdrop-blur-sm rounded-lg p-4 text-center border border-border/30 hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="mb-3 flex justify-center">
                    <div className="p-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:scale-110 transition-transform duration-300">
                      <skill.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h5 className="text-sm font-medium text-center leading-tight">{skill.name}</h5>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Highlight */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-8 border border-blue-400/20"
          >
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Current Learning & Certifications</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Google Data Analytics Certificate",
                  "Google Cloud Certifications",
                  "MongoDB Certification",
                  "Design Thinking - NPTEL",
                  "Foundational Data, ML, and AI Tasks"
                ].map((cert, index) => (
                  <motion.span
                    key={cert}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 bg-card/50 rounded-full text-sm border border-blue-400/30 hover:border-blue-400/60 transition-colors duration-200"
                  >
                    {cert}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

