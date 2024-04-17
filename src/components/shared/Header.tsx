import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/shared/desktop/logo-dark.png";
import Hamburger from "../../assets/shared/mobile/icon-hamburger.svg";
import Close from "../../assets/shared/mobile/icon-close.svg";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const location = useLocation();
  const pathName = location.pathname;

  // mobile navbar closes if we click anywhere outside it except the close button
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(e.target as Node) &&
        imgRef.current &&
        !imgRef.current.contains(e.target as Node)
      )
        setMobileNavbar(false);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* desktop navbar */}
      <header className="max-sm:hidden h-[6rem] sm:flex w-full absolute left-0 top-0 right-0">
        <div className="container py-5 flex justify-between items-center">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-48 cursor-pointer" />
          </Link>
          <nav aria-label="primary">
            <ul className="text-[14px] leading-[26px] uppercase flex gap-5 relative">
              <li className="relative">
                <Link
                  to="/about"
                  className={classNames({
                    "after:absolute after:left-0 after:bottom-0 after:w-full after:h-[0.1rem] after:rounded-full after:bg-peach after:origin-left after:scale-x-0 hover:after:scale-x-100 after:duration-300":
                      true,
                    "after:scale-x-100 after:duration-0": pathName === "/about",
                  })}
                >
                  our company
                </Link>
              </li>
              <li className="relative">
                <Link
                  to="/locations"
                  className={classNames({
                    "after:absolute after:left-0 after:bottom-0 after:w-full after:h-[0.1rem] after:rounded-full after:bg-peach after:origin-left after:scale-x-0 hover:after:scale-x-100 after:duration-300":
                      true,
                    "after:scale-x-100 after:duration-0":
                      pathName === "/locations",
                  })}
                >
                  locations
                </Link>
              </li>
              <li className="relative">
                <Link
                  to="/contact"
                  className={classNames({
                    "after:absolute after:left-0 after:bottom-0 after:w-full after:h-[0.1rem] after:rounded-full after:bg-peach after:origin-left after:scale-x-0 hover:after:scale-x-100 after:duration-300":
                      true,
                    "after:scale-x-100 after:duration-0":
                      pathName === "/contact",
                  })}
                >
                  contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* mobile navbar */}
      <header className="flex h-[6rem] sm:hidden w-full absolute left-0 top-0 right-0">
        <div className="container px-5 py-5 flex justify-between items-center relative">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-48 cursor-pointer" />
          </Link>
          <button>
            {mobileNavbar ? (
              <img
                ref={imgRef}
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
          <AnimatePresence>
            {mobileNavbar && (
              <motion.nav
                key="mobile-navbar"
                ref={navRef}
                aria-label="primary"
                className="absolute left-0 top-[5.9rem] z-20 w-full h-[14.5rem] bg-black-light"
                initial={{ scaleY: 0, originY: "top" }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.2, type: "just" }}
              >
                <ul className="text-[24px] text-white tracking-[2px] uppercase flex flex-col gap-5 px-5 py-10">
                  <li>
                    <Link to="/about" onClick={() => setMobileNavbar(false)}>
                      our company
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/locations"
                      onClick={() => setMobileNavbar(false)}
                    >
                      locations
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" onClick={() => setMobileNavbar(false)}>
                      contact
                    </Link>
                  </li>
                </ul>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
};

export default Header;
