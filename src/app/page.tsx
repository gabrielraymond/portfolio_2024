"use client";
import Hero from "@/features/hero/components";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Portfolio from "@/features/portfolio/components";
import Contact from "@/features/contact/components";
import About2 from "@/features/about/components/about";
import Services from "@/features/about/components/services";
import Footer from "@/features/footer/components";
import { Analytics } from "@vercel/analytics/react";

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
      <div ref={HeroRef} id="main">
        <Hero />
        {/* <Message /> */}
        {/* <About /> */}
        <About2 />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
      <Analytics />
    </main>
  );
}
