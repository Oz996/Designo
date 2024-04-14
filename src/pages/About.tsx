import AboutSection from "../components/features/about/AboutSection";
import RealDeal from "../components/features/about/RealDeal";
import WorldClass from "../components/features/about/WorldClass";
import Countries from "../components/shared/Countries";
import Title from "../components/shared/Title";

const About = () => {
  return (
    <>
      <Title>About - Designo</Title>
      <AboutSection />
      <WorldClass />
      <Countries />
      <RealDeal />
    </>
  );
};
export default About;
