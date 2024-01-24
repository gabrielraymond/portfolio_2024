"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  scroll,
  useAnimation,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  // const [scrollY, setScrollY] = useState(null);
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref);

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

  // useEffect(() => {
  //   const handleScrollLogo = () => {
  //     // Calculate the scroll position
  //     const scrollY = window.scrollY;

  //     // Trigger animation when scrolling past 100vh
  //     if (scrollY > 900) {
  //       controls.start({ opacity: 1 });
  //     } else {
  //       controls.start({ opacity: 0 });
  //     }
  //   };

  //   // Add the event listener for scrolling
  //   window.addEventListener("scroll", handleScrollLogo);

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("scroll", handleScrollLogo);
  //   };
  // }, [controls]);

  // scroll(progress => console.log(progress))
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  const { scrollY } = useScroll();

  useEffect(() => {
    console.log(scrollY);
  }, [scrollY]);

  const [scroll, setScroll] = useState<number>(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
    setScroll(latest);
  });

  const [logo, setLogo] = useState(false);

  return (
    <div ref={ref}>
      {/* {scroll > 300 && ( */}
      <motion.div
        className="fixed top-10 left-10 text-white z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: scroll > 300 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-semibold">Gabriel Raymond</h1>
      </motion.div>
      {/* )} */}

      <motion.nav
        className={`fixed top-14 z-50 left-1/2  transform -translate-x-1/2 -translate-y-1/2  border  text-white border-white p-4 min-h-[60px] rounded-full `}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          width: ["66px", "66px", "66px", "500px"],
          background: scroll > 200 ? "rgba(255,255,255,0.3)" : "transparent",
        }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        // style={{x:1}}
      >
        <motion.ul
          className="flex justify-center items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <li className="py-1 px-3">
            <Link href="#home" onClick={handleScroll}>
              Home
            </Link>
          </li>
          <li className="py-1 px-3">
            <Link href="#about" onClick={handleScroll}>
              About
            </Link>
          </li>
          <li className="py-1 px-3">
            <Link href="#portfolio" onClick={handleScroll}>
              Portfolio
            </Link>
          </li>
          <li className="py-1 px-3">
            <Link href="#contact" onClick={handleScroll}>
              Contact
            </Link>
          </li>
        </motion.ul>
      </motion.nav>
    </div>
  );
};

export default Navbar;
