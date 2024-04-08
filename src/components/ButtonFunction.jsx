
import React from 'react'
import { useVariablesStore } from '../data/store'




const HandleDeleteBtn =({id}) => {
	
	
	const deleteMenyItem = useVariablesStore(state => state.deleteMenyItem)
	const handleClick =() =>{

		
		deleteMenyItem(id)
	  }
	
		
		return (
	<button className="delete-btn" onClick={handleClick}> Ta bort </button>
	)
}

export default HandleDeleteBtn
