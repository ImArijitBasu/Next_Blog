
import { KindeAuth } from "@kinde-oss/kinde-auth-nextjs";

export default KindeAuth({
  clientId: process.env.KINDE_CLIENT_ID,
  clientSecret: process.env.KINDE_CLIENT_SECRET,
  issuer: process.env.KINDE_ISSUER_URL,
  site: process.env.KINDE_SITE_URL,
  redirectUri: process.env.KINDE_POST_LOGIN_REDIRECT_URL,
  stateParameter: true,
});
