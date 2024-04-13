import classNames from "classnames";
// import ArrowRight from "../../assets/shared/desktop/icon-right-arrow.svg";

interface props {
  variant?: "primary" | "secondary";
  size?: "small";
  children: string;
}

const Button = ({ variant = "primary", children }: props) => {
  return (
    <button
      className={classNames({
        "min-w-[9.5rem] uppercase py-4 text-[15px] font-semibold rounded-lg cursor-pointer relative duration-300 overflow-hidden z-20":
          true,
        "hover:scale-[1.05] hover:pr-3 hover:duration-300 active:duration-100 active:text-white":
          true,
        "after:content-arrow-right after:duration-300 after:absolute after:right-[-.1rem] after:opacity-0 hover:after:opacity-100 hover:after:right-[.8rem]":
          true,
        "before:absolute before:inset-0 before:bg-gray-100 before:w-0 hover:before:w-full before:duration-200 before:-z-10 before:active:bg-peach-light":
          true,
        "bg-white text-black-light": variant === "primary",
        "bg-peach text-white": variant === "secondary",
      })}
    >
      {children}
    </button>
  );
};

export default Button;
