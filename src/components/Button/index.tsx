import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: [
    "font-zen-maru-gothic tracking-wider rounded-lg transition-colors border-2 border-transparent select-none",
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--ifm-color-primary)]",
    "disabled:opacity-50 disabled:cursor-not-allowed",
  ],
  variants: {
    variant: {
      primary:
        "bg-[var(--ifm-color-primary)] hover:bg-[var(--ifm-color-primary-dark)] text-white",
      secondary:
        "bg-transparent !border-[var(--ifm-color-primary)] text-[var(--ifm-color-primary)] hover:bg-[var(--ifm-color-primary)] hover:text-white",
    },
    size: {
      sm: "px-3 py-1 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed pointer-events-none bg-gray-300 !border-gray-300 text-gray-500 hover:bg-gray-300 hover:text-gray-500",
      false: "",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    disabled: false,
  },
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  size,
  className,
  disabled = false,
  ...props
}) => {
  return (
    <button
      type="button"
      className={button({ variant, size, disabled, className })}
      disabled={disabled}
      {...props}
    >
      {typeof children === "string" ? children.toUpperCase().trim() : children}
    </button>
  );
};

export default Button;
