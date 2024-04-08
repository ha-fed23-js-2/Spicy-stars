import { useVariablesStore } from "../data/store"
import { useState } from "react"

const HandleChange = ({id, name, ingredients, description, strength, type, price, image}) =>{
    const [value, setValue] = useState(name)
    const [showForm, setShowForm] = useState(false);
    
    const changeMenyItemUpdate = useVariablesStore(state => state.changeMenuItemUppdate)


    console.log("Klickat på HandleChange");

   const changeObj = () => {     
       changeMenyItemUpdate(id, {name: value})
    }
    // const HandleChangeOne = event => {setValue(event.target.value)}

    const handleChangeClick =() => {
		setShowForm(true)
        console.log("Klickat, på knap handlechangeclick");
        return (
			<>
            <div className="Form-checkout">
            {/* <label> Bild länk</label>
            <input type="text" value={image} ></input> */}
            <label> Namn maträtt </label>
            {/* <input type="text" value={name} onBlur={changeObj}></input> */}
            <input type="text" value={name} onChange={e => setValue(e.target.value)}></input>
            {/* <label> Beskrivning </label>
            <input type="text" value={description} onBlur={}> </input>
            <label> Ingredienser </label>
            <input type="text" value={ingredients.join(",")} onBlur={}></input>
            <label> Pris </label>
            <input type="text" value={price} onBlur={} ></input>
            <label> Styrka </label>
            <input type="text" value={strength} onBlur={} ></input>
			<label> Type</label>
			<input type="text" value={type} onBlur={}> </input> */}
          </div>
          <button onClick={changeObj}>Spara</button>
		  </>
        )
    }
    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <div className="change-btn-container">
            <button className="change-btn" onClick={toggleForm}>Ändra</button>
            {showForm && (
                <div className="Form-checkout">
                    <label>Namn maträtt</label>
                    <input type="text" value={value} onChange={e => setValue(e.target.value)} />
                    <button onClick={changeObj}>Spara</button>
                </div>
            )}
        </div>
    );
	
// console.log('knappen trycks på',{handleChangeClick} )
}

export default HandleChange