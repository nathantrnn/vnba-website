import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  withPadding?: boolean;
  withVerticalPadding?: boolean;
}

export function Container({ 
  children, 
  className,
  as: Component = "div",
  size = "lg",
  withPadding = true,
  withVerticalPadding = false,
}: ContainerProps) {
  // Define size variants
  const sizeClasses = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
    xl: "max-w-screen-2xl",
    full: "max-w-none"
  };

  // Define safe padding that respects device notches and rounded corners
  const horizontalPadding = withPadding ? "px-4 sm:px-6 md:px-8 lg:px-12" : "";
  const verticalPadding = withVerticalPadding ? "py-4 sm:py-6 md:py-8" : "";
  
  return (
    <Component 
      className={cn(
        "w-full mx-auto",
        horizontalPadding,
        verticalPadding,
        sizeClasses[size],
        // Add support for iOS safe areas
        "px-safe",
        className
      )}
    >
      {children}
    </Component>
  );
} 