import { useState } from "react";
import { useVariablesStore } from "../data/store";
import { saveToApi } from "../data/api";

const AddFood = ({ id, name, ingredients, description, strength, type, price, image }) => {
    const { MenuFood, showAddFood, setShowAddFood, addFoodToMenu } = useVariablesStore(state => ({MenuFood: state.MenuFood, showAddFood: state.showAddFood, setShowAddFood: state.setShowAddFood, addFoodToMenu: state.addFoodToMenu})); 
	const [foodAdd, setFoodAdd] = useState({
		name: name || '', // Om name är falsy, använd en tom sträng
		description: description || '', // Samma här
		ingredients: ingredients || '', // Samma här
		price: price || '', // Samma här
		strength: strength || '', // Samma här
		type: type || '', // Samma här
		image: image || '', // Samma här
		id: MenuFood.length +1 
	});



    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFoodAdd(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSaveFood = () => {    
           addFoodToMenu(foodAdd)
            setShowAddFood()
            setFoodAdd({ 
                name: '',
                description: '',
                ingredients: '',
                price: '',
                strength: '',
                image: '',
				type: "",
            });
       
    };

    return (
		<section className="Form-section-add">
        <div className="Form-checkout-add">
            <label> Bild länk</label>
            <input type="text" name="image" value={foodAdd.image} onChange={handleInputChange} />
            <label> Namn maträtt </label>
            <input type="text" name="name" value={foodAdd.name} onChange={handleInputChange} />
            <label> Beskrivning </label>
            <input type="text" name="description" value={foodAdd.description} onChange={handleInputChange} />
            <label> Ingredienser </label>
            <input type="text" name="ingredients" value={foodAdd.ingredients} onChange={handleInputChange} />
            <label> Pris </label>
            <input type="text" name="price" value={foodAdd.price} onChange={handleInputChange} />
            <label> Styrka </label>
            <input type="text" name="strength" value={foodAdd.strength} onChange={handleInputChange} /><label> Type </label>
            <input type="text" name="type" value={foodAdd.type} onChange={handleInputChange} />
            <button className="add-food-btn" onClick={handleSaveFood}>Spara</button>
        </div>
		</section>
    );
};

export default AddFood;
