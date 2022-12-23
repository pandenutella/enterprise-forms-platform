type FirebaseError = {
  code: number;
  message: string;
};

export const getErrorMessage = (error: FirebaseError) => {
  switch (error.message) {
    case "EMAIL_NOT_FOUND":
      return "Invalid sign in account!";
    default:
      return error.message;
  }
};
