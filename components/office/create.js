"use client";
import React, { useState } from "react";
import Popup from "../modals/popup";
import FormCreateOffice from "./form-create";

const CreateOffice = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex w-full justify-end">
      <button
        onClick={() => setIsOpen(true)}
        className=" px-4 py-2 bg-black text-white"
      >
        Create Office
      </button>
      <Popup isOpen={isOpen} setIsOpen={setIsOpen}>
        <h3 className="text-xl pb-3 border-b">Create Office</h3>
        <div>
          <FormCreateOffice closePopup={() => setIsOpen(false)} />
        </div>
      </Popup>
    </div>
  );
};

export default CreateOffice;
