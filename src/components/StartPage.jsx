import framsidabild from "../data/framsidabild.png";
import { NavLink } from "react-router-dom"
import { saveOriginalToApi } from "../data/api";


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
          <p className="phone">Tele: 0202-020202 </p>
          <button className="meny-btn"><NavLink to="/meny" className="nav-link-style"> Meny </NavLink> </button>
          <button onClick={saveOriginalToApi}>Spara Orginal till API</button>
        </div>
      </main>
     
    </>
  );
};
export default RenderStartPage;
