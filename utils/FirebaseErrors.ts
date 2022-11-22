export type IFirebaseErrorCode = {
    code: string
    message: string
}

export const FirebaseErrors = {
  wrongPassword: {
    code: "auth/wrong-password",
    message: "Password incorrect",
  },
  userNotFound: {
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
  postNotfound: {
    code: "api/post-not-found",
    message: "Post not found",
  },
  generic: {
    code: "unknown",
    message: "An unknown error has ocurred",
  }
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

export type IErrorResponse = {
  error?: IFirebaseErrorCode
}
