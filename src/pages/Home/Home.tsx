import Button from "../../components/shared/Button";

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

      <section className="h-[40rem] w-full flex gap-8 justify-between mt-10 text-white uppercase">
        <div className="h-full w-full bg-home-web-design-desktop bg-no-repeat flex flex-col gap-5 justify-center items-center rounded-2xl relative">
          <div className="absolute inset-0 image-overlay z-10 rounded-2xl" />
          <h2 className="heading-md tracking-wider z-20">web design</h2>
          <p className="text-[15px] tracking-[5px] z-20">view projects</p>
        </div>

        <div className="flex flex-col h-full w-full justify-between gap-5">
          <div className="bg-home-app-design bg-no-repeat flex flex-col gap-5 h-[50%] justify-center items-center rounded-2xl relative">
            <div className="absolute inset-0 image-overlay z-10 rounded-2xl" />
            <h2 className="heading-md tracking-wider z-20">app design</h2>
            <p className="text-[15px] tracking-[5px] z-20">view projects</p>
          </div>
          <div className="bg-home-graphic-design bg-no-repeat flex flex-col gap-5 h-[50%] justify-center items-center rounded-2xl relative">
            <div className="absolute inset-0 image-overlay z-10 rounded-2xl" />
            <h2 className="heading-md tracking-wider z-20">graphic design</h2>
            <p className="text-[15px] tracking-[5px] z-20">view projects</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
