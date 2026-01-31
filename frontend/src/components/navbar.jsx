import React from "react";
import "../stylesheets/navbar.css";

export function Navbar ({ children }) {
    return (
        <nav className="navbar">{children}</nav>
    );
}