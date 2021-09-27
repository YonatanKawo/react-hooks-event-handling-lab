// Code EyesOnMe Component Here
import React from 'react'

const EyesOnMe = () => {
const onFucusHandler = (e) =>{
    e.preventDefault();
    console.log('Good!');
}
const onBlurHandler = (e) => {
    e.preventDefault();
    console.log('Hey! Eyes on me!')
}
    
    return (
        <div>
        <button onFocus={onFucusHandler} onBlur={onBlurHandler}>Eyes on me</button>
            
        </div>
    )
}

export default EyesOnMe
