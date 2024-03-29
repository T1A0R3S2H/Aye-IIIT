"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Just when someone said - "Kota ke kaunse junglo se aate ho?"`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} className={undefined} />;
}
