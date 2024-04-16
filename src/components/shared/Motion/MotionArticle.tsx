import { motion } from "framer-motion";
import { ReactNode } from "react";
interface props {
  className?: string;
  children?: ReactNode;
  duration?: number;
  delay?: number;
  index: number;
}
const MotionArticle = ({ className, children, duration = 1, index }: props) => {
  return (
    <motion.article
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: duration, delay: index * 0.05 }}
    >
      {children}
    </motion.article>
  );
};
export default MotionArticle;
