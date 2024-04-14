import Button from "../components/shared/Button";
import ArrowRight from "../assets/shared/desktop/icon-right-arrow.svg";
import Passionate from "../assets/home/desktop/illustration-passionate.svg";
import Resourceful from "../assets/home/desktop/illustration-resourceful.svg";
import Friendly from "../assets/home/desktop/illustration-friendly.svg";
import Title from "../components/shared/Title";
import { Link } from "react-router-dom";
import { scrollToTop } from "../utils/scrolls";

const Home = () => {
  return (
    <>
      <Title>Landing - Designo</Title>
      <section className="h-[52.5rem] lg:h-[40rem] bg-peach sm:rounded bg-home-circle-desktop bg-no-repeat bg-right relative overflow-hidden flex max-lg:pt-14 lg:items-center">
        <div className="w-[30rem] h-[40rem] bg-home-phone-desktop lg:bg-right absolute max-sm:left-[-7rem] bottom-[-5rem] sm:bottom-[-5.5rem] lg:left-[43rem] lg:top-[6rem]" />
        <div className="text-center lg:text-start px-3 sm:px-20 flex flex-col gap-5 lg:gap-10 w-[42rem] z-10">
          <h2 className="heading-mobile md:heading-lg text-white">
            Award-winning custom designs and digital branding solutions
          </h2>
          <p className="body text-white">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <div>
            <Link to="/about">
              <Button>learn more</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="lg:h-[40rem] flex flex-col lg:flex-row gap-8 justify-between mt-10 text-white uppercase">
        <Link
          to="/webdesign"
          onClick={scrollToTop}
          className="flex flex-col w-full justify-between group active:opacity-90 active:duration-75 hover:opacity-95 duration-300"
        >
          <div className="bg-home-web-design-mobile bg-cover sm:bg-home-web-design-tablet lg:bg-home-web-design-desktop h-[15.5rem] sm:h-[12.5rem] lg:h-full flex flex-col gap-5 justify-center items-center rounded-2xl relative">
            <div className="absolute inset-0 image-overlay rounded-2xl" />
            <h2 className="text-[28px] sm:heading-md z-10">web design</h2>
            <div className="flex gap-5 group-hover:gap-6 duration-300 items-center z-10">
              <p className="text-[15px] tracking-[5px]">view projects</p>
              <img src={ArrowRight} alt="" />
            </div>
          </div>
        </Link>
        <div className="flex flex-col w-full justify-between gap-5">
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
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20 text-center sm:text-left lg:text-center">
        <div className="flex flex-col sm:flex-row lg:flex-col gap-10">
          <div className="flex items-center justify-center bg-circle-variant-one bg-no-repeat bg-top w-full">
            <img src={Passionate} alt="" />
          </div>
          <div className="space-y-8">
            <h2 className="heading-sm uppercase pt-3">passionate</h2>
            <p className="body">
              Each project starts with an in-depth brand research to ensure we
              only create products that serve a purpose. We merge art, design,
              and technology into exciting new solutions.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col gap-10">
          <div className="flex items-center justify-center bg-circle-variant-two bg-no-repeat bg-top w-full">
            <img src={Resourceful} alt="" />
          </div>
          <div className="space-y-8">
            <h2 className="heading-sm uppercase pt-3">resourceful</h2>
            <p className="body">
              Everything that we do has a strategic purpose. We use an agile
              approach in all of our projects and value customer collaboration.
              It guarantees superior results that fulfill our clients’ needs.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col gap-10">
          <div className="flex items-center justify-center bg-circle-variant-three bg-no-repeat bg-top w-full">
            <img src={Friendly} alt="" />
          </div>
          <div className="space-y-8">
            <h2 className="heading-sm uppercase pt-3">friendly</h2>
            <p className="body">
              We are a group of enthusiastic folks who know how to put people
              first. Our success depends on our customers, and we strive to give
              them the best experience a company can provide.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
