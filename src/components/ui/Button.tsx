"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const variants = {
      primary:
        "bg-brand-gradient text-white hover:opacity-90 border border-transparent shadow-sm",
      secondary:
        "bg-foreground text-background hover:bg-foreground/90 border border-transparent",
      outline:
        "bg-transparent text-foreground border-2 border-foreground hover:bg-foreground hover:text-background",
      ghost: "bg-transparent text-muted hover:text-brand-pink hover:bg-brand-pink/5",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs uppercase tracking-wider",
      md: "h-12 px-8 text-sm uppercase tracking-wider",
      lg: "h-14 px-10 text-base uppercase tracking-wider",
    };

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink disabled:pointer-events-none disabled:opacity-50 rounded-full",
          variants[variant],
          sizes[size],
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button };
