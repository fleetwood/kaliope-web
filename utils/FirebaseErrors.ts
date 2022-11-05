export type IFirebaseErrorCode = {
    code: string
    message: string
}

export type IFirebaseErrorCodes = {
    [key: string]: any;
    code: IFirebaseErrorCode
}

export const FirebaseErrors: IFirebaseErrorCodes = {
  wrongPassword: {
    code: "auth/wrong-password",
    message: "Password incorrect",
  },
  notFound: {
    code: "auth/user-not-found",
    message: "User not found",
  },
  loginSubmit: {
    code: "auth/login-submit-handler",
    message: "Login hook exception",
  },
  registerSubmit: {
    code: "auth/register-submit-handler",
    message: "Registration failed",
  },
  duplicateUser: {
    code: "auth/email-already-in-use",
    message: "Unable to complete registration",
  },
  weakPassword: {
    code: "auth/weak-password",
    message: " Password must be at least 6 characters",
  },
  generic: {
    code: "unknown",
    message: "An unknown error has ocurred",
  },
  code: {
    code: "",
    message: "",
  },
};

export const convertToFirebaseError = (
  error?: any,
  defaultTo?: IFirebaseErrorCode
) => {
  try {
    const e = Object.values(FirebaseErrors).filter(
      (e) => JSON.stringify(e).indexOf(error.code) >= 0
    )[0];
    if (e) return e;
  } catch (e) {
  }

  return defaultTo || FirebaseErrors.generic;
};
