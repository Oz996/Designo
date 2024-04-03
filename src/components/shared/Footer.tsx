import { Link } from "react-router-dom";
import Logo from "../../assets/shared/desktop/logo-light.png";
import Facebook from "../../assets/shared/desktop/icon-facebook.svg";
import Youtube from "../../assets/shared/desktop/icon-youtube.svg";
import Twitter from "../../assets/shared/desktop/icon-twitter.svg";
import Pinterest from "../../assets/shared/desktop/icon-pinterest.svg";
import Instagram from "../../assets/shared/desktop/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="h-[24.5rem] w-full right-0 bg-black-light">
      <div className="container pt-36">
        <div className="flex justify-between">
          <img src={Logo} alt="Logo" className="w-48 cursor-pointer" />
          <nav aria-label="secondary">
            <ul className="text-[14px] text-white leading-[26px] uppercase flex gap-5">
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
        <hr className="my-10" />
        <div className="flex justify-between">
          <div className="body text-neutral-500">
            <address className="not-italic">
              <b> Designo Central Office</b> <br />
              3886 Wellington Street <br />
              Toronto, Ontario M9C 3J5
            </address>
          </div>
          <div className="body text-neutral-500">
            <h2 className="font-bold">Contact Us (Central Office)</h2>
            <p>P : +1 253-863-8967</p>
            <p>M : contact@designo.co</p>
          </div>
          <ul className="flex items-end gap-4">
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
