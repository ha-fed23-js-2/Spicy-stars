import { useVariablesStore } from "../data/store"
import { useState, useEffect } from "react"
import "../css/MenyEmployee.css";
import cross from "../data/cross-icon.png"



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
    const [isShown, setIsShown] = useState(true)
 

    const [showForm, setShowForm] = useState(false);
	const [showButton, setShowButton] = useState(false);
    const [errors, setErrors] = useState({
        name: '',
        description: '',
        ingredients: '',
        price: '',
        strength: '',
        type: '',
        image: ''
    });

    const changeMenyItemUpdate = useVariablesStore(state => state.changeMenuItemUppdate);
    const toggleForm = () => {
        setShowForm(!showForm);
        setShowButton(true)
        
    };

    const handleBlurChangeInChange = (event) => {
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

            default:
                break;
        }
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: error
        }));
    };
    
    const handleChangeClick = () => {
        changeMenyItemUpdate(id, formValues);
        setShowForm(false)
        setShowButton(false)
    };
    const closeForm = () => {
        setShowForm(false)
        setShowButton(false)
    }

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
               
                <div className="Form-food">
                    <img className="icon" onClick={closeForm} src={cross} alt="cross-icon" />
                    <label>Namn maträtt</label>
                    <input type="text" name="name" value={formValues.name} onChange={handleChange} onBlur={handleBlurChangeInChange} />
                    <p className={errors.name ? 'error' : 'shown'}>{errors.name ? errors.name : 'Placeholder text'}</p>
                    
                    <label>Beskrivning</label>
                    <input type="text" name="description" value={formValues.description} onChange={handleChange} onBlur={handleBlurChangeInChange} />
                    <p className={errors.description ? 'error' : 'shown'}>{errors.description ? errors.description : 'Placeholder text'}</p>
                    <label>Ingredienser</label>
                    <input type="text" name="ingredients" value={formValues.ingredients} onChange={handleChange} onBlur={handleBlurChangeInChange} />
                    <p className={errors.ingredients ? 'error' : 'shown'}>{errors.ingredients ? errors.ingredients : 'Placeholder text'}</p>
                    <label>Pris</label>
                    <input type="text" name="price" value={formValues.price} onChange={handleChange} onBlur={handleBlurChangeInChange} />
                    <p className={errors.price ? 'error' : 'shown'}>{errors.price ? errors.price : 'Placeholder text'}</p>
                    <label>Styrka (1-5)</label> 
                    <input type="text" name="strength" value={formValues.strength} onChange={handleChange} onBlur={handleBlurChangeInChange} />
                    <p className={errors.strength ? 'error' : 'shown'}>{errors.strength ? errors.strength : 'Placeholder text'}</p>
                    <label>Typ</label>
                    <input type="text" name="type" value={formValues.type} onChange={handleChange} onBlur={handleBlurChangeInChange}/>
                    <p className={errors.type ? 'error' : 'shown'}>{errors.type ? errors.type : 'Placeholder text'}</p>
                    <label>Bildlänk</label>
                    <input type="text" name="image" value={formValues.image} onChange={handleChange} onBlur={handleBlurChangeInChange}/>
                    <p className={errors.image ? 'error' : 'shown'}>{errors.image ? errors.image : 'Placeholder text'}</p>
                    <button onClick={handleChangeClick} disabled= {!formValues.name || !formValues.image || !formValues.description || !formValues.ingredients || !formValues.strength || !formValues.type || !formValues.price} >Spara</button>
                   
                </div>
            )}
   
        </div>
    );
};
export default HandleChange