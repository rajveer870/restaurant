import React from 'react'
import './Button.css'
const Button = (props) => {
    return (
        <>
         <input type="button" value={props.value}  /> 
        </>
    )
}

export default Button
