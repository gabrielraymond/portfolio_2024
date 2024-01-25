import React, { useState } from "react";
import Message from "./message";
import Image from "next/image";
import Object3d from "./Object3d";
import TitleHeader from "@/components/title/TitleHeader";

const About2 = () => {
  const [MouseMovement, setMouseMovement] = useState(0);
  return (
    <div className="text-[#F0E3CA]" id="about">
      <Message />
      <div
        className=" my-[60px] relative overflow-hidden"
        onMouseMove={(e: any) => {
          setMouseMovement(e);
        }}
      >
        <div className="mx-[5%]">
          <TitleHeader text={"About me"} />
        </div>
        <Object3d MouseMovement={MouseMovement} />

        <div className=" relative mx-[5%] py-20 overflow-hidden">
          <div className="relative flex justify-center ">
            <div
              className="relative w-full md:w-1/2  md:h-[60vw] h-[70vh] max-h-[800px] z-20 rounded-xl  shadow-[10px_10px_15px_2px_rgba(0,0,0,0.5)]"
              // ref={imageRef}
            >
              <Image
                alt=""
                src={"/images/Foto_gab2.jpg"}
                fill
                objectFit="cover"
                className="w-full h-full rounded-xl brightness-75 transform-all duration-100 hover:brightness-100 delay-200 "
              />
            </div>
          </div>
          <div className="relative md:hidden z-[41] mt-9  p-4">
            <p>
              I&apos;m a web developer based in Indonesia, specializing in
              full-stack development and UI/UX design. My focus is on creating
              impactful websites for companies aiming to establish meaningful
              connections with their users. Proficient in various coding
              languages and frameworks, I ensure that the websites I build not
              only function seamlessly but also provide a visually engaging and
              user-friendly experience.
            </p>
          </div>

          <div className="absolute md:block hidden z-40 top-[20px] lg:left-[10%] max-w-[60%]  p-4  lg:p-8 rounded-lg">
            <p
              className="lg:text-2xl text-md indent-7 "
              style={{ textShadow: "4px 4px 6px #000000" }}
            >
              I&apos;m a web developer based in Indonesia, specializing in
              full-stack development and UI/UX design. My focus is on creating
              impactful websites for companies aiming to establish meaningful
              connections with their users.
            </p>
          </div>
          <div className="absolute md:block hidden z-40 bottom-[0%] right-0  max-w-[60%]  p-4  lg:p-8 rounded-lg">
            <p
              className="lg:text-2xl text-md indent-7"
              style={{ textShadow: "4px 4px 6px #000000" }}
            >
              Proficient in various coding languages and frameworks, I ensure
              that the websites I build not only function seamlessly but also
              provide a visually engaging and user-friendly experience.
            </p>
          </div>
          {/* <div className="absolute z-30 top-[60%] right-[0%] max-w-[30%] bg-[rgba(0,0,0,0.6)] p-8">
            <p className="text-2xl indent-7">
              As a UI/UX designer, I prioritize crafting interfaces that enhance
              user engagement and leave a lasting impression. I believe in the
              power of well-designed digital experiences to elevate a brand's
              online presence. If you're seeking to enhance your digital
              footprint and make a lasting impact, I'm here to collaborate and
              transform your vision into a compelling online reality. 🌐💻
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About2;
