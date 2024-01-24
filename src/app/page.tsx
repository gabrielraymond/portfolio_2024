"use client";
import About from "@/features/about/components";
import Hero from "@/features/hero/components";
import Message from "@/features/about/components/message";
import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Portfolio from "@/features/portfolio/components";
import StickerPlanes from "@/features/about/components/StickerPlanes";
import Contact from "@/features/contact/components";
import About2 from "@/features/about/components/about";
import Services from "@/features/about/components/services";

export default function Home() {
  // const [MouseMovement, setMouseMovement] = useState<any>(0);
  const HeroRef = useRef(null);
  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  });
  return (
    <main
      className=" bg-[#1B1A17] min-h-screen "
      // onMouseMove={(e: any) => {
      //   setMouseMovement(e);
      // }}
    >
      <div ref={HeroRef}>
        <Hero />
        {/* <Message /> */}
        {/* <About /> */}
        <About2 />
        <Services />
        <Portfolio />
        <Contact />
      </div>
    </main>
  );
}
