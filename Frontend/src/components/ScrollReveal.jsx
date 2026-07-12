import { motion } from "framer-motion";

function ScrollReveal({ children }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;
