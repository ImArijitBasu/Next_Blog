// pages/profile.js
import React from 'react';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

const Profile = async () => {
  const { getUser } = await getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect('/api/auth/login');
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-5">Welcome to your profile!</h1>
    </div>
  );
};

export default Profile;
