import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { FirebaseAuth } from "react-firebaseui";
// import firebase from "./firebase";

const provider = new GoogleAuthProvider()
const auth = FirebaseAuth

// const googleSignin = signInWithPopup(auth, provider);
  // .then((result) => {
  //   const credential = GoogleAuthProvider.credentialFromResult(result);
  //   const token = credential?.accessToken;
  //   const user = result.user;
  //   return {user, token};
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   const email = error.customData.email;
  //     const credential = GoogleAuthProvider.credentialFromError(error);
  //     return {error}
  // });

// export default googleSignin;