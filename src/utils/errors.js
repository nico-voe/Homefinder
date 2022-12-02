export const processFirebaseErrors = (msg) => {
  switch (msg) {
    case "Firebase: Error (auth/invalid-email).":
      return "Email is invalid";
    case "Firebase: Error (auth/email-already-in-use).":
      return "Email is already in use";
    case "Firebase: Password should be at least 6 characters (auth/weak-password).":
      return "Password should be at least 6 characters";
    case "Firebase: Error (auth/wrong-password).":
      return "Wrong Password";
    case "Firebase: Error (auth/user-not-found).":
      return "User not found";
    default:
      return msg;
  }
};
