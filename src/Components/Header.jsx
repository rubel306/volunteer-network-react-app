import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <header className="flex justify-between py-4">
      <div className="logo">
        <img className="w-28" src={logo} alt="" />
      </div>
      <nav>
        <ul className="flex gap-4 text-lg">
          <li>
            <Link className="font-semibold text-[#0B0B0B]" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="font-semibold text-[#0B0B0B]" to="/">
              Donation
            </Link>
          </li>
          <li>
            <Link className="font-semibold text-[#0B0B0B]" to="/">
              Events
            </Link>
          </li>
          <li>
            <Link className="font-semibold text-[#0B0B0B]" to="/">
              Blog
            </Link>
          </li>
          <li>
            <Link
              className="font-semibold text-white py-3 px-8 rounded-lg bg-sky-400 hover:bg-[#434141] transition-all duration-300"
              to="/"
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              className="font-semibold text-white py-3 px-8 rounded-lg bg-[#434141]  hover:bg-sky-400 transition-all duration-300"
              to="/"
            >
              Admin
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
