
import { useRef } from "react";
import { motion, useInView } from "motion/react";

function ScrollReveal({ children }) {
  const elementRef = useRef(null);

  const isInView = useInView(elementRef, {
    amount: 0.2,
  });

  return (
    <motion.div
      ref={elementRef}
      initial={{
        opacity: 0,
        y: 60,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
            }
          : {
              opacity: 0,
              y: 60,
            }
      }
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;

