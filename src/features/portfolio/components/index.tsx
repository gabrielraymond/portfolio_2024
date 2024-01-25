import TitleHeader from "@/components/title/TitleHeader";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Portfolio = () => {
  return (
    <div
      className="min-h-screen w-full text-[#F0E3CA] px-[5%] py-[100px]"
      id="portfolio"
    >
      {/* <h1 className="text-[3vw] font-bold mb-6 z-20 relative">Selected Work</h1> */}
      <TitleHeader text={'Selected Work'} />
      <div className="grid grid-cols-4 xl:grid-cols-7  gap-16 items-center">
        <Link
          href={"https://albatech.id"}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-4 "
        >
          <div className="overflow-hidden group w-full h-[800px]  relative  rounded-lg">
            <Image
              src={"/projects/albatech.png"}
              alt=""
              fill
              className="w-full h-full object-cover transition-transform transform delay-100 duration-500 di scale-100 group-hover:scale-110 "
              objectFit="cover"
            />
          </div>
          <div className="py-3 relative">
            <div className="my-4 flex gap-2">
              <span className="px-3 py-1 border border-white rounded-full">
                2023
              </span>
              <span className="px-3 py-1 border border-white rounded-full">
                Reactjs
              </span>
              <span className="px-3 py-1 border border-white rounded-full">
                Bootstrap
              </span>
            </div>
            <h1 className="text-4xl font-bold">Albatech.id</h1>
            <h2 className="text-2xl">Frontend Development</h2>
          </div>
        </Link>
        <Link
          href={"https://travelxperienceprio.id"}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-4 xl:col-span-3"
        >
          <div className="relative w-full h-[600px]  overflow-hidden group rounded-lg">
            <Image
              src={"/projects/btn.png"}
              alt=""
              fill
              className="w-full h-full object-cover transition-transform transform delay-100 duration-500 di scale-100 group-hover:scale-110"
              objectFit="cover"
            />
          </div>
          <div className="py-3">
            <div className="my-4 flex gap-2">
              <span className="px-3 py-1 border border-white rounded-full">
                2024
              </span>
              <span className="px-3 py-1 border border-white rounded-full">
                Nextjs
              </span>
              <span className="px-3 py-1 border border-white rounded-full">
                Reactjs
              </span>
              <span className="px-3 py-1 border border-white rounded-full">
                Tailwind
              </span>
              <span className="px-3 py-1 border border-white rounded-full">
                Zustand
              </span>
            </div>
            <h1 className="text-4xl font-bold">Travel Experience with BTN</h1>
            <h2 className="text-2xl">Frontend Development</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
