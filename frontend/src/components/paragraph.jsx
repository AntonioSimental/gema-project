import React from "react";
import '../stylesheets/textComponents.css';

export function Paragraph ({ text }) {
    return (
        <p className="paragraph">{text}</p>
    )
}