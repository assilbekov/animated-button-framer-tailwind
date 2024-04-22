import { motion } from "framer-motion";

export const ShinyButton = () => {
  return (
    <motion.button
      className="px-6 py-2 rounded-md relative radial-gradient"
      initial={{ "--x": "100%" }}
      animate={{ "--x": "-100%" }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      <span className="text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask">
        Start now
      </span>
    </motion.button>
  );
};
