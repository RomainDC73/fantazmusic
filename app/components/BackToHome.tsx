import { useState, useEffect } from "react";
import { Link } from "react-router";

const BackToHome: React.FC = () => {
    // Array of random font-weight values
    const randomValues = [200, 400, 500, 600, 700, 800, 900];

    const [fontWeight, setFontWeight] = useState<number>(randomValues[0]); // Initialize with a random value

    useEffect(() => {
        // Function to change the font-weight randomly
        const changeFontWeight = () => {
            const randomIndex = Math.floor(Math.random() * randomValues.length);
            setFontWeight(randomValues[randomIndex]);
        };

        // Change the font-weight every second
        const intervalId = setInterval(changeFontWeight, 1000);

        // Clean up the interval when the component is unmounted
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className="absolute top-5 left-5 flex flex-col items-start space-y-2">
            {/* Fantaz text with dynamic font-weight and smooth transition */}
            <Link
                to="/"
                className="text-3xl tracking-wide"
                style={{
                    fontWeight,
                    transition: "font-weight 0.5s ease-in-out", // Smooth transition for font-weight
                }}
            >
                Fantaz
            </Link>

            {/* Arrow below Fantaz */}
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path> {/* Left arrow */}
                </svg>
            </Link>
        </div>
    );
};

export default BackToHome;
