import ArrowRight from "../../assets/shared/desktop/icon-right-arrow.svg";

const DesignSection = () => {
  return (
    <section className="w-full gap-8 flex flex-col lg:flex-row justify-between text-white uppercase">
      <div className="w-full bg-home-app-design-mobile bg-cover sm:bg-home-app-design-tablet lg:bg-home-app-design-desktop flex flex-col gap-5 sm:h-[12.5rem] lg:h-[19.25rem] justify-center items-center rounded-2xl relative">
        <div className="absolute inset-0 image-overlay rounded-2xl" />
        <h2 className="text-[28px] sm:heading-md z-10">app design</h2>
        <div className="flex gap-5 items-center z-10">
          <p className="text-[15px] tracking-[5px]">view projects</p>
          <img src={ArrowRight} alt="" />
        </div>
      </div>
      <div className="w-full bg-home-graphic-design-mobile bg-cover sm:bg-home-graphic-design-tablet lg:bg-home-graphic-design-desktop flex flex-col gap-5 sm:h-[12.5rem] lg:h-[19.25rem] justify-center items-center rounded-2xl relative">
        <div className="absolute inset-0 image-overlay rounded-2xl" />
        <h2 className="text-[28px] sm:heading-md z-10">graphic design</h2>
        <div className="flex gap-5 items-center z-10">
          <p className="text-[15px] tracking-[5px]">view projects</p>
          <img src={ArrowRight} alt="" />
        </div>
      </div>
    </section>
  );
};
export default DesignSection;
