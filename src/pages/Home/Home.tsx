import Button from "../../components/shared/Button";
import ArrowRight from "../../assets/shared/desktop/icon-right-arrow.svg";
import Passionate from "../../assets/home/desktop/illustration-passionate.svg";
import Resourceful from "../../assets/home/desktop/illustration-resourceful.svg";
import Friendly from "../../assets/home/desktop/illustration-friendly.svg";

const Home = () => {
  return (
    <>
      <section className="w-full h-[52.5rem] lg:h-[40rem] bg-peach sm:rounded bg-home-circle-desktop bg-no-repeat bg-right relative overflow-hidden flex pt-14 lg:items-center">
        <div className="w-[30rem] h-[40rem] bg-home-phone-desktop bg-no-repeat lg:bg-right absolute max-sm:left-[-7rem] bottom-[-5rem] sm:bottom-[-5.5rem] lg:left-[43rem] lg:top-[6rem]" />
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
            <Button>learn more</Button>
          </div>
        </div>
      </section>

      <section className="lg:h-[40rem] w-full flex flex-col lg:flex-row gap-8 justify-between mt-10 text-white uppercase">
        <div className="flex flex-col h-full w-full justify-between gap-5">
          <div className="bg-home-web-design-mobile sm:bg-home-web-design-tablet lg:bg-home-web-design-desktop h-[15.5rem] sm:h-[12.5rem] lg:h-full w-full bg-no-repeat flex flex-col gap-5 justify-center items-center rounded-2xl relative">
            <div className="absolute inset-0 image-overlay z-10 rounded-2xl" />
            <h2 className="text-[28px] sm:heading-md tracking-wider z-20">
              web design
            </h2>
            <div className="flex gap-5 items-center z-20">
              <p className="text-[15px] tracking-[5px]">view projects</p>
              <img src={ArrowRight} alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full w-full justify-between gap-5">
          <div className="bg-home-app-design-mobile sm:bg-home-app-design-tablet lg:bg-home-app-design-desktop bg-no-repeat flex flex-col gap-5 h-[15.5rem] sm:h-[12.5rem] lg:h-[50%] justify-center items-center rounded-2xl relative">
            <div className="absolute inset-0 image-overlay z-10 rounded-2xl" />
            <h2 className="text-[28px] sm:heading-md tracking-wider z-20">
              app design
            </h2>
            <div className="flex gap-5 items-center z-20">
              <p className="text-[15px] tracking-[5px]">view projects</p>
              <img src={ArrowRight} alt="" />
            </div>
          </div>
          <div className="bg-home-graphic-design-mobile sm:bg-home-graphic-design-tablet lg:bg-home-graphic-design-desktop bg-no-repeat flex flex-col gap-5 h-[15.5rem] sm:h-[12.5rem] lg:h-[50%] justify-center items-center rounded-2xl relative">
            <div className="absolute inset-0 image-overlay z-10 rounded-2xl" />
            <h2 className="text-[28px] sm:heading-md tracking-wider z-20">
              graphic design
            </h2>
            <div className="flex gap-5 items-center z-20">
              <p className="text-[15px] tracking-[5px]">view projects</p>
              <img src={ArrowRight} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="grid grid-cols-3">
        <div className="place-self-center">
          <img src={Resourceful} alt="" />
        </div>
        <div className="place-self-center">
          <img src={Passionate} alt="" />
        </div>
        <div className="place-self-center">
          <img src={Friendly} alt="" />
        </div>
      </section> */}
    </>
  );
};

export default Home;
