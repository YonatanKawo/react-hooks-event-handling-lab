// Code Keypad Component Here
import React from 'react'


const Keypad = () => {
    const onChangeHandler = (e) => {
        e.preventDefault();
        console.log("Entering password...");

    }
    return (
        <div>
            <input type="password" name="password" onChange={onChangeHandler}/>
            <label htmlFor="Password"></label>
        </div>
    )
}

export default Keypad
