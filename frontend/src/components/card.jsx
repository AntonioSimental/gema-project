import React from "react";
import '../stylesheets/card.css';

export function Card({children}) {
    return (
        <div className="card">{children}</div>
    )
}