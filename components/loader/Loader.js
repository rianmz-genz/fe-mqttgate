import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Loader = ({ className = "text-white" }) => {
   return <AiOutlineLoading3Quarters className={`${className} animate-spin`} />;
};

export default Loader;
