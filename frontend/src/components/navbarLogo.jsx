import React from "react";
import '../stylesheets/navbarLogo.css';
import logo from '../assets/logoGema2.png'

export function Logo () {
    return (
        <div className="logo__container">
            <img className="container__img" src={logo} alt="Not Found" />
        </div>
    );
}