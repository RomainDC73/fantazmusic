import { motion, useScroll, useTransform } from "framer-motion";

export function AnimatedBlock() {
  const { scrollYProgress } = useScroll(); // Récupérer la progression du scroll
  const translateY = useTransform(scrollYProgress, [0, 1], [1000, -200]); // Transformation pour contrôler la position verticale
  const opacity = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]); // Transformation pour gérer l'opacité

  return (
    <motion.div
      style={{
        translateY,
        opacity,
      }}
      className="fixed left-0 w-32 h-32 bg-pink-500"
    />
  );
}
