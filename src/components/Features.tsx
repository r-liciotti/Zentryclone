import { TiLocationArrow } from "react-icons/ti";
import BentoCard from "./BentoCard";
import BentoTilt from "./BentoTilt";

function Features() {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into the Metagme Layer
          </p>
          <p className="font-circular-web max-w-md text-lg text-blue-50 opacity-50">
            Immerse yourself in a rich and ever-expanding universe where a
            vibrant array o fproducts converge into an interconnected overlay
            experience on your world.
          </p>
        </div>
        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="./videos/feature-1.mp4"
            title={
              <>
                Radia<b>n</b>t
              </>
            }
            description="The game of games app transforming moments across Web2 & Web3 titles into rewards"
            isComingSoon={true}
          />
        </BentoTilt>
        <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 col-span-2 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="./videos/feature-2.mp4"
              title={
                <>
                  Zig<b>m</b>a
                </>
              }
              isComingSoon={true}
              description="The NFT collection merging Zentry’s IP, AI, and gaming—pushing the boundaries of NFT innovation."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 col-span-2 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="./videos/feature-3.mp4"
              title={
                <>
                  N<b>e</b>xus
                </>
              }
              description="The metagame portal uniting humans & AI to play, compete and earn, shaping profiles that reflect their legacy."
              isComingSoon={false}
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 col-span-2 row-span-1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="./videos/feature-4.mp4"
              title={
                <>
                  Az<b>u</b>l
                </>
              }
              description="The agent of agents elevating agentic AI experience to be more fun and productive. "
              isComingSoon={false}
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title max-w-64 text-black">
                M<b>o</b>re co<b>m</b>ing s<b>o</b>on!
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <video
              src="./videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            ></video>
          </BentoTilt>
        </div>
      </div>
    </section>
  );
}

export default Features;
