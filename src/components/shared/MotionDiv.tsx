import { motion } from "framer-motion";
import { ReactNode } from "react";
interface props {
  className?: string;
  children?: ReactNode;
  duration?: number;
  delay?: number;
}
const MotionDiv = ({
  className,
  children,
  duration = 0.4,
  delay = 0,
}: props) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: duration, delay: delay }}
    >
      {children}
    </motion.div>
  );
};
export default MotionDiv;
