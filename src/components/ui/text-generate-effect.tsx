import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate(
            sectionRef.current.querySelectorAll("span"), // Select all spans within the section for animation
            {
              opacity: 1,
            },
            {
              duration: 2,
              delay: stagger(0.2),
            }
          );
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const renderWords = () => {
    return (
      <motion.div ref={sectionRef}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="dark:text-gray-400 text-black opacity-0  mb-20 md:text-8xl text-5xl lg:text-[10rem]  relative z-20"

          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-gray-400 text-black text-[1.5rem] leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
