type FirebaseError = {
  code: number;
  message: string;
};

export const getErrorMessage = (error: FirebaseError) => {
  switch (error.message) {
    case "EMAIL_NOT_FOUND":
    case "INVALID_PASSWORD":
      return "Invalid sign-in account!";
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
