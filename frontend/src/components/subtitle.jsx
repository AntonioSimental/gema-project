import React from "react";
import '../stylesheets/textComponents.css';

export function Subtitle ({ text, color }) {
    return (
        <h2 style={{'--subColor': color}} className="subtitle">{text}</h2>
    )
}