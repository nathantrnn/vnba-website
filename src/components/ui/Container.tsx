import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  withSafePadding?: boolean;
}

export function Container({ 
  children, 
  className,
  as: Component = "div",
  size = "lg",
  withSafePadding = true,
}: ContainerProps) {
  // Define size variants
  const sizeClasses = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
    xl: "max-w-screen-2xl",
    full: "max-w-none"
  };
  
  return (
    <Component 
      className={cn(
        "w-full mx-auto px-4 sm:px-6 lg:px-8",
        withSafePadding && "px-safe",
        sizeClasses[size],
        className
      )}
      style={withSafePadding ? {
        paddingLeft: "max(1rem, env(safe-area-inset-left))",
        paddingRight: "max(1rem, env(safe-area-inset-right))"
      } : undefined}
    >
      {children}
    </Component>
  );
} 