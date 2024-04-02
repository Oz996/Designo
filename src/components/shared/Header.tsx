import { Link } from "react-router-dom";
import Logo from "../../assets/shared/desktop/logo-dark.png";

const Header = () => {
  return (
    <header className="h-[6rem] flex w-full absolute left-0 top-0 right-0">
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
  );
};

export default Header;
