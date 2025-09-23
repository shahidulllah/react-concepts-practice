import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import GoggleLogin from "../utils/GoogleLogin";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const { handleSubmit, register } = useForm();

  const handleFormSubmit = (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    //createUser
    createUser(email, password, name)
      .then((result) => {
        console.log(result.user);
        alert("User created successfully!");
      })
      .catch((error) => {
        alert(error.message);
      });

    //update user
    updateUser(name)
      .then((result) => {
        console.log(result.user);
        alert("User name is also added..");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse max-w-5xl">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Create an account!</h1>
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
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  {...register("name", { required: true })}
                  placeholder="Name"
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  {...register("Password", { required: true })}
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button type="submit" className="btn btn-neutral mt-4">
                  Register
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

export default RegisterPage;
