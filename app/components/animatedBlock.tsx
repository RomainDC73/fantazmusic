import { motion } from "motion/react"

export default function Rotate({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      // style={box}
      animate={{
        rotate: 360,
        scale: 2,
        transition: { duration: 2 },
      }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

// const box = {
//   width: 100,
//   height: 100,
//   backgroundColor: "#f0f",
//   borderRadius: 5,
// }