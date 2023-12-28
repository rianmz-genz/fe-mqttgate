import React from "react";

const TableOffice = ({ datas, isLoading }) => {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="bg-black text-white px-2 py-2">#</th>
          <th className="bg-black text-white px-2 py-2">Code</th>
          <th className="bg-black text-white px-2 py-2">Name</th>
          <th className="bg-black text-white px-2 py-2">Address</th>
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
                {item.code}
              </td>
              <td className={`${(i + 1) % 2 == 0 && "bg-gray-100"} px-2 py-2`}>
                {item.name}
              </td>
              <td className={`${(i + 1) % 2 == 0 && "bg-gray-100"} px-2 py-2`}>
                {item.address}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TableOffice;
