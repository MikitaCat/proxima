import React from "react";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const LandingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          I present to you Proxima
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          Strive Forward
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        Proxima is Mikita's independent initiative crafted with Next.js 14. It
        emulates specific features of Trello™. The core motivation behind this
        project is to explore the depths of Next.js 14 while constructing a
        demonstrative portfolio that will enthrall potential employers and
        highlight my adeptness in this technology.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">
          View Proxima <ArrowRight />
        </Link>
      </Button>
    </div>
  );
};

export default LandingPage;
