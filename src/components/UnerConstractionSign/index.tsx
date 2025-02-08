import { motion } from "framer-motion";

function UnderConstructionSign() {
  return (
    <motion.div className="flex flex-col items-center gap-y-2 animate-pulse">
      <motion.i
        title="working in progress"
        className="fa-solid fa-paint-roller text-4xl cursor-pointer"
        whileHover={{
          opacity: 0.6,
          scale: 1.2,
          rotate: 45,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: "easeOut",
          },
        }}
        whileTap={{
          scale: 0.9,
        }}
      />
      <motion.div className="text-gray-400 text-md font-bold mb-2 text-left font-sriracha tracking-widest">
        work in progress
      </motion.div>
    </motion.div>
  );
}

export default UnderConstructionSign;
