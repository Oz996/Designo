import Countries from "../components/shared/Countries";
import Title from "../components/shared/Title";

const About = () => {
  return (
    <>
      <Title>About - Designo</Title>
      <section className="bg-peach w-full h-[45rem] sm:h-[40rem] lg:h-[30rem] sm:rounded-2xl text-white sm:mb-36">
        <div className="flex flex-col-reverse lg:flex-row h-full">
          <div className="w-full min-w-[15rem] h-full flex flex-col justify-center gap-6 px-10 sm:px-20 bg-about-circle-desktop bg-right-bottom bg-no-repeat overflow-auto">
            <h2 className="heading-mobile sm:heading-lg capitalize text-center lg:text-left">
              about us
            </h2>
            <p className="body-mobile sm:body max-sm:text-center">
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We’ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We’re always looking forward to creating brands, products,
              and digital experiences that connect with our clients’ audiences.
            </p>
          </div>
          <div className="bg-about-hero-mobile sm:bg-about-hero-tablet lg:bg-about-hero-desktop bg-cover lg:w-[60rem] h-full min-h-1/2 sm:rounded-t-2xl lg:rounded-r-2xl lg:rounded-tl-none" />
        </div>
      </section>

      <section className="bg-peach-lighter w-full h-[54rem] sm:h-[46rem] lg:h-[40rem] rounded-2xl mb-36">
        <div className="flex flex-col lg:flex-row h-full max-lg:text-center">
          <div className="bg-about-world-class-mobile max-lg:bg-cover sm:bg-about-world-class-tablet lg:bg-about-world-class-desktop bg-no-repeat sm:rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none lg:w-[60rem] h-full" />
          <div className="bg-three-circles sm:bg-bottom lg:bg-[bottom_left_-8rem] bg-no-repeat flex flex-col gap-7 w-full justify-center px-14 lg:px-20 h-full">
            <h2 className="heading-md text-peach">World-class talent</h2>
            <p className="body">
              We are a crew of strategists, problem-solvers, and technologists.
              Every design is thoughtfully crafted from concept to launch,
              ensuring success in its given market. We are constantly updating
              our skills in a myriad of platforms.
            </p>
            <p className="body">
              Our team is multi-disciplinary and we are not merely interested in
              form — content and meaning are just as important. We give great
              importance to craftsmanship, service, and prompt delivery. Clients
              have always been impressed with our high-quality outcomes that
              encapsulates their brand’s story and mission.
            </p>
          </div>
        </div>
      </section>
      <Countries />
    </>
  );
};
export default About;
