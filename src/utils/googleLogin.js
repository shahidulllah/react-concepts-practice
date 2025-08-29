import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const goggleProvider = new GoogleAuthProvider();

export function googleLogin() {
  signInWithPopup(auth, goggleProvider)
    .then((result) => {
      console.log(result.user);
    })
    .catch((err) => {
      console.log(err);
    });
}
