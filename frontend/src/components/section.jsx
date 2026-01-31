import React from "react";
import '../stylesheets/section.css';

export function Section ({id, theme, img, children }) {
    return (
        <div id={id} style={{'--bg': theme, '--bg-img': `url(${img})`}} className="section">
            {children}
        </div>
    )
}