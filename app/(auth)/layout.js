import BreadCrumbsAuth from "@/components/login/breadcrumbs";
import Logo from "@/components/logo";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <section className="max-w-[500px] w-full font-poppins">
        <Logo className="mb-6 w-24" />
        <BreadCrumbsAuth />
        {children}
      </section>
    </div>
  );
};

export default AuthLayout;
