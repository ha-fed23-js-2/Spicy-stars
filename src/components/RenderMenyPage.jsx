import { useState } from "react";
import Menu from "../data/lista"; // Import Menu from lista
import PepparPicture from "../components/pepparimage";
import { useVariablesStore } from "../data/store"; // Import the Zustand store hook

const RenderMenyPage = () => {

	const [menuFood, setMenuFood] = useState(Menu);
	const addToCheckout = useVariablesStore(state => state.addToCheckout); // Get the addToCheckout function from the store

	const handleAddToCheckout = (item) => {
		addToCheckout(item);
	};
	return (
		<main>
			<h2>MENY</h2>
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
							{/* Add onClick event handler to call handleAddToCheckout function */}
							<button className="add-btn" onClick={() => handleAddToCheckout(mat)}> Lägg till</button>



						</div>
					</div>
				))}
			</section>
		</main>
	);
};

export default RenderMenyPage;
