import React from "react";
import { AVATAR_IMAGES, AVATAR_ALT_TEXTS } from "./constants";
import AvatarSide from "./components/AvatarSide";
import { AvatarProps } from "./types";

const Avatar: React.FC<AvatarProps> = ({ isFlipped, onFlip }) => {
  return (
    <div
      className="relative w-[200px] h-[200px] cursor-pointer"
      onClick={() => onFlip((prev) => !prev)}
      style={{
        perspective: 1000,
      }}
    >
      <div
        className="w-full h-full"
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            transition: "transform 0.6s cubic-bezier(0.4,0.2,0.2,1)",
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            width: "100%",
            height: "100%",
          }}
        >
          <AvatarSide
            src={AVATAR_IMAGES.FRONT}
            alt={AVATAR_ALT_TEXTS.FRONT}
            showCallToAction={!isFlipped}
          />

          <AvatarSide
            src={AVATAR_IMAGES.BACK}
            alt={AVATAR_ALT_TEXTS.BACK}
            isBack={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Avatar;
