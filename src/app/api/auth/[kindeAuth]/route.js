import {handleAuth} from "@kinde-oss/kinde-auth-nextjs/server";
export const GET = handleAuth({
    cookies: {
      name: 'kinde_auth',
    //   secure: process.env.NODE_ENV === 'production',
    secure: true,
      httpOnly: true,
    //   sameSite: 'lax',
    sameSite: None ,
    },
  });
  