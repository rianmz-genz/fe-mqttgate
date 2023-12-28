"use client";
import React, { useState } from "react";
import { Input } from "../input";
import Loader from "../loader/Loader";
import {
  ManagementErrorHandling,
  ManagementSuccessHandling,
} from "@/utils/modal";
import userApi from "@/api/user";
import Cookies from "js-cookie";
import useStore from "@/stores";

const FormCreateUser = ({ closePopup }) => {
  const field = {
    name: "",
    email: "",
    password: "",
  };
  const [get] = useStore((state) => [state.getUsersByOfficeId]);
  const [reqBody, setReqBody] = useState(field);
  const [isLoading, setisLoading] = useState(false);
  const fields = Object.keys(field);
  async function createEmployee(event) {
    event.preventDefault();
    const raw = Cookies.get(btoa(process.env.NEXT_PUBLIC_KEY_USER));
    const officeId = JSON.parse(raw).office.id;
    try {
      setisLoading(true);
      const { result } = await userApi.create({ ...reqBody, officeId });
      if (result.status) {
        await get(officeId);
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
    <form onSubmit={createEmployee} className="px-1 py-4 space-y-3">
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
        {isLoading ? <Loader /> : "Create Employee"}
      </button>
    </form>
  );
};

export default FormCreateUser;

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.substr(1);
}
