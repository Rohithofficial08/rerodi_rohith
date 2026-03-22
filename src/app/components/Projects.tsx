import { motion } from "framer-motion";
import { ColorChangeCards } from "../../components/ui/color-change-card";

export function Projects() {
  const projects = [
    {
      heading: "BOND App",
      description: "Secure Closed Communication Platform focused on privacy.",
      imgSrc: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1080",
    },
    {
      heading: "Digital Agency",
      description: "A modern, highly interactive web presence for a creative digital agency.",
      imgSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1080",
    },
    {
      heading: "Nexscan",
      description: "A comprehensive vulnerability scanning toolkit for network analysis.",
      imgSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1080",
    },
    {
      heading: "SubscanX GUI",
      description: "An intuitive graphical interface for advanced subdomain enumeration.",
      imgSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1080",
    },
    {
      heading: "Edu Portal",
      description: "Centralized portal for student recruitment and document handling.",
      imgSrc: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1080",
    },
    {
      heading: "Transkt DEFI",
      description: "Decentralized finance project for secure blockchain transactions.",
      imgSrc: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1080",
    },
  ];

  return (
    <section id="projects" className="relative bg-[#030303] py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-16 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto"
        >
          Explore my recent work showcasing offensive security tools, decentralized finance, and modern web applications.
        </motion.p>
      </div>

      <ColorChangeCards cards={projects} />
    </section>
  );
}
