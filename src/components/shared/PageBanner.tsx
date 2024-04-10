import { useLocation } from "react-router-dom";

const PageBanner = () => {
  const location = useLocation();
  const webdesign = location.pathname === "/webdesign";
  const appdesign = location.pathname === "/appdesign";

  const title = webdesign ? "web design" : appdesign ? "app design" : "";
  const description = webdesign
    ? "We build websites that serve as powerful marketing tools and bring memorable brand experiences."
    : appdesign
    ? "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
    : "";

  return (
    <section className="h-[20rem] sm:h-[16rem] w-full bg-peach mb-[10rem] sm:rounded-3xl bg-web-design-bg bg-no-repeat bg-[right_top_-10rem]">
      <div className="flex flex-col justify-center items-center gap-8 text-center text-white h-full">
        <h2 className="heading-mobile sm:heading-lg capitalize">{title}</h2>
        <p className="body w-[90%] sm:w-[25rem]">{description}</p>
      </div>
    </section>
  );
};
export default PageBanner;
