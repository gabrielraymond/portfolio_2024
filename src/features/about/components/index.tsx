"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import TitleAnimate from "@/components/title/TitleAnimate";
import { ScrollTrigger, SplitText } from "gsap-trial/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SlideLeft from "./SlideLeft";
import SubSlideLeft from "./SubSlideLeft";
import SlideRight from "./SlideRight";
import StickerPlanes from "./StickerPlanes";
// import SplitText from "@/components/splitText/SplitText";

const About = () => {
  const [MouseMovement, setMouseMovement] = useState(0);

  const ref = useRef(null);

  const imageRef = useRef(null);
  const splitChar = useRef(null);

  const header2 = useRef(null);
  const header3 = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);

    let tlImage = gsap.timeline({
      delay: 3,
      defaults: { scale: 0.8 },
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top bottom",
        end: "+=500",
        scrub: true,
      },
    });
    tlImage.from(imageRef.current, { scale: 0.8 });
    tlImage.to(imageRef.current, {
      scale: 1,
    });

    let tlText = gsap.timeline({
      scrollTrigger: {
        trigger: splitChar.current,
        start: "top bottom",
        end: "+=50% top",
        scrub: true,
      },
    });
    tlText.from(splitChar.current, { opacity: 0, translateX: 100 });
    tlText.to(splitChar.current, { opacity: 1, translateX: 0 });

    let tlH2 = gsap.timeline({
      // defaults: { translateX: 200 },
      scrollTrigger: {
        trigger: header2.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // tlH2.from(header2.current, { translateX: '-500px' });
    tlH2.to(header2.current, { paddingRight: "200px" });

    let tlH23 = gsap.timeline({
      defaults: { translateX: -200 },
      scrollTrigger: {
        trigger: header3.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    tlH2.from(header3.current, { translateX: 0 });
    tlH23.to(header3.current, { translateX: 100 });
  }, []);

  return (
    <div className="relative">
      <div
        className="relative w-full min-h-screen text-white  overflow-hidden"
        // ref={ref}
      >
        <TitleAnimate
          direction="right"
          className="absolute right-0 overflow-hidden"
        >
          <h1 className="text-[12vw] uppercase font-bold ">About Me</h1>
        </TitleAnimate>

        <div
          className="w-full flex justify-center mt-[23vw] md:mt-[17vw]"
          ref={ref}
        >
          <div className="flex flex-col md:flex-row gap-10  max-w-[1444px] mx-8 ">
            <div
              className="relative md:w-1/2  md:h-[60vw] h-[70vh] max-h-[800px]"
              ref={imageRef}
            >
              <Image
                alt=""
                src={"/images/Foto_gab2.jpg"}
                fill
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
            <div className="relative  w-full md:w-1/2 flex items-start justify-start">
              <div className="sticky top-0 xl:text-2xl md:text-xl sm:text-lg text-sm text-white">
                <p className="  indent-7" ref={splitChar}>
                  I&apos;m a web developer based in Indonesia, specializing in
                  full-stack development and UI/UX design. My focus is on
                  creating impactful websites for companies aiming to establish
                  meaningful connections with their users. Proficient in various
                  coding languages and frameworks, I ensure that the websites I
                  build not only function seamlessly but also provide a visually
                  engaging and user-friendly experience.
                </p>
                <p className="mt-6 indent-7">
                  As a UI/UX designer, I prioritize crafting interfaces that
                  enhance user engagement and leave a lasting impression. I
                  believe in the power of well-designed digital experiences to
                  elevate a brand&apos;s online presence. If you&apos;re seeking to
                  enhance your digital footprint and make a lasting impact, I&apos;m
                  here to collaborate and transform your vision into a
                  compelling online reality. 🌐💻
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full h-[160vh] min-h-screen relative   text-white overflow-hidden"
        onMouseMove={(e: any) => {
          setMouseMovement(e);
        }}
      >
        <TitleAnimate
          direction="left"
          className="absolute  overflow-hidden translate-x-0 z-20"
        >
          <h1 className="text-[12vw] uppercase font-bold ">Services</h1>
        </TitleAnimate>
        <div className="w-full justify-center mt-[23vw] md:mt-[17vw] lg:flex hidden">
          <div className="absolute right-0 flex justify-end flex-col items-end max-w-[40vw]">
            <SlideLeft text="my expertise" />
            <SlideRight text="I focus on all things design and web related. With each of my services, my goal is to deliver an impactful and elevating digital experience for everyone." />
          </div>
          <div className="absolute left-0 flex justify-end flex-col items-end">
            <div className="">
              <SubSlideLeft direction="right" text="Web Development" />
              <SubSlideLeft direction="right" text="Web Design" />
              <SubSlideLeft direction="right" text="UI/UX Design" />
            </div>
          </div>
        </div>

        <div className="w-full px-[7%] mt-[23vw] md:mt-[17vw] z-30 relative block lg:hidden">
          <div className="w-full">
            <h2 className="text-4xl">my expertise</h2>
            <div className="w-full h-[1px] bg-white"></div>
            <p>
              I focus on all things design and web related. With each of my
              services, my goal is to deliver an impactful and elevating digital
              experience for everyone.
            </p>
          </div>
          <div className="mt-6">
            <SubSlideLeft text="Web Development" />
            <SubSlideLeft text="Web Design" />
            <SubSlideLeft text="UI/UX Design" />
          </div>
        </div>

        <div className="w-full px-[7%] mt-[23vw] md:mt-[17vw] z-30 relative block lg:hidden">
          <div className="w-full">
            <h2 className="text-4xl">my digital tool box.</h2>
            <div className="w-full h-[1px] bg-white"></div>
            <p>
              I focus on all things design and web related. With each of my
              services, my goal is to deliver an impactful and elevating digital
              experience for everyone.
            </p>
          </div>
          <div className="mt-6">
            <SubSlideLeft text="ReactJs" />
            <SubSlideLeft text="NextJs" />
            <SubSlideLeft text="ExpressJs" />
            <SubSlideLeft text="Figma" />
            <SubSlideLeft text="TailwindCSS" />
            <SubSlideLeft text="AntDesign" />
            <SubSlideLeft text="Bootstrap" />
            <SubSlideLeft text="React-Query" />
            <SubSlideLeft text="Redux" />
            <SubSlideLeft text="Zustand" />
          </div>
          <StickerPlanes MouseMovement={MouseMovement} />
        </div>

        <div className="w-full hidden justify-center mt-[23vw] md:mt-[17vw] relative lg:flex">
          <div className="absolute left-0 flex justify-end flex-col items-end max-w-[40vw]">
            <SlideLeft text="my digital tool box." />
            <SlideRight text="I focus on all things design and web related. With each of my services, my goal is to deliver an impactful and elevating digital experience for everyone." />
          </div>
          <div className="absolute right-0 flex justify-end flex-col items-end">
            <div className="">
              <SubSlideLeft direction="left" text="ReactJs" />
              <SubSlideLeft direction="left" text="NextJs" />
              <SubSlideLeft direction="left" text="ExpressJs" />
              <SubSlideLeft direction="left" text="Figma" />
              <SubSlideLeft direction="left" text="TailwindCSS" />
              <SubSlideLeft direction="left" text="AntDesign" />
              <SubSlideLeft direction="left" text="Bootstrap" />
              <SubSlideLeft direction="left" text="React-Query" />
              <SubSlideLeft direction="left" text="Redux" />
              <SubSlideLeft direction="left" text="Zustand" />
            </div>
          </div>
          <StickerPlanes MouseMovement={MouseMovement} />
        </div>
      </div>
      {/* <div className="obsolute w-[5000px] bg-slate-300 h-[200px] overflow-hidden"></div> */}
    </div>
  );
};

export default About;
