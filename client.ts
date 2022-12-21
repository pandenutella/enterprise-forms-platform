import axios from "axios";

const client = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1",
  timeout: 1000,
});

export default client;

