import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import GoggleLogin from "../utils/GoogleLogin";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log(watch("email"));

  const handleFormSubmit = (data) => {

    loginUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error.message);
      });
    console.log(data.email,data.password);
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse max-w-5xl">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit(handleFormSubmit)}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="input"
                  placeholder="Email"
                />
                {errors.email && <span className="text-rose-600">Email field is required</span>}
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  {...register("password")}
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button type="submit" className="btn btn-neutral mt-4">
                  Login
                </button>
              </fieldset>
            </form>
            <GoggleLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
