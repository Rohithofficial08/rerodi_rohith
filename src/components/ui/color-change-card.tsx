import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

export interface CardProps {
  heading: string;
  description: string;
  imgSrc: string;
}

export const ColorChangeCards = ({ cards }: { cards: CardProps[] }) => {
  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
      {cards.map((card, i) => (
        <Card key={i} {...card} />
      ))}
    </div>
  );
};

const Card = ({ heading, description, imgSrc }: CardProps) => {
  return (
    <motion.div
      transition={{ staggerChildren: 0.035 }}
      whileHover="hover"
      className="group relative h-96 w-full cursor-pointer overflow-hidden bg-slate-800 rounded-3xl"
    >
      <div
        className="absolute inset-0 saturate-100 transition-all duration-500 group-hover:scale-110 md:saturate-0 md:group-hover:saturate-100"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
      <div className="relative z-20 flex h-full flex-col justify-between p-8 text-slate-300 transition-colors duration-500 group-hover:text-white">
        <ArrowRight className="ml-auto w-8 h-8 transition-transform duration-500 group-hover:-rotate-45" />
        <div>
          <h4 className="flex mb-2">
            {heading.split("").map((letter, index) => (
              <AnimatedLetter letter={letter} key={index} />
            ))}
          </h4>
          <p className="text-gray-300 text-lg">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

interface AnimatedLetterProps {
  letter: string;
}

const letterVariants: Variants = {
  hover: {
    y: "-50%",
  },
};

const AnimatedLetter = ({ letter }: AnimatedLetterProps) => {
  return (
    <div className="inline-block h-[36px] overflow-hidden font-bold text-3xl">
      <motion.span
        className="flex min-w-[4px] flex-col"
        style={{ y: "0%" }}
        variants={letterVariants}
        transition={{ duration: 0.5 }}
      >
        <span>{letter === " " ? "\u00A0" : letter}</span>
        <span>{letter === " " ? "\u00A0" : letter}</span>
      </motion.span>
    </div>
  );
};
