import { MdLogout, MdOutlineShoppingCart } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";

import { BsFillPersonFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import { getAuth } from "firebase/auth";
import app from "../firebase";
import { useState } from "react";
const auth = getAuth(app);

function Header() {
  const navigate = useNavigate();
  // const { cart } = useContext(cartContext);
  const { cart } = useCart();

  // const {user} = useContext(AuthContext);
  const { user } = useAuth();
  const [dropdown, setDropdown] = useState(false);

  function handleLogout() {
    auth.signOut();
    navigate("/login");
  }

  return (
    <>
      <header className="bg-rose-400 h-14 px-12 flex justify-between items-center">
        <h1 className="font-bold text-3xl">
          <Link to="/">Ecommerce</Link>
        </h1>
        <ul className="flex items-center justify-evenly md:w-72">
          <li className="mr-5 cursor-pointer">
            {/* <a href="/about">About</a> */}
            <Link to="/about">About</Link>
          </li>
          <li className="mr-5 cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="mr-5 cursor-pointer relative flex">
            <Link to="/wishlist">
              <AiOutlineHeart title="Your Wishlist" className="text-2xl" />
              <span className="absolute top-[-10px] right-[-10px] bg-white font-bold text-black rounded-full w-4 h-4 flex justify-center items-center text-xs">
                0
              </span>
            </Link>
          </li>
          <li className="mr-5 cursor-pointer relative">
            <Link to="/cart">
              <MdOutlineShoppingCart title="Your Cart" className="text-2xl" />
              <span className="absolute top-[-10px] right-[-10px] bg-white font-bold text-black rounded-full w-4 h-4 flex justify-center items-center text-xs">
                {cart.length}
              </span>
            </Link>
          </li>
          <li className="mr-5 cursor-pointer relative">
            {user ? (
              <>
                <div
                  className="flex items-center"
                  onClick={() => setDropdown((prev) => !prev)}
                >
                  <IoIosSettings /> <FaChevronDown />
                </div>
                {dropdown && (
                  <ul className="absolute bg-rose-400 w-28 top-8 z-50 right-0">
                    <li>
                      <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                      <Link to="/my-orders">My Orders</Link>
                    </li>
                    <li>
                      <button onClick={handleLogout}>
                        <MdLogout title="Logout" className="text-2xl" />
                      </button>
                    </li>
                  </ul>
                )}
              </>
            ) : (
              // <button onClick={handleLogout}>
              //   <MdLogout title="Logout" className="text-2xl" />
              // </button>
              <Link to="/login">
                <BsFillPersonFill title="Your Account" className="text-2xl" />
              </Link>
            )}
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
