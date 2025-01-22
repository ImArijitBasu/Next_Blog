import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const Profile = async () => {
  const { getUser } = await getKindeServerSession();
  const user = await getUser();
  if (!user) {
    return redirect("/api/auth/login");
  }
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-5 px-2">
        {" "}
        Welcome to your profile!
      </h1>
    </>
  );
};

export default Profile;
