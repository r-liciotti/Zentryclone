import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

const navItems = ["Nexus", "Vault", "Products", "About", "Contact"];

function Navbar() {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const navContainerRef = useRef<HTMLDivElement>(null);
  const audioElementRef = useRef<HTMLAudioElement>(null);

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavbarVisible(true);
      navContainerRef.current?.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavbarVisible(false);
      navContainerRef.current?.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavbarVisible(true);
      navContainerRef.current?.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavbarVisible ? 0 : -100,
      opacity: isNavbarVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavbarVisible]);
  const toggleAudioIndicator = () => {
    setIsAudioPlaying(!isAudioPlaying);
    setIsIndicatorActive(!isIndicatorActive);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current?.play();
    } else {
      audioElementRef.current?.pause();
    }
  }, [isAudioPlaying]);

  return (
    <nav
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <div className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <img src="./img/logo.png" alt="logo" className="w-10" />

            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />

            <div className="flex h-full items-center">
              <div className="hidden md:block">
                {navItems.map((item, index) => (
                  <a
                    className="nav-hover-btn"
                    href={`#${item.toLowerCase()}`}
                    key={index}
                  >
                    {item}
                  </a>
                ))}
              </div>

              <button
                onClick={toggleAudioIndicator}
                className="ml-10 flex items-center space-x-0.5"
              >
                <audio
                  src="./audio/loop.mp3"
                  ref={audioElementRef}
                  className="hidden"
                  loop
                />
                {[1, 2, 3, 4].map((bar) => (
                  <div
                    key={bar}
                    style={{ animationDelay: `${bar * 0.1}s` }}
                    className={`indicator-line ${isIndicatorActive ? "active" : ""}`}
                  />
                ))}
              </button>
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
}

export default Navbar;
