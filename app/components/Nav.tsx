import { useState } from "react";
import { Link } from "react-router";
import { IoMenuOutline } from "react-icons/io5"; // Icône hamburger
import { LiaTimesSolid } from "react-icons/lia"; // Icône fermer
import { sections } from "~/data/sections"; // Import des sections

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Detect active theme
  const theme = document.body.classList.contains("theme-light") ? "light" : "dark";

  return (
    <>
      {/* Hamburger */}
      {!isOpen && (
        <button
          className="fixed top-4 right-4 z-50 p-2 hover:opacity-80"
          onClick={toggleMenu} // Ouvre le menu
          aria-label="Open menu"
        >
          <IoMenuOutline size={28} />
        </button>
      )}

      {/* Overlay Menu */}
      {isOpen && (
        <div
          className={`fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8 text-3xl font-light ${
            theme === "light" ? "bg-white text-[var(--color-beige)]" : "bg-black/90 text-[var(--color-beige)]"
          }`} // Adjust background and text color based on theme
        >
          <button
            className="absolute top-4 right-4 hover:opacity-80"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <LiaTimesSolid size={32} />
          </button>

          {sections.map((section) => (
            <Link
              key={section.path}
              to={section.path}
              className="hover:font-normal transition-all"
              onClick={toggleMenu}
            >
              {section.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
