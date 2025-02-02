import { ComponentProps } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type ButtonProps = {
  variant?: "primary" | "outline";
  asChild?: boolean;
  className?: string;
  size?: "base" | "lg";
  shape?: "rounded" | "pill";
} & ComponentProps<"button">;

export function Button({
  variant = "primary",
  size = "base",
  shape = "rounded",
  asChild,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  const classnames = cn(
    "inline-flex gap-2 items-center justify-center text-lg font-semibold border border-transparent focus:ring cursor-pointer transition-colors bg-transparent duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm",
    {
      "bg-primary text-white": variant === "primary",
      "border-white text-white hover:bg-white hover:text-secondary hover:shadow-md":
        variant === "outline",
      "px-10 py-3": size === "base",
      "px-14 py-3": size === "lg",
      "rounded-sm": shape === "rounded",
      "rounded-full": shape === "pill",
    },
    className
  );

  return <Comp className={classnames} {...props} />;
}
