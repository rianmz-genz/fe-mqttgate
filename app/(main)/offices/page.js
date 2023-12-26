"use client";
import CreateOffice from "@/components/office/create";
import useStore from "@/stores";
import React, { useEffect } from "react";

const OfficesPage = () => {
  const [get, offices, sync] = useStore((state) => [
    state.getOffices,
    state.office.datas,
    state.syncToken,
  ]);
  useEffect(() => {
    get();
    sync();
  }, []);
  return (
    <div className="w-full">
      <h1 className="font-ysabeau text-2xl my-4">Offices</h1>
      <CreateOffice />
    </div>
  );
};

export default OfficesPage;
