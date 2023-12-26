"use client";
import FormLogin from "@/components/login/form";
import React from "react";
import Link from "next/link";
const LoginPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-ysabeau font-bold mb-4">Masuk</h1>
      <p className="font-ysabeau">
        <span className="font-bold">MQTTGATE</span> Buat gedung perkantoran Anda
        lebih aman.
      </p>
      <FormLogin />
      {/* <footer className="text-center mt-3">
        <p className="font-ysabeau">
          Belum memiliki akun?
          <Link href={"/register"} className="text-blue-500 cursor-pointer">
            Daftar.
          </Link>
        </p>
      </footer> */}
    </div>
  );
};

export default LoginPage;
