"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface AnimatedBackgroundProps {
  src: string;
  alt: string;
}

export function AnimatedBackground({ src, alt }: AnimatedBackgroundProps) {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top, height } = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const visibleHeight = Math.min(
          windowHeight,
          Math.max(0, windowHeight - top)
        );
        const scrollPercentage = visibleHeight / height;
        setScrollY(scrollPercentage * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="absolute inset-x-0 top-0 h-full overflow-hidden pointer-events-none"
    >
      <div
        className="absolute inset-0 w-full"
        style={{
          transform: `translateY(${scrollY * 0.5}%)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <Image
          className="w-full h-auto"
          src={src || "/placeholder.svg"}
          width={600}
          height={600}
          alt={alt}
          priority
        />
      </div>
    </div>
  );
}
