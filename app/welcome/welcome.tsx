import { Page } from "../components/page";
import { Link } from "react-router";
import { useState, useEffect } from "react";

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
  const [showArrow, setShowArrow] = useState(true); // Etat pour gérer l'affichage de la flèche

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

      // Masquer la flèche quand on commence à scroller
      if (scrollY > 0 && showArrow) {
        setShowArrow(false);
      } else if (scrollY === 0 && !showArrow) {
        setShowArrow(true);
      }

      // Ne pas changer la graisse trop fréquemment, uniquement après un certain défilement
      if (!isWaiting) {
        const newFontWeight = scrollPercentage > 0.5 ? getRandomFontWeight() : 200; 
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
  }, [isWaiting, showArrow]);

  return (
    <Page theme="dark">
      <h1 className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl tracking-wide font-bold"
        style={{ fontWeight: fontWeight, letterSpacing: letterSpacing }}>
        FANTAZ
      </h1>

      {/* Flèche indicatrice de défilement */}
      {showArrow && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      )}

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
