import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Social({ visible }: { visible: boolean }) {
  return (
    <motion.div
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : -30,
        pointerEvents: visible ? "auto" : "none"
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex space-x-4">
        <a href="https://www.instagram.com/fantazfantaz/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="w-8 h-8 hover:text-[var(--color-beige)] transition-colors" />
        </a>
        <a href="https://www.facebook.com/fantazmusic/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="w-8 h-8 hover:text-[var(--color-beige)] transition-colors" />
        </a>
        <a href="https://www.youtube.com/@fantazmusic" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="w-8 h-8 hover:text-[var(--color-beige)] transition-colors" />
        </a>
      </div>
    </motion.div>
  );
}
