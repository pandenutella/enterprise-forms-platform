import { databaseClient } from "../client";

export const findAll = () => {
  return databaseClient.get("/form-groups.json");
};
