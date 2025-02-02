"use client";
import AboutUs from "@/components/about-us";
import ContactUs from "@/components/contact-us";
import Features from "@/components/features";

import Intro from "@/components/intro";
import { Slider } from "@/components/slider";
import Sponsors from "@/components/sponsors";

export default function page() {
  return (
    <>
      <Intro />
      <AboutUs />
      <Features />
      <Slider />
      <Sponsors />
      <ContactUs />
    </>
  );
}
