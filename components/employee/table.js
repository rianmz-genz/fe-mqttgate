"use client";
import React from "react";
import DeleteUserAction from "./delete";
import EditUserAction from "./edit";

const TableEmployee = ({ datas, isLoading }) => {
  return (
    <table className="w-full overflow-x-scroll">
      <thead>
        <tr>
          <th className="bg-black text-white px-2 py-2">#</th>
          <th className="bg-black text-white px-2 py-2">Email</th>
          <th className="bg-black text-white px-2 py-2">Name</th>
          <th className="bg-black text-white px-2 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {isLoading && <tr className="my-1">loading...</tr>}{" "}
        {!isLoading &&
          datas.map((item, i) => (
            <tr key={i}>
              <td className={`${(i + 1) % 2 == 0 && "bg-gray-100"} px-2 py-2`}>
                {i + 1}
              </td>
              <td className={`${(i + 1) % 2 == 0 && "bg-gray-100"} px-2 py-2`}>
                {item.email}
              </td>
              <td className={`${(i + 1) % 2 == 0 && "bg-gray-100"} px-2 py-2`}>
                {item.name}
              </td>
              <td
                className={`${
                  (i + 1) % 2 == 0 && "bg-gray-100"
                } px-2 py-2 flex items-center justify-start`}
              >
                <DeleteUserAction userId={item.id} />
                <EditUserAction user={item} />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TableEmployee;
