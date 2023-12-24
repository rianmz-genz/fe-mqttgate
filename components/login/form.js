import React, { useEffect, useState } from "react";
import { Input, InputPassword } from "../input";
import Loader from "../loader/Loader";
import authApi from "@/api/auth";
import { ManagementErrorHandling, ManagementSuccessHandling } from "@/utils/modal";
import { isSuccess } from "@/utils";
import Cookies from 'js-cookie'
import { useRouter } from "next/navigation";
const FormLogin = () => {
   const [form, setForm] = useState({
      email: "",
      password: "",
   });
const router = useRouter()
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(false);
   const hitLogin =async () => {
   setIsLoading(true);
      try {
         const { result } = await authApi.login(form)
         console.log(result)
         if (isSuccess(result.status)) {
         ManagementSuccessHandling(result.message);
         Cookies.set(btoa(process.env.NEXT_PUBLIC_KEY_TOKEN), result.data.token);
         router.push("/dashboard")
      }
      } catch (error) {
         console.log(error)
         ManagementErrorHandling(error)
      } finally {
         setIsLoading(false)
      }
   }
   const onSubmit = async (e) => {
      e.preventDefault();
      hitLogin()
   };

   return (
      <form
         onSubmit={onSubmit}
         className="flex flex-col justify-center items-start space-y-3"
      >
         <p
            className={`text-sm text-red-500 text-start transition-all duration-300 ${
               error ? "opacity-100 visible" : "invisible opacity-0"
            }`}
         >
            {error}
         </p>
         <Input
            title="Email*"
            placeholder="Masukan Email Anda"
            id="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
         />
         <InputPassword
            id={"password"}
            placeholder={"Masukan kata sandi anda"}
            title={"Kata Sandi*"}
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
         />
         <button
            type="submit"
            disabled={
               isLoading ||
               form.email.length === 0 ||
               form.password.length === 0
            }
            className={`${
               form.email.length === 0 || form.password.length === 0
                  ? "bg-black/60"
                  : "bg-black"
            } w-full py-4 text-white transition-all duration-300 ease-in-out flex justify-center items-center`}
         >
            {isLoading ? <Loader /> : "Masuk"}
         </button>
      </form>
   );
};

export default FormLogin;
