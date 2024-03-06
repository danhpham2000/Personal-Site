import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <h1>Danh Pham</h1>
      <nav>
        <NavLink to="/about" id>About</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/project">Project</NavLink>
        <NavLink to="/interests">Interests</NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default RootLayout;
