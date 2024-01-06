"use client";
import React, { useState, useRef, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import qrApi from "@/api/qr";
import { isSuccess } from "@/utils";
import {
  ManagementErrorHandling,
  ManagementSuccessHandling,
} from "@/utils/modal";
import Image from "next/image";
import Cookies from "js-cookie";
const ScanQr = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [isCodeVisible, setisCodeVisible] = useState(false);
  useEffect(() => {
    setIsRendered(true);
  }, []);

  useEffect(() => {
    if (isRendered) {
      const html5QrcodeScanner = new Html5QrcodeScanner(
        "reader",
        { fps: 10, qrbox: { width: 250, height: 250 } },
        /* verbose= */ false
      );

      const onScanSuccess = async (code, decodedResult) => {
        try {
          if (code && !isCodeVisible) {
            setisCodeVisible(true);
            const { result } = await qrApi.scan({ code });
            if (isSuccess(result.status)) {
              setIsOpen(true);
              html5QrcodeScanner.clear();
            }
          }
        } catch (error) {
          ManagementErrorHandling(error);
        }
      };

      const onScanFailure = (error) => {
        //   console.warn(`Code scan error = ${error}`);
      };

      html5QrcodeScanner.render(onScanSuccess, onScanFailure);

      // Cleanup when the component unmounts
      return () => {
        html5QrcodeScanner.clear();
      };
    }
  }, [isRendered]);
  return (
    isRendered && (
      <>
        <div
          className={`${
            isOpen ? "hidden" : "block"
          } transition-all duration-300 w-full`}
          id="reader"
        ></div>
        <div
          className={`${
            !isOpen ? "invisible opacity-0" : "visible opacity-100"
          } transition-all duration-300 flex flex-col justify-center items-center space-y-3 mt-5`}
        >
          <Image
            src={"/images/gate.svg"}
            alt="gate"
            width={1080}
            height={1080}
            className="w-8/12"
          />
          <p>Gate opened</p>
          <button
            onClick={() => location.reload()}
            className="px-4 py-2 bg-black text-white"
          >
            Scan Again
          </button>
        </div>
      </>
    )
  );
};

export default ScanQr;
