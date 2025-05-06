import { Link, Links } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import Logo from "../../assets/Logo.svg";

function Header() {
  return (
    <header className="bg-[rgba(0,0,0,.25)] flex justify-between items-center px-14 py-1">
      <Link to="/">
        <img src={Logo} alt="Logo" className="w-42 h-[50px] mx-auto " />
      </Link>

      <ul className="flex gap-8 items-center">
        <li>
          <Link
            to=""
            className="text-white font-semibold hover:text-red-400 transition duration-300"
          >
            Movies
          </Link>
        </li>
        <li>
          <Link
            to=""
            className="text-white font-semibold hover:text-red-400 transition duration-300"
          >
            TV Shows
          </Link>
        </li>
        <li>
          <Link to="">
            <IoIosSearch className="text-white cursor-pointer text-xl hover:text-red-400 transition duration-300" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
