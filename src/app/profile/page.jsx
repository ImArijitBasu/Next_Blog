'use client';

import React, { useEffect } from 'react';
import { useKindeAuth } from '@kinde-oss/kinde-auth-nextjs';
import { useRouter } from 'next/navigation';

const Profile = () => {
  const { isAuthenticated, getUser, login } = useKindeAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      console.log("User is not authenticated. Redirecting to login...");
      login();
    }
  }, [isAuthenticated, login]);

  const user = getUser();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-5">
        Welcome to your profile, {user.first_name}!
      </h1>
      <p className="text-center">Email: {user.email}</p>
    </div>
  );
};

export default Profile;
