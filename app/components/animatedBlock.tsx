import { motion } from "motion/react"

export default function Rotate({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      style={box}
      initial={{ backgroundColor: "rgb(0, 255, 0)", opacity: 0 }}
      whileInView={{ backgroundColor: "rgb(255, 0, 0)", opacity: 1 }}
      animate={{
        rotate: 360,
        transition: { duration: 2 },
      }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

const box = {
  width: 100,
  height: 100,
  backgroundColor: "#f0f",
  borderRadius: 5,
}