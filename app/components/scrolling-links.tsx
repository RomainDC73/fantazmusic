import { useEffect, useState } from "react";

export function ScrollingLinks() {
  const links = [
    { title: "Accueil", href: "/" },
    { title: "Événements", href: "/events" },
    { title: "Galerie", href: "/gallery" },
    { title: "À propos", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-[300vh] flex flex-col items-center">
      {links.map((link, index) => {
        // Position dynamique des blocs
        const position = (index + 1) * 150;
        const opacity = Math.max(0, 1 - Math.abs(scrollY - position) / 300);
        const translateY = Math.max(-100, 200 - Math.abs(scrollY - position) * 0.5);

        return (
          <a
            key={index}
            href={link.href}
            className={`scroll-link ${index % 2 === 0 ? "left" : "right"}`}
            style={{
              opacity,
              transform: `translateY(${translateY}px)`,
            }}
          >
            {link.title}
          </a>
        );
      })}
    </div>
  );
}
