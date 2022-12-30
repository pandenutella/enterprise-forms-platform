import { databaseClient } from "../client";

export const findAll = () => {
  return databaseClient.get("/forms.json");
};
