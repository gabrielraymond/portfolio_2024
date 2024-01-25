import Link from "next/link";
import React from "react";

const dataSocialMedia = [
  {
    id: 1,
    title: "Linkedin",
    url: "https://www.linkedin.com/in/gabriel-dimpudus/",
  },
  {
    id: 2,
    title: "Instagram",
    url: "https://www.instagram.com/gabrielraymond_",
  },
  {
    id: 3,
    title: "X",
    url: "https://twitter.com/GabrielR1596",
  },
  {
    id: 4,
    title: "Github",
    url: "https://github.com/gabrielraymond",
  },
];

const menu = [
  {
    id: 1,
    title: "Home",
    url: "#main",
  },
  {
    id: 2,
    title: "About",
    url: "#about",
  },
  {
    id: 3,
    title: "Services",
    url: "#services",
  },
  {
    id: 4,
    title: "Portfolio",
    url: "#portfolio",
  },
  {
    id: 5,
    title: "Contact",
    url: "#contact",
  },
];

const LinkItem: React.FC<{ url: string; title: string }> = ({ url, title }) => {
  return (
    <Link href={url} target="blank_" rel="noopener noreferrer">
      {title}
    </Link>
  );
};

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
    <div className="bg-gradient-to-b to-[rgb(163,87,9)] from-[rgba(163,87,9,0.7)]  text-[#F0E3CA] w-full pt-10 pb-4 px-[5%]">
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:text-start text-center gap-10">
        <div className="col-span-1 lg:col-span-2">
          <h1 className="text-xl font-bold">NAVIGATION</h1>
          <div className="w-full h-[2px] bg-[#F0E3CA] my-3"></div>
          <ul className="">
            {menu.map((item: any) => (
              <li
                className="mb-1 hover:ml-2 hover:text-white transition-all duration-300"
                key={item.id}
              >
                <Link href={item.url} onClick={handleScroll}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h1 className="text-xl font-bold">SOCIALS</h1>
          <div className="w-full h-[2px] bg-[#F0E3CA] my-3"></div>
          <ul className="">
            {dataSocialMedia.map((item: any) => (
              <li
                className="mb-1 hover:ml-2 hover:text-white transition-all duration-300"
                key={item.id}
              >
                <LinkItem title={item.title} url={item.url} />
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h1 className="text-xl font-bold">CONTACTS</h1>
          <div className="w-full h-[2px] bg-[#F0E3CA] my-3"></div>
          <p>gabrielraymond.grd@gmail.com</p>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <h1>&#169; GabrielRaymond 2024</h1>
      </div>
    </div>
  );
};

export default Footer;
