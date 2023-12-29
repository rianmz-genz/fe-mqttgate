"use client";
import userApi from "@/api/user";
import React, { useEffect, useState } from "react";
import generatePDF, { Resolution, Margin } from "react-to-pdf";
import QRCode from "react-qr-code";
const ProfilePage = () => {
  const [profile, setProfile] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getProfile();
  }, []);
  const getProfile = async () => {
    setIsLoading(true);
    try {
      const { result } = await userApi.profile();
      if (result.status) {
        console.log(result);
        setProfile(result.data.user);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="mt-6 space-y-3">
      {isLoading ? (
        <>
          <Skelton />
          <Skelton />
          <Skelton />
          <Skelton />
        </>
      ) : (
        <>
          <TitleValue title={"Email"} value={profile?.email} />
          <TitleValue title={"Name"} value={profile?.name} />
          <TitleValue
            title={"Office Name"}
            value={profile?.office?.name ?? ""}
          />
          <TitleValue
            title={"Office Address"}
            value={profile?.office?.address ?? ""}
          />
          <QrCode code={profile?.office?.code ?? "0"} />
        </>
      )}
    </div>
  );
};

export default ProfilePage;
function Skelton() {
  return (
    <div className="space-y-1">
      <div className="bg-slate-300 animate-pulse rounded-full h-3 w-6"></div>
      <div className="bg-slate-300 animate-pulse rounded-full h-3 w-12"></div>
    </div>
  );
}
function TitleValue({ title, value }) {
  return (
    <div className="">
      <h3 className="text-xl">{title}</h3>
      <p>{value}</p>
    </div>
  );
}

function QrCode({ code }) {
  const options = {
    // default is `save`
    method: "save",
    // default is Resolution.MEDIUM = 3, which should be enough, higher values
    // increases the image quality but also the size of the PDF, so be careful
    // using values higher than 10 when having multiple pages generated, it
    // might cause the page to crash or hang.
    resolution: Resolution.MEDIUM,
    page: {
      // margin is in MM, default is Margin.NONE = 0
      margin: Margin.NONE,
      // default is 'A4'
      format: "credit-card",
      // default is 'portrait'
      orientation: "potrait",
    },
    canvas: {
      // default is 'image/jpeg' for better size performance
      mimeType: "image/png",
      qualityRatio: 1,
    },
    // Customize any value passed to the jsPDF instance and html2canvas
    // function. You probably will not need this and things can break,
    // so use with caution.
    overrides: {
      // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
      pdf: {
        compress: true,
      },
      // see https://html2canvas.hertzen.com/configuration for more options
      canvas: {
        useCORS: true,
      },
    },
  };

  // you can use a function to return the target element besides using React refs
  const getTargetElement = () => document.getElementById("content-id");

  return (
    <div>
      <div id="content-id" className="w-6/12 p-3">
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={code}
          viewBox={`0 0 256 256`}
        />
      </div>
      <button
        className="px-4 py-2 border transition-all duration-300 border-black mt-1 hover:bg-black hover:text-white"
        onClick={() => generatePDF(getTargetElement, options)}
      >
        Download QR
      </button>
    </div>
  );
}
