"use client";
import React, { SyntheticEvent, cloneElement } from "react";
import { MdOutlineErrorOutline } from "react-icons/md";
import { LiaCheckCircleSolid } from "react-icons/lia";
import Modal from ".";
import useStore from "@/stores";
import Button from "../variant-button";

export default function NotificationModal() {
  const setModalShow = useStore((a) => a.setModalShow);
  const modalShow = useStore((a) => a.modalShow);
  const { confirmButton, type, message } = useStore((a) => a.notifModalContent);

  const ConfirmButton = confirmButton ? (
    cloneElement(confirmButton, {
      onclick: (event) => {
        if (confirmButton.props.onClick) {
          confirmButton.props.onClick(event);
        }
        setModalShow(false);
      },
    })
  ) : (
    <Button onClick={() => setModalShow(false)}>Close</Button>
  );

  const Logo =
    type == "done" ? (
      <LiaCheckCircleSolid className="text-6xl mx-auto" color="lime" />
    ) : (
      <MdOutlineErrorOutline color="red" className="text-6xl mx-auto" />
    );
  return (
    <Modal show={modalShow} setShow={setModalShow}>
      {Logo}
      <div>
        <p className="font-semibold text-center grow">
          {type == "done" ? "Success" : "Oops An Error Occured "}:
        </p>
        <p className="text-center grow">{message}</p>
      </div>
      <div className="flex justify-center">{ConfirmButton}</div>
    </Modal>
  );
}
