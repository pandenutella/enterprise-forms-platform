import { authenticationClient } from "../client";

export const signInWithPassword = (email: string, password: string) => {
  return authenticationClient.post(
    "/accounts:signInWithPassword",
    {
      email,
      password,
      returnSecureToken: true,
    },
  );
};

export const lookup = (idToken: string) => {
  return authenticationClient.post("/accounts:lookup", {
    idToken,
  });
};

export const update = (idToken: string, password: string) => {
  return authenticationClient.post(
    "/accounts:update",
    {
      idToken,
      password,
      returnSecureToken: true,
    },
  );
};
