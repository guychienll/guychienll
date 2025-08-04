import { motion } from "framer-motion";
import React from "react";

const CallToAction: React.FC = () => (
  <motion.div
    className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none"
    initial={{ opacity: 0, y: 16, scale: 0.95 }}
    animate={{
      opacity: 1,
      y: 0,
      scale: [1, 1.08, 1],
    }}
    exit={{ opacity: 0, y: 16, scale: 0.95 }}
    transition={{
      opacity: { duration: 0.4 },
      y: { duration: 0.4 },
      scale: {
        duration: 1.2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    }}
  >
    <motion.div
      className="mt-1"
      initial={{ rotateY: 0 }}
      animate={{
        rotateY: [0, 180, 0],
      }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      {/* 更換為卡片符號 */}
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <motion.rect
          x="6"
          y="8"
          width="20"
          height="16"
          rx="3"
          stroke="#1db954"
          strokeWidth="2"
          fill="#181818"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        />
        <motion.rect
          x="10"
          y="12"
          width="12"
          height="4"
          rx="1"
          fill="#1db954"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        />
      </svg>
    </motion.div>
  </motion.div>
);

export default CallToAction;
