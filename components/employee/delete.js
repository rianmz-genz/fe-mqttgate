import React, { useState } from "react";
import { FiTrash } from "react-icons/fi";
import Popup from "../modals/popup";
import userApi from "@/api/user";
import {
  ManagementErrorHandling,
  ManagementSuccessHandling,
} from "@/utils/modal";
import Loader from "../loader/Loader";
import { isSuccess } from "@/utils";
import useStore from "@/stores";
import Cookies from "js-cookie";
function DeleteUserAction({ userId }) {
  const [get] = useStore((state) => [state.getUsersByOfficeId]);

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  async function deleteEmployee() {
    try {
      setIsLoading(true);
      const { result } = await userApi.remove(userId);
      if (isSuccess(result.status)) {
        const raw = Cookies.get(btoa(process.env.NEXT_PUBLIC_KEY_USER));
        const officeId = JSON.parse(raw).office.id;
        await get(officeId);
        ManagementSuccessHandling(result.message);
        setIsOpen(false);
      }
    } catch (error) {
      ManagementErrorHandling(error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      <FiTrash
        className="text-md cursor-pointer"
        onClick={() => setIsOpen(true)}
      />
      <Popup isOpen={isOpen} setIsOpen={setIsOpen}>
        <h3 className="text-xl">Delete Employee</h3>
        <p>Are you sure delete this employee?</p>
        <button
          onClick={deleteEmployee}
          className="w-full bg-red-500 text-white mt-3 py-2"
        >
          {isLoading ? <Loader /> : "Delete"}
        </button>
      </Popup>
    </>
  );
}
export default DeleteUserAction;
