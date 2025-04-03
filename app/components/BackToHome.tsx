// components/BackToHome.tsx
import { Link } from "react-router";

const BackToHome: React.FC = () => {
  return (
    <div className="absolute top-5 left-5 flex flex-col items-start space-y-2">
      {/* Texte Fantaz */}
      <Link to="/" className="text-3xl font-light tracking-wide">
        Fantaz
      </Link>

      {/* Flèche sous Fantaz */}
      <Link to="/" className="flex items-center justify-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="stroke-[1.5]"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path> {/* Flèche vers la gauche */}
        </svg>
      </Link>
    </div>
  );
};

export default BackToHome;
