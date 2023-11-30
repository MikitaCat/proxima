import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});

interface LogoProps {
  variant: "opaque" | "transparent";
}

export const Logo = ({ variant }: LogoProps) => {
  const chooseVariant = () => {
    if (variant === "opaque") {
      return "2";
    }

    if (variant === "transparent") return "";
  };

  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image
          src={`/logo${chooseVariant()}.svg`}
          alt="Logo"
          height={30}
          width={30}
        />
        <p
          className={cn("text-lg text-neutral-700 pt-1", headingFont.className)}
        >
          Proxima
        </p>
      </div>
    </Link>
  );
};
