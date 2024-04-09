import { Link, NavLink, Outlet } from "react-router-dom";
import "../css/Menu.css";
import "../css/index.css";
import "../css/login.css";
import "../css/Checkout.css";
import "../css/MenyEmployee.css";
// <NavLink to="/"> Meny </NavLink>
import profil from "../data/profil.png"

const Root = () => (
  <>
    <header>
      <h1>Spicy Food </h1>
    </header>
    <Outlet />
    <footer>
      <p>Mejl: Spicy.Stars@gmail.se</p>
	  <img src={profil} alt="profilbild" />
    </footer>
  </>
);

export default Root;
