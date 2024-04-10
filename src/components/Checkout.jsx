import React from 'react';
import { useVariablesStore } from '../data/store.js';

const Checkout = () => {
	const { Checkout, CheckoutTotal, removeFromCheckout, addToCheckout } = useVariablesStore(); // Destructure correctly with capital "C"
	console.log('Checkout:', Checkout);
	const handleAddToCheckout = (item) => {
		console.log('Adding item to checkout:', item);
		addToCheckout(item);
	};

	return (
		<main>
			<div className="checkout">
				<section className="checkout-section">
					{Checkout && Checkout.map((item) => (
						<div key={item.id} className="checkout-card">
							<h3>{item.name}</h3>
							<img src={item.image} alt={item.name} />
							<p>{item.price} KR</p>
							<button onClick={() => removeFromCheckout(item.id)}>Ta bort</button>
							<p className="centeredP">Antal</p>
						</div>
					))}
					<p>Summa: {CheckoutTotal} KR</p> {/* Correct variable name to CheckoutTotal */}
				</section>
				<section className="Form-section">
					<div className="Form-checkout">
						<label> Namn </label>
						<input type="text" />
						<label> Telefonnummer </label>
						<input type="text" />
						<label> Mejl </label>
						<input type="text" />
					</div>
					<button>Beställ</button>
				</section>
			</div>
		</main>
	);
};

export default Checkout;
