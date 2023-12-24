import React from "react";

const ScanLayout = ({ children }) => {
  return (
    <main className="w-full flex justify-start items-center flex-col h-screen px-7 py-12">
      <h1 className="text-xl font-bold">Scan Qr</h1>
      {children}
    </main>
  );
};

export default ScanLayout;
