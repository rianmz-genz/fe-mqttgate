import React from "react";
import { FiX } from "react-icons/fi";
const Popup = ({ isOpen, setIsOpen, children }) => {
  return (
    <div
      className={`${
        isOpen ? "visible opacity-100" : "opacity-0 invisible"
      } transition-all duration-300 w-full h-screen flex justify-center items-center backdrop-blur-md px-7 fixed top-0 left-0 z-40 bg-black/30`}
    >
      <div className="w-full max-h-[85%] h-fit max-w-[600px] bg-white relative rounded-lg p-4">
        <button
          onClick={() => setIsOpen(false)}
          className="p-1 text-xl bg-red-500/10 text-red-500 absolute top-3 right-3"
        >
          <FiX />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
