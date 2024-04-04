import Button from "../../components/shared/Button";

const Home = () => {
  return (
    <section className="w-full h-[52.5rem] lg:h-[40rem] bg-peach sm:rounded-2xl bg-home-circle-desktop bg-no-repeat bg-right relative overflow-hidden flex pt-14 lg:items-center">
      <div className="w-[30rem] h-[40rem] bg-home-phone-desktop bg-no-repeat lg:bg-right absolute bottom-[-5.5rem] sm:left-[-1.5rem] lg:left-[43rem] lg:top-[6rem]" />
      <div className="text-center lg:text-start px-3 md:px-20 flex flex-col gap-5 lg:gap-10 w-[42rem] z-10">
        <h2 className="heading-mobile md:heading-lg text-white">
          Award-winning custom designs and digital branding solutions
        </h2>
        <p className="body text-white">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <div>
          <Button>learn more</Button>
        </div>
      </div>
    </section>
  );
};

export default Home;
