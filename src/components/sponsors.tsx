import React from "react";
import Image from "next/image";
import { useMotionValue, useSpring } from "motion/react";
import { Heading } from "./heading";

type Stat = {
  value: number;
  prefix: string;
  suffix: string;
  text: string;
};

const stats: Stat[] = [
  {
    value: 20,
    prefix: ">",
    suffix: "",
    text: "Years of Experience",
  },
  {
    value: 40,
    prefix: "",
    suffix: "+",
    text: "Financial Institutions",
  },
  {
    value: 200,
    prefix: ">",
    suffix: "m",
    text: "Customers Each",
  },
];

export default function Sponsors() {
  const [inView, setInView] = React.useState(false);
  const statRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => {
      if (statRef.current) {
        observer.unobserve(statRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20">
      <div ref={statRef} className="text-center">
        <Heading className="text-secondary" size="base" as="h2">
          TRUSTED BY THE BEST
        </Heading>
        <ul className="flex flex-col sm:flex-row justify-center gap-20 mt-8 text-center">
          {stats.map((stat) => (
            <li key={stat.text}>
              <StatView inView={inView} data={stat} />
              <span className="block mt-4 text-gray-700">{stat.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-14 md:mt-20 lg:mt-32">
        <div className="container">
          <div className="grid gap-10 grid-cols-2 sm:gird-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
            <div className="relative h-12 md:h-14 lg:h-16">
              <Image
                src="/assets/sponsor-1.webp"
                fill
                alt="sponsor"
                className="object-contain"
              />
            </div>
            <div className="relative h-12 md:h-14 lg:h-16">
              <Image
                src="/assets/sponsor-2.webp"
                fill
                alt="sponsor"
                className="object-contain"
              />
            </div>
            <div className="relative h-12 md:h-14 lg:h-16">
              <Image
                src="/assets/sponsor-1.webp"
                fill
                alt="sponsor"
                className="object-contain"
              />
            </div>
            <div className="relative h-12 md:h-14 lg:h-16">
              <Image
                src="/assets/sponsor-2.webp"
                fill
                alt="sponsor"
                className="object-contain"
              />
            </div>
            <div className="relative h-12 md:h-14 lg:h-16">
              <Image
                src="/assets/sponsor-1.webp"
                fill
                alt="sponsor"
                className="object-contain"
              />
            </div>
            <div className="relative h-12 md:h-14 lg:h-16">
              <Image
                src="/assets/sponsor-2.webp"
                fill
                alt="sponsor"
                className="object-contain"
              />
            </div>
            <div className="relative h-12 md:h-14 lg:h-16">
              <Image
                src="/assets/sponsor-1.webp"
                fill
                alt="sponsor"
                className="object-contain"
              />
            </div>
            <div className="relative h-12 md:h-14 lg:h-16">
              <Image
                src="/assets/sponsor-2.webp"
                fill
                alt="sponsor"
                className="object-contain"
              />
            </div>
            <div className="relative h-12 md:h-14 lg:h-16">
              <Image
                src="/assets/sponsor-1.webp"
                fill
                alt="sponsor"
                className="object-contain"
              />
            </div>
            <div className="relative h-12 md:h-14 lg:h-16">
              <Image
                src="/assets/sponsor-2.webp"
                fill
                alt="sponsor"
                className="object-contain"
              />
            </div>
            <div className="relative h-12 md:h-14 lg:h-16">
              <Image
                src="/assets/sponsor-1.webp"
                fill
                alt="sponsor"
                className="object-contain"
              />
            </div>
            <div className="relative h-12 md:h-14 lg:h-16">
              <Image
                src="/assets/sponsor-2.webp"
                fill
                alt="sponsor"
                className="object-contain"
              />
            </div>
            <div className="relative h-12 md:h-14 lg:h-16">
              <Image
                src="/assets/sponsor-1.webp"
                fill
                alt="sponsor"
                className="object-contain"
              />
            </div>
            <div className="relative h-12 md:h-14 lg:h-16">
              <Image
                src="/assets/sponsor-2.webp"
                fill
                alt="sponsor"
                className="object-contain"
              />
            </div>
            <div className="relative h-12 md:h-14 lg:h-16">
              <Image
                src="/assets/sponsor-1.webp"
                fill
                alt="sponsor"
                className="object-contain"
              />
            </div>
            <div className="relative h-12 md:h-14 lg:h-16">
              <Image
                src="/assets/sponsor-2.webp"
                fill
                alt="sponsor"
                className="object-contain"
              />
            </div>
            <div className="relative h-12 md:h-14 lg:h-16">
              <Image
                src="/assets/sponsor-1.webp"
                fill
                alt="sponsor"
                className="object-contain"
              />
            </div>
            <div className="relative h-12 md:h-14 lg:h-16">
              <Image
                src="/assets/sponsor-2.webp"
                fill
                alt="sponsor"
                className="object-contain"
              />
            </div>
            <div className="relative h-12 md:h-14 lg:h-16">
              <Image
                src="/assets/sponsor-1.webp"
                fill
                alt="sponsor"
                className="object-contain"
              />
            </div>
            <div className="relative h-12 md:h-14 lg:h-16">
              <Image
                src="/assets/sponsor-2.webp"
                fill
                alt="sponsor"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatView({ inView, data }: { inView: boolean; data: Stat }) {
  const [stat, setStat] = React.useState(0);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 100,
    damping: 25,
  });

  React.useEffect(() => {
    if (inView) {
      motionValue.set(data.value);
    }
  }, [inView, data.value, motionValue]);

  React.useEffect(() => {
    const unsubscribe = springValue.on("change", (v) => {
      // Prevent overshooting by capping at 'to'
      if (Math.abs(v - data.value) < 1) {
        setStat(data.value);
      } else {
        setStat(v);
      }
    });
    return unsubscribe;
  }, [springValue, data.value]);
  return (
    <span className="text-2xl md:text-3xl lg:text-8xl font-Montserrat tracking-[-0.02em] font-semibold leading-none bg-gradient-to-b from-secondary to-[#0057BB] text-transparent bg-clip-text">
      {data.prefix}
      {Math.trunc(stat)}
      {data.suffix}
    </span>
  );
}
