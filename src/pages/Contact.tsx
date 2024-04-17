import Title from "../components/shared/Title";
import Countries from "../components/shared/Countries";
import ContactForm from "../components/features/contact/ContactForm";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <Title>Contact - Designo</Title>
      <section className="bg-contact-bg-mobile bg-[top_0rem_left_-2.5rem] sm:bg-contact-bg-desktop sm:bg-[left_top_-10rem] md:bg-[top_-3.6rem_right_10rem] lg:bg-[left_top_-10rem] bg-no-repeat h-[48rem] sm:h-[45rem] lg:h-[30rem] bg-peach sm:rounded-2xl mb-36">
        <div className="flex flex-col lg:flex-row items-center justify-center max-sm:text-center text-white h-full px-6 sm:px-14 lg:px-28 gap-10">
          <motion.div
            className="flex flex-col gap-10 w-full"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="heading-mobile sm:heading-lg capitalize">
              contact us
            </h2>
            <p className="body-mobile sm:body">
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </p>
          </motion.div>
          <ContactForm />
        </div>
      </section>
      <Countries />
    </>
  );
};
export default Contact;
