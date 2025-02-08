import clsx from "clsx";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BlockProps {
  id: string;
  title?: string;
  align?: "left" | "right" | "center";
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}

function Block(props: BlockProps) {
  const {
    id,
    title = null,
    align = "left",
    children,
    className,
    contentClassName,
  } = props;
  return (
    <motion.div
      id={id}
      className={clsx(
        "w-full flex flex-col",
        align === "left" && "text-left items-start",
        align === "right" && "text-right items-end",
        align === "center" && "text-center items-center",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {title && (
        <motion.div
          className="text-gray-400 text-lg font-bold mb-2 text-left font-sriracha tracking-widest"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.div>
      )}
      <motion.div
        className={clsx(
          contentClassName ? contentClassName : "text-sm text-gray-200 indent-4"
        )}
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default Block;
