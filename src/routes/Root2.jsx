import { Link, NavLink, Outlet } from "react-router-dom";
import "../css/Menu.css";
import "../css/index.css";
import "../css/login.css";
import "../css/Checkout.css";
import "../css/MenyEmployee.css";
// <NavLink to="/"> Meny </NavLink>
import profil from "../data/login-icon.png"


const Root = () => (
  <>
    <header>
      <h1>Spicy Food </h1>
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
