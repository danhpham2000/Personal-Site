import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <h1>
        <NavLink to="/">
          <div>Danh</div>
          <div>Pham</div>
        </NavLink>
      </h1>
      <div>
        <NavLink to="/about">About Me</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/project">Projects</NavLink>
        <NavLink to="/contact">Contact Me</NavLink>
      </div>
    </header>
  );
};

export default Navbar;
