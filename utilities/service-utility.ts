import { FirebaseError } from "firebase/app";
import { database } from "../firebase";
import { onValue, ref } from "firebase/database";

export const getErrorMessage = (error: FirebaseError) => {
  switch (error.code) {
    case "auth/wrong-password":
    case "auth/user-not-found":
      return "Invalid sign-in account!";
    case "auth/too-many-requests":
      return "Too many attempts! Please try again later.";
    default:
      return error.message;
  }
};

export const mapFirebaseData = (data: any) => {
  return Object.keys(data).map((id) => ({
    id,
    ...data[id],
  }));
};

export const findAllFirebaseData = (resource: string) => {
  return new Promise((resolve) => {
    onValue(ref(database, resource), (snapshot) => {
      const value = snapshot.val();

      resolve(value ? mapFirebaseData(value) : []);
    });
  });
};
