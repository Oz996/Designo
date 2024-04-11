import Title from "../components/shared/Title";
import Hero from "../assets/about/desktop/image-about-hero.jpg";

const About = () => {
  return (
    <>
      <Title>About - Designo</Title>
      <section className="bg-peach w-full h-[30rem] rounded-2xl text-white">
        <div className="flex justify-between">
          <div className="flex flex-col justify-center gap-6 px-20">
            <h2 className="heading-lg capitalize">about us</h2>
            <p className="body">
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We’ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We’re always looking forward to creating brands, products,
              and digital experiences that connect with our clients’ audiences.
            </p>
          </div>
          <img
            src={Hero}
            alt="People in an office sitting around tables"
            className="rounded-r-2xl"
          />
        </div>
      </section>
    </>
  );
};
export default About;
