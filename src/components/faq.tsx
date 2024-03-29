"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div>
      <h1 className="mt-48 md:text-9xl sm:text-5xl lg:text-[8rem] font-bold justify-center text-center items-center text-orange-700">
        FAQs
      </h1>
      <div className="h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote: "Just 6'4'' tall, Tarsh is",

    title: "How long is Tarsh actually?",
  },
  {
    quote: "Ummmm... manas?",

    title: "Logic kyu nahi baith rha??",
  },
  {
    quote: "Even the rest 8 of us don't know how :(",

    title: "How is Partik's CGPA so high?",
  },
  {
    quote:
      "Once the gang was doing some blasphemious tom foolery, and then there was a voice from the heavens[MNIT Off*cial], 'Aye IIIT!!, ye kya kar rhe ho? kya ye tumhara sanskar hai?, kya ye tumhara shistachar hai? kaunsa sem? Kota ke kaunse junglo se aate ho?'",

    title: "What is the meaning of Aye-IIIT",
  },
];
