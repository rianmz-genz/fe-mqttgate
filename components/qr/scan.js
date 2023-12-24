"use client";
import React, { useState, useRef, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import qrApi from "@/api/qr";
import { isSuccess } from "@/utils";
import { ManagementErrorHandling } from "@/utils/modal";
const ScanQr = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
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
        console.log(code);
        try {
          if (code) {
            const { result } = await qrApi.scan({ code });
            if (isSuccess(result.status)) {
              setIsOpen(true);
            }
          }
        } catch (error) {
          ManagementErrorHandling(error);
        }
        html5QrcodeScanner.clear();
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
  return isRendered && !isOpen ? (
    <div className="max-w-[600px] w-full" id="reader"></div>
  ) : (
    <div></div>
  );
};

export default ScanQr;
