import Image from "next/image";
import { BackgroundImages } from "./BackgroundImages";
import { Button } from "./button";
import { Heading } from "./heading";
import { useState } from "react";
export default function ContactUs() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section
      className="py-44 bg relative"
      style={{ clipPath: "polygon(0 0, 100% 30%, 100% 100%, 0% 100%)" }}
    >
      <BackgroundImages />
      <SvgComponent />
      <div className="container">
        <div className="space-y-6 text-white">
          <Heading size="3xl" as="h2">
            Legacy no longer
          </Heading>

          <p>
            Talk to us to find out how we can transform your organisation for
            the future
          </p>
          <Button variant="primary">
            <Image
              src="assets/icons/ChevronRightWhite.svg"
              alt="chevron right"
              width={5}
              height={5}
              className={`h-3.5 w-3.5 mt-1 transition-all duration-300 ${
                isHovered ? "translate-x-1.5" : "translate-x-0"
              }`}
            />
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}

import * as React from "react";

function SvgComponent() {
  return (
    <svg
      viewBox="0 0 390 413"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute size-full block"
    >
      <g clipPath="url(#clip0_4876_21715)">
        <g filter="url(#filter0_f_4876_21715)">
          <path
            d="M411 407.438H238l173-173v173z"
            fill="url(#paint0_linear_4876_21715)"
          />
          <path
            d="M411 407.438H238l173-173v173z"
            fill="url(#paint1_linear_4876_21715)"
          />
        </g>
        <path
          d="M358-141.773v-195.789l-633 633h195.788L358-141.773z"
          fill="url(#paint2_linear_4876_21715)"
        />
        <path
          d="M946-394.966v-365.596l-1182 1182h365.596L946-394.966z"
          fill="url(#paint3_linear_4876_21715)"
        />
        <path
          d="M185 288.094v-81.656l-264 264H2.656L185 288.094z"
          fill="url(#paint4_linear_4876_21715)"
        />
        <path
          d="M498 264.134v-59.696l-191 193h59.077L498 264.134z"
          fill="url(#paint5_linear_4876_21715)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_4876_21715"
          x={205}
          y={201.438}
          width={239}
          height={239}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={16.5}
            result="effect1_foregroundBlur_4876_21715"
          />
        </filter>
        <linearGradient
          id="paint0_linear_4876_21715"
          x1={411}
          y1={321.289}
          x2={238}
          y2={321.289}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#4B4B4B" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4876_21715"
          x1={515.029}
          y1={206.447}
          x2={270.24}
          y2={461.486}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E9EA" />
          <stop offset={1} stopColor="#1F80F0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_4876_21715"
          x1={-551.41}
          y1={882.019}
          x2={168.1}
          y2={30.6334}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1F80F0" />
          <stop offset={1} stopColor="#0059BF" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint3_linear_4876_21715"
          x1={696.5}
          y1={838.438}
          x2={126}
          y2={164.938}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1F80F0" />
          <stop offset={1} stopColor="#0059BF" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint4_linear_4876_21715"
          x1={-127}
          y1={491.968}
          x2={178.647}
          y2={231.144}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E9EA" />
          <stop offset={1} stopColor="#1F80F0" stopOpacity={0.49} />
        </linearGradient>
        <linearGradient
          id="paint5_linear_4876_21715"
          x1={272.273}
          y1={413.177}
          x2={495.342}
          y2={224.794}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E9EA" />
          <stop offset={1} stopColor="#1F80F0" stopOpacity={0.49} />
        </linearGradient>
        <clipPath id="clip0_4876_21715">
          <path
            fill="#fff"
            transform="rotate(-180 195 206.5)"
            d="M0 0H390V413H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
