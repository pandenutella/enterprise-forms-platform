import client from "../client";

export const signInWithPassword = (email: string, password: string) => {
  return client.post(
    "/accounts:signInWithPassword",
    {
      email,
      password,
      returnSecureToken: true,
    },
    { params: { key: process.env.NEXT_PUBLIC_API_KEY } }
  );
};
