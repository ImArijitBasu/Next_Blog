import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Profile = async () => {
  const session = await getKindeServerSession();
  const { isAuthenticated } = session;

  return (await isAuthenticated()) ? (
    <div>
      <h1 className="text-3xl font-bold text-center my-5">
        Welcome to your profile!
      </h1>
    </div>
  ) : (
    redirect('/api/auth/login')
  );
};

export default Profile;
