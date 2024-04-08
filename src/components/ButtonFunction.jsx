// Ta bort maträtt från listan
import React from 'react'

const ButtonFunction =({onClick}) => {
	return (
	<button className="delete-btn" onClick={onClick}> Ta bort </button>
	)
}

export default ButtonFunction;

