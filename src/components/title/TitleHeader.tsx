import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";

const TitleHeader: React.FC<{ text: string }> = ({ text }) => {
  const ref: any = useRef(null);
  useLayoutEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".titleHeader",
        scrub: false,
        start: "-400% center",
        end: "400% center",
        // markers: true,
      },
    });

    tl.fromTo(ref.current, { y: "200%" }, { y: "0%", delay:0.2, duration:0.5 });
  }, []);

  return (
    <div className="titleHeader overflow-hidden ">
      <h1
        className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6 z-20 relative uppercase "
        ref={ref}
      >
        {text}
      </h1>
    </div>
  );
};

export default TitleHeader;
