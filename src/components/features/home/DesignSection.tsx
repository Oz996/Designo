import { Link } from "react-router-dom";
import { scrollToTop } from "../../../utils/scrolls";
import ArrowRight from "../../../assets/shared/desktop/icon-right-arrow.svg";
import MotionDiv from "../../shared/MotionDiv";

const DesignSection = () => {
  return (
    <section className="lg:h-[40rem] flex flex-col lg:flex-row gap-5 lg:gap-8 justify-between mt-10 text-white uppercase">
      <Link
        to="/webdesign"
        onClick={scrollToTop}
        className="flex flex-col w-full justify-between group active:opacity-90 active:duration-75 hover:opacity-95 duration-300"
      >
        <MotionDiv className="bg-home-web-design-mobile bg-cover sm:bg-home-web-design-tablet lg:bg-home-web-design-desktop h-[15.5rem] sm:h-[12.5rem] lg:h-full flex flex-col gap-5 justify-center items-center rounded-2xl relative">
          <div className="absolute inset-0 image-overlay rounded-2xl" />
          <h2 className="text-[28px] sm:heading-md z-10">web design</h2>
          <div className="flex gap-5 group-hover:gap-6 duration-300 items-center z-10">
            <p className="text-[15px] tracking-[5px]">view projects</p>
            <img src={ArrowRight} alt="" />
          </div>
        </MotionDiv>
      </Link>
      <MotionDiv className="flex flex-col w-full justify-between gap-5">
        <Link
          to="/appdesign"
          onClick={scrollToTop}
          className="bg-home-app-design-mobile bg-cover sm:bg-home-app-design-tablet lg:bg-home-app-design-desktop group flex flex-col gap-5 h-[15.5rem] sm:h-[12.5rem] lg:h-[50%] justify-center items-center rounded-2xl active:opacity-90 active:duration-75 hover:opacity-95 duration-300 relative"
        >
          <div className="absolute inset-0 image-overlay rounded-2xl" />
          <h2 className="text-[28px] sm:heading-md z-10">app design</h2>
          <div className="flex gap-5 group-hover:gap-6 duration-300 items-center z-10">
            <p className="text-[15px] tracking-[5px]">view projects</p>
            <img src={ArrowRight} alt="" />
          </div>
        </Link>

        <Link
          to="/graphicdesign"
          onClick={scrollToTop}
          className="bg-home-graphic-design-mobile bg-cover sm:bg-home-graphic-design-tablet lg:bg-home-graphic-design-desktop group flex flex-col gap-5 h-[15.5rem] sm:h-[12.5rem] lg:h-[50%] justify-center items-center rounded-2xl active:opacity-90 active:duration-75 hover:opacity-95 duration-300 relative"
        >
          <div className="absolute inset-0 image-overlay rounded-2xl" />
          <h2 className="text-[28px] sm:heading-md z-10">graphic design</h2>
          <div className="flex gap-5 group-hover:gap-6 duration-300 items-center z-10">
            <p className="text-[15px] tracking-[5px]">view projects</p>
            <img src={ArrowRight} alt="" />
          </div>
        </Link>
      </MotionDiv>
    </section>
  );
};
export default DesignSection;
