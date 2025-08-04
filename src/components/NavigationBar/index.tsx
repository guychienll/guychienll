import { useCallback, useEffect, useState } from "react";
import { DesktopNav, Logo, MobileNav } from "./components";

function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleWindowClick = () => closeMenu();
    window.addEventListener("click", handleWindowClick);
    return () => window.removeEventListener("click", handleWindowClick);
  }, [menuOpen, closeMenu]);

  return (
    <section className="p-2 customize-navbar col-span-12 flex items-center justify-between row-span-1">
      <Logo />
      <DesktopNav />
      <MobileNav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        closeMenu={closeMenu}
      />
    </section>
  );
}

export default NavigationBar;
