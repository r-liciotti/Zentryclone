import { JSX } from "react";

interface IButtonProps {
  src: string;
  title: JSX.Element;
  description: string;
  isComingSoon: boolean;
}

function BentoCard(props: IButtonProps) {
  return (
    <div className="relative size-full">
      <video
        src={props.src}
        autoPlay={true}
        loop={true}
        muted={true}
        className="absolute top-0 left-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title"> {props.title}</h1>
          {props.description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">
              {props.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BentoCard;
