import { motion } from "motion/react";
import "./ShinyText.css";

function ShinyText({ text }) {
  return (
    <motion.span
      className="shiny-text"
      animate={{
        backgroundPosition: ["200% center", "-200% center"],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {text}
    </motion.span>
  );
}

export default ShinyText;