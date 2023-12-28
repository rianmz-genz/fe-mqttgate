"use client";
import NavbarMain from "@/components/navbar/navbarMain";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <section className="w-full max-w-[800px] mx-auto py-8 px-7">
      <NavbarMain />
      {children}
    </section>
  );
};

export default MainLayout;
