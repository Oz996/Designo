import Cards from "../components/shared/Cards";
import DesignSection from "../components/shared/DesignSection";
import PageBanner from "../components/shared/PageBanner";
import Title from "../components/shared/Title";

const WebDesign = () => {
  return (
    <section className="mb-[20rem]">
      <Title>Web Design</Title>
      <PageBanner />
      <Cards />
      <DesignSection />
    </section>
  );
};
export default WebDesign;
