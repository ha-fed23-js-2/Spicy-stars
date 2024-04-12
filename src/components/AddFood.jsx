import { useState } from "react";
import { useVariablesStore } from "../data/store";
import { saveToApi } from "../data/api";
// import { useForm } from "react-hook-form";

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
     const [isShown, setIsShown] = useState(true)
     
    const [errors, setErrors] = useState({
        name: '',
        description: '',
        ingredients: '',
        price: '',
        strength: '',
        type: '',
        image: ''
    });

    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFoodAdd(prevState => ({
            ...prevState,
            [name]: value
        }));

    }
    const handleBlurChange = (event) => {
        const { name, value } = event.target;
        setIsShown(false)
        let error = '';
        switch (name) {
            case 'name':
                error = value.trim() === '' ? 'Namnet är obligatoriskt' : '';

                break;
            case 'image':
                error = value.trim() === '' ? 'Bildlänk är obligatorisk' : '';
                break;
              case 'ingredients':
                 error = value.trim() === ''? 'ingredienser är obligatorisk' : '';
                break;

                case 'description':
                 error = value.trim() === ''? 'Beskrivning är obligatoriskt' : '';
                break;

                case 'price':
                 error = value.trim() === ''? 'Priset är obligatorisk' : '' ;
                break;

                case 'strength':
                 error = value.trim() === ''? 'Styrka är obligatoriskt' :  '';
                break;
                
                case 'type':
                    error = value.trim() === ''? 'typ av mat är obligatorisk' : '';
                   break;

            // Lägg till validering för andra fält här
            default:
                break;
        }
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: error
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
            <input type="text" name="image" value={foodAdd.image} onBlur={handleBlurChange} onChange={handleInputChange} />
                {errors.image && 
                 <p className="error">{errors.image}</p>} 
                 <p className={`${isShown ? 'errors' : 'shown'}`} >1</p>
            <label> Namn maträtt </label>
            <input type="text" name="name" value={foodAdd.name} onChange={handleInputChange} onBlur={handleBlurChange}/>
                {errors.name && <p className="error">{errors.name}</p>}
                <p className={`${isShown ? 'errors' : 'shown'}`} >1</p>
            <label> Beskrivning </label>
            <input type="text" name="description" value={foodAdd.description} onChange={handleInputChange} onBlur={handleBlurChange}/>   
             {errors.name && <p className="error">{errors.description}</p>}
             <p className={`${isShown ? 'errors' : 'shown'}`} >1</p>
            <label> Ingredienser </label>
            <input type="text" name="ingredients" value={foodAdd.ingredients} onChange={handleInputChange} onBlur={handleBlurChange}/>
            {errors.name && <p className="error">{errors.ingredients}</p>}
            <p className={`${isShown ? 'errors' : 'shown'}`} >1</p>
            <label> Pris </label>
            <input type="text" name="price" value={foodAdd.price} onChange={handleInputChange}onBlur={handleBlurChange} />
            {errors.name && <p className="error">{errors.price}</p>}
            <p className={`${isShown ? 'errors' : 'shown'}`} >1</p>
            <label> Styrka </label>
            <input type="text" name="strength" value={foodAdd.strength} onChange={handleInputChange} onBlur={handleBlurChange} />
            {errors.name && <p className="error">{errors.strength}</p>}
            <p className={`${isShown ? 'errors' : 'shown'}`} >1</p>
            <label> Type </label>
            <input type="text" name="type" value={foodAdd.type} onChange={handleInputChange} onBlur={handleBlurChange} />
            {errors.name && <p className="error">{errors.type} </p>}
            <p className={`${isShown ? 'errors' : 'shown'}`} >1</p>
            <button className="add-food-btn" onClick={handleSaveFood}>Spara</button>
        </div>
		</section>
    );
};

export default AddFood;
