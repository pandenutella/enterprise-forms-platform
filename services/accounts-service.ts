import { authenticationClient } from "../client";

export const signInWithPassword = (email: string, password: string) => {
  return authenticationClient.post(
    "/accounts:signInWithPassword",
    {
      email,
      password,
      returnSecureToken: true,
    },
    { params: { key: process.env.NEXT_PUBLIC_API_KEY } }
  );
};

export const update = (idToken: string, password: string) => {
  return authenticationClient.post(
    "/accounts:update",
    {
      idToken,
      password,
      returnSecureToken: true,
    },
    { params: { key: process.env.NEXT_PUBLIC_API_KEY } }
  );
};
