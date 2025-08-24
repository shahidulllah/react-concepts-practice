import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navlinks = <div className="space-x-4">
  <NavLink to={'/'}>Home</NavLink>
  <NavLink to={'/photo'}>Galleries</NavLink>
  <NavLink to={'/register'}>Register</NavLink>
  <NavLink to={'/login'}>Login</NavLink>
  </div>;
  return (
    <div className="bg-base-100 shadow-sm">
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
