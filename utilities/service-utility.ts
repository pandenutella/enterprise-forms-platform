import { FirebaseError } from "firebase/app";

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
