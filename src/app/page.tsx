import { SparklesPreview } from "@/components/aboutSection";
import { TextGenerateEffectDemo } from "@/components/aboutText";
import { InfiniteMovingCardsDemo } from "@/components/faq";
// import { GoogleGeminiEffectDemo } from "@/components/footer";
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
      {/* <GoogleGeminiEffectDemo /> */}
    </>
  );
}

export default hi;
