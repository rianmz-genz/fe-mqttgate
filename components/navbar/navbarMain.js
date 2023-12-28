"use client";
import React, { useEffect, useState } from "react";
import { AiFillProfile, AiOutlineUser } from "react-icons/ai";
import { SiActivitypub } from "react-icons/si";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { LuScan, LuUsers } from "react-icons/lu";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { IoMdLogOut } from "react-icons/io";
import Cookies from "js-cookie";
import authApi from "@/api/auth";
import {
  ManagementErrorHandling,
  ManagementSuccessHandling,
} from "@/utils/modal";
import Loader from "../loader/Loader";
const navList = () => {
  const raw = Cookies.get(btoa(process.env.NEXT_PUBLIC_KEY_USER));
  if (raw) {
    const role = JSON.parse(raw).role.name;
    switch (role) {
      case "Super Admin":
        return [
          {
            logo: HiOutlineOfficeBuilding,
            label: "Offices",
            url: "/offices",
          },
          // {
          //   logo: LuUsers,
          //   label: "Employees",
          //   url: "/employees",
          // },
          {
            logo: AiOutlineUser,
            label: "Profile",
            url: "/profile",
          },
        ];
      case "Admin":
        return [
          {
            logo: LuUsers,
            label: "Employees",
            url: "/employees",
          },
          {
            logo: SiActivitypub,
            label: "Activities",
            url: "/my-activities",
          },
          {
            logo: AiOutlineUser,
            label: "Profile",
            url: "/profile",
          },
        ];
      case "Employee":
        return [
          {
            logo: LuScan,
            label: "Scan",
            url: "/scan",
          },

          {
            logo: AiOutlineUser,
            label: "Profile",
            url: "/profile",
          },
        ];
    }
  }
};
const NavbarMain = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  async function logout() {
    try {
      setIsLoading(true);
      const { result } = await authApi.logout();
      if (result.status) {
        Cookies.remove(btoa(process.env.NEXT_PUBLIC_KEY_USER));
        Cookies.remove(btoa(process.env.NEXT_PUBLIC_KEY_TOKEN));
        ManagementSuccessHandling(result.message);
        router.push("/");
      }
    } catch (error) {
      ManagementErrorHandling(error);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    setIsRendered(true);
  }, []);
  return (
    <nav className="w-full">
      <ul className="flex items-center space-x-3">
        {isRendered &&
          navList()?.map((item, i) => (
            <li key={i}>
              <NavItem item={item} />
            </li>
          ))}
        <button
          onClick={() => logout()}
          className={` text-2xl px-2 py-1 border hover:border-black transition-all duration-300 flex items-center`}
          title="logout"
        >
          {isLoading ? <Loader className="text-black" /> : <IoMdLogOut />}
          <p className="text-sm ml-1">Logout</p>
        </button>
      </ul>
    </nav>
  );
};

export default NavbarMain;

function NavItem({ item }) {
  const pathname = usePathname();
  return (
    <Link
      href={item.url}
      className={`${
        pathname === item.url && "border-black bg-black text-white"
      } text-2xl px-2 py-1 border hover:border-black transition-all duration-300 flex items-center`}
      title={item.label}
    >
      <item.logo />
      <span className="text-sm ml-1">{item.label}</span>
    </Link>
  );
}
