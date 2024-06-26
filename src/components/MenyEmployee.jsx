import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PepparPicture from "../components/pepparimage";
import { saveOriginalToApi } from "../data/api"
import {useVariablesStore} from "../data/store.js"
import HandleDeleteBtn  from "./ButtonFunction";
import HandleChange from "./ChangeButton.jsx";
import AddFood from "./AddFood.jsx";

const MenyEmployee = () => {

  const {menuFood, showAddFood, setShowAddFood} = useVariablesStore(state => ({menuFood: state.MenuFood, showAddFood: state.showAddFood, setShowAddFood: state.setShowAddFood}))
  const generatePeppers = (strength) => {
    const peppers = [];
    const maxPeppar = Math.min(strength,5);
    for (let i = 0; i < maxPeppar; i++) {
      peppers.push(<PepparPicture key={i} />);
    }
    return peppers;
  };
  
  const addFoodClick = () => {
    console.log("click");
    setShowAddFood();
  };

  return (
	<>
    <main className="main-employee">
     <button className="logout-btn"><NavLink to="/meny" className="nav-link-style"> Logga ut </NavLink></button>
    

      <h2>MENY</h2>
      <div className="layout-employee">
        <section className="menyFoodDiv">
          {menuFood.map((mat, index) => (
            <div key={index} className="meny-container">
              <h2>
                {mat.name}
              </h2>
              <img src={mat.image} alt={mat.name} className="food-picture" />
              <div className="description-food">
                <p>{mat.description}</p>
                <p>Ingredienser: {mat.ingredients}</p>
              </div>
              <div className="strength-section">
                
              {generatePeppers(mat.strength)}
                <p className="pris">Pris: {mat.price}Kr</p>
              </div>
              <div className="Price-btn">
                <HandleChange id={mat.id} name={mat.name} ingredients={mat.ingredients} description={mat.description} strength={mat.strength} type={mat.type} price={mat.price} image={mat.image}/> 
               
                <HandleDeleteBtn id={mat.id} />
              </div>
            </div>
          ))}
        </section>
       
        <button className="add-food-btn" onClick={addFoodClick}>Lägg till ny maträtt</button>
		{showAddFood && <AddFood />}

        
      </div>
		  <div className="save-to-api-container">
    <button className="save-to-api" onClick={saveOriginalToApi}>Spara Orginal till API</button>
  </div>
    </main>
	<footer>
      <p>Mejl: Spicy@gmail.se</p>
	  <p className="phone">Tele: 0200-02020256 </p>
    </footer>
	</>
  );
};
export default MenyEmployee;
