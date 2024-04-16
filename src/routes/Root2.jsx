import { Link, NavLink, Outlet } from "react-router-dom";
import "../css/Menu.css";
import "../css/index.css";
import "../css/login.css";
import "../css/Checkout.css";
import "../css/MenyEmployee.css";
import "../css/validering.css"
import "../css/popup.css"



const Root = () => (
  <>
    <header>
      <NavLink to="/" className="nav-link-style"><h1>Spicy Food </h1></NavLink>
    </header>
    <Outlet />
  </>
);

export default Root;
