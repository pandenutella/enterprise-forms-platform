import axios from "axios";

export const authenticationClient = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1",
  timeout: 1000,
});

authenticationClient.interceptors.request.use((config) => {
  const key = process.env.NEXT_PUBLIC_API_KEY;

  return { ...config, params: { ...config.params, key } };
});

export const databaseClient = axios.create({
  baseURL: "https://enterprise-forms-platform-default-rtdb.firebaseio.com",
  timeout: 1000,
});

databaseClient.interceptors.request.use((config) => {
  const auth = localStorage.getItem("idToken");

  return { ...config, params: { ...config.params, auth } };
});
