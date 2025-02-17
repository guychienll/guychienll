import clsx from "clsx";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "font-zen-maru-gothic tracking-wider rounded-lg transition-colors cursor-pointer border-2 border-transparent",
        {
          "bg-[var(--ifm-color-primary)] hover:bg-[var(--ifm-color-primary-dark)] text-white":
            variant === "primary",
          "bg-transparent !border-[var(--ifm-color-primary)] text-[var(--ifm-color-primary)] hover:bg-[var(--ifm-color-primary)] hover:text-white":
            variant === "secondary",
          "px-3 py-1 text-sm": size === "sm",
          "px-4 py-2 text-base": size === "md",
          "px-6 py-3 text-lg": size === "lg",
        },
        className
      )}
      {...props}
    >
      {typeof children === "string"
        ? children.toUpperCase().trim()
        : children}
    </button>
  );
};

export default Button;
