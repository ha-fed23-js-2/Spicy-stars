import React from 'react';
import { useVariablesStore } from '../data/store.js';
import { useState, useEffect } from 'react';
import PopupTillBeställt from './PopupTillBeställt.jsx';
import backIcon from "../data/back..png"
import { NavLink } from 'react-router-dom';

const Checkout = () => {
	const { Checkout, CheckoutTotal, removeFromCheckout, clearLocalStorage } = useVariablesStore(); 
	console.log('Checkout:', Checkout);
	useEffect(() => {
		useVariablesStore.getState().calculateCheckoutTotal();
	}, [Checkout]);
	
	const [orderName, setOrderName] = useState('');
	const [orderEmail, setOrderEmail] = useState('');
	const [orderPhone, setOrderPhone] = useState('');
	
	const [orderNameError, setOrderNameError] = useState('');
	const [orderEmailError, setOrderEmailError] = useState('');
	const [orderPhoneError, setOrderPhoneError] = useState(' ');
	
	const [isFormValidName, setIsFormValidName] = useState(0)
	const [isFormValidTel, setIsFormValidTel] = useState(0)
	const [isFormValidMail, setIsFormValidMail] = useState(0)
	
	
	const [isVisible, setIsVisible] = useState(false);
	
	const handelClickOrder = () => {
		validateFormName();
        validateFormTel();
        validateFormEmail();
	if (isFormValidName && isFormValidTel && isFormValidMail && isValidEmail(orderEmail)) {
        clearLocalStorage();
        toggleVisibility();
    }
}


	const toggleVisibility = () => {
		if (isFormValidName && isFormValidTel && isFormValidMail && isValidEmail(orderEmail)) {
		setIsVisible(!isVisible);
		setTimeout(() => {
			setIsVisible(false);
		}, 1000);
	};
}
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
			setOrderNameError('Vänligen fyll i ditt namn');
			setIsFormValidName(false)
		} else {
			setOrderNameError('');
			setIsFormValidName(true)
		}}
		let isValidEmail = (email) => {
			return email.length > 3 && email.includes('@');
		};
		const validateFormEmail = () => {

			
			if (!isValidEmail(orderEmail)) {
				setOrderEmailError('Felaktig Email');
				setIsFormValidMail(false)
			} else {
				setOrderEmailError('');
				setIsFormValidMail(true)
			}}

		const validateFormTel = () => {
    	const phoneNumber = orderPhone.replace(/[^0-9]/g, ''); 
   		    if (phoneNumber === '' || phoneNumber.length < 10) { 
                 setOrderPhoneError('Felaktigt mobilnummer');
                 setIsFormValidTel(false);
            } else {
                 setOrderPhoneError('');
                 setIsFormValidTel(true);
    }
}
	

			
			return (
				<main className='main-checkout'>
				 <NavLink to="/meny" className="nav-link-style"> <img src={backIcon} alt="bakåtpil" className='icon-arrow' /> </NavLink>
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
				<div className='form-div'>
				
				<label> Namn </label>
				<input type="text" value={orderName} onBlur={handleBlurName}
				onChange={(e) => {
					setOrderName(e.target.value);
					
				}} 
				/>
				
				<p className={`${isFormValidName === true ? 'valid-message' : isFormValidName === false ? 'invalid-message' : 'third-message'}`}>
				{isFormValidName === true ? '✔️' : isFormValidName === false ? '❌' : ''}
				</p>
				{orderNameError ? (
					<p className="invalid-message">{orderNameError} &nbsp; </p>
				) : (
					<p className="valid-message">&nbsp;</p>
				)}
				</div>
				
				<div className='form-div'>
				
				<label> Telefonnummer </label>
				<input type="tel" value={orderPhone} onBlur={handleBlurPhone} onChange={(e) => {
					setOrderPhone(e.target.value);
				}} 
				/>

				<p className={`${isFormValidTel === true ? 'valid-message' : isFormValidTel === false ? 'invalid-message' : 'third-message'}`}>
				{isFormValidTel === true ? '✔️' : isFormValidTel === false ? '❌' : ''}
				</p>
				
				{orderPhoneError ? (
					<p className="invalid-message">{orderPhoneError} &nbsp; </p>
				) : (
					<p className="valid-message">&nbsp;</p>
				)}
				
				</div>
				<div className='form-div'>
				
				<label> Mejl </label>
				<input type="text" value={orderEmail} onBlur={handleBlurEmail} onChange={(e) => {
					setOrderEmail(e.target.value);
				}} 
				/>
				
				<p className={`${isFormValidMail === true ? 'valid-message' : isFormValidMail === false ? 'invalid-message' : 'third-message'}`}>
				{isFormValidMail === true ? '✔️' : isFormValidMail=== false ? '❌' : ''}
				</p>
				{orderEmailError ? (
					<p className="invalid-message">{orderEmailError} &nbsp; </p>
				) : (
					<p className="valid-message">&nbsp;</p>
				)}
				</div>
				</div>
				<button onClick={handelClickOrder} disabled={!isFormValidName || !isFormValidTel || !isFormValidMail || !isValidEmail(orderEmail) }>Beställ</button>
					{isVisible &&< PopupTillBeställt />}
				</section>
				</div>
				</main>
			);
		};

		
		export default Checkout