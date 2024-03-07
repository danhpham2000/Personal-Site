import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <h1>
        <div>Danh</div>
        <div>Pham</div>
      </h1>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Me</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/project">Projects</NavLink>
        <NavLink to="/contact">Contact Me</NavLink>
      </div>
    </header>
  );
};

export default Navbar;
