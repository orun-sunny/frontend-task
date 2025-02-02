import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type HeadingProps = {
  size?: "base" | "lg" | "2xl" | "3xl" | "4xl";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  align?: "left" | "center" | "right";
  className?: string;
} & ComponentProps<"h1">;

export function Heading({
  as = "h2",
  size = "3xl",
  className,
  ...props
}: HeadingProps) {
  const Comp = as;
  const classnames = cn(
    "font-heading font-semibold",

    {
      "text-base font-bold": size === "base",
      "text-xl lg:text-2xl": size === "2xl",
      "text-2xl lg:text-3xl": size === "3xl",
      "text-3xl lg:text-4xl": size === "4xl",
    },
    className
  );
  return <Comp className={classnames} {...props} />;
}
