import { Link, NavLink, Outlet } from "react-router-dom";
import "../css/Menu.css";
import "../css/index.css";
import "../css/login.css";
import "../css/Checkout.css";
import "../css/MenyEmployee.css";
import "../css/validering.css"
import "../css/popup.css"
// <NavLink to="/"> Meny </NavLink>
import profil from "../data/login-icon.png"


const Root = () => (
  <>
    <header>
      <NavLink to="/" className="nav-link-style"><h1>Spicy Food </h1></NavLink>
    </header>
    <Outlet />
    <footer>
      <p>Mejl: Spicy.Stars@gmail.se</p>
	  <NavLink to="/login"> <img src={profil} alt="profilbild" className="profilsize"/>
	  </NavLink> 
    </footer>
  </>
);

export default Root;
