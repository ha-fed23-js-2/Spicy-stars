import framsidabild from "../data/framsidabild.png";
import { NavLink } from "react-router-dom"
import { handleAPI } from "../data/api";

const RenderStartPage = () => {
  return (
    <>
      <main>
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
          <button className="meny-btn"><NavLink to="/meny"> Meny </NavLink> </button>
          {/* TODO: Add NavLink to btn (meny)onClick={handleAPI} */}
        </div>
      </main>
     
    </>
  );
};
export default RenderStartPage;
