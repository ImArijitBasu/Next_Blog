import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const Profile = async () => {
  const session = await getKindeServerSession(); 
  if (!session) {
    redirect("/api/auth/login");
    return null;
  }

  const user = await session.getUser();  

  if (!user) {
    redirect("/api/auth/login");
  }

  console.log(user); 
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-5 px-2">
        {" "}Welcome to your profile!
      </h1>
    </>
  );
};

export default Profile;
