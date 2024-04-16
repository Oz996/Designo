import { motion } from "framer-motion";
import { ReactNode } from "react";
interface props {
  className?: string;
  children?: ReactNode;
  duration?: number;
  delay?: number;
}
const MotionSection = ({
  className,
  children,
  duration = 1,
  delay = 0,
}: props) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: duration, delay: delay }}
    >
      {children}
    </motion.div>
  );
};
export default MotionSection;
