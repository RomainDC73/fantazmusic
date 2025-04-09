import { useState } from "react";
import { Link } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa"; // Import des icônes hamburger et close de react-icons
import { sections } from "~/sections/sections"; // Import des sections

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger */}
      <button
        className="fixed top-4 right-4 z-50 p-2 text-white hover:opacity-80"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <FaBars size={28} />
      </button>

      {/* Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/90 z-40 flex flex-col items-center justify-center space-y-8 text-3xl text-white font-light">
          <button
            className="absolute top-4 right-4 text-white hover:opacity-80"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes size={32} />
          </button>

          {sections.map((section) => (
            <Link
              key={section.path}
              to={section.path}
              className="hover:font-normal transition-all"
              onClick={() => setIsOpen(false)} // Fermer le menu au clic
            >
              {section.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
