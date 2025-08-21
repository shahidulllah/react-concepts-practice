const Navbar = () => {
  const navlinks = <></>;
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
