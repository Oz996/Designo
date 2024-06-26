import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/shared/desktop/logo-light.png";
import Facebook from "../../assets/shared/desktop/icon-facebook.svg";
import Youtube from "../../assets/shared/desktop/icon-youtube.svg";
import Twitter from "../../assets/shared/desktop/icon-twitter.svg";
import Pinterest from "../../assets/shared/desktop/icon-pinterest.svg";
import Instagram from "../../assets/shared/desktop/icon-instagram.svg";
import Button from "./Button";
import { scrollToTop } from "../../utils/scrolls";
import classNames from "classnames";
import { motion } from "framer-motion";

const Footer = () => {
  const location = useLocation();
  const contactPage = location.pathname === "/contact";

  const listItems = [
    {
      link: "#",
      img: Facebook,
      alt: "Facebook",
    },
    {
      link: "#",
      img: Youtube,
      alt: "Youtube",
    },
    {
      link: "#",
      img: Twitter,
      alt: "Twitter",
    },
    {
      link: "#",
      img: Pinterest,
      alt: "Pinterest",
    },
    {
      link: "#",
      img: Instagram,
      alt: "Instagram",
    },
  ];
  return (
    <footer
      className={classNames({
        "w-full bg-black-light relative max-sm:flex max-sm:items-end max-sm:pb-10 mt-[23rem]":
          true,
        " sm:h-[24.5rem] h-[51rem]": !contactPage,
        "sm:h-[22rem]": contactPage,
      })}
    >
      <div
        className={classNames({
          "absolute bottom-[38rem] sm:bottom-[19.5rem] left-0 right-0 flex justify-center items-center w-full container max-sm:px-5 overflow-hidden z-20":
            true,
          hidden: contactPage,
        })}
      >
        <div className="max-md:text-center max-sm:py-20 sm:h-[22rem] lg:h-[18.5rem] w-full px-5 sm:px-20 bg-peach rounded-2xl bg-call-to-action-circles bg-right bg-no-repeat flex max-md:flex-col items-center max-md:justify-center max-md:gap-7 justify-between">
          <div className="flex flex-col space-y-5">
            <h2 className="heading-mobile sm:heading-md text-white">
              Let’s talk about <br /> your project
            </h2>
            <p className="body text-white lg:w-[27rem]">
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <Link to="/contact" onClick={scrollToTop}>
            <Button>get in touch</Button>
          </Link>
        </div>
      </div>
      <div
        className={classNames({
          "container pt-36": true,
          "pt-[6rem]": contactPage,
        })}
      >
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <Link to="/" onClick={scrollToTop}>
            <img src={Logo} alt="Logo" className="w-48 cursor-pointer" />
          </Link>
          <hr className="sm:hidden my-8 w-full border-[#979797]" />
          <nav aria-label="secondary">
            <ul className="text-[14px] text-white leading-[26px] uppercase flex flex-col sm:flex-row gap-5 text-center">
              <li>
                <Link to="/about" onClick={scrollToTop}>
                  our company
                </Link>
              </li>
              <li>
                <Link to="/locations" onClick={scrollToTop}>
                  locations
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop}>
                  contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <hr className="hidden sm:block my-10 w-full border-[#979797]" />
        <div className="flex flex-col sm:flex-row justify-between max-sm:gap-10 max-sm:pt-10">
          <div className="body text-white text-opacity-50 max-sm:text-center">
            <address className="not-italic">
              <b> Designo Central Office</b> <br />
              3886 Wellington Street <br />
              Toronto, Ontario M9C 3J5
            </address>
          </div>
          <div className="body text-white text-opacity-50 max-sm:text-center">
            <h2 className="font-bold">Contact Us (Central Office)</h2>
            <p>P : +1 253-863-8967</p>
            <p>M : contact@designo.co</p>
          </div>
          <ul className="flex items-end gap-4 justify-center">
            {listItems.map((item) => (
              <motion.li
                key={item.img}
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={item.link}>
                  <img src={item.img} alt={item.alt} />
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
