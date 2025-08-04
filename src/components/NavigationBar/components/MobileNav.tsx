import HamburgerButton from "./HamburgerButton";
import MobileMenu from "./MobileMenu";
import { MobileNavProps } from "../types";

const MobileNav = ({ menuOpen, setMenuOpen, closeMenu }: MobileNavProps) => {
  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMenuOpen((open) => !open);
  };

  return (
    <div className="lg:hidden flex relative z-50">
      <HamburgerButton menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <MobileMenu menuOpen={menuOpen} closeMenu={closeMenu} />
    </div>
  );
};

export default MobileNav;
