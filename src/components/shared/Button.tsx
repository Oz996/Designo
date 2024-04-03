import classNames from "classnames";

interface props {
  variant?: "primary" | "secondary";
  children: string;
}

const Button = ({ variant = "primary", children }: props) => {
  return (
    <button
      className={classNames({
        "min-w-[9.5rem] uppercase py-4 text-[15px] font-semibold rounded-lg cursor-pointer":
          true,
        "bg-white": variant === "primary",
        "bg-peach text-black-light": variant === "secondary",
      })}
    >
      {children}
    </button>
  );
};

export default Button;
