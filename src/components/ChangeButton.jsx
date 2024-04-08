import { useVariablesStore } from "../data/store"
import { useState } from "react"

const HandleChange = ({id, name, ingredients, description, strength, type, price, image}) =>{
    const [formValues, setFormValues] = useState({
        name: name,
        description: description,
        ingredients: ingredients,
        price: price,
        strength: strength,
        type: type,
        image: image
    });
    const [showForm, setShowForm] = useState(false);
	const [showButton, setShowButton] = useState(false);

    const changeMenyItemUpdate = useVariablesStore(state => state.changeMenuItemUppdate);
    const toggleForm = () => {
        setShowForm(!showForm);
        setShowButton(true)
        
    };
    const changeObj = (newValues) => {
        const updatedValues = { ...formValues, ...newValues };
        changeMenyItemUpdate(id, updatedValues);
    };

    const handleChangeClick = () => {
        changeObj(formValues);
        setShowForm(false)
        setShowButton(false)
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };

    return (
        <div className="change-btn-container">
            <button className={`${showButton ? 'change-btnAlt' : 'change-btn'}`} onClick={toggleForm}>Ändra</button>
            {showForm && (
                <div className="Form-checkout">
                    <label>Namn maträtt</label>
                    <input type="text" name="name" value={formValues.name} onChange={handleChange} />
                    <label>Beskrivning</label>
                    <input type="text" name="description" value={formValues.description} onChange={handleChange} />
                    <label>Ingredienser</label>
                    <input type="text" name="ingredients" value={formValues.ingredients} onChange={handleChange} />
                    <label>Pris</label>
                    <input type="text" name="price" value={formValues.price} onChange={handleChange} />
                    <label>Styrka</label>
                    <input type="text" name="strength" value={formValues.strength} onChange={handleChange} />
                    <label>Typ</label>
                    <input type="text" name="type" value={formValues.type} onChange={handleChange} />
                    <label>Bildlänk</label>
                    <input type="text" name="image" value={formValues.image} onChange={handleChange} />
                    <button onClick={handleChangeClick}>Spara</button>
                </div>
            )}
        </div>
    );
};
export default HandleChange