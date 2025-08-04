import { motion } from "framer-motion";

export const MusicBars = () => (
  <span className="flex items-end gap-[2px] h-6">
    {[0, 1, 2].map((i) => {
      // 產生隨機動畫高度與延遲
      const heights = [
        "10px",
        `${16 + Math.random() * 8}px`,
        "8px",
        `${20 + Math.random() * 8}px`,
        "10px",
      ];
      const duration = 1 + Math.random();
      return (
        <motion.span
          key={i}
          className="inline-block w-[3px] bg-green-400 rounded-full"
          animate={{ height: heights }}
          transition={{
            duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: i * 0.2,
          }}
          style={{ display: "inline-block" }}
        />
      );
    })}
  </span>
);
