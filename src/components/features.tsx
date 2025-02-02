import React from "react";
import Image from "next/image";
import { motion, useMotionValue, MotionValue } from "motion/react";
import { Heading } from "./heading";

const DRAG_AMOUNT = 50;
const TOTAL_ITEM = 3;

interface FeatureItem {
  icon: string;
  title: string;
  content: string;
}

const data: FeatureItem[] = [
  {
    icon: "https://cdn.sanity.io/images/6jywt20u/production/28029da89383a59e47420ee46b7e4c364051b45f-50x50.svg?w=50&auto=format",
    title: "Full-suite solutions",
    content:
      "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
  },
  {
    icon: "https://cdn.sanity.io/images/6jywt20u/production/36c4da4283252fda5dce13c46ea3e06a5312218c-50x51.png?w=50&auto=format",
    title: "Simplify the complex",
    content:
      "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
  },
  {
    icon: "https://cdn.sanity.io/images/6jywt20u/production/36c4da4283252fda5dce13c46ea3e06a5312218c-50x51.png?w=50&auto=format",
    title: "Cutting-edge tech",
    content:
      "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
  },
];

export default function Features() {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const [visible, setVisible] = React.useState<number>(1);
  const containerRef = React.useRef<HTMLElement | null>(null);

  const totalSlide = TOTAL_ITEM - visible;

  const dragX: MotionValue<number> = useMotionValue(0);

  React.useEffect(() => {
    const resize = (): void => {
      const innerWidth = window.innerWidth;
      if (innerWidth >= 1024) {
        setVisible(3);
        setActiveIndex(0);
      } else if (innerWidth >= 768) {
        setVisible(2);
        setActiveIndex(0);
      } else {
        setVisible(1);
        setActiveIndex(0);
      }
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const onDragEndHandler = (): void => {
    const x = dragX.get();
    if (x <= -DRAG_AMOUNT && activeIndex < totalSlide) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    } else if (x >= DRAG_AMOUNT && activeIndex > 0) {
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <section ref={containerRef} className="feature pt-20">
      <div className="container">
        <div className="text-center space-y-4">
          <Heading className="text-secondary" size="base" as="h2">
            OUR PHILOSOPHY
          </Heading>
          <Heading className="text-gray-900" size="3xl" as="h3">
            Human-centred innovation
          </Heading>
        </div>

        <div className="relative w-full h-[600px] md:h-[400px] mt-16">
          <Image
            src="/assets/feature-mobile.avif"
            fill
            alt="Feature illustration for mobile devices"
            className="object-contain md:hidden"
            priority
          />
          <Image
            src="/assets/feature-desktop.png"
            fill
            alt="Feature illustration for desktop devices"
            className="object-contain hidden md:block"
            priority
          />
        </div>

        <div className="overflow-hidden -mx-4 mt-10">
          <motion.div
            key={visible}
            style={{ x: dragX }}
            animate={{
              translateX: `-${activeIndex * 100}%`,
            }}
            drag="x"
            onDragEnd={onDragEndHandler}
            dragConstraints={{ left: 0, right: 0 }}
            className="flex w-full md:w-2/4 lg:w-1/3"
          >
            {data.map((item, i) => (
              <motion.div
                initial={{ y: 30, opacity: 0.4 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "linear",
                  delay: i * 0.3,
                }}
                animate={{ y: 30, opacity: 0.4 }}
                key={item.title}
                className="shrink-0 w-full  p-4"
              >
                <div className="space-y-4 bg-gray-50 p-8 h-full">
                  <Image
                    className="size-12"
                    src={item.icon}
                    width={32}
                    height={32}
                    alt={`${item.title} feature icon`}
                  />
                  <Heading size="lg">{item.title}</Heading>
                  <p>{item.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
