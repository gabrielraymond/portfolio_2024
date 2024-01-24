import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";

const Object = ({ className }: { className: string }) => {
  const ref = useRef(null);
  useLayoutEffect(() => {
    let tl = gsap.timeline({
      defaults: {
        ease: "power2",
        delay: 1,
        transform: "all",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          end: "bottom 15%",
          scrub: false,
          toggleActions: "play reverse play reverse",
        },
      },
    });

    // tl.from(ref.current, { scaleX: "0%", scaleY: "0%" });
    tl.to(ref.current, {
      scaleX: "100%",
      scaleY: "100%",
      duration: 0.3,
      delay: 0.5,
    });
  }, []);
  return (
    <div
      className={`  transition-all absolute  bg-[#FF8303] rounded-lg ${className} `}
      ref={ref}
    ></div>
  );
};

export default Object;
