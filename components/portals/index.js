"use client";
import React, {
  PropsWithChildren,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import { createPortal } from "react-dom";


export default function Portal({
  children,
  show,
  toggleShow,
}) {
  const portalRef = useRef(null);

  useLayoutEffect(() => {
    const portalElement = document.getElementById("portal");
    if (portalElement) {
      // console.log(portalRef)
      portalRef.current = portalElement;
    }
  }, [portalRef]);

  if (!portalRef.current) {
    return;
  }

  return createPortal(
    <div
      className={`fixed z-[1000] top-0 left-0 right-0 bottom-0 bg-gray-900/50 ${
        !show && "opacity:0 pointer-events-none hidden"
      }`}
      onClick={() => {
        toggleShow(false);
      }}
    >
      <div
        className={`absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ${
          !show && "opacity:0 pointer-events-none hidden"
        }`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>,
    portalRef.current
  );
}
