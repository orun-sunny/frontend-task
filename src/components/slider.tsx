"use client";

import React from "react";
import Image from "next/image";
import { motion, useMotionValue } from "motion/react";
import { cn } from "@/lib/utils";
import { Heading } from "./heading";

type TabItem = {
  label: string;
  title: string;
  content: string[];
  image: string;
};

type TabCarouselProps = {
  data?: TabItem[];
  intervalDuration?: number;
};

const tabContent: TabItem[] = [
  {
    label: "Customer focused",
    title: "Purpose-built financial services",
    content: [
      "Elevate customer experience and achieve agile financial product innovation with the world's first, consumer-centric, real-time transaction account processing and credit limit system.",
      "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
    ],
    image: "/assets/frames/slider_1.webp",
  },
  {
    label: "Agile and adaptable",
    title: "Agile and adaptable for growth",
    content: [
      "Elevate customer experience and achieve agile financial product innovation with the world's first, consumer-centric, real-time transaction account processing and credit limit system.",
      "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
    ],
    image: "/assets/frames/slider_2.avif",
  },
  {
    label: "Compliance ready",
    title: "Manage Compliance with Ease",
    content: [
      "Elevate customer experience and achieve agile financial product innovation with the world's first, consumer-centric, real-time transaction account processing and credit limit system.",
      "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
    ],
    image: "/assets/frames/slider_3.avif",
  },
  {
    label: "Secure and safe",
    title: "Highly Secure and Safe",
    content: [
      "Elevate customer experience and achieve agile financial product innovation with the world's first, consumer-centric, real-time transaction account processing and credit limit system.",
      "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
    ],
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=640&auto=format",
  },
];

const DRAG_AMOUNT = 50;

export const Slider = ({
  data = tabContent,
  intervalDuration = 8,
}: TabCarouselProps) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const handleIndexClick = (index: number) => setActiveIndex(index);

  const dragX = useMotionValue(0);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_AMOUNT && activeIndex < tabContent.length - 1) {
      setActiveIndex((pv) => pv + 1);
    } else if (x >= DRAG_AMOUNT && activeIndex > 0) {
      setActiveIndex((pv) => pv - 1);
    }
  };

  const intervalId = React.useRef<NodeJS.Timeout>(null);

  React.useEffect(() => {
    if (isPaused) return;
    const autoSlide = () => {
      setActiveIndex((activeIndex) => (activeIndex + 1) % data.length);
    };

    intervalId.current = setInterval(autoSlide, intervalDuration * 1000);

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, [activeIndex, intervalDuration, isPaused]);

  return (
    <section
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 87%, 0% 100%)",
      }}
      className="bg-gradient-to-b from-white to-gray-50 pt-30 pb-40"
    >
      <div className="relative overflow-hidden container">
        <div className="text-center">
          <Heading className="text-secondary" as="h2" size="base">
            TECHNOLOGY BUILT FOR YOU
          </Heading>
          <Heading className="text-gray-900 mt-6" as="h2" size="3xl">
            The future of finance
          </Heading>
          <TabButton
            data={data}
            activeIndex={activeIndex}
            handleIndexClick={handleIndexClick}
          />
        </div>

        <div className="overflow-hidden bg-white shadow-lg rounded-2xl mt-8">
          <motion.div
            onPointerEnter={() => setIsPaused(true)}
            onPointerLeave={() => setIsPaused(false)}
            drag="x"
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            dragElastic={0.5}
            style={{
              x: dragX,
            }}
            animate={{
              translateX: `-${activeIndex * 100}%`,
            }}
            transition={{
              type: "tween",
              duration: 0.5,
              ease: "easeInOut",
            }}
            onDragEnd={onDragEnd}
            className="flex cursor-grab items-center active:cursor-grabbing"
          >
            <Content data={data as TabItem[]} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Content = ({ data }: { data: TabItem[] }) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <motion.div
            key={index}
            className="w-full shrink-0 p-6 md:p-8 lg:p-16 rounded-2xl bg-white"
          >
            <div className="w-full max-md:space-y-4 md:flex gap-4">
              <div className="flex-1 space-y-6">
                <Heading
                  className="text-secondary uppercase"
                  as="h3"
                  size="base"
                >
                  {item.label}
                </Heading>
                <Heading className="text-gray-900" as="h3" size="2xl">
                  {item.title}
                </Heading>
                <div className="relative w-full md:hidden pointer-events-none overflow-hidden rounded-2xl aspect-video h-[150px]">
                  <Image
                    className="select-none size-full object-cover"
                    fill
                    src={item.image}
                    alt="carousel image"
                  />
                </div>
                <p className="text-slate-700">
                  <strong className="font-bold">{item.content[0]}</strong>
                </p>
                <p>{item.content[1]}</p>
              </div>
              <div className="relative hidden md:block w-full flex-1 pointer-events-none overflow-hidden rounded-2xl aspect-video md:aspect-auto h-[450px]">
                <Image
                  className="select-none size-full object-cover"
                  fill
                  src={item.image}
                  alt="carousel image"
                />
              </div>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

function TabButton({
  data,
  handleIndexClick,
  activeIndex,
}: {
  data: TabItem[];
  handleIndexClick: (index: number) => void;
  activeIndex: number;
}) {
  return (
    <ul className="flex justify-around mt-8">
      {data.map((item: TabItem, index: number) => (
        <li key={item.label}>
          <button
            onClick={handleIndexClick.bind(null, index)}
            className={cn(
              "text-sm lg:whitespace-nowrap lg:text-lg font-bold text-secondary rounded-full py-2 px-2 lg:px-12 bg-transparent transition-colors hover:bg-secondary/30 duration-300 cursor-pointer",
              index === activeIndex && "bg-secondary/30"
            )}
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  );
}
