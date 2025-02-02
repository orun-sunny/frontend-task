import Image from "next/image";
import { Heading } from "./heading";

export default function AboutUs() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 overflow-hidden">
      <div className="container">
        <div className="flex items-center justify-center gap-8">
          <div className="flex-1 shrink-0 space-y-6">
            <Heading className="text-secondary" size="base" as="h2">
              POWERING THE FUTURE OF FINANCE
            </Heading>
            <Heading className="text-gray-900" size="3xl" as="h3">
              Uncovering new ways to delight customers
            </Heading>
            <div className="flex-1 shrink-0 mx-auto w-fit md:hidden">
              <div className="relative inline-block">
                <div className="absolute -inset-x-20 animate-move-up-down">
                  <Image
                    className={`absolute top-10 left-20 w-full h-full object-cover transition-transform duration-3 scale-110 opacity-40
                    }`}
                    src="/assets/story.svg"
                    width={600}
                    height={600}
                    alt="Decorative background pattern"
                    priority
                  />
                </div>
                <div className="size-10 absolute top-44 left-10 animate-move-up-down z-10">
                  <Image
                    className="object-cover size-full"
                    src="/assets/icon-1.svg"
                    fill
                    alt="Decorative floating icon 1"
                  />
                </div>
                <div
                  style={{
                    animationDelay: "-4s",
                    animationDuration: "12s",
                  }}
                  className="size-28 absolute -right-14 top-20 animate-move-up-down z-10"
                >
                  <Image
                    className="object-cover size-full"
                    src="/assets/icon-2.svg"
                    fill
                    alt="Decorative floating icon 2"
                  />
                </div>
                <div
                  style={{
                    animationDelay: "-4s",
                    animationDuration: "20s",
                  }}
                  className="size-16 absolute top-24 -left-8 animate-move-up-down z-10"
                >
                  <Image
                    className="object-cover size-full"
                    src="/assets/icon-3.svg"
                    fill
                    alt="Decorative floating icon 3"
                  />
                </div>
                <Image
                  className="object-cover w-[425px] h-[500px] relative shadow-2xl"
                  src="/assets/intro/intro.avif"
                  width={400}
                  height={400}
                  alt="AnyTech product interface showcase"
                  priority
                />
              </div>
            </div>
            <p>
              <strong>
                AnyTech is revolutionising financial technology by introducing
                innovative and real-time transaction account processing
                capabilities, specifically designed for retail financial
                services.
              </strong>
            </p>
            <p>
              Our modern approach surpasses traditional banking and card
              processing systems, empowering you with the most advanced
              technology for lasting success.
            </p>
          </div>
          <div className="hidden md:block flex-1 shrink-0">
            <div className="relative inline-block">
              <div className="absolute -inset-x-20 -mt-20 animate-move-up-down">
                <Image
                  className="size-full"
                  src="/assets/story.svg"
                  width={600}
                  height={600}
                  alt="Decorative background pattern"
                  priority
                />
              </div>
              <div className="size-16 absolute top-44 left-10 animate-move-up-down z-10">
                <Image
                  className="object-cover size-full"
                  src="/assets/icon-3.svg"
                  fill
                  alt="Decorative floating icon 1"
                />
              </div>
              <div
                style={{
                  animationDelay: "-4s",
                  animationDuration: "12s",
                }}
                className="size-28 absolute -right-14 top-20 animate-move-up-down z-10"
              >
                <Image
                  className="object-cover size-full"
                  src="/assets/icon-1.svg"
                  fill
                  alt="Decorative floating icon 3"
                />
              </div>
              <div
                style={{
                  animationDelay: "-4s",
                  animationDuration: "20s",
                }}
                className="size-16 absolute top-24 -left-8 animate-move-up-down z-10"
              >
                <Image
                  className="object-cover size-full"
                  src="/assets/icon-2.svg"
                  fill
                  alt="Decorative floating icon 3"
                />
              </div>
              <Image
                className="object-cover w-[425px] h-[500px] relative shadow-2xl"
                src="https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=960&auto=format"
                width={400}
                height={400}
                alt="AnyTech product interface showcase"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
