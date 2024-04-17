import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="bg-peach w-full sm:h-[40rem] lg:h-[30rem] sm:rounded-2xl text-white sm:mb-36">
      <div className="flex flex-col-reverse lg:flex-row h-full">
        <div className="w-full min-w-[15rem] h-full flex flex-col justify-center px-10 sm:px-20 max-sm:py-20 bg-about-circle-mobile bg-[right_-2rem_top_-8rem] sm:bg-about-circle-desktop sm:bg-right-bottom bg-no-repeat overflow-auto">
          <motion.div
            className="flex flex-col gap-6"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.3 }}
          >
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
          </motion.div>
        </div>
        <div className="bg-about-hero-mobile sm:bg-about-hero-tablet lg:bg-about-hero-desktop bg-cover lg:w-[60rem] h-[22rem] sm:h-full min-h-1/2 sm:rounded-t-2xl lg:rounded-r-2xl lg:rounded-tl-none" />
      </div>
    </section>
  );
};
export default AboutSection;
