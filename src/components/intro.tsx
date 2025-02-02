import Image from "next/image";
import { Heading } from "./heading";
import { Button } from "./button";
import { BackgroundImages } from "./BackgroundImages";

import { useState } from "react";

export default function Intro() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="overflow-x-hidden lg:[clip-path:polygon(0_0,100%_0,100%_85%,0_100%)] relative group">
      <div className="absolute inset-12 transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:opacity-80">
        <BackgroundImages />
      </div>

      <div className="size-full absolute inset-0 -z-10">
        <div className="absolute inset-0 block bg lg:[clip-path:polygon(0_0,82%_0,33%_100%,0_100%)] z-10" />
        <div className="absolute inset-0 translate-x-44">
          <Image
            className="object-cover size-full"
            src="/assets/intro/intro.avif"
            fill
            alt="intro image"
          />
        </div>
      </div>

      <div className="container">
        <div className="max-w-md md:max-w-lg lg:max-w-2xl mx-auto lg:mx-0 text-white flex items-center">
          <div className="space-y-8 pt-60 pb-10 md:pb-20 lg:pb-60">
            <Heading as="h1" size="4xl">
              Embrace the future of finance
            </Heading>
            <p className="font-semibold">
              Reimagine financial services with AnyTech&apos;s open platform,
              distributed banking solution that powers transformation
            </p>
            <Button>
              React Out to Us
              <Image
                src="assets/icons/ChevronRightWhite.svg"
                alt="chevron right"
                width={5}
                height={5}
                className={`h-3.5 w-3.5 mt-1 transition-all duration-300 ${
                  isHovered ? "translate-x-1.5" : "translate-x-0"
                }`}
              />
            </Button>
          </div>
        </div>

        <div className="intro-image-clip h-[600px] -mx-8 relative lg:hidden z-20">
          <Image
            className="object-cover"
            src="/assets/intro/intro.avif"
            fill
            alt="intro image"
          />
        </div>
      </div>
    </section>
  );
}
