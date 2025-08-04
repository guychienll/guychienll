import React from "react";

export interface AvatarProps {
  isFlipped: boolean;
  onFlip: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface AvatarImageProps {
  src: string;
  alt: string;
}

export interface AvatarSideProps {
  src: string;
  alt: string;
  showCallToAction?: boolean;
  isBack?: boolean;
}
