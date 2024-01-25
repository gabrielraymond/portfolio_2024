import { useRef, useState } from "react";
import { gsap } from "gsap";

const Accordion = ({ title, content }: { title: string; content: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);

    // Use GSAP for animations
    gsap.to(ref.current, {
      height: isOpen ? 0 : "auto",
      opacity: isOpen ? 0 : 1,
      duration: 0.5,
      ease: "power2.inOut",
    });
  };

  return (
    <div className="accordion border-b-2 border-[#F0E3CA]">
      <div
        className="accordion-header py-3 my-2 pr-3 text-3xl lg:text-5xl font-bold cursor-pointer flex justify-between relative"
        onClick={toggleAccordion}
      >
        <div className="transition-all duration-500  hover:ml-6">{title}</div>
        <div
          className={`absolute right-0 flex items-center h-full transition-all duration-500 ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
        >
          <div className="w-[20px] bg-[#F0E3CA] h-[2px]"></div>
        </div>
        <div
          className={`absolute right-0 flex items-center h-full transition-all duration-500 ${
            isOpen ? "rotate-[270]" : "rotate-90"
          }`}
        >
          <div className="w-[20px] bg-[#F0E3CA] h-[2px]"></div>
        </div>
      </div>
      <div ref={ref} className={`accordion-content overflow-hidden  h-0 `}>
        <p className="pb-6 pt-2 ">{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
