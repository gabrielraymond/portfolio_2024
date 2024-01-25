import React from "react";
import Accordion from "./Accordion";
import RunningText from "./runningText";
import TitleHeader from "@/components/title/TitleHeader";

const Services = () => {
  return (
    <div className="text-[#F0E3CA]">
      <div className=" mx-[5%] pt-[100px] pb-[50px]" id="services">
        <TitleHeader text="Services" />
        <div className="flex flex-col-reverse lg:flex-row gap-10">
          <div className="w-full lg:w-1/2">
            <div>
              <Accordion
                title="Web Development"
                content="I excel in crafting one-of-a-kind websites, uniquely coded to perfectly match your brand's essence. My approach prioritizes scalability, peak performance, and accessibility, complemented by captivating animations and micro-interactions. The result is a website that not only stands out but also provides users with a memorable and engaging digital journey."
              />
              <Accordion
                title="Front-End"
                content="As a frontend specialist, I dedicate my expertise to the art of crafting visually striking websites that exclusively capture your brand essence. Through meticulous coding and design, I prioritize not only aesthetic appeal but also seamless user interactions. My commitment to optimal performance, accessibility, and the integration of captivating frontend features ensures that your website becomes a dynamic and memorable platform for users to engage with your brand."
              />
              <Accordion
                title="Back-End"
                content="In the realm of backend development, I specialize in architecting robust and scalable systems that form the backbone of your digital presence. My focus is on creating custom-coded solutions that seamlessly handle data, transactions, and business logic. Through efficient database management and server-side scripting, I ensure the performance, security, and reliability of your backend infrastructure, empowering your website or application to operate smoothly and effectively."
              />
              <Accordion
                title="Web Design"
                content="In the realm of web design, I'm dedicated to crafting visually striking and purposeful digital aesthetics. From conceptualizing wireframes to the meticulous selection of color schemes, fonts, and imagery, every element is thoughtfully curated to reflect your brand's personality. My design philosophy revolves around creating seamless user experiences, focusing on intuitive navigation and engaging visual elements. By combining creativity with a user-centric approach, I aim to produce web designs that not only capture attention but also convey your brand message effectively."
              />
              {/* Add more accordion sections as needed */}
            </div>
          </div>
          <div className="flex w-full lg:w-1/2">
            <div>
              <h1 className="text-[5vw] font-bold uppercase">What i do</h1>
              <p className="text-4xl max-w-[35ch]">
                I focus on all things digital and web related. With each of my
                services, my goal is to deliver an experience that serves a
                great purpose.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-10 mb-6" id="runningText">
        {/* <h1 className="">My Digital tool box.</h1> */}
        <RunningText direction="left">
          <span className=" opacity-100">React</span>{" "}
          <span className=" opacity-20">Nextjs</span>{" "}
          <span className=" opacity-100">Typecript</span>{" "}
          <span className=" opacity-20">NodeJs</span>{" "}
          <span className=" opacity-100">Tailwindcss</span>{" "}
          <span className=" opacity-20">Ant Design</span>{" "}
          <span className=" opacity-100">Bootstrap</span>{" "}
          <span className=" opacity-20">Expressjs</span>{" "}
          <span className=" opacity-100">Postgresql</span>{" "}
          <span className=" opacity-20">Prisma</span>{" "}
          <span className=" opacity-100">MongoDB</span>{" "}
          <span className=" opacity-20">Figma</span>{" "}
        </RunningText>
        <RunningText direction="right">
          <span className=" opacity-20">React</span>{" "}
          <span className=" opacity-100">Nextjs</span>{" "}
          <span className=" opacity-20">Typecript</span>{" "}
          <span className=" opacity-100">NodeJs</span>{" "}
          <span className=" opacity-20">Tailwindcss</span>{" "}
          <span className=" opacity-100">Ant Design</span>{" "}
          <span className=" opacity-20">Bootstrap</span>{" "}
          <span className=" opacity-100">Expressjs</span>{" "}
          <span className=" opacity-20">Postgresql</span>{" "}
          <span className=" opacity-100">Prisma</span>{" "}
          <span className=" opacity-20">MongoDB</span>{" "}
          <span className=" opacity-100">Figma</span>{" "}
        </RunningText>
        <RunningText direction="left">
          <span className=" opacity-100">Expressjs</span>{" "}
          <span className=" opacity-20">Postgresql</span>{" "}
          <span className=" opacity-100">Prisma</span>{" "}
          <span className=" opacity-20">MongoDB</span>{" "}
          <span className=" opacity-100">Figma</span>{" "}
          <span className=" opacity-20">React</span>{" "}
          <span className=" opacity-100">Nextjs</span>{" "}
          <span className=" opacity-20">Typecript</span>{" "}
          <span className=" opacity-100">NodeJs</span>{" "}
          <span className=" opacity-20">Tailwindcss</span>{" "}
          <span className=" opacity-100">Ant Design</span>{" "}
          <span className=" opacity-20">Bootstrap</span>{" "}
        </RunningText>
      </div>
    </div>
  );
};

export default Services;
