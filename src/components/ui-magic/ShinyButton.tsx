"use client";

import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "accent";
}

export const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ 
    children, 
    className, 
    glowColor = "rgba(255, 106, 0, 0.5)", // Primary color with opacity
    disabled = false, 
    size = "md", 
    variant = "primary",
    ...props 
  }, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    // Determine background color based on variant
    const getBgColor = () => {
      if (disabled) return "bg-gray-300";
      
      switch (variant) {
        case "primary":
          return "bg-primary";
        case "secondary":
          return "bg-secondary";
        case "accent":
          return "bg-accent";
        default:
          return "bg-primary";
      }
    };

    // Determine hover effect based on variant
    const getHoverEffect = () => {
      if (disabled) return "";
      
      switch (variant) {
        case "primary":
          return "hover:bg-primary-dark";
        case "secondary":
          return "hover:bg-secondary-dark";
        case "accent":
          return "hover:bg-accent-dark";
        default:
          return "hover:bg-primary-dark";
      }
    };

    // Determine size classes
    const getSizeClasses = () => {
      switch (size) {
        case "sm":
          return "py-2 px-3 text-sm";
        case "lg":
          return "py-3 px-6 text-lg";
        default:
          return "py-2.5 px-4 text-base";
      }
    };

    return (
      <button
        ref={buttonRef || ref}
        className={cn(
          "relative overflow-hidden rounded-md text-white font-medium transition-all",
          getBgColor(),
          getHoverEffect(),
          getSizeClasses(),
          disabled && "cursor-not-allowed opacity-60",
          className
        )}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        disabled={disabled}
        {...props}
      >
        {isHovering && (
          <div
            className="absolute pointer-events-none transition-opacity duration-500 rounded-full blur-xl"
            style={{
              left: position.x,
              top: position.y,
              transform: "translate(-50%, -50%)",
              width: "15rem",
              height: "15rem",
              background: glowColor,
              opacity: 0.25,
            }}
          />
        )}
        <div className="relative z-10">{children}</div>
      </button>
    );
  }
); 