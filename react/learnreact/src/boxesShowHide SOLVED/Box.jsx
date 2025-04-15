import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";

function Box({ heading }) {
  const [isOpen, setIsOpen] = useState(true); // Set initial state to true

  const toggleParagraph = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="box h-48 w-1/4 border-2 border-amber-300 rounded-lg">
      <h2 className="p-3 h-1/4 text-2xl bg-gray-400 font-bold flex justify-between items-center">
        {heading} 
        <FaChevronUp
          className={`cursor-pointer transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          onClick={toggleParagraph}
        />
      </h2>
      {isOpen && (
        <p className="p-3 h-3/4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam laborum voluptatum corporis. Ut eaque aliquam a voluptates quisquam assumenda odio.
        </p>
      )}
    </div>
  );
}

export default Box;
