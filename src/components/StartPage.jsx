import framsidabild from "../data/framsidabild.png";
import { NavLink } from "react-router-dom"
import profil from "../data/login-icon.png"



const RenderStartPage = () => {
  return (
    <>
      <main className="main-startpage">
        <p className="adress">Spice gatan 3 444 44 SpicyLand</p>
        <div className="startpage-flexcontainer">
          <img className="welcomeImg" src={framsidabild} alt="framsida bild" />
          <div className="info-resturant">
            <p>
              vår restaurang tar dig med på en smakresa fylld av hetta och
              kryddor från hela världen. Med vårt fokus på stark mat erbjuder vi
              en spännande meny som lockar de modiga smakäventyrarna.
            </p>
          </div>
          <p className="open-info">Öppettider:</p> 
          <p className="open-info">Måndag till söndag 10.00 - 23.00</p>

          <button className="meny-btn"><NavLink to="/meny" className="nav-link-style"> Meny </NavLink> </button>
         
        </div>
      </main>
	  <footer>
      <p>Mejl: Spicy@gmail.se</p>
	  <NavLink to="/login" className="nav-link-style" > <img src={profil} alt="profilbild" className="profilsize"/><p className="logIn">Logga in</p>
	  </NavLink> 
	  <p className="phone">Tele: 0200-02020256 </p>
    </footer>
     
    </>
  );
};
export default RenderStartPage;
