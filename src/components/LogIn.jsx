import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import ValidationInlog from "../data/storeLogInZ";
import { loadFromApi } from "../data/api";
import { useVariablesStore } from "../data/store";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError,setEmailError] = useState("")
  const {menuFood, setMenuFood } = useVariablesStore (state => ({menuFood: state.MenuFood, setMenuFood: state.setMenuFood}))
 

  useEffect (() => {
    async function nisse(){
      const result = await loadFromApi()
      setMenuFood(result)
    }
      nisse()
  },[]) 
  const isValidEmail = (email) => {
    return email.length > 0 && email.includes("@");
  };
 
  const isFormValid = () =>{ 
   let isValid = true
  
  if (!isValidEmail(email)){
	setEmailError("felaktig Email")
	isValid = false
  }else {
	setEmailError("")
  }

  if (password === ""){
	setPasswordError("Felaktigt lösenord")
	isValid = false
  } else{
	setPasswordError("")
  }
  return isValid;
  }
const navigate = useNavigate();

  const handleLogIn = () => {
    if (!isFormValid()) {
		console.log("formuläret är inte utfört korrekt")
		return
	}
if (password !=="mums"){
		setPasswordError("felaktigt lösenord")
		return;
	}

const LoggedIn= ValidationInlog.getState().login(email,password)
if (LoggedIn){
	console.log ("lyckades med inloggning")
	 navigate('/meny-employee')
} else {
	console.log("fel med email eller lösenord")
}
  }

  const handleEnter = (event) => {
    if (event.key === 'Enter' && isFormValid()){
      handleLogIn();
    }
  }


  return (
    <main className="form">
      <section className="form-Info">
        <label> E-post: </label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          onBlur={() => setEmailError(true)}
          onKeyUp={handleEnter}
          type="text"
        />
        {emailError && <span className="error-msg">{emailError} </span>}
      </section>

      <section className="form-Info">
        <label> Lösenord: </label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          onBlur={() => setPasswordError(true)}
          onKeyUp={handleEnter}
          type="password"
        />
        {passwordError && <span className="error-msg">{passwordError} </span>}
      </section>

      <button
        className="login-btn"
        onClick={handleLogIn}
        disabled={!isFormValid}>
        Logga in
      </button>
    </main>
   
  );
}


export default LogIn; 
