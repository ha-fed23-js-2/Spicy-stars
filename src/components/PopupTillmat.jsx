import React from "react";

const PopupTillMat = ({ selectedFood, setSelectedFood }) => {

	return (
		<div className="added-food-popup">
			<div>
				<p>Mat Tillagd</p>
				<p>{selectedFood && selectedFood.name}</p>
			</div>
		</div>
	)
}

export default PopupTillMat