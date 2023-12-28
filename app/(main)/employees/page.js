"use client";
import CreateUser from "@/components/employee/create";
import TableEmployee from "@/components/employee/table";
import useStore from "@/stores";
import Cookies from "js-cookie";
import React, { useEffect } from "react";

const EmployeePage = () => {
  const [get, employees, isLoading] = useStore((state) => [
    state.getUsersByOfficeId,
    state.user.datas,
    state.user.isLoading,
  ]);
  useEffect(() => {
    const raw = Cookies.get(btoa(process.env.NEXT_PUBLIC_KEY_USER));
    if (raw) {
      const officeId = JSON.parse(raw).office.id;
      get(officeId);
    }
  }, []);
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <h1 className="font-ysabeau text-2xl mt-8 mb-6">Employees</h1>
        <CreateUser />
      </div>
      <TableEmployee datas={employees} isLoading={isLoading} />
    </div>
  );
};

export default EmployeePage;
