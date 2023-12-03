import { NavLink } from "react-router-dom";
const StyledNavbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "green" };
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "green" };
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/products"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "green" };
        }}
      >
        Products
      </NavLink>
      <NavLink
        to="/login"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "green" };
        }}
      >
        Log-In
      </NavLink>
    </nav>
  );
};

export default StyledNavbar;
