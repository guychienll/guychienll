import { motion } from "framer-motion";
import { HamburgerButtonProps } from "../types";

const HamburgerButton = ({ menuOpen, toggleMenu }: HamburgerButtonProps) => (
  <button
    aria-label="開啟選單"
    className="flex flex-col justify-center items-center w-10 h-10 cursor-pointer group"
    onClick={toggleMenu}
  >
    <motion.span
      className="block w-7 h-1 bg-gray-200 rounded my-0.5"
      animate={{
        rotate: menuOpen ? 45 : 0,
        y: menuOpen ? 8 : 0,
      }}
      transition={{ duration: 0.3 }}
    />
    <motion.span
      className="block w-7 h-1 bg-gray-200 rounded my-0.5"
      animate={{
        opacity: menuOpen ? 0 : 1,
      }}
      transition={{ duration: 0.3 }}
    />
    <motion.span
      className="block w-7 h-1 bg-gray-200 rounded my-0.5"
      animate={{
        rotate: menuOpen ? -45 : 0,
        y: menuOpen ? -8 : 0,
      }}
      transition={{ duration: 0.3 }}
    />
  </button>
);

export default HamburgerButton;
