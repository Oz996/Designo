import classNames from "classnames";
import { ReactElement } from "react";
import { motion } from "framer-motion";

interface props {
  children: string | ReactElement;
  variant?: "primary" | "secondary";
  size?: "small";
  animate?: boolean;
}

const Button = ({ variant = "primary", children, animate }: props) => {
  const primary = variant === "primary";
  const secondary = variant === "secondary";
  return (
    <motion.button
      initial={{
        scaleX: animate ? 0 : "",
        opacity: animate ? 0 : "",
        originX: 0,
      }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: 0.1 }}
      className={classNames({
        "min-w-[9.5rem] uppercase py-4 text-[15px] font-semibold rounded-lg cursor-pointer relative duration-300 overflow-hidden z-20":
          true,
        "hover:scale-[1.05] hover:duration-300 active:duration-100 active:text-white":
          true,
        "after:content-arrow-right after:duration-300 after:absolute after:right-[-.1rem] after:opacity-0 hover:after:opacity-100 hover:after:right-[.8rem]":
          primary,
        "before:absolute before:inset-0 before:duration-200 before:-z-10 before:active:bg-peach-light":
          true,
        "bg-white text-black-light hover:pr-3": primary,
        "bg-peach text-white": secondary,
      })}
    >
      {children}
    </motion.button>
  );
};

export default Button;
