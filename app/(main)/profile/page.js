"use client";
import userApi from "@/api/user";
import React, { useEffect, useState } from "react";

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
            title={"Office Code"}
            value={profile?.office?.code ?? ""}
          />
          <TitleValue
            title={"Office Address"}
            value={profile?.office?.address ?? ""}
          />
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
