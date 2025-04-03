import { useState, useEffect } from "react";

interface ScrollIndicatorProps {
    theme: "dark" | "light";
}

export default function ScrollIndicator({ theme }: ScrollIndicatorProps) {
  const [showArrow, setShowArrow] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    showArrow && (
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="none"
          viewBox="0 0 24 24"
          stroke={theme === "dark" ? "var(--color-green)" : "var(--color-blue)"}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    )
  );
}
