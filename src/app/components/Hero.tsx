import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { HeroGeometric } from "../../components/ui/shape-landing-hero";

export function Hero() {
  return (
    <section id="home">
      <HeroGeometric 
        badge="Penetration Tester & Developer"
        title1="Rohith T"
        title2="Securing Digital Experiences"
      >
        <div className="flex flex-col items-center justify-center mt-4">
          <div className="flex items-center justify-center gap-4 mb-12">
            {[
              { icon: Github, href: "https://github.com/Rohithofficial08" },
              { icon: Linkedin, href: "https://linkedin.com/in/RohithOfficial" },
              { icon: Mail, href: "mailto:rohithofficial08@gmail.com" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/20"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group z-20 relative cursor-pointer"
          >
            <span>Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={20} className="group-hover:text-purple-400 transition-colors" />
            </motion.div>
          </motion.a>
        </div>
      </HeroGeometric>
    </section>
  );
}
