import Cards from "../components/shared/Cards";
import DesignSection from "../components/shared/DesignSection";
import Title from "../components/shared/Title";

const WebDesign = () => {
  return (
    <>
      <Title>Web Design</Title>
      <section className="h-[20rem] sm:h-[16rem] w-full bg-peach mb-[10rem] sm:rounded-3xl bg-web-design-bg bg-no-repeat bg-[right_top_-10rem]">
        <div className="flex flex-col justify-center items-center gap-8 text-center text-white h-full">
          <h2 className="heading-mobile sm:heading-lg capitalize">
            web design
          </h2>
          <p className="body w-[90%] sm:w-[25rem]">
            We build websites that serve as powerful marketing tools and bring
            memorable brand experiences.
          </p>
        </div>
      </section>
      <Cards />
      <DesignSection />
      <section className="mb-[20rem]"></section>
    </>
  );
};
export default WebDesign;
