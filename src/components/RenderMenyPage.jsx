import { useEffect } from "react";
import PepparPicture from "../components/pepparimage";
import cart from "../data/cart.png"
import { useVariablesStore } from "../data/store";
import { loadFromApi } from "../data/api";

const RenderMenyPage = () => {
  const {menuFood, setMenuFood } = useVariablesStore (state => ({menuFood: state.MenuFood, setMenuFood: state.setMenuFood}))
 

  useEffect (() => {
    async function nisse(){
      const result = await loadFromApi()
      setMenuFood(result)
    }
      nisse()
  },[]) 

  const generatePeppers = (strength) => {
    const peppers = [];
    for (let i = 0; i < strength; i++) {
      peppers.push(<PepparPicture key={i} />);
    }
    return peppers;
  };



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
              <p>Ingredienser: {mat.ingredients}</p>
            </div>
            <div className="strength-section">
              {generatePeppers(mat.strength)}
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
