import { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import RoundedCorners from "./RoundedCorners";
import Button from "./Button";

function Story() {
  const frameRef = useRef<HTMLImageElement>(null);

  const handleMouseLeave = () => {
    const el = frameRef.current;

    gsap.to(el, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,

      ease: "power1.inOut",
    });
  };
  const handleMouseMove = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ) => {
    const { clientX, clientY } = e;
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (x - centerX) / 10;
    const rotateY = (y - centerY) / 10;

    gsap.to(el, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general uppercse text-sm md:text-[10px]">
          The multiversal ip world
        </p>
        <div className="relative size-full">
          <AnimatedTitle
            title="the st<b>o</b>ry of <br /> a hidden real<b>m</b>"
            sectionId="#story"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  src="./img/entrance.webp"
                  alt="entrance"
                  className="object-contain"
                />
              </div>
            </div>
            <RoundedCorners />
          </div>
        </div>
        <div className="-mt-80 flex w-full justify-center md:me-44 md:-mt-64 md:justify-end">
          <div className="w-fill md:itmes-start flex h-full flex-col items-center">
            <p className="font-circular-web mt-3 max-w-sm text-center text-violet-50 md:text-start">
              Where realms converge, lies Zentry and the boundless pillar.
              Discover its secrets and shape your fate amidst infinite
              opportunities.
            </p>
            <Button
              id="realm-button"
              title="DISCOVER PROLOUGE"
              containerClass="mt-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
