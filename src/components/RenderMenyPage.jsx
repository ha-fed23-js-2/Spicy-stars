import Menu from "../data/lista";
import { useState } from "react";
import PepparPicture from "../components/pepparimage";
import cart from "../data/cart.png"
const RenderMenyPage = () => {
  const [menuFood, setMenuFood] = useState(Menu);
  return (

    <main>
      <h2>MENY</h2>
	  <img className="cart" src={cart} alt="" />
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
              <button className="add-btn"> Lägg till</button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default RenderMenyPage;
