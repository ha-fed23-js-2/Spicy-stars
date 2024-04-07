import Menu from "../data/lista";
import { useState } from "react";
import PepparPicture from "../components/pepparimage";
import ButtonFunction from "./ButtonFunction";

const MenyEmployee = () => {
  const [menuFood, setMenuFood] = useState(Menu);

  const handleDeleteBtn =(id) =>{
	const DeleteFood = menuFood.filter(mat => mat.id !==id)
	setMenuFood(DeleteFood)
  }
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
                <p>Ingredienser: {mat.ingredients.join(", ")}</p>
              </div>
              <div className="strength-section">
                {PepparPicture()} {mat.strength}
              </div>
              <div className="Price-btn">
                <p>Pris: {mat.price}Kr</p>
                <button className="change-btn"> Ändra</button>

                <ButtonFunction onClick={() => handleDeleteBtn(mat.id)}/>
              </div>
            </div>
          ))}
        </section>
        <button className="add-food-btn">Lägg till ny maträtt</button>
        <section className="Form-section">
          <div className="Form-checkout">
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
          <button>Spara</button>
        </section>
      </div>
    </main>
  );
};
export default MenyEmployee;
