import Link from "next/link";
import React from "react";

const Footer = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#A35709] text-[#F0E3CA] w-full pt-10 pb-4 px-[5%]">
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:text-start text-center gap-10">
        <div className="col-span-1 lg:col-span-2">
          <h1 className="text-xl font-bold">NAVIGATION</h1>
          <div className="w-full h-[2px] bg-[#F0E3CA] my-3"></div>
          <ul className="">
            <li className="mb-1">
              <Link href="#home" onClick={handleScroll}>
                Home
              </Link>
            </li>
            <li className="mb-1">
              <Link href="#about" onClick={handleScroll}>
                About
              </Link>
            </li>
            <li className="mb-1">
              <Link href="#services" onClick={handleScroll}>
                Services
              </Link>
            </li>
            <li className="mb-1">
              <Link href="#portfolio" onClick={handleScroll}>
                Portfolio
              </Link>
            </li>
            <li className="mb-1">
              <Link href="#contact" onClick={handleScroll}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-xl font-bold">SOCIALS</h1>
          <div className="w-full h-[2px] bg-[#F0E3CA] my-3"></div>
          <ul className="">
            <li className="mb-1">Linkedin</li>
            <li className="mb-1">Instagram</li>
            <li className="mb-1">X</li>
            <li className="mb-1">Github</li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-xl font-bold">CONTACTS</h1>
          <div className="w-full h-[2px] bg-[#F0E3CA] my-3"></div>
          <ul className="">
            <li className="mb-1">Home</li>
            <li className="mb-1">About</li>
            <li className="mb-1">Services</li>
            <li className="mb-1">Portfolio</li>
            <li className="mb-1">Contact</li>
          </ul>
        </div>
      </div>
      {/* <div className="w-full h-[1px] bg-[#F0E3CA] my-3"></div> */}
      <div className="mt-10 flex justify-center">
        <h1>Copyright GabrielRaymond</h1>
      </div>
    </div>
  );
};

export default Footer;
