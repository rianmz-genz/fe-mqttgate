"use client";
import React, { PropsWithChildren, useEffect } from "react";
import Portal from "../portals";


export default function Modal({
  children,
  setShow,
  show,
}) {
  return (
    <Portal show={show} toggleShow={setShow}>
      <div className="flex flex-col gap-4 border p-4 rounded-[.25rem] w-[350px] backdrop-blur-md">
        {children}
      </div>
    </Portal>
  );
}
