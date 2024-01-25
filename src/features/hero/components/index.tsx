"use client";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import NameAnimate from "./NameAnimate";

const defaultAnimations = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    outlineColor: "white",
  },
};

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["70%", "0%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  // useEffect(() => {
  //   console.log(scrollYProgress);
  // }, [scrollYProgress]);

  return (
    <div
      className="relative w-full flex justify-center h-screen overflow-hidden"
      id="home"
      ref={ref}
    >
      <motion.div
        className={`absolute h-[140vh] w-full filter brightness-[60%]`}
        initial={{ scale: 1 }}
        animate={{ scale: [1, 0.65] }}
        transition={{ duration: 1 }}
        style={{ scale: backgroundY }}
      >
        <Image
          src={
            "https://images.unsplash.com/photo-1554797589-7241bb691973?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt=""
          fill
          objectFit="cover"
          className="object-cover"
        />
      </motion.div>

      <div className="mt-[5vh] flex items-center justify-center">
        <motion.div
          className="absolute w-[350px] h-[475px] brightness-[80%]"
          // data-scroll
          // data-scroll-speed="0.3"
          initial={{ height: "0px" }}
          animate={{ height: "475px" }}
        >
          <Image
            src={
              "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt=""
            fill
            objectFit="cover"
            objectPosition="top"
          />
        </motion.div>
        <motion.div
          className="absolute w-[350px] h-[475px] brightness-[100%] z-20 bg-[rgba(0,0,0,0.2)]"
          // data-scroll
          // data-scroll-speed="0.3"
          initial={{ height: "0px" }}
          animate={{ height: "475px" }}
        ></motion.div>
        <div className="flex flex-col items-center">
          <NameAnimate label={"Hi, Gabriel_Raymond here"} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
