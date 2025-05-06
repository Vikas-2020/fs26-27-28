import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-rose-400 py-2 px-12 text-center">
      <p>&copy; {new Date().getFullYear()} | Ecommerce with Redux</p>
      <p>
        Made with <FaHeart className="inline-block" /> by
        <a
          href="https://linkedin.com/in/entrep-rohit"
          className="text-blue-700 underline ps-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rohit Jain
        </a>
      </p>
    </footer>
  );
}

export default Footer;
