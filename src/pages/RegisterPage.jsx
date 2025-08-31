import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const RegisterPage = () => {
  const { createUser, updateUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ email, password, name });

    //createUser
    createUser(email, password, name)
      .then((result) => {
        console.log(result.user);
        alert("User created successfully!");
      })
      .catch((error) => {
        console.log(error.message);
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
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input"
                  name="name"
                  placeholder="Email"
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button type="submit" className="btn btn-neutral mt-4">
                  Register
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
