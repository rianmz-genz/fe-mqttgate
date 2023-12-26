"use client";
import React, { useState } from "react";
import { Input } from "../input";
import Loader from "../loader/Loader";
import officeApi from "@/api/office";
import {
  ManagementErrorHandling,
  ManagementSuccessHandling,
} from "@/utils/modal";

const FormCreateOffice = ({ closePopup }) => {
  const field = {
    name: "",
    code: "",
    address: "",
  };
  const [reqBody, setReqBody] = useState(field);
  const [isLoading, setisLoading] = useState(false);
  const fields = Object.keys(field);
  async function createOffice(event) {
    event.preventDefault();
    try {
      setisLoading(true);
      console.log(reqBody);
      const { result } = await officeApi.create(reqBody);
      if (result.status) {
        closePopup();
        ManagementSuccessHandling(result.message);
      }
    } catch (error) {
      ManagementErrorHandling(error);
    } finally {
      setisLoading(false);
    }
  }
  return (
    <form onSubmit={createOffice} className="px-1 py-4 space-y-3">
      {fields.map((item, i) => (
        <Input
          key={i}
          title={capitalize(item)}
          placeholder={capitalize(item)}
          value={reqBody[item]}
          onChange={(e) => setReqBody({ ...reqBody, [item]: e.target.value })}
          required
        />
      ))}
      <button type="submit" className=" w-full px-4 py-2 bg-black text-white">
        {isLoading ? <Loader /> : "Create Office"}
      </button>
    </form>
  );
};

export default FormCreateOffice;

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.substr(1);
}
