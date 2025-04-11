import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 mt-32">
      <div className="container mx-auto text-center">

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
  
        <p className="font-thin text-xs mt-4">© {currentYear} Fantaz. All rights reserved.</p>
        <p className="font-thin text-xs">Made by Fantaz with his bare fucking hands.👋</p>
      </div>
    </footer>
  );
}
