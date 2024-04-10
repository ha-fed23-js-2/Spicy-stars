
import PepparPicture from "../components/pepparimage";

import {useVariablesStore} from "../data/store.js"
import HandleDeleteBtn  from "./ButtonFunction";
import HandleChange from "./ChangeButton.jsx";
const MenyEmployee = () => {

  const menuFood = useVariablesStore(state => state.MenuFood)


  return (
    <main>
      <button className="logout-btn"> Logga ut</button>

      <h2>MENY</h2>
      <div className="layout-employee">
        <section className="menyFoodDiv">
          {menuFood.map((mat, index) => (
            <div key={index} className="meny-container">
              <h2>
                {mat.id}. {mat.name}
              </h2>
              <img src={mat.image} alt={mat.name} className="food-picture" />
              <div className="description-food">
                <p>{mat.description}</p>
                <p>Ingredienser: {mat.ingredients}</p>
              </div>
              <div className="strength-section">
                {PepparPicture()} {mat.strength}
              </div>
              <div className="Price-btn">
                <p>Pris: {mat.price}Kr</p>
                <HandleChange id={mat.id} name={mat.name} ingredients={mat.ingredients} description={mat.description} strength={mat.strength} type={mat.type} price={mat.price} image={mat.image}/> 
               
                <HandleDeleteBtn id={mat.id} />
              </div>
            </div>
          ))}
        </section>
        <button className="add-food-btn">Lägg till ny maträtt</button>
        <section className="Form-section">
			
          {/* <div className="Form-checkout">
            <label> Bild länk</label>
            <input type="text"></input>
            <label> Namn maträtt </label>
            <input type="text"></input>
            <label> Beskrivning </label>
            <input type="text"></input>
            <label> Ingredienser </label>
            <input type="text"></input>
            <label> Pris </label>
            <input type="text"></input>
            <label> Styrka </label>
            <input type="text"></input>
          </div>
          <button>Spara</button> */}
        </section>
      </div>
    </main>
  );
};
export default MenyEmployee;
