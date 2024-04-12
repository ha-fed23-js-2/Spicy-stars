import { useEffect , useState} from "react";
import PepparPicture from "../components/pepparimage";
import cart from "../data/kundvagn.png"
import { useVariablesStore } from "../data/store";
import { loadFromApi } from "../data/api";
import { NavLink } from "react-router-dom";
import PopupTillMat from "./PopupTillmat";

const RenderMenyPage = () => {
  const {menuFood, setMenuFood , addToCheckout} = useVariablesStore (state => ({menuFood: state.MenuFood, setMenuFood: state.setMenuFood, addToCheckout:state.addToCheckout}))
  const [isVisible, setIsVisible] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

  const handleAddToCheckout = (item) => {
	addToCheckout(item);
	setSelectedFood(item);
	toggleVisibility();
	};

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
	
  

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
	setTimeout(() => {
		setIsVisible(false);
	  }, 1000);
  };
  


  return (

    <main className="main-meny">
      <h2>MENY</h2>
      <NavLink to="/Checkout"> <img src={cart} alt="kundvagnen" className="cart"/>
	
	</NavLink> 
	 {isVisible && <PopupTillMat selectedFood={selectedFood} setSelectedFood={setSelectedFood}/>} 
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
            </div>
            <div className="Price-btn">
              <p>Pris: {mat.price}Kr</p>
			  <button className="add-btn" onClick={() => handleAddToCheckout(mat)}> Lägg till</button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );}

  export default RenderMenyPage 