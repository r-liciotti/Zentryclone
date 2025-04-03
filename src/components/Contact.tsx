import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

function Contact() {
  return (
    <section id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute top-0 -left-20 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="./img/contact-1.webp"
            alt="Contact 1"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="./img/contact-2.webp"
            alt="Contact 2"
            clipClass="contact-clip-path-2 lg:translate-y-10 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:right-10 md:left-auto lg:top-20 lg:w-80">
          <ImageClipBox
            src="./img/swordman-partial.webp"
            alt="Swordman partial"
            clipClass="absolute  md:scale-125"
          />
          <ImageClipBox
            src="./img/swordman.webp"
            alt="Swordman"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="font-general mb-10 text-[10px] uppercase">
            Join Zentry
          </p>
          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether."
            containerClass="special-font !md:text-[6.2rem] font-zentry w-full !text-5xl !leading-[.9] !font-black"
          />

          <Button
            id="contact-us"
            title="contact us"
            containerClass="mt-10 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}

function ImageClipBox({
  src,
  alt,
  clipClass,
}: {
  src: string;
  alt: string;
  clipClass: string;
}) {
  return (
    <div className={clipClass}>
      <img src={src} alt={alt} />
    </div>
  );
}

export default Contact;
