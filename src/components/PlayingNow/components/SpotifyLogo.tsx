import { motion } from "framer-motion";

interface SpotifyLogoProps {
  className?: string;
  [key: string]: any;
}

export const SpotifyLogo = ({ className = "", ...props }: SpotifyLogoProps) => (
  <motion.img
    src="/spotify.png"
    alt="Spotify"
    className={`absolute right-4 bottom-4 w-6 h-6 opacity-60 ${className}`}
    animate={{
      scale: [1, 1.15, 1],
      rotate: [0, 10, -10, 0],
    }}
    transition={{
      scale: {
        duration: 2,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
      rotate: {
        duration: 3,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    }}
    {...props}
  />
);
