import { Link } from "react-router-dom";
import Logo from "../../assets/shared/desktop/logo-dark.png";
import Hamburger from "../../assets/shared/mobile/icon-hamburger.svg";
import Close from "../../assets/shared/mobile/icon-close.svg";
import { useState } from "react";

const Header = () => {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  return (
    <>
      {/* desktop navbar */}
      <header className="max-sm:hidden h-[6rem] sm:flex w-full absolute left-0 top-0 right-0">
        <div className="container py-5 flex justify-between items-center">
          <img src={Logo} alt="Logo" className="w-48 cursor-pointer" />
          <nav aria-label="primary">
            <ul className="text-[14px] leading-[26px] uppercase flex gap-5">
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
      </header>
      {/* mobile navbar */}
      <header className="flex h-[6rem] sm:hidden w-full absolute left-0 top-0 right-0">
        <div className="container px-5 py-5 flex justify-between items-center relative">
          <img src={Logo} alt="Logo" className="w-48 cursor-pointer" />
          <button>
            {mobileNavbar ? (
              <img
                src={Close}
                alt="open navbar"
                onClick={() => setMobileNavbar(false)}
              />
            ) : (
              <img
                src={Hamburger}
                alt="open navbar"
                onClick={() => setMobileNavbar(true)}
              />
            )}
          </button>
          {mobileNavbar && (
            <nav
              aria-label="primary"
              className=" absolute left-0 top-[5.9rem] z-20 w-full h-[14.5rem] bg-black-light"
            >
              <ul className="text-[24px] text-white tracking-[2px] uppercase flex flex-col gap-5 px-5 py-10">
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
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
