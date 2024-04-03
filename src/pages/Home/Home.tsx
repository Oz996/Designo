const Home = () => {
  return (
    <section className="w-full h-[40rem] bg-peach rounded-2xl bg-home-circle-desktop bg-no-repeat bg-right relative overflow-hidden">
      <div className="w-full h-[40rem] bg-home-phone-desktop bg-no-repeat bg-right absolute right-[-5rem] top-[6rem]" />
      <div className="px-20 py-10 flex flex-col gap-5 w-[42rem] text-white">
        <h2 className="heading-lg">
          Award-winning custom designs and digital branding solutions
        </h2>
        <p className="body">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <button className="capitalize">learn more</button>
      </div>
    </section>
  );
};

export default Home;
