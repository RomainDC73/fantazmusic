import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll(); // Récupérer la progression du scroll
  const translateY = useTransform(scrollYProgress, [0, 1], [1000, -200]); // Transformation pour contrôler la position verticale
  const opacity = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]); // Transformation pour gérer l'opacité

  return (
    <div className="relative h-[200vh]"> {/* Simule une page longue */}
      <h1 className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold z-10">
        FANTAZ PROUT
      </h1>

      {/* Bloc rose animé */}
      <motion.div
        style={{
          translateY,
          opacity,
        }}
        className="fixed left-0 w-32 h-32 bg-pink-500"
      />
    </div>
  );
}
