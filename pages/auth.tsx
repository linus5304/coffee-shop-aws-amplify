import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import React, { use } from "react";
import { useRouter } from "next/router";

export const Auth: React.FC<{}> = ({}) => {
  const router = useRouter();
  const { authStatus } = useAuthenticator(context => [context.authStatus]);
  if (authStatus === "authenticated") router.back();

  return <Authenticator socialProviders={["google"]}></Authenticator>;
};

export default Auth;
