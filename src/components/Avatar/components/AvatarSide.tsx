import { AnimatePresence } from "framer-motion";
import React from "react";
import AvatarImage from "./AvatarImage";
import CallToAction from "./CallToAction";

interface AvatarSideProps {
  src: string;
  alt: string;
  showCallToAction?: boolean;
  isBack?: boolean;
}

const AvatarSide: React.FC<AvatarSideProps> = ({
  src,
  alt,
  showCallToAction = false,
  isBack = false,
}) => (
  <div
    className={`absolute w-full h-full ${
      isBack
        ? "flex items-center justify-center rounded-full ring-4 ring-[#101010] bg-[#222]"
        : ""
    }`}
    style={{
      backfaceVisibility: "hidden",
      WebkitBackfaceVisibility: "hidden",
      transform: isBack ? "rotateY(180deg)" : undefined,
      width: "100%",
      height: "100%",
    }}
  >
    <AvatarImage src={src} alt={alt} />
    {showCallToAction && (
      <AnimatePresence>
        <CallToAction />
      </AnimatePresence>
    )}
  </div>
);

export default AvatarSide;
