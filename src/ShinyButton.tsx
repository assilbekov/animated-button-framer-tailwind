import { motion } from "framer-motion";

export const ShinyButton = () => {
  return (
    <motion.button
      className="px-6 py-2 rounded-md relative radial-gradient"
      initial={{ "--x": "100%", scale: 1 }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
      }}
    >
      <span className="text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask">
        Start now
      </span>
    </motion.button>
  );
};
