// pages/profile.js
import React from 'react';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

const Profile = async () => {
  const session = await getKindeServerSession();
  const {getUser} = session;
  const user = await getUser();
  console.log(session);
  console.log(user);

  // if (!user) {
  //   return redirect('/api/auth/login');
  // }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-5">Welcome to your profile!</h1>
    </div>
  );
};

export default Profile;
