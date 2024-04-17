import { Link } from "react-router-dom";
import Button from "../../shared/Button";
import { scrollToTop } from "../../../utils/scrolls";
import { motion } from "framer-motion";

const LearnMore = () => {
  return (
    <section className="h-[52.5rem] lg:h-[40rem] bg-peach sm:rounded bg-home-circle-desktop bg-no-repeat bg-right relative overflow-hidden flex max-lg:pt-14 lg:items-center">
      <motion.div
        className="w-[30rem] h-[40rem] bg-home-phone-desktop lg:bg-right absolute max-sm:left-[-7rem] bottom-[-5rem] sm:bottom-[-5.5rem] lg:left-[43rem] lg:top-[6rem]"
        initial={{ marginTop: "30rem", opacity: 0 }}
        animate={{ marginTop: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      />
      <div className="text-center lg:text-start px-3 sm:px-20 flex flex-col gap-5 lg:gap-10 w-[42rem] z-10">
        <motion.h2
          className="heading-mobile md:heading-lg text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Award-winning custom designs and digital branding solutions
        </motion.h2>
        <motion.p
          className="body text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.3 }}
        >
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </motion.p>
        <div>
          <Link to="/about" onClick={scrollToTop}>
            <Button animate>learn more</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default LearnMore;
