import Button from "../../components/shared/Button";

const Home = () => {
  return (
    <section className="w-full h-[40rem] bg-peach rounded-2xl bg-home-circle-desktop bg-no-repeat bg-right relative overflow-hidden flex items-center">
      <div className="w-full h-[40rem] bg-home-phone-desktop bg-no-repeat bg-right absolute right-[-5rem] top-[6rem]" />
      <div className="px-20 flex flex-col gap-5 w-[42rem]">
        <h2 className="heading-lg text-white">
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
