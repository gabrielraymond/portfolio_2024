import type { Metadata } from "next";
import { Inter, Noto_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import HeadMetaData from "@/components/headMetaData/HeadMetaData";

const inter = Inter({ subsets: ["latin"] });
const nato = Noto_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gabriel Raymond",
  description:
    "Explore a showcase of my web development and design projects that seamlessly blend innovation with functionality. Dive into a portfolio of unique, custom-coded websites, meticulously crafted for optimal performance and memorable user experiences.",
  keywords: [
    "Portfolio",
    "frontend",
    "developer",
    "gabriel raymond",
    "nextjs",
    "reactjs",
  ],
  icons:"/logo/logo_short.png",
  openGraph: {
    title: "Gabriel Raymond",
    description:
      "Explore a showcase of my web development and design projects that seamlessly blend innovation with functionality. Dive into a portfolio of unique, custom-coded websites, meticulously crafted for optimal performance and memorable user experiences.",
    url: "https://gabrielraymond.xyz",
    siteName: "Gabriel Raymond",
    images: { url: "/logo/logo-seo.jpg", alt: "gabriel raymond" },
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Gabriel Raymond",
    description:
      "Explore a showcase of my web development and design projects that seamlessly blend innovation with functionality. Dive into a portfolio of unique, custom-coded websites, meticulously crafted for optimal performance and memorable user experiences.",
    images: { url: "/logo/logo-seo.jpg", alt: "gabriel raymond" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="/logo/logo_short.png" sizes="any" /> */}
        {/* <HeadMetaData metaDescription="Travel Experience" /> */}
      </head>
      <body className={nato.className}>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
}
