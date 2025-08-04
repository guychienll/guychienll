import { motion } from "framer-motion";

interface AlbumImageProps {
  src: string;
  alt: string;
}

export const AlbumImage = ({ src, alt }: AlbumImageProps) => (
  <motion.img
    src={src}
    alt={alt}
    width={64}
    height={64}
    className="rounded-md shadow-md object-cover flex-shrink-0"
    whileHover={{ scale: 1.12, opacity: 0.85 }}
  />
);
