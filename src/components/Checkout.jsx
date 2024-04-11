import React from 'react';
import { useVariablesStore } from '../data/store.js';
import { useState } from 'react';
// import { log } from 'surge/lib/middleware/util/helpers.js';

const Checkout = () => {
	const { Checkout, CheckoutTotal, removeFromCheckout } = useVariablesStore(); // Destructure correctly with capital "C"
	console.log('Checkout:', Checkout);

const [orderName, setOrderName] = useState('');
const [orderEmail, setOrderEmail] = useState('');
const [orderPhone, setOrderPhone] = useState('');

const [orderNameError, setOrderNameError] = useState('');
const [orderEmailError, setOrderEmailError] = useState('');
const [orderPhoneError, setOrderPhoneError] = useState('');

const [isFormValidName, setIsFormValidName] = useState(0)
const [isFormValidTel, setIsFormValidTel] = useState(0)
const [isFormValidMail, setIsFormValidMail] = useState(0)

const handleBlurName = () => {
	validateFormName();
};

const handleBlurPhone = () => {
	validateFormTel();
};

const handleBlurEmail = () => {
	validateFormEmail();
};
const validateFormName = () => {
	if (orderName === '') {
	  setOrderNameError('Behöver fylla i ditt namn');
	  setIsFormValidName(false)
	} else {
	  setOrderNameError('');
	  setIsFormValidName(true)
  }}
const validateFormEmail = () => {
	const isValidEmail = (email) => {
	  return email.length > 0 && email.includes('@');
	};
  
	if (!isValidEmail(orderEmail)) {
	  setOrderEmailError('Felaktig Email');
	  setIsFormValidMail(false)
	} else {
	  setOrderEmailError('');
	  setIsFormValidMail(true)
  }}
const validateFormTel = () => {



  if (orderPhone === '') {
    setOrderPhoneError('Felaktigt mobilnummer');
	isFormValidTel(false)
} else {
    setOrderPhoneError('');
	setIsFormValidTel(true)
}

//  setIsFormValid(isValid)
}

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
						<input type="text" value={orderName} onBlur={handleBlurName}
  						onChange={(e) => {
   					    setOrderName(e.target.value);
                        
                    }} 
                />
                {orderNameError && <span className="error-msg">{orderNameError}</span>}

					<p className={`${isFormValidName === true ? 'valid-message' : isFormValidName === false ? 'invalid-message' : 'third-message'}`}>
					{isFormValidName === true ? '✔️' : isFormValidName === false ? '❌' : ''}
						</p>
		

						<label> Telefonnummer </label>
						<input type="tel" value={orderPhone} onBlur={handleBlurPhone} onChange={(e) => {
                         setOrderPhone(e.target.value);
                         }} 
                       />
                {orderPhoneError && <span className="error-msg">{orderPhoneError}</span>}
				<p className={`${isFormValidTel === true ? 'valid-message' : isFormValidTel === false ? 'invalid-message' : 'third-message'}`}>
					{isFormValidTel === true ? '✔️' : isFormValidTel === false ? '❌' : ''}
						</p>

				<label> Mejl </label>
  				<input type="text" value={orderEmail} onBlur={handleBlurEmail} onChange={(e) => {
    			setOrderEmail(e.target.value);
 				 }} 
				/>
			{orderEmailError && <span className="error-msg">{orderEmailError}</span>}

			<p className={`${isFormValidMail === true ? 'valid-message' : isFormValidMail === false ? 'invalid-message' : 'third-message'}`}>
					{isFormValidMail === true ? '✔️' : isFormValidMail=== false ? '❌' : ''}
						</p>
					</div>
					<button>Beställ</button>
				</section>
			</div>
		</main>
	);
};

export default Checkout;