"use client";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import ImageWrapperIcon from "@/components/ImageWrapperIcon/ImageWrapperIcon";

export default function StickerPlanes({ MouseMovement }: any) {
  const plane1 = useRef(null);
  const plane2 = useRef(null);

  let requestAnimationFrameId: any = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.008;

  useEffect(() => {
    manageMouseMove(MouseMovement);
  }, [MouseMovement]);

  const manageMouseMove = (e: any) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;

    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start: number, target: number, amount: number) =>
    start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, { x: `+=${xForce}`, y: `+=${yForce}` });
    gsap.set(plane2.current, {
      x: `+=${xForce * 0.3}`,
      y: `+=${yForce * 0.3}`,
    });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce != 0 || yForce != 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  };

  return (
    <div className="absolute top-0 w-full h-screen pointer-events-none z-0 ">
      <div
        ref={plane1}
        id="StickerOneLayer"
        className="absolute top-0 w-full h-screen pointer-events-none "
      >
        <ImageWrapperIcon
          className={"top-0 right-[35%] w-[10vh] lg:w-[10vh] "}
          custom={1.4}
        >
          <Image
            className="inline-block w-full h-full"
            src={"/icons/typescript.png"}
            height={300}
            width={300}
            alt="bubble-tea-sticker"
          />
        </ImageWrapperIcon>
        <ImageWrapperIcon
          className={"left-[30%] top-[-10%] w-[8vh] lg:w-[12vh]"}
          custom={2.8}
        >
          <Image
            className="inline-block align-middle"
            src={"/icons/react.png"}
            height={300}
            width={300}
            alt="cookie-sticker"
          />
        </ImageWrapperIcon>
        <ImageWrapperIcon
          className={"left-[40%] bottom-[20%] w-[8vh] lg:w-[12vh]"}
          custom={4.4}
        >
          <Image
            className="inline-block align-middle"
            src={"/icons/css3.png"}
            height={300}
            width={300}
            alt="apron-sticker"
          />
        </ImageWrapperIcon>
        <ImageWrapperIcon
          className={"left-[0%] bottom-[40%] w-[10vh] lg:w-[15vh]"}
          custom={3.5}
        >
          <Image
            className="inline-block align-middle"
            src={"/icons/git.png"}
            height={300}
            width={300}
            alt="fried-egg-sticker"
          />
        </ImageWrapperIcon>
      </div>
      <div
        ref={plane2}
        id="StickerTwoLayer"
        className="absolute top-0 w-full h-screen pointer-events-none"
      >
        <ImageWrapperIcon
          className={"left-[30%] top-[22%] w-[9vh] lg:w-[14vh]"}
          custom={2}
        >
          <Image
            className="w-full h-full "
            src={"/icons/html5.png"}
            height={300}
            width={300}
            alt="Croissant-sticker"
          />
        </ImageWrapperIcon>
        <ImageWrapperIcon
          className={"bottom-[10%] left-[22%]  w-[8vh] lg:w-[12vh]"}
          custom={4}
        >
          <Image
            className="inline-block align-middle"
            src={"/icons/node-js.png"}
            height={300}
            width={300}
            alt="Donut-sticker"
          />
        </ImageWrapperIcon>

        <ImageWrapperIcon
          className={"bottom-[20%] right-[0%] w-[9vh] lg:w-[14vh]"}
          custom={1}
        >
          <Image
            className="inline-block align-middle"
            src={"/icons/docker.png"}
            height={300}
            width={300}
            alt="Chef's-Hat-sticker"
          />
        </ImageWrapperIcon>

        <ImageWrapperIcon
          className={"top-[0%] right-[0%] w-[8vh] lg:w-[12vh]"}
          custom={3}
        >
          <Image
            className="inline-block align-middle"
            src={"/icons/figma.png"}
            height={300}
            width={300}
            alt="Cup-of-tea-sticker"
          />
        </ImageWrapperIcon>
      </div>
    </div>
  );
}
