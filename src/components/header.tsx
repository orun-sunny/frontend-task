"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { Button } from "./button";
import * as path from "@/paths";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  AnimatePresence,
} from "motion/react";
import BrandLogo from "./brand-logo";

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
        <div className="flex items-center relative">
          <div className="flex items-center flex-1 shrink-0">
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
              "cursor-pointer font-medium py-3 px-4 relative after:absolute after:inset-x-5 after:h-px after:bg-transparent after:bottom-0 hover:after:bg-white after:transition-all translate-y-4  flex items-center"
            )}
            href={navItem.href()}
          >
            {navItem.label}
            {navItem.children.length > 0 && (
              <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
            )}
          </Link>
          {navItem.children && <SubmenuList items={navItem.children} />}
        </li>
      ))}
      <Intl position={position} />
    </>
  );
}

function Intl({ position }: { position: string }) {
  return (
    <li className="relative group">
      <button
        className={cn(
          "rounded-full border py-2 px-7 mx-4 cursor-pointer",
          position === "fixed" && "text-secondary"
        )}
      >
        Eng
      </button>

      <motion.div className="absolute top-16 flex flex-col [&>li]:py-0.5 bg-white shadow w-60 text-gray-900 px-4 [&>*]:py-2 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-b-gray-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 translate-y-4 group-hover:-translate-y-2 transition-all duration-150">
        <span>EN (English)</span>
        <span>TN (Thai)</span>
        <span>ID (Bahasa Indonesia)</span>
        <span>TW (Traditional Chinese)</span>
      </motion.div>
    </li>
  );
}

function SubmenuList({ items }: SubmenuListProps) {
  return (
    <ul className="absolute group-hover:opacity-100 group-hover:visible opacity-0 invisible top-18 bg-white whitespace-nowrap w-52 [&>li]:px-4 [&>li]:py-2.5 [&>li:not(:last-child)]:border-b [&>li:not(:last-child)]:border-gray-300 rounded shadow text-gray-900">
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
        className={cn(
          "flex items-center justify-center cursor-pointer",
          position === "fixed" && "text-secondary"
        )}
        type="button"
        onClick={() => setOpen(!open)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: open ? 0 : "-100%" }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
            className="fixed inset-0 text-white bg-secondary top-16 py-8 shadow overflow-y-auto"
          >
            <div className="container space-y-12">
              <ul className={cn("[&_a]:!text-white space-y-4")}>
                {navigationItems.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href()}>{item.label}</Link>
                    {item.children && (
                      <ul className="pl-4 mt-2 space-y-2">
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
              <div className="w-full px-4 sm:px-20">
                <Button variant="outline" className="w-full h-12 text-base">
                  Contact Us
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
