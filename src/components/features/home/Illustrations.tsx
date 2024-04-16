import Passionate from "../../../assets/home/desktop/illustration-passionate.svg";
import Resourceful from "../../../assets/home/desktop/illustration-resourceful.svg";
import Friendly from "../../../assets/home/desktop/illustration-friendly.svg";
import MotionDiv from "../../shared/Motion/MotionDiv";

const Illustrations = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20 text-center sm:text-left lg:text-center">
      <MotionDiv className="flex flex-col sm:flex-row lg:flex-col gap-10">
        <div className="flex items-center justify-center bg-circle-variant-one bg-no-repeat bg-top w-full">
          <img src={Passionate} alt="" />
        </div>
        <div className="space-y-8">
          <h2 className="heading-sm uppercase pt-3">passionate</h2>
          <p className="body">
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>
      </MotionDiv>
      <MotionDiv
        className="flex flex-col sm:flex-row lg:flex-col gap-10"
        delay={0.2}
      >
        <div className="flex items-center justify-center bg-circle-variant-two bg-no-repeat bg-top w-full">
          <img src={Resourceful} alt="" />
        </div>
        <div className="space-y-8">
          <h2 className="heading-sm uppercase pt-3">resourceful</h2>
          <p className="body">
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </p>
        </div>
      </MotionDiv>
      <MotionDiv
        className="flex flex-col sm:flex-row lg:flex-col gap-10"
        delay={0.4}
      >
        <div className="flex items-center justify-center bg-circle-variant-three bg-no-repeat bg-top w-full">
          <img src={Friendly} alt="" />
        </div>
        <div className="space-y-8">
          <h2 className="heading-sm uppercase pt-3">friendly</h2>
          <p className="body">
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </div>
      </MotionDiv>
    </section>
  );
};
export default Illustrations;
