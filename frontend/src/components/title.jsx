import React from "react";
import '../stylesheets/textComponents.css';

export function Title ({ text }) {
    return (
        <h1 className="title">{text}</h1>
    )
}