import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export default function Social() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex space-x-6">
        <a
          href="https://www.instagram.com/fantazfantaz/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaInstagram className="w-10 h-10 text-black dark:text-white" />
        </a>
        <a
          href="https://www.facebook.com/fantazmusic/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaFacebook className="w-10 h-10 text-black dark:text-white" />
        </a>
        <a
          href="https://www.youtube.com/@fantazmusic"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaYoutube className="w-10 h-10 text-black dark:text-white" />
        </a>
      </div>
    </div>
  );
}
