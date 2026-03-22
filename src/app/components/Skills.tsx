import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Terminal, Cpu, Layout, Award, Trophy } from "lucide-react";

export function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    {
      title: "Programming & Tech",
      icon: Terminal,
      skills: ["C#", "Python", "Java", "JavaScript", "HTML", "CSS", "MySQL", "Bash Scripting"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Frameworks & Tools",
      icon: Cpu,
      skills: ["Node.js", "Express.js", "Machine Learning", "Scikit-learn", "Streamlit"],
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: "Domains",
      icon: Layout,
      skills: ["Fullstack Development", "Ethical Hacking", "Kali Linux"],
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  const certifications = [
    "Digital Security Fundamentals",
    "Ethical Generative AI in Software Engineering",
    "Android Bug Bounty Hunting: Hunt Like a Rat",
    "Cybersecurity for Businesses – The Fundamental Edition"
  ];

  const achievements = [
    { text: "Winner – Smart India Hackathon 2025 (Ministry of Defence)", highlight: true },
    { text: "Winner – DSCI (MeitY)", highlight: true },
    { text: "Top 10 in ExploitX", highlight: false },
    { text: "Website Pentester & Bug Hunter", highlight: false },
  ];

  return (
    <section
      ref={ref}
      id="skills"
      className="relative min-h-screen py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Achievements
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My technical arsenal and milestones achieved along the journey
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 hover:border-white/30 hover:bg-white/[0.12] transition-colors duration-500 group overflow-hidden"
            >
              {/* Animated Glow Behind */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />

              {/* Category Header */}
              <div className="relative z-10 flex flex-col items-center text-center mb-8">
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <category.icon size={32} className="text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="relative z-10 flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 }}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
                    className="px-4 py-2 text-sm font-medium rounded-full bg-black/40 text-gray-200 border border-white/10 hover:border-white/40 cursor-pointer transition-colors shadow-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Decorative gradient */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.gradient} opacity-10 group-hover:opacity-30 rounded-bl-full blur-2xl pointer-events-none transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-md border border-yellow-500/20"
          >
            <div className="flex items-center gap-4 mb-8">
              <Trophy size={32} className="text-yellow-500" />
              <h3 className="text-3xl font-bold text-white">Achievements</h3>
            </div>
            <div className="space-y-4">
              {achievements.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0" />
                  <p className={`text-lg ${item.highlight ? 'text-yellow-400 font-semibold' : 'text-gray-300'}`}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-md border border-blue-500/20"
          >
            <div className="flex items-center gap-4 mb-8">
              <Award size={32} className="text-blue-500" />
              <h3 className="text-3xl font-bold text-white">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <Award size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-200">{cert}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
