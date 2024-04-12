
import React from 'react'
import { useVariablesStore } from '../data/store'
import { useEffect } from 'react'
import { saveToApi } from '../data/api'



const HandleDeleteBtn =({id}) => {
	
	const {menuFood, deleteMenyItem} = useVariablesStore(state => ({deleteMenyItem: state.deleteMenyItem, menuFood: state.MenuFood}) )
	const handleClick =() =>{

		console.log("clicked");
		deleteMenyItem(id)
		
	}


	return (
		<button className="delete-btn" onClick={handleClick}> Ta bort </button>
	)
}

export default HandleDeleteBtn
