import React, {useState} from 'react'
import styles from './Form.module.css'
const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");


    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value === ""){
            setFirstNameError("");
        }
        else if(e.target.value.length < 2){
            setFirstNameError("First Name must be at least 2 characters");
        }
        else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value === "") {
            setLastNameError("");
        }   
        else if(e.target.value.length < 2){
            setLastNameError("Last Name must be at least 2 characters");
        }  
        else {
            setLastNameError("");
        }

    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value === ""){
            setEmailError("");
        }
        else if(e.target.value.length < 5){
            setEmailError("Email must be at least 5 characters");
        }
        else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value); 
        if(e.target.value === ""){
            setPasswordError("");
        }   
        else if(e.target.value.length < 8){
            setPasswordError("Password must be at least 8 characters");
        }
        else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value === ""){
            setConfirmPasswordError("");
        }
        else if(e.target.value.length < 8){
            setConfirmPasswordError("Confirm Password must be at least 8 characters");
        }
        else if(e.target.value !== password){
            setConfirmPasswordError("Passwords must match");
        }
        else {
            setConfirmPasswordError("");
        }
    }

    return (
        <div className={styles.form}>
            <form>
                <div className={styles.inputGroup}>
                    <label>First Name </label>
                    <input type="text" value={firstName} onChange={handleFirstName}/>
                    {firstNameError ? <p>{firstNameError}</p> : ""}
                </div>
                <div className={styles.inputGroup}>
                    <label>Last Name </label>
                    <input type="text" value={lastName} onChange={handleLastName}/>
                    {lastNameError ? <p>{lastNameError}</p> : ""}
                </div>
                <div className={styles.inputGroup}>
                    <label>Email </label>
                    <input type="email" value={email} onChange={handleEmail}/>
                    {emailError ? <p>{emailError}</p> : ""}
                </div>
                <div className={styles.inputGroup}>
                    <label>Password </label>
                    <input type="password" value={password} onChange={handlePassword}/>
                    {passwordError ? <p>{passwordError}</p> : ""}
                </div>
                <div className={styles.inputGroup}>
                    <label>Confirm Password </label>
                    <input type="password" value={confirmPassword} onChange={handleConfirmPassword}/>
                    {confirmPasswordError ? <p>{confirmPasswordError}</p> : ""}
                </div>
            </form>
        </div>
    )
}

export default Form
