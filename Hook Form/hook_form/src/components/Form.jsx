import React, {useState} from 'react'
import styles from './Form.module.css'
const Form = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    return (
        <div className={styles.form}>
            <form>
                <div className={styles.inputGroup}>
                    <label>First Name </label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div className={styles.inputGroup}>
                    <label>Last Name </label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div className={styles.inputGroup}>
                    <label>Email </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className={styles.inputGroup}>
                    <label>Password </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className={styles.inputGroup}>
                    <label>Confirm Password </label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                </div>
            </form>
            <div className={styles.formData}>
                <h3>Your Form Data</h3>
                <ul>
                    <li>First Name: {firstName}</li>
                    <li>Last Name: {lastName}</li>
                    <li>Email: {email}</li>
                    <li>Password: {password}</li>
                    <li>Confirm Password: {confirmPassword}</li>
                </ul>
            </div>
        </div>
    )
}

export default Form
