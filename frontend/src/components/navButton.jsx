import React from "react";
import { Link } from 'react-router-dom';
import '../stylesheets/navButton.css';

export function NavButton({ link, text, color }) {
    return(
        <Link style={{'--color': color}} className="nav__link" to={link}>
            <li className="nav__item">{text}</li>
        </Link>
    );
}

export function NavLink({ link, text, color }) {
    return(
        <a style={{'--color': color}} className="nav__link" href={link}>
            <li className="nav__item">{text}</li>
        </a>
    );
}