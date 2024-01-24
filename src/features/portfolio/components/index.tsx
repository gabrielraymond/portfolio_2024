import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Portfolio = () => {
  return (
    <div
      className="min-h-screen w-full text-white px-[5%] py-[100px]"
      id="portfolio"
    >
      <h1 className="text-5xl font-bold mb-10">Selected Work</h1>
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
          <div className="py-6 relative">
            <h1 className="text-4xl font-bold">Albatech.id</h1>
            <div className="mt-4 flex gap-3">
              <span className="px-3 py-1 border border-white rounded-full">
                Development
              </span>
              <span className="px-3 py-1 border border-white rounded-full">
                Front End
              </span>
              <span className="px-3 py-1 border border-white rounded-full">
                Design
              </span>
            </div>
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
          <div className="py-6">
            <h1 className="text-4xl font-bold">Travel Experience with BTN</h1>
            <div className="mt-4 flex gap-3">
              <span className="px-3 py-1 border border-white rounded-full">
                Development
              </span>
              <span className="px-3 py-1 border border-white rounded-full">
                Front End
              </span>
              <span className="px-3 py-1 border border-white rounded-full">
                Design
              </span>
            </div>
          </div>
        </Link>
        {/* <div className="col-span-3">
          <div className="relative w-full h-[600px]  overflow-hidden group">
            <Image
              src={"/projects/albatech.png"}
              alt=""
              fill
              className="w-full h-full object-cover transition-transform transform delay-100 duration-500 di scale-100 group-hover:scale-110"
              objectFit="cover"
            />
          </div>
          <p>gabriel raymond asdfasdhjkf asdfhj fasdlkjfaslkjdf</p>
        </div>
        <div className="col-span-4">
          <div className="project-image overflow-hidden group w-full h-[800px] bg-orange-400 relative  ">
            <Image
              src={"/projects/albatech.png"}
              alt=""
              fill
              className="w-full h-full object-cover transition-transform transform delay-100 duration-500 di scale-100 group-hover:scale-110"
              objectFit="cover"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold">albatech.id</h1>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Portfolio;
