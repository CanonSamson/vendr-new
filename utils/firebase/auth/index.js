export const loginEmailAndPassword = async ({ email, password }) => {
  const { auth } = await import("../../../firebase_config");
  const { signInWithEmailAndPassword } = await import("firebase/auth");

  try {
    await signInWithEmailAndPassword(auth, email, password);

    if (auth.currentUser) {
      return { Success: true, Error: false };
    } else {
      return { Success: true, Error: false };
    }
  } catch (error) {
    let err;
    if (error.message === `Firebase: Error (auth/user-not-found).`) {
      err = " user has not been registered";
    }

    if (error.message === `Firebase: Error (auth/wrong-password).`) {
      err = "Your Password Is Wrong";
    }

    if (error.message === `Firebase: Error (auth/invalid-login-credentials).`) {
      err = " user has not been registered";
    }

    if (error.message === `Firebase: Error (auth/network-request-failed).`) {
      err = "turn on your network";
    }

    if (
      error.message ===
      `Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).`
    ) {
      err =
        "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.";
    }
    if (err) return { Success: false, Error: err };
  }
};

export const signUpEmailAndPassword = async ({ email, password }) => {
  const { auth } = await import("../../../firebase_config");
  const { createUserWithEmailAndPassword, updateProfile } = await import(
    "firebase/auth"
  );

  try {
    const credential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    if (credential && auth.currentUser) {
      return { Success: true, Error: false, uid: auth.currentUser.uid };
    }
  } catch (error) {
    console.log(error);
    let err;
    if (error.message === `Firebase: Error (auth/email-already-in-use).`) {
      err = "Email address already in use";
    }

    if (error.message === `Firebase: Error (auth/invalid-email).`) {
      err = "Enter a valid Email address";
    }
    if (
      error.message ===
      `Firebase: Password should be at least 6 characters (auth/weak-password).`
    ) {
      err = "Password should be at least 6 characters ";
    }

    if (err) return { Error: err, Success: false };
  }
};
