export interface NavLinksProps {
  onClick?: () => void;
  className?: string;
  itemClassName?: string;
  asMotion?: boolean;
}

export interface HamburgerButtonProps {
  menuOpen: boolean;
  toggleMenu: (e: React.MouseEvent) => void;
}

export interface MobileMenuProps {
  menuOpen: boolean;
  closeMenu: () => void;
}

export interface MobileNavProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  closeMenu: () => void;
}
