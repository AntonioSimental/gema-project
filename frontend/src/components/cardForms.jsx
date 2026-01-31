import React from "react";
import '../stylesheets/cardForms.css';

export function CardForms({ theme, children, action }) {
    return (
        <form action={action} style={{'--bg': theme}} className="card__forms">{children}</form>
    )
}