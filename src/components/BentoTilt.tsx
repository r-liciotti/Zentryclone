import { useRef, useState } from "react";

interface IBentoTiltProps {
  children: React.ReactNode;
  className?: string;
}

function BentoTilt({ children, className = "" }: IBentoTiltProps) {
  const [transformStyle, setTransformStyle] = useState("");

  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouoseMove = (e: React.MouseEvent) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };
  const handleMouoseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      className={`${className} duration-500`}
      ref={itemRef}
      onMouseMove={handleMouoseMove}
      onMouseLeave={handleMouoseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
}

export default BentoTilt;
