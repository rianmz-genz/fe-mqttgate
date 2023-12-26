"use client";
import userApi from "@/api/user";
import Cookies from "js-cookie";
import React, { useEffect } from "react";

const MyActivitiesPage = () => {
  useEffect(() => {
    getActivity();
  }, []);
  const getActivity = async () => {
    const officeId = JSON.parse(
      Cookies.get(btoa(process.env.NEXT_PUBLIC_KEY_USER))
    ).office.id;
    try {
      const { result } = await userApi.activity(officeId);
      console.log(result);
    } catch (error) {}
  };
  return <div></div>;
};

export default MyActivitiesPage;
