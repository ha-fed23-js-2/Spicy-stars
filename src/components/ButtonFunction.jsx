
import React from 'react'
import { useVariablesStore } from '../data/store'



const HandleDeleteBtn =({id}) => {
	
	const {menuFood, deleteMenyItem} = useVariablesStore(state => ({deleteMenyItem: state.deleteMenyItem, menuFood: state.MenuFood}) )
	const handleClick =() =>{

		console.log("clicked");
		deleteMenyItem(id)
		
	}

	return (
		<div className="change-btn-container">
		<button className="delete-btn" onClick={handleClick}> Ta bort </button> </div>
	)
}

export default HandleDeleteBtn
