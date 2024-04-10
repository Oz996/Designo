import { Link, useLocation } from "react-router-dom";
import ArrowRight from "../../assets/shared/desktop/icon-right-arrow.svg";
import classNames from "classnames";

const DesignSection = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const links = [
    {
      title: "app design",
      path: "/appdesign",
    },
    {
      title: "web design",
      path: "/webdesign",
    },
    {
      title: "graphic design",
      path: "/graphicdesign",
    },
  ];

  // conditionally rendering depending on current path compared to link paths
  return (
    <section className="w-full gap-8 flex flex-col lg:flex-row justify-between text-white uppercase">
      {links.map((link) => (
        <Link
          to={link.path}
          className={classNames({
            "w-full flex flex-col gap-5 h-[15.5rem] lg:h-[19.25rem] justify-center items-center rounded-2xl bg-cover relative":
              true,
            "hover:opacity-95 duration-300 group": true,
            "bg-home-app-design-mobile sm:bg-home-app-design-tablet lg:bg-home-app-design-desktop":
              link.path === "/appdesign",
            "bg-home-graphic-design-mobile sm:bg-home-graphic-design-tablet lg:bg-home-graphic-design-desktop":
              link.path === "/graphicdesign",
            "bg-home-web-design-mobile sm:bg-home-web-design-tablet lg:bg-home-web-design-desktop":
              link.path === "/webdesign",
            hidden: link.path === currentPath,
          })}
        >
          <div className="absolute inset-0 image-overlay rounded-2xl" />
          <h2 className="text-[28px] sm:heading-md z-10">{link.title}</h2>
          <div className="flex gap-5 group-hover:gap-6 duration-300 items-center z-10">
            <p className="text-[15px] tracking-[5px]">view projects</p>
            <img src={ArrowRight} alt="" />
          </div>
        </Link>
      ))}
    </section>
  );
};
export default DesignSection;
