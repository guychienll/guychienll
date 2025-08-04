import React from "react";

interface AvatarImageProps {
  src: string;
  alt: string;
}

const AVATAR_SIZE = 200;

const AvatarImage: React.FC<AvatarImageProps> = ({ src, alt }) => (
  <img
    width={AVATAR_SIZE}
    height={AVATAR_SIZE}
    src={src}
    alt={alt}
    fetchPriority="high"
    className="object-cover rounded-full ring-4 h-[200px] ring-[#101010] w-full h-full"
    loading="eager"
    style={{
      width: "100%",
      height: "100%",
    }}
  />
);

export default AvatarImage;
