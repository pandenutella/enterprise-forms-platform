import axios from "axios";

export const authenticationClient = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1",
  timeout: 1000,
});
