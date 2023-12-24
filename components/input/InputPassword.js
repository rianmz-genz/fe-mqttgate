import React, { useState } from "react";
import { RxEyeClosed } from "react-icons/rx";
import { HiOutlineEye } from "react-icons/hi";
const InputPassword = ({ title, placeholder, id, value, onChange }) => {
  const [isSee, setIsSee] = useState(false);
  return (
    <div className="border border-black/10 w-full px-4 py-3 flex flex-col ">
      <label htmlFor={id} className="text-xs mb-1 text-black/40 ">
        {title}
      </label>
      <div className="flex">
        <input
          type={isSee ? "text" : "password"}
          id={"password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full focus:border-none focus:outline-none text-sm placeholder:text-sm"
        />
        {isSee ? (
          <HiOutlineEye
            className="cursor-pointer ml-2 text-xl text-black/30"
            onClick={() => setIsSee(false)}
          />
        ) : (
          <RxEyeClosed
            className="cursor-pointer ml-2 text-black/30"
            onClick={() => setIsSee(true)}
          />
        )}
      </div>
    </div>
  );
};

export default InputPassword;
