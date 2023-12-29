import React, { useEffect, useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
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
import { Input } from "../input";
function EditUserAction({ user }) {
  const [get] = useStore((state) => [state.getUsersByOfficeId]);
  const field = {
    name: "",
    email: "",
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [reqBody, setReqBody] = useState(field);
  const fields = Object.keys(field);
  useEffect(() => {
    setReqBody({
      email: user.email,
      name: user.name,
    });
  }, [user]);
  async function updateEmployee(e) {
    e.preventDefault();

    try {
      const raw = Cookies.get(btoa(process.env.NEXT_PUBLIC_KEY_USER));
      const officeId = JSON.parse(raw).office.id;
      setIsLoading(true);
      const { result } = await userApi.update(user.id, {
        ...reqBody,
        officeId,
      });
      if (isSuccess(result.status)) {
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
      <FiEdit
        className="text-md cursor-pointer ml-2"
        onClick={() => setIsOpen(true)}
      />
      <Popup isOpen={isOpen} setIsOpen={setIsOpen}>
        <h3 className="text-xl">Edit Employee</h3>
        <form onSubmit={updateEmployee} className="px-1 py-4 space-y-3">
          {fields.map((item, i) => (
            <Input
              key={i}
              title={capitalize(item)}
              placeholder={capitalize(item)}
              value={reqBody[item]}
              onChange={(e) =>
                setReqBody({ ...reqBody, [item]: e.target.value })
              }
            />
          ))}
          <button
            type="submit"
            className=" w-full px-4 py-2 bg-black text-white"
          >
            {isLoading ? <Loader /> : "Save Employee"}
          </button>
        </form>
      </Popup>
    </>
  );
}
export default EditUserAction;
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.substr(1);
}
