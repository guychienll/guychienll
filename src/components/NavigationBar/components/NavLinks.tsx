import { motion } from "framer-motion";
import { SITE_ROUTES } from "../../../constants";
import { NavLinksProps } from "../types";

const NavLinks = ({
  onClick,
  className = "",
  itemClassName = "",
  asMotion = false,
}: NavLinksProps) => (
  <div className={className}>
    {SITE_ROUTES.map((route) =>
      asMotion ? (
        <motion.a
          key={route.id}
          href={route.href}
          className={`text-lg font-bold font-sriracha tracking-widest capitalize py-2 px-3 rounded hover:bg-[#1db95422] transition ${itemClassName}`}
          whileTap={{ scale: 0.97 }}
          onClick={onClick}
        >
          {route.display}
        </motion.a>
      ) : (
        <a
          key={route.id}
          href={route.href}
          className={`text-xl font-bold font-sriracha tracking-widest capitalize ${itemClassName}`}
          onClick={onClick}
        >
          {route.display}
        </a>
      )
    )}
  </div>
);

export default NavLinks;
