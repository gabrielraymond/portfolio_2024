"use client";
import type { AppProps } from "next/app";
import { useRef } from "react";
import { LocomotiveScrollProvider as RLSProvider } from "react-locomotive-scroll";

import "locomotive-scroll/dist/locomotive-scroll.css";
import "../styles/globals.css";
import { usePathname } from "next/navigation";

const SmoothScroll = ({ children }: any) => {
  const pathname = usePathname();
  const containerRef = useRef(null);
  return (
    <RLSProvider
      options={{
        smooth: true,
        // ... all available Locomotive Scroll instance options
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      location={pathname}
      onLocationChange={(scroll: any) =>
        scroll.scrollTo(0, { duration: 0, disableLerp: true })
      }
      containerRef={containerRef}
    >
      {" "}
      <div data-scroll-container ref={containerRef}>
        {children}
      </div>
    </RLSProvider>
  );
};

export default SmoothScroll;
