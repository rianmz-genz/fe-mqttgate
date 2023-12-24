import React from "react";

const TextArea = ({
   title,
   type = "text",
   placeholder,
   id,
   value,
   onChange,
}) => {
   return (
      <div className="border border-black/10 w-full px-4 py-3 flex flex-col ">
         <label htmlFor={id} className="text-xs mb-1 text-black/40 ">
            {title}
         </label>
         <textarea
            autoComplete="off"
            type={type}
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className=" focus:border-none focus:outline-none text-sm placeholder:text-sm"
         />
      </div>
   );
};

export default TextArea;
