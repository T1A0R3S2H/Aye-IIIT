import { SparklesPreview } from "@/components/aboutSection";
import { TextGenerateEffectDemo } from "@/components/aboutText";
import { InfiniteMovingCardsDemo } from "@/components/faq";
// import { ParallaxScrollDemo } from "@/components/gallery";
import { DirectionAwareHoverDemo } from "@/components/members";
import React from "react";

function hi() {
  return (
    <>
      <SparklesPreview />

      <TextGenerateEffectDemo />
      <DirectionAwareHoverDemo />
      <InfiniteMovingCardsDemo />
      {/* <ParallaxScrollDemo /> */}
    </>
  );
}

export default hi;
