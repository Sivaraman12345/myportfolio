import { motion } from 'framer-motion'
import { 
  Trophy, 
  Award, 
  Star, 
  Rocket, 
  Users, 
  BookOpen, 
  Target,
  Calendar,
  MapPin
} from 'lucide-react'

const Achievements = () => {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const achievements = [
    {
      year: "2025",
      title: "NEP SAARTHI Student Ambassador",
      organization: "Ministry of Education, Government of India",
      description: "Selected to represent student perspectives in implementing the National Education Policy reforms.",
      icon: Users,
      color: "from-purple-500 to-indigo-500",
      type: "Leadership"
    },
    {
      year: "2024",
      title: "NASA Space Apps Challenge - 15th Place Globally",
      organization: "NASA & Ad Astra",
      description: "Achieved global recognition for Mars rover project, earning acknowledgment from the President of India.",
      icon: Rocket,
      color: "from-red-500 to-orange-500",
      type: "Competition"
    },
    {
      year: "2024",
      title: "India Design Week Finalist",
      organization: "India Design Week",
      description: "Recognized nationally for innovative CAD-based mechanical design and rapid prototyping.",
      icon: Target,
      color: "from-blue-500 to-cyan-500",
      type: "Design"
    },
    {
      year: "2024",
      title: "Winner - Solveathon 3.0 (1st Prize)",
      organization: "Innovation Challenge",
      description: "Awarded first prize for proposing innovative solutions addressing UN Sustainable Development Goals.",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500",
      type: "Innovation"
    },
    {
      year: "2024",
      title: "Third Prize - Ideathon 3.0",
      organization: "Innovation Challenge",
      description: "Recognized for presenting impactful and sustainable project ideas aligned with SDGs.",
      icon: Star,
      color: "from-green-500 to-emerald-500",
      type: "Innovation"
    },
    {
      year: "2023-2024",
      title: "Stars of Maatram Award",
      organization: "Maatram Foundation",
      description: "Recognized for academic excellence and impactful volunteer work with the foundation.",
      icon: Award,
      color: "from-pink-500 to-rose-500",
      type: "Excellence"
    },
    {
      year: "2024",
      title: "Published Research Paper",
      organization: "ICASER 2024",
      description: "Presented research on 'Streamlined Solution for Efficient Cleaning' at international conference.",
      icon: BookOpen,
      color: "from-indigo-500 to-purple-500",
      type: "Research"
    },
    {
      year: "2022-2026",
      title: "Department Topper & Class Representative",
      organization: "Sri Sairam Engineering College",
      description: "Maintaining CGPA of 9.14 while serving as class representative and department topper.",
      icon: Trophy,
      color: "from-cyan-500 to-blue-500",
      type: "Academic"
    }
  ]

  const certifications = [
    { name: "Build and Secure Networks in Google Cloud", url: "https://www.cloudskillsboost.google/public_profiles/e857ea47-487d-457d-b22a-e3980b587c80/badges/5419586" },
    { name: "Create and Manage Cloud Resources", url: "https://www.cloudskillsboost.google/public_profiles/e857ea47-487d-457d-b22a-e3980b587c80/badges/5418608" },
    { name: "Cloud Computing Fundamentals", url: "https://www.cloudskillsboost.google/public_profiles/e857ea47-487d-457d-b22a-e3980b587c80/badges/5289560" },
    { name: "Data, ML, and AI in Google Cloud", url: "https://www.cloudskillsboost.google/public_profiles/e857ea47-487d-457d-b22a-e3980b587c80/badges/5418287" },
    { name: "Infrastructure in Google Cloud", url: "https://www.cloudskillsboost.google/public_profiles/e857ea47-487d-457d-b22a-e3980b587c80/badges/5397299" },
    { name: "Networking in Google Cloud", url: "https://www.cloudskillsboost.google/public_profiles/e857ea47-487d-457d-b22a-e3980b587c80/badges/5407811" },
    { name: "Introduction to Generative AI", url: "https://www.cloudskillsboost.google/public_profiles/e857ea47-487d-457d-b22a-e3980b587c80/badges/5189858" },
    { name: "Introduction to Large Language Models", url: "https://www.cloudskillsboost.google/public_profiles/e857ea47-487d-457d-b22a-e3980b587c80/badges/5408022" },
    { name: "Introduction to Responsible AI", url: "https://www.cloudskillsboost.google/public_profiles/e857ea47-487d-457d-b22a-e3980b587c80/badges/5408273" },
    { name: "Perform Foundational Data, ML, and AI Tasks", url: "https://www.cloudskillsboost.google/public_profiles/e857ea47-487d-457d-b22a-e3980b587c80/badges/5419666" },
    { name: "Perform Foundational Infrastructure Tasks", url: "https://www.cloudskillsboost.google/public_profiles/e857ea47-487d-457d-b22a-e3980b587c80/badges/5419160" },
    { name: "Responsible AI: Applying AI Principles", url: "https://www.cloudskillsboost.google/public_profiles/e857ea47-487d-457d-b22a-e3980b587c80/badges/5419704" },
    { name: "Level 3: GenAI", url: "https://www.cloudskillsboost.google/public_profiles/e857ea47-487d-457d-b22a-e3980b587c80/badges/5190485" },
    { name: "Getting Started with MongoDB Atlas", url: "https://learn.mongodb.com/c/YUjYC0qpRlaiejitt4U48Q" },
    { name: "MongoDB Basics – ICT Academy Learnathon", url: "https://learn.mongodb.com/c/TyabxnQsTi28ouVawyCjBg" },
    { name: "MongoDB and the Document Model", url: "https://learn.mongodb.com/c/xtpc-5X_TC6Uit_lLT6TLg" },
    { name: "Delegate – Global Virtual Summit 2023", url: "https://app.gelp.ca/badge?id=ZTIHAOIWOYWZUMDG" }
  ]

  return (
    <section id="achievements" className="py-20 bg-muted/30 relative">
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
              Achievements & <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Recognition</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              A journey of innovation, leadership, and academic excellence
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mt-4"></div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400 to-cyan-400"></div>

            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center shadow-lg z-10">
                    <achievement.icon className="w-4 h-4 text-white" />
                  </div>

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-blue-400/50 transition-all duration-300 shadow-lg"
                    >
                      {/* Year Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${achievement.color} text-white`}>
                          {achievement.year}
                        </span>
                        <span className="text-xs text-foreground/60 bg-background/50 px-2 py-1 rounded">
                          {achievement.type}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold mb-2 text-foreground">
                        {achievement.title}
                      </h3>

                      {/* Organization */}
                      <div className="flex items-center mb-3 text-sm text-foreground/70">
                        <MapPin className="w-4 h-4 mr-1" />
                        {achievement.organization}
                      </div>

                      {/* Description */}
                      <p className="text-foreground/80 text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <motion.div
            variants={itemVariants}
            className="mt-20"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">
              Certifications & <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Courses</span>
            </h3>
            
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-8 border border-blue-400/20">
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center p-3 bg-card/30 rounded-lg border border-border/30 hover:border-blue-400/50 transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-3"></div>
                    <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/80 hover:text-blue-400 transition-colors duration-200">
                      {cert.name}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: "Awards Won", value: "8+", icon: Trophy },
              { label: "Certifications", value: "8+", icon: Award },
              { label: "Global Ranking", value: "15th", icon: Star },
              { label: "CGPA", value: "9.14", icon: Target }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="bg-card/30 backdrop-blur-sm rounded-lg p-6 text-center border border-border/30 hover:border-blue-400/50 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-foreground/70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements

