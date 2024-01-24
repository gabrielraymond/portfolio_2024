"use client";
import { animate, inView, useInView, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import React, { useEffect, useLayoutEffect, useRef } from "react";

const Message = () => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      scrollTrigger: {
        trigger: ".summary",
        start: "-50% 80%",
        end: "150% 80%",
        scrub: false,
        // markers: true,
        toggleActions: "play ",
      },
    });
    tl.from(".char", { opacity: 0 });
    tl.to(".char", { opacity: 1, stagger: 0.01, marginLeft: 0, delay: 0.3 });
  }, []);

  return (
    <div className="relative w-full min-h-screen z-30 px-8 lg:px-28 pt-28 pb-10 flex items-center leading-normal ">
      <p
        className="summary text-[5vw] text-[#F0E3CA] leading-[1.25em] md:leading-[1.08em]  overflow-hidden  "
        ref={ref}
      >
        {"I design and develop engaging digital experiences that inspire and connect with people."
          .split("")
          .map((char: string) => (
            <span className="char opacity-0">{char}</span>
          ))}
      </p>
    </div>
  );
};

export default Message;
