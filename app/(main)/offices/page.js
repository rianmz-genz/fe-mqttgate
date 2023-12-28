"use client";
import CreateOffice from "@/components/office/create";
import TableOffice from "@/components/office/table";
import useStore from "@/stores";
import React, { useEffect } from "react";

const OfficesPage = () => {
  const [get, offices, isLoading, sync] = useStore((state) => [
    state.getOffices,
    state.office.datas,
    state.office.isLoading,
    state.syncToken,
  ]);
  useEffect(() => {
    get();
    sync();
  }, []);
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <h1 className="font-ysabeau text-2xl mt-8 mb-6">Offices</h1>
        <CreateOffice />
      </div>
      <TableOffice datas={offices} isLoading={isLoading} />
    </div>
  );
};

export default OfficesPage;
