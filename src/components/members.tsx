"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
// import imgTarsh from "../public/tarsh-pp.jpg";

export function DirectionAwareHoverDemo() {
  const imageUrl1 = "/aaryan.jpg";

  const imageUrl2 = "/tarsh.jpg";

  const imageUrl3 = "/himanshu-pp.png";

  const imageUrl4 = "/kanishq-pp.png";

  const imageUrl5 = "/utkarsh-pp.png";
  const imageUrl6 = "/partik-pp.png";

  const imageUrl7 = "/hitesh-pp.png";

  const imageUrl8 = "/rohan-pp.png";

  const imageUrl9 = "/manas-pp.png";

  return (
    <div className="">
      <h1 className="mt-48 mb-16 md:text-9xl sm:text-5xl lg:text-[8rem] font-bold justify-center text-center items-center text-orange-700">
        Members
      </h1>

      <div className=" flex justify-center" style={{ width: "100%" }}>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-4"
          style={{ width: "75%" }}
        >
          <div className="h-[30rem] relative flex items-center justify-center">
            <DirectionAwareHover imageUrl={imageUrl1}>
              <p className="font-bold text-xl">Aaryan</p>
              <p className="font-normal text-sm">$1299 / night</p>
            </DirectionAwareHover>
          </div>

          <div className="h-[30rem] relative flex items-center justify-center">
            <DirectionAwareHover imageUrl={imageUrl2}>
              <p className="font-bold text-xl">Tarsh</p>
              <p className="font-normal text-sm">$1299 / night</p>
            </DirectionAwareHover>
          </div>

          <div className="h-[30rem] relative flex items-center justify-center">
            <DirectionAwareHover imageUrl={imageUrl3}>
              <p className="font-bold text-xl">Himanshu</p>
              <p className="font-normal text-sm">$1299 / night</p>
            </DirectionAwareHover>
          </div>

          <div className="h-[30rem] relative flex items-center justify-center">
            <DirectionAwareHover imageUrl={imageUrl4}>
              <p className="font-bold text-xl">Kanishq</p>
              <p className="font-normal text-sm">$1299 / night</p>
            </DirectionAwareHover>
          </div>

          <div className="h-[30rem] relative flex items-center justify-center">
            <DirectionAwareHover imageUrl={imageUrl5}>
              <p className="font-bold text-xl">Utkarsh</p>
              <p className="font-normal text-sm">$1299 / night</p>
            </DirectionAwareHover>
          </div>

          <div className="h-[30rem] relative flex items-center justify-center">
            <DirectionAwareHover imageUrl={imageUrl6}>
              <p className="font-bold text-xl">Partik</p>
              <p className="font-normal text-sm">$1299 / night</p>
            </DirectionAwareHover>
          </div>

          <div className="h-[30rem] relative flex items-center justify-center">
            <DirectionAwareHover imageUrl={imageUrl7}>
              <p className="font-bold text-xl">Hiteshwar</p>
              <p className="font-normal text-sm">$1299 / night</p>
            </DirectionAwareHover>
          </div>

          <div className="h-[30rem] relative flex items-center justify-center">
            <DirectionAwareHover imageUrl={imageUrl8}>
              <p className="font-bold text-xl">Rohan</p>
              <p className="font-normal text-sm">$1299 / night</p>
            </DirectionAwareHover>
          </div>

          <div className="h-[30rem] relative flex items-center justify-center">
            <DirectionAwareHover imageUrl={imageUrl9}>
              <p className="font-bold text-xl">Manas</p>
              <p className="font-normal text-sm">$1299 / night</p>
            </DirectionAwareHover>
          </div>
        </div>
      </div>
    </div>
  );
}
