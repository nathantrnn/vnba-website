"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface GradientBorderProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  borderRadius?: "sm" | "md" | "lg" | "xl" | "full";
  speed?: "slow" | "normal" | "fast";
  borderWidth?: number;
  colors?: string[];
  animate?: boolean;
}

export function GradientBorder({
  children,
  className,
  containerClassName,
  borderRadius = "md",
  speed = "normal",
  borderWidth = 2,
  colors = ["#FF6A00", "#0A5CAA", "#FFD700", "#FF6A00"], // Primary, Secondary, Accent cycle
  animate = true,
}: GradientBorderProps) {
  // Calculate animation duration based on speed
  const animationDuration = {
    slow: "8s",
    normal: "5s",
    fast: "3s",
  }[speed];

  // Border radius mapping
  const radiusMap = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };

  return (
    <div
      className={cn(
        "relative p-[2px] overflow-hidden",
        radiusMap[borderRadius],
        containerClassName
      )}
      style={{
        background: animate
          ? `linear-gradient(90deg, ${colors.join(", ")})`
          : `linear-gradient(90deg, ${colors.join(", ")})`,
        backgroundSize: "300% 100%",
        animation: animate ? `gradient-move ${animationDuration} linear infinite` : "none",
      }}
    >
      <div
        className={cn(
          "relative z-10 bg-white h-full",
          radiusMap[borderRadius],
          className
        )}
        style={{
          padding: borderWidth,
        }}
      >
        {children}
      </div>
    </div>
  );
} 