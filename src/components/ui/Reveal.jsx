import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      variants={{
        ...fadeUp,
        visible: {
          ...fadeUp.visible,
          transition: { ...fadeUp.visible.transition, delay },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
