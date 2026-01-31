import React from "react";
import '../stylesheets/input.css';

export function Input({ children, text, color, type, bg }) {
    return (
        <div style={{'--colorText': color}} className="input__container">
            {children}
            <input style={{'--bgInput': bg}} className="input__form" type={type} placeholder={text} />
        </div>
    )
}

export function InputSubmit({ children, text, color, bg }) {
    return (
        <div style={{'--colorText': color}} className="input__container">
            {children}
            <input style={{'--bgInput': bg}} className="input__form input--submit" type="submit" value={text} />
        </div>
    )
}