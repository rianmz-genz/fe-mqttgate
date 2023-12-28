"use client";
import React from "react";
const TableEnterActivites = ({ datas, isLoading }) => {
  return (
    <table className="w-full overflow-x-scroll">
      <thead>
        <tr>
          <th className="bg-black text-white px-2 py-2">Name</th>
          <th className="bg-black text-white px-2 py-2">Entry At</th>
        </tr>
      </thead>
      <tbody>
        {isLoading && <tr className="my-1">loading...</tr>}{" "}
        {!isLoading &&
          datas.map((item, i) => (
            <tr key={i}>
              <td className={`${(i + 1) % 2 == 0 && "bg-gray-100"} px-2 py-2`}>
                {item.name}
              </td>
              <td className={`${(i + 1) % 2 == 0 && "bg-gray-100"} px-2 py-2`}>
                {new Date(item.entryAt).toLocaleString("id-ID")}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TableEnterActivites;
