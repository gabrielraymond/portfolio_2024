import { useEffect, useRef } from "react";
import { gsap, Power3 } from "gsap";

const RunningText: React.FC<{ direction: string; children: any }> = ({
  direction = "right",
  children,
}) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textElement = textRef.current;

    const runAnimation = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#runningText",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          //   markers: true,
          //   toggleActions: "play ",
        },
      }); // Set repeat to -1 for infinite loop

      tl.fromTo(
        textElement,
        { x: direction === "left" ? "0%" : "-50%" },
        {
          x: direction === "left" ? "-50%" : "0%",
          duration: 20,
          ease: "power1.in",
        }
      );

      return tl;
    };

    runAnimation();

    // Clean up GSAP on component unmount
    // return () => gsap.timeline().clear();
  }, []);

  return (
    <div className="text-running overflow-hidden relative h-20">
      <div
        ref={textRef}
        className="absolute text-xl font-bold whitespace-nowrap"
      >
        <div className="w-full text-7xl ">{children}</div>
      </div>
    </div>
  );
};

export default RunningText;
