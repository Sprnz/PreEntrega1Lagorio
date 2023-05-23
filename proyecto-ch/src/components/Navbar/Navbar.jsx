import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css"

const Navbar = () => {
    return (
        <nav className="contenedor">
            <p className="brand">MANDALAI</p>
            <button>Home</button>
            <button>About</button>
            <button>Contact</button>
            <CartWidget />
        </nav>
    );
};

export default Navbar;
