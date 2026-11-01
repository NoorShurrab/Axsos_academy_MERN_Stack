import React, {useState} from 'react'

const PersonCard = (props) => {
        const {firstName, lastName, age, hairColor} = props;
            const [currentAge , setAge] = useState(age);
    
            const handleBirthday = () => {
            setAge(currentAge + 1);
            }
        return (
            <div className="person-card">
                <h2>{lastName}, {firstName}</h2>
                <p>Age: {currentAge}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={handleBirthday}>Birthday Button for {firstName} {lastName}</button>
            </div>
        )
}

export default PersonCard
