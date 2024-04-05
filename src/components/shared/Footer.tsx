import { Link } from "react-router-dom";
import Logo from "../../assets/shared/desktop/logo-light.png";
import Facebook from "../../assets/shared/desktop/icon-facebook.svg";
import Youtube from "../../assets/shared/desktop/icon-youtube.svg";
import Twitter from "../../assets/shared/desktop/icon-twitter.svg";
import Pinterest from "../../assets/shared/desktop/icon-pinterest.svg";
import Instagram from "../../assets/shared/desktop/icon-instagram.svg";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="h-[51rem] sm:h-[24.5rem] w-full right-0 bg-black-light relative">
      <div className="h-[18.5rem] w-[70rem] px-20 bg-peach absolute bottom-[19.5rem] left-[24rem] rounded-2xl bg-call-to-action-circles flex items-center justify-between">
        <div className="flex flex-col">
          <h2 className="heading-md text-white">
            Let’s talk about <br /> your project
          </h2>
          <p className="body text-white">
            Ready to take it to the next level? Contact us today and find out
            how
            <br />
            our expertise can help your business grow.
          </p>
        </div>
        <Button>get in touch</Button>
      </div>
      <div className="container pt-36">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <img src={Logo} alt="Logo" className="w-48 cursor-pointer" />
          <hr className="sm:hidden my-8 w-full" />
          <nav aria-label="secondary">
            <ul className="text-[14px] text-white leading-[26px] uppercase flex flex-col sm:flex-row gap-5 text-center">
              <li>
                <Link to="#">our company</Link>
              </li>
              <li>
                <Link to="#">locations</Link>
              </li>
              <li>
                <Link to="#">contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <hr className="hidden sm:block my-10 w-full" />
        <div className="flex flex-col sm:flex-row justify-between max-sm:gap-10 max-sm:pt-10">
          <div className="body text-neutral-500 max-sm:text-center">
            <address className="not-italic">
              <b> Designo Central Office</b> <br />
              3886 Wellington Street <br />
              Toronto, Ontario M9C 3J5
            </address>
          </div>
          <div className="body text-neutral-500 max-sm:text-center">
            <h2 className="font-bold">Contact Us (Central Office)</h2>
            <p>P : +1 253-863-8967</p>
            <p>M : contact@designo.co</p>
          </div>
          <ul className="flex items-end gap-4 justify-center">
            <li>
              <Link to="#">
                <img src={Facebook} alt="Facebook" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src={Youtube} alt="Facebook" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src={Twitter} alt="Facebook" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src={Pinterest} alt="Facebook" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src={Instagram} alt="Facebook" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
