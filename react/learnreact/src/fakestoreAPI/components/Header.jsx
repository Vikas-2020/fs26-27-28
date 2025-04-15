import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

function Header() {
  return (
    <header className="bg-rose-400 h-14 px-12 flex justify-between items-center">
      <h1 className="font-bold text-3xl">Ecommerce</h1>
      <ul className="flex items-center">
        <li className="mr-5 cursor-pointer">Home</li>
        <li className="mr-5 cursor-pointer">Products</li>
        <li className="mr-5 cursor-pointer relative">
          <AiOutlineHeart title="Your Wishlist" className="text-2xl" />
          <span className="absolute top-[-10px] right-[-10px] bg-white font-bold text-black rounded-full w-4 h-4 flex justify-center items-center text-xs">
            0
          </span>
        </li>
        <li className="mr-5 cursor-pointer relative">
          <MdOutlineShoppingCart title="Your Cart" className="text-2xl" />
          <span className="absolute top-[-10px] right-[-10px] bg-white font-bold text-black rounded-full w-4 h-4 flex justify-center items-center text-xs">
            0
          </span>
        </li>
        <li className="mr-5 cursor-pointer">
          <BsFillPersonFill title="Your Account" className="text-2xl" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
