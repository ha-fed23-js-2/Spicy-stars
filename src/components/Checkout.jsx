import React from 'react';
import { useVariablesStore } from '../data/store.js';

const Checkout = () => {
	const { Checkout, CheckoutTotal, removeFromCheckout } = useVariablesStore(); // Destructure correctly with capital "C"
	console.log('Checkout:', Checkout);
	return (
		<main>
			<div className="checkout">
				<section className="checkout-section">
					{Checkout && Checkout.map((item) => (
						<div key={item.id} className="checkout-card">
							<h3>{item.name}</h3>
							<img className='food-picture' src={item.image} alt={item.name} />
							<p>{item.price} KR</p>
							<p>Antal: {item.quantity}</p>
							<button className='remove-btn' onClick={() => removeFromCheckout(item.id)}>Ta bort</button>
						</div>
					))}
					<p>Summa: {CheckoutTotal} KR</p>
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