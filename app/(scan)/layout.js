import NavbarMain from "@/components/navbar/navbarMain";
import React from "react";

const ScanLayout = ({ children }) => {
  return (
    <main className="w-full max-w-[800px] mx-auto py-8 px-7">
      <NavbarMain />
      <h1 className="text-xl font-bold my-3">Scan Qr</h1>
      {children}
    </main>
  );
};

export default ScanLayout;
