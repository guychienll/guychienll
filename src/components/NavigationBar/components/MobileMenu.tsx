import { AnimatePresence, motion } from "framer-motion";
import NavLinks from "./NavLinks";
import { MobileMenuProps } from "../types";

const MobileMenu = ({ menuOpen, closeMenu }: MobileMenuProps) => (
  <AnimatePresence>
    {menuOpen && (
      <motion.div
        className="fixed inset-0 z-50 flex items-start justify-end"
        initial={{
          opacity: 0,
          pointerEvents: "none",
        }}
        animate={{ opacity: 1, pointerEvents: "auto" }}
        exit={{ opacity: 0, pointerEvents: "none" }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div
          className="absolute inset-0 bg-black/30 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={closeMenu}
        />
        <motion.div
          className="relative mt-12 mr-4 bg-[#191414cc] rounded-lg shadow-lg min-w-[180px] py-4 px-6 flex flex-col gap-4"
          initial={{
            opacity: 0,
            y: -10,
            scale: 0.95,
          }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
        >
          <NavLinks
            className="flex flex-col gap-y-2"
            onClick={closeMenu}
            asMotion
          />
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default MobileMenu;
