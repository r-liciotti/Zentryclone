import gsap from "gsap";
import { useEffect, useRef } from "react";

interface IAnimatedTitleProps {
  sectionId?: string;
  title: string;
  containerClass: string;
}
function AnimatedTitle(props: IAnimatedTitleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });
      titleAnimation.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0,0,0) rotateY(0deg) rotateX(-0deg)",
        ease: "power2.inOut",
        stagger: 0.02,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);
  return (
    <div
      id={props.sectionId}
      ref={containerRef}
      className={`animated-title ${props.containerClass}`}
    >
      {props.title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-wfill flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, index) => (
            <span
              key={index}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default AnimatedTitle;
