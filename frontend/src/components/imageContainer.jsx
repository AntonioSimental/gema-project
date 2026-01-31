import React from "react";
import '../stylesheets/imageContainer.css';

export function Image({ image, size }) {
    return (
        <div className="image__container">
            <img style={{'--width': size}} className="image" src={image} alt="Not found" />
        </div>
    )
}