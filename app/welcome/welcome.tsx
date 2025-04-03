import { Page } from "../components/page";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import ScrollIndicator from "~/components/ScrollIndicator";

// Tableau des sections
const sections = [
  { name: "Khimaira", path: "/khimaira", color: "var(--color-green)" },
  { name: "EPs", path: "/eps", color: "var(--color-beige)" },
  { name: "Shows", path: "/shows", color: "var(--color-green)" },
  { name: "Videos", path: "/videos", color: "var(--color-beige)" },
  { name: "Radio", path: "/radio", color: "var(--color-green)" },
  { name: "Contact", path: "/contact", color: "var(--color-beige)" },
];

const randomOffsets = sections.map(() => Math.floor(Math.random() * 11) + 10);

export default function Welcome() {
  const [fontWeight, setFontWeight] = useState(500);
  const [letterSpacing, setLetterSpacing] = useState(0.25);
  const [isWaiting, setIsWaiting] = useState(false); // Indicateur de délai

  // Fonction pour générer un poids de police aléatoire
  const getRandomFontWeight = () => {
    const randomValues = [200, 400, 500, 600, 700, 800, 900]; // Poids de police possibles
    return randomValues[Math.floor(Math.random() * randomValues.length)];
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollPercentage = scrollY / (document.body.scrollHeight - windowHeight);

      // Ne pas changer la graisse trop fréquemment, uniquement après un certain défilement
      if (!isWaiting) {
        const newFontWeight = scrollPercentage > 0.1 ? getRandomFontWeight() : 200;
        const newLetterSpacing = Math.max(0.15, Math.min(0.5, 0.15 + scrollPercentage * 0.45));

        // Appliquer les nouveaux styles
        setLetterSpacing(newLetterSpacing);
        setFontWeight(newFontWeight);

        // Mettre en place un délai avant de pouvoir changer à nouveau la graisse
        setIsWaiting(true);
        
        // Après 200ms, permettre de changer à nouveau
        setTimeout(() => {
          setIsWaiting(false);
        }, 200); // 200ms de délai entre les changements
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isWaiting]);

  return (
    <Page theme="dark">
      <h1 className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl tracking-wide font-bold"
        style={{ fontWeight: fontWeight, letterSpacing: letterSpacing }}>
        FANTAZ
      </h1>

      {/* Flèche de scroll */}
      <ScrollIndicator theme="dark" />

      {/* Conteneur avec grande hauteur pour permettre le scroll */}
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
              rounded-sm transform rotate-[5deg] transition-transform duration-300 ease-in-out`}
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
