import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  console.log(user);

  const handleLogout = () => {
      logout()
  }

  const navlinks = (
    <div className="space-x-4">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/photo"}>Galleries</NavLink>

      {user && user?.email ? (
        <button className="btn" onClick={handleLogout}>Logout</button>
      ) : (
        <>
          <NavLink to={"/login"}>login</NavLink>
          <NavLink to={"/register"}>Register</NavLink>
        </>
      )}
    </div>
  );
  return (
    <div className="bg-black/30 fixed top-0 left-0 right-0 text-white shadow-xl">
      <div className="navbar max-w-7xl mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">React Concepts</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">{navlinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
