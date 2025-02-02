"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { Button } from "./button";
import * as path from "@/paths";
import { cn } from "@/lib/utils";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  AnimatePresence,
} from "motion/react";
import BrandLogo from "./brand-logo";
import Image from "next/image";

interface NavigationItem {
  label: string;
  href: () => string;
  children: NavigationSubItem[];
}

interface NavigationSubItem {
  label: string;
  href: () => string;
}

interface SubmenuListProps {
  items: NavigationSubItem[];
}

interface NavigationMenuProps {
  items: NavigationItem[];
  position: "absolute" | "fixed";
}

interface MainNavigationProps {
  position: "absolute" | "fixed";
}

const navigationItems: NavigationItem[] = [
  {
    label: "Solutions",
    href: path.solutions,
    children: [
      { label: "Any Caas", href: path.anyCaas },
      { label: "Any Baas", href: path.anyBaas },
      { label: "Any Paas", href: path.anyPaas },
    ],
  },
  {
    label: "Services",
    href: path.services,
    children: [],
  },
  {
    label: "About Us",
    href: path.aboutUs,
    children: [],
  },
];

export function Header() {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const previousScrollY = useRef<number>(0);
  const scrollDirection = useRef<number>(0);
  const { scrollY } = useScroll();
  const [position, setPosition] = useState<"absolute" | "fixed">("absolute");

  useMotionValueEvent(scrollY, "change", (currentScroll: number) => {
    const delta = previousScrollY.current - currentScroll;
    scrollDirection.current = currentScroll - (scrollY.getPrevious() ?? 0);

    if (Math.abs(delta) > 30) {
      setIsVisible(delta > 30);
      previousScrollY.current = currentScroll;
    }

    setPosition(currentScroll <= 300 ? "absolute" : "fixed");
  });

  return (
    <motion.header
      initial={false}
      animate={{ y: isVisible ? 0 : "-100%" }}
      transition={{
        type: "tween",
        ease: "linear",
        duration: 0.1,
      }}
      style={{ position }}
      className={cn(
        "absolute top-0 inset-x-0 z-50 w-full py-4 bg-transparent !text-white",
        position === "fixed" && "bg-white shadow-xl [&_a]:!text-secondary"
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="flex-1 shrink-0">
            <Link className="text-white" href="/">
              <BrandLogo />
            </Link>
          </div>
          <nav className="hidden lg:flex justify-center gap-8">
            <MainNavigation position={position} />
          </nav>
          <div className="hidden lg:flex justify-end flex-1 shrink-0">
            <Button variant={position === "absolute" ? "outline" : "primary"}>
              Contact Us
            </Button>
          </div>
          <div className="lg:hidden">
            <MobileNav position={position} />
          </div>
        </div>
      </div>
    </motion.header>
  );
}

function MainNavigation({ position }: MainNavigationProps) {
  return (
    <ul className="flex items-center gap-4 ">
      <NavigationMenu position={position} items={navigationItems} />
    </ul>
  );
}

function NavigationMenu({ items, position }: NavigationMenuProps) {
  return (
    <>
      {items.map((navItem) => (
        <li className="relative group" key={navItem.label}>
          <Link
            className={cn(
              "cursor-pointer font-medium py-3 px-4 relative after:absolute after:inset-x-0 after:h-px after:bg-transparent after:bottom-0 hover:after:bg-white after:transition-colors after:duration-200"
            )}
            href={navItem.href()}
          >
            {navItem.label}
          </Link>
          {navItem.children && <SubmenuList items={navItem.children} />}
        </li>
      ))}
      <li>
        <button
          type="button"
          className={cn(
            "rounded-full border py-2 px-7 mx-4",
            position === "fixed" && "text-secondary"
          )}
        >
          Eng
        </button>
      </li>
    </>
  );
}

function SubmenuList({ items }: SubmenuListProps) {
  return (
    <ul className="absolute group-hover:opacity-100 group-hover:visible opacity-0 invisible top-8 bg-white whitespace-nowrap w-52 [&>li]:px-4 [&>li]:py-2.5 [&>li:not(:last-child)]:border-b [&>li:not(:last-child)]:border-gray-300 rounded shadow text-gray-900">
      {items.map((submenuItem) => (
        <li key={submenuItem.label}>
          <Link href={submenuItem.href()}>{submenuItem.label}</Link>
        </li>
      ))}
    </ul>
  );
}

function MobileNav({ position }: { position: string }) {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <>
      <button
        className={cn(position === "fixed" && "text-secondary")}
        type="button"
        onClick={() => setOpen(!open)}
      >
        menu
      </button>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: open ? 0 : -100 }}
            className="fixed inset-x-0 text-white bg-secondary top-16 py-8 shadow"
          >
            <div className="container space-y-8">
              <ul className={cn("[&_a]:!text-white space-y-2")}>
                {navigationItems.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href()}>{item.label}</Link>
                    {item.children && (
                      <ul className="pl-4 space-y-2">
                        {item.children.map((ch) => (
                          <li key={ch.label}>
                            <Link href={ch.href()}>{ch.label}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <div className="w-full sm:px-20">
                <Button className="w-full">
                  Contact Us
                  <Image
                    src="assets/icons/ChevronRightWhite.svg"
                    alt="chevron right"
                    width={5}
                    height={5}
                    className={"h-3.5 w-3.5 mt-1 transition-all duration-300"}
                  />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
