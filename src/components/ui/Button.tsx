import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
}

export function Button({
  className,
  variant = "default",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        // Base styles
        "inline-flex items-center justify-center rounded-md font-medium transition-colors",
        // Variant styles
        variant === "default" && "bg-primary text-white hover:bg-primary-dark",
        variant === "outline" && "border border-input bg-background hover:bg-gray-100",
        variant === "ghost" && "hover:bg-gray-100",
        variant === "link" && "text-primary underline-offset-4 hover:underline",
        // Size styles
        size === "sm" && "h-8 px-3 text-sm",
        size === "md" && "h-10 px-4",
        size === "lg" && "h-12 px-6 text-lg",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
} 