import Image, { type StaticImageData } from "next/image";
import React from "react";

export default function Logo({ src }: { src: StaticImageData }) {
  return (
    <div className="w-full flex items-center justify-center pt-[3.2rem] pl-[1.7rem]">
      <Image src={src} alt="Next.js Logo" width={123} />
    </div>
  );
}
