"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

export function BackgroundImages() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <div
      className="absolute inset-12 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {[1, 2, 3, 4].map((index) => (
        <Image
          key={index}
          src="/assets/backgrounds/WaveLinesDesktop1.svg"
          alt={`Wave pattern ${index}`}
          className={`absolute top-10 left-20 w-full h-full object-cover transition-transform duration-300  ${
            isHovered ? "scale-110 opacity-50" : "scale-100 opacity-40"
          }`}
          fill
        />
      ))}
    </div>
  );
}
