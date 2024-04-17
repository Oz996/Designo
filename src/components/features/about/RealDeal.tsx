import MotionSection from "../../shared/Motion/MotionSection";

const RealDeal = () => {
  return (
    <MotionSection className="bg-peach-lighter w-full sm:h-[46rem] lg:h-[40rem] rounded-2xl mt-36">
      <div className="flex flex-col-reverse lg:flex-row h-full max-lg:text-center">
        <div className="bg-two-circle bg-bottom lg:bg-[bottom_left] bg-no-repeat flex flex-col gap-7 w-full justify-center px-5 lg:px-20 max-sm:py-20 h-full overflow-auto">
          <h2 className="heading-md text-peach">The real deal</h2>
          <p className="body">
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p className="body">
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </div>
        <div className="bg-about-real-deal-mobile max-lg:bg-cover sm:bg-about-real-deal-tablet lg:bg-about-real-deal-desktop bg-no-repeat sm:rounded-t-2xl lg:rounded-r-2xl lg:rounded-tl-none lg:w-[60rem] h-[22rem] sm:h-full min-h-1/2" />
      </div>
    </MotionSection>
  );
};
export default RealDeal;
