"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const BreadCrumbsAuth = () => {
  const pathname = usePathname();
  return (
    <div className="flex space-x-2">
      <Link href={"/"} className="text-sm">
        MQTTGATE
      </Link>
      <p className="text-sm text-black/40">/</p>
      <p className="text-sm text-black/40">
        {pathname == "/login" ? "Masuk" : "Daftar"}
      </p>
    </div>
  );
};

export default BreadCrumbsAuth;
