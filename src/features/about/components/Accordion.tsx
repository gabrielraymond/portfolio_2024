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
    <div className="accordion border-b-2">
      <div
        className="accordion-header py-3 pr-3 text-2xl cursor-pointer flex justify-between relative"
        onClick={toggleAccordion}
      >
        <div>{title}</div>
        <div className="absolute right-0 flex items-center">
          <div className="w-[10px] bg-white h-[2px]"></div>
        </div>
      </div>
      <div ref={ref} className={`accordion-content overflow-hidden  h-0 `}>
        <p className="pb-6 pt-2 px-3">{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
