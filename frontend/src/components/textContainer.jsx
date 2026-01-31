import React from "react";
import '../stylesheets/textContainer.css';

export function TextContainer({children}) {
    return (
        <div className="text__container">{children}</div>
    )
}