import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";  // Import des icônes
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();  // Récupérer l'année actuelle
  
  return (
    <footer className="bg-[var(--color-blue)] text-white py-6 mt-auto">
      <div className="container mx-auto text-center">
        {/* Section des icônes sociales */}
        <motion.div
          className="flex justify-center space-x-4"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <a href="https://www.instagram.com/fantazfantaz/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-8 h-8 hover:text-[var(--color-beige)] transition-colors" />
          </a>
          <a href="https://www.facebook.com/fantazmusic/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="w-8 h-8 hover:text-[var(--color-beige)] transition-colors" />
          </a>
          <a href="https://www.youtube.com/@fantazmusic" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="w-8 h-8 hover:text-[var(--color-beige)] transition-colors" />
          </a>
        </motion.div>
  
        {/* Texte et année */}
        <p className="text-sm mt-4">© {currentYear} Fantaz. All rights reserved.</p>
        <p className="text-sm">Made with ❤️ by Fantaz</p>
      </div>
    </footer>
  );
}
