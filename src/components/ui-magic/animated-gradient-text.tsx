import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export interface AnimatedGradientTextProps
  extends ComponentPropsWithoutRef<"div"> {
  speed?: number;
  colorFrom?: string;
  colorMiddle?: string;
  colorTo?: string;
  useFullBrandPalette?: boolean;
}

export function AnimatedGradientText({
  children,
  className,
  speed = 1,
  colorFrom = "#FF6A00", // Primary
  colorMiddle = "#0A5CAA", // Secondary
  colorTo = "#171717", // Black
  useFullBrandPalette = true,
  ...props
}: AnimatedGradientTextProps) {
  return (
    <span
      style={
        {
          "--bg-size": `${speed * 300}%`,
          "--color-from": colorFrom,
          "--color-middle": colorMiddle,
          "--color-to": colorTo,
        } as React.CSSProperties
      }
      className={cn(
        useFullBrandPalette
          ? "relative inline-block animate-gradient bg-gradient-to-r from-primary via-secondary via-accent to-primary bg-[length:400%_auto] bg-clip-text text-transparent"
          : "relative inline-block animate-gradient bg-gradient-to-r from-[var(--color-from)] via-[var(--color-middle)] to-[var(--color-to)] bg-[length:400%_auto] bg-clip-text text-transparent",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
} 