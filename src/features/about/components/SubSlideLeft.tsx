import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const SubSlideLeft = ({ text, direction }: any) => {
  const header2 = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tlH2 = gsap.timeline({
      defaults: { ease: "power2.in" },
      scrollTrigger: {
        trigger: header2.current,
        start: "20% bottom",
        end: "bottom top",
        markers: true,
        scrub: false,
        toggleActions: "play reverse play reverse"
      },
    });

    tlH2.from(header2.current, {
      translateX: direction === "left" ? 1200 : -1200,
    });
    tlH2.to(header2.current, { translateX: 0, delay: 0.5 });
  }, []);
  return (
    <React.Fragment>
      <h1 className="relative lg:text-7xl text-4xl pr-4 z-20" ref={header2}>
        {text}
      </h1>
    </React.Fragment>
  );
};

export default SubSlideLeft;
