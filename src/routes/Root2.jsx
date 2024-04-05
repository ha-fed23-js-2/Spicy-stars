import { Link, NavLink, Outlet } from "react-router-dom";
import "../Menu.css";
import "../index.css";
// <NavLink to="/"> Meny </NavLink>

const Root = () => (
  <>
    <header>
      <h1>Spicy Food </h1>
    </header>
    <Outlet />
    {/* <footer>
      <p>Mejl: Spicy.Stars@gmail.se</p>
    </footer> */}
  </>
);

export default Root;
