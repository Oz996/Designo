import MotionSection from "../../shared/Motion/MotionSection";

const WorldClass = () => {
  return (
    <MotionSection className="bg-peach-lighter w-full h-full sm:h-[46rem] lg:h-[40rem] rounded-2xl mb-36">
      <div className="flex flex-col lg:flex-row h-full max-lg:text-center">
        <div className="bg-about-world-class-mobile bg-cover sm:bg-about-world-class-tablet lg:bg-about-world-class-desktop bg-no-repeat sm:rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none lg:w-[60rem] max-sm:h-[22rem] h-full min-h-1/2" />
        <div className="bg-three-circles sm:bg-bottom lg:bg-[bottom_left_-8rem] bg-no-repeat flex flex-col gap-7 w-full justify-center px-5 sm:px-14 max-sm:py-10 lg:px-20 h-full overflow-auto">
          <h2 className="heading-md text-peach">World-class talent</h2>
          <p className="body">
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
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
    </MotionSection>
  );
};
export default WorldClass;
