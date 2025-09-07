import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase.config";
import axios from "axios";

const goggleProvider = new GoogleAuthProvider();

const GoggleLogin = () => {
  const navigate = useNavigate();

  const handleGoggleLogin = () => {
    signInWithPopup(auth, goggleProvider)
      .then((result) => {
        const user = { email: result.user.email };
        axios
          .post("http://localhost:5000/jwt", user, { withCredentials: true })
          .then((res) => console.log(res.data));
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <button onClick={handleGoggleLogin} className="btn">
      Google Login
    </button>
  );
};

export default GoggleLogin;
