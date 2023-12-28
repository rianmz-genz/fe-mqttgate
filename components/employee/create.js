"use client";
import React, { useState } from "react";
import Popup from "../modals/popup";
import FormCreateUser from "./form-create";

const CreateUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className=" px-4 py-2 bg-black text-white"
      >
        Create Employee
      </button>
      <Popup isOpen={isOpen} setIsOpen={setIsOpen}>
        <h3 className="text-xl pb-3 border-b">Create Employee</h3>
        <div>
          <FormCreateUser closePopup={() => setIsOpen(false)} />
        </div>
      </Popup>
    </>
  );
};

export default CreateUser;
