"use client";
import React from "react";
import { Card, CardContent } from "@repo/ui/components/ui/card";
import { Progress } from "@repo/ui/components/ui/progress";
import Image from "next/image";
import useStore from "../../../store/store";
import Logo from "../../_components/Logo";
import orangeLogo from "../../../public/images/OrangeLogo.png";

const data = [
  {
    prop: "Atractiveness",
    val: 80,
  },
  {
    prop: "Confidence",
    val: 70,
  },
  {
    prop: "Authenticity",
    val: 68,
  },
  {
    prop: "Potential",
    val: 87,
    color: "bg-[#FF6032]",
  },
];
export default function CustomCard() {
  const { image } = useStore();
  return (
    <Card className="w-full max-w-[22em] p-3" color="gray">
      <div className="flex items-center justify-start p-3 text-white">
        <Image
          src={image}
          alt="Next.js Logo"
          width={400}
          height={600}
          className="max-w-[8em] rounded-lg"
        />
        <div className="flex items-start justify-center flex-col gap-2 p-2">
          <h1 className="text-xl font-bold">Marta</h1>
          <p>🕔 27 yo</p>
          <p>💁‍♀️ Woman</p>
          <p>️🌶️ Looking for fun </p>
        </div>
      </div>
      <CardContent className="p-2">
        {data.map((item) => (
          <span
            className="flex w-full flex-col text-white pt-2"
            key={item.prop}
          >
            <p>{item.prop}</p>
            <Progress value={item.val} color={item.color} className="w-full" />
          </span>
        ))}
        <Logo src={orangeLogo} />
      </CardContent>
    </Card>
  );
}
