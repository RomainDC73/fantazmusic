import { useState, useEffect } from "react";
import { Link } from "react-router";

const BackToHome: React.FC = () => {
  const randomValues = [200, 400, 500, 600, 700, 800, 900];
  const [fontWeight, setFontWeight] = useState<number>(randomValues[0]);

  useEffect(() => {
    const changeFontWeight = () => {
      const randomIndex = Math.floor(Math.random() * randomValues.length);
      setFontWeight(randomValues[randomIndex]);
    };

    const intervalId = setInterval(changeFontWeight, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="absolute top-5 left-5 flex flex-col items-start space-y-2">
      {/* Fantaz text with dynamic font-weight */}
      <Link
        to="/"
        className="text-3xl tracking-wide"
        style={{
          fontWeight,
          transition: "font-weight 0.5s ease-in-out",
        }}
      >
        Fantaz
      </Link>

      {/* Custom Arrow SVG */}
      <Link to="/" className="flex items-center justify-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 256 256"
          className="scale-x-[-1]"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          >
            <path d="M44 130h164" />
            <path d="M194.463 152.188 212.325 130l-17.862-22.188" />
          </g>
        </svg>
      </Link>
    </div>
  );
};

export default BackToHome;
