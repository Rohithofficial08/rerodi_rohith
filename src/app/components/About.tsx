import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Shield, Code, Zap } from "lucide-react";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Shield,
      title: "Penetration Testing",
      description: "Identifying and exploiting vulnerabilities to secure networks and web applications.",
    },
    {
      icon: Code,
      title: "Fullstack Development",
      description: "Creating secure, intuitive digital interfaces blending aesthetics with robust functionality.",
    },
    {
      icon: Zap,
      title: "Bug Bounty Hunting",
      description: "Discovering critical vulnerabilities and safeguarding infrastructure from real-world threats.",
    },
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="relative min-h-screen flex items-center py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden bg-white/5 flex items-center justify-center">
              <motion.img
                src="/profile.png"
                alt="Rohith T - Profile picture"
                className="w-full h-full object-cover scale-[1.02]"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            </div>
            
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-purple-600 to-blue-600 p-6 rounded-xl shadow-2xl backdrop-blur-sm border border-white/20"
            >
              <div className="text-3xl font-bold text-white mb-1">SIH '25</div>
              <div className="text-sm text-gray-200">Winner (Ministry of Defence)</div>
            </motion.div>
          </motion.div>

          {/* Right side - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
              
              <p className="text-gray-400 text-lg mb-6">
                I am a driven Penetration Tester and Fullstack Developer, passionate about identifying 
                vulnerabilities in web applications and building secure digital experiences. My work spans 
                from manual security assessments and bug bounty hunting to crafting polished, secure fullstack applications.
              </p>
              
              <p className="text-gray-400 text-lg mb-8">
                With internships at Rizzspace and numerous security challenges under my belt, I bridge the gap 
                between offensive security and robust software engineering. Whether I'm exploiting network vulnerabilities 
                or designing beautiful UI interfaces, my goal is always to deliver secure and compelling digital solutions.
              </p>

              {/* Features */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <feature.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
