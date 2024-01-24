import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useLayoutEffect, useRef } from "react";

const NameAnimate = ({ label }: any) => {
  const title = useRef(null);
  const text = useRef(null);

  useLayoutEffect(() => {
    
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      defaults: { ease: "power2.out" },
    });
    tl.to(".text", { y: "0%", duration: 0.7, stagger: 0.3, delay: 1 });
    

    let tlScrollRight = gsap.timeline({
      defaults: { ease: "power3.in" },
      scrollTrigger: {
        trigger: title.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    let tlScrollLeft = gsap.timeline({
        defaults: { ease: "power2.in" },
        scrollTrigger: {
          trigger: title.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });
    // tlScroll.from(".name-left", { translateX: "0%" });
    tlScrollRight.to(".name-left", { x: 2000, delay: 1, duration: 0.7, transition:'all', zIndex:40 });
    tlScrollLeft.to(".name-right", { x: -2000, delay: 1, duration: 0.7, transition:'all' });

  });
  return (
    <div
      className="font-medium text-[6.5vw] uppercase whitespace-nowrap  px-10  font-outline-3 overflow-hidden"
        ref={title}
    >
      <h2 className="overflow-hidden name-left " >
        <span className="text text-[#F0E3CA] translate-y-full inline-block">
          {label}
        </span>
      </h2>
      <h2 className="overflow-hidden name-right relative z-40">
        <span className="text  text-outline text-transparent translate-y-full inline-block">
          {label}
        </span>
      </h2>
      <h2 className="overflow-hidden name-left">
        <span className="text text-[#F0E3CA] translate-y-full inline-block">
          {label}
        </span>
      </h2>
    </div>
  );
};

export default NameAnimate;
