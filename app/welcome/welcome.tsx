import { Page } from "../components/page";
import { Link } from "react-router";

// Tableau des sections
const sections = [
  { name: "Khimaira", path: "/khimaira", color: "var(--color-secondary)" },
  { name: "EPs", path: "/eps", color: "var(--color-accent)" },
  { name: "Shows", path: "/shows", color: "var(--color-secondary)" },
  { name: "Videos", path: "/videos", color: "var(--color-accent)" },
  { name: "Contact", path: "/contact", color: "var(--color-secondary)" },
];

// Génération d'espacements aléatoires (entre 10vh et 20vh)
const randomOffsets = sections.map(() => Math.floor(Math.random() * 11) + 10);

export default function Welcome() {
  return (
    <Page theme="dark">
      <h1 className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold z-10">
        FANTAZ
      </h1>

      {/* Conteneur avec grande hauteur pour permettre le scroll */}
      <div className="relative h-[300vh] w-full">
        {sections.map((section, index) => (
          <Link
            key={section.path}
            to={section.path}
            className={`absolute ${index % 2 === 0 ? "right-0" : "left-0"} w-2/4 h-24 flex items-center justify-center text-[var(--color-primary)] text-2xl font-bold
              rounded-lg transform rotate-[10deg] transition-transform duration-300 ease-in-out`}
            style={{
              backgroundColor: section.color,
              top: `${100 + randomOffsets.slice(0, index).reduce((a, b) => a + b, 0)}vh`,
            }}
          >
            {section.name}
          </Link>
        ))}
      </div>
    </Page>
  );
}
