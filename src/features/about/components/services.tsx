import React from "react";
import Accordion from "./Accordion";

const Services = () => {
  return (
    <div className="text-[#F0E3CA] mx-[5%] my-[60px]">
      <h1 className="text-[3vw] font-bold mb-6 z-20 relative">Services</h1>
      <div className="grid grid-cols-2 gap-10">
        <div>
          <div>
            <Accordion
              title="Web Development"
              content="Content for Section 1"
            />
            <Accordion title="Front-End" content="Content for Section 2" />
            <Accordion title="Back-End" content="Content for Section 2" />
            <Accordion title="Web Design" content="Content for Section 2" />
            {/* Add more accordion sections as needed */}
          </div>
        </div>
        <div className="flex">
          <div>
            <h1 className="text-[5vw] font-bold uppercase">What i do</h1>
            <p className="text-4xl max-w-[35ch]">
              I focus on all things digital and web related. With each of my
              services, my goal is to deliver an experience that serves a great
              purpose.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
