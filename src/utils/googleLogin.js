import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import axios from "axios";

const goggleProvider = new GoogleAuthProvider();

export function googleLogin() {
  signInWithPopup(auth, goggleProvider)
    .then((result) => {
      const user = {email: result.user.email}
      axios.post('http://localhost:5000/jwt',user )
      .then(res => console.log(res.data))
    })
    .catch((err) => {
      console.log(err);
    });
}
