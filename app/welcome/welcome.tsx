import { Page } from "../components/page";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import ScrollIndicator from "~/components/ScrollIndicator";
import Social from "~/components/Social";
import { sections } from "~/data/sections";

const randomOffsets = sections.map(() => Math.floor(Math.random() * 11) + 10);

export default function Welcome() {
  const [fontWeight, setFontWeight] = useState(500);
  const [letterSpacing, setLetterSpacing] = useState(0.25);
  const [isWaiting, setIsWaiting] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showSocial, setShowSocial] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  // Function to get a random font weight on scroll
  const getRandomFontWeight = () => {
    const randomValues = [200, 400, 500, 600, 700, 800, 900];
    return randomValues[Math.floor(Math.random() * randomValues.length)];
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      if (currentScrollTop > lastScrollTop && currentScrollTop > 0) {
        setShowSocial(false);
      } else if (currentScrollTop < 20) {
        setShowSocial(true);
      }
      setLastScrollTop(currentScrollTop);

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollPercentage = scrollY / (document.body.scrollHeight - windowHeight);
      // setScrollY(scrollY);

      if (!isWaiting) {
        const newFontWeight = scrollPercentage > 0.1 ? getRandomFontWeight() : 50;
        const newLetterSpacing = Math.max(0.15, Math.min(0.5, 0.15 + scrollPercentage * 0.45));

        setLetterSpacing(newLetterSpacing);
        setFontWeight(newFontWeight);

        setIsWaiting(true);

        setTimeout(() => {
          setIsWaiting(false);
        }, 200);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isWaiting]);

  const letters = "FANTAZ".split("");
  const [bgLetters, setBgLetters] = useState<
    { char: string; top: number; left: number; rotate: number; opacity: number; size: number }[]
  >([]);

  useEffect(() => {
    const randomLetters = Array.from({ length: 25 }, () => ({
      char: letters[Math.floor(Math.random() * letters.length)],
      top: Math.random() * 100, // % vertical
      left: Math.random() * 100, // % horizontal
      rotate: Math.random() * 60 - 30, // -30° to +30°
      opacity: Math.random() * 0 + 0.02, // 0.05 to 0.15
      size: Math.random() * 8 + 6, // text-6xl to text-[14xl]
      duration: 6 + Math.random() * 4, // 6s to 10s
    }));
    setBgLetters(randomLetters);
  }, []);

  return (
    <Page theme="dark">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {bgLetters.map((l, idx) => (
          <span
            key={idx}
            className="absolute text-white font-black select-none"
            style={{
              top: `${l.top}%`,
              left: `${l.left}%`,
              transform: `rotate(${l.rotate}deg) translateY(${scrollY * 0.01}px)`,
              fontSize: `${l.size}rem`,
              opacity: scrollY > 200 ? Math.max(0.01, l.opacity - scrollY * 0.0002) : 0,
              animation: `subtleFade ${6 + Math.random() * 4}s ease-in-out infinite`,
            }}
          >
            {l.char}
          </span>
        ))}
      </div>
      <Social visible={showSocial} />

      {/* Back to Home */}
      <h1
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl tracking-wide font-bold"
        style={{ fontWeight: fontWeight, letterSpacing: letterSpacing }}
      >
        FANTAZ
      </h1>

      {/* Scroll Arrow */}
      <ScrollIndicator />

      {/*
      {/* Container with high height to allow down scroll */}
      <div className="relative h-[300vh] w-full overflow-hidden">
        {sections.map((section, index) => (
          <Link
            key={section.path}
            to={section.path}
            className={`absolute ${
              index % 2 === 0
                ? "right-0 translate-x-6 md:right-auto md:left-1/2 md:-translate-x-1/2"
                : "left-0 -translate-x-6 md:left-1/2 md:-translate-x-1/2"
            } 
              w-2/4 md:w-[40%] lg:w-[30%] h-18 flex items-center justify-center text-[var(--color-blue)] text-2xl font-extralight
              rounded-sm transform rotate-[5deg] transition-transform duration-300 ease-in-out hover:font-normal hover:scale-[1.03]`}
            style={{
              backgroundColor: section.color,
              top: `${105 + randomOffsets.slice(0, index).reduce((a, b) => a + b, 0)}vh`,
            }}
          >
            {section.name}
          </Link>
        ))}
      </div>
    </Page>
  );
}