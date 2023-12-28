"use client";
import userApi from "@/api/user";
import TableEnterActivites from "@/components/enterActivities/table";
import { isSuccess } from "@/utils";
import { ManagementErrorHandling } from "@/utils/modal";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

const MyActivitiesPage = () => {
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getActivity();
  }, []);
  const getActivity = async () => {
    setIsLoading(true);
    const officeId = JSON.parse(
      Cookies.get(btoa(process.env.NEXT_PUBLIC_KEY_USER))
    ).office.id;
    try {
      const { result } = await userApi.activity(officeId);
      if (isSuccess(result.status)) {
        setActivities(result.data.enterActivities);
      }
    } catch (error) {
      ManagementErrorHandling(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <h1 className="font-ysabeau text-2xl mt-8 mb-6">Enter Activities</h1>
      </div>
      <TableEnterActivites datas={activities} isLoading={isLoading} />
    </div>
  );
};

export default MyActivitiesPage;
