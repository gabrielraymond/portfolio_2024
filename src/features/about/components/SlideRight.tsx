import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const SlideRight = ({text}:any) => {
  const header2 = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tlH2 = gsap.timeline({
      // defaults: { translateX: 200 },
      delay: 0.5,
      scrollTrigger: {
        trigger: header2.current,
        start: "top bottom",
        end: "+=400 bottom",
        scrub: true,
      },
    });

    // tlH2.from(header2.current, { paddingLeft: 0 });
    // tlH2.to(header2.current, { paddingLeft: 200 });
  }, []);
  return (
    // <div className="absolute right-0">
    <>
      <h1 className="text-3xl  z-20" ref={header2}>
        {text}
      </h1>
      {/* <div className="w-full h-[2px] bg-white"></div> */}
    </>
    // </div>
  );
};

export default SlideRight;
