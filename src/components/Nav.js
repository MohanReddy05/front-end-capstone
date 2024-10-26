import React from "react";
import "../styles/nav.css";
function Nav() {
    return (
        <nav>
            <ul className="nav-bar">
                <li><a href="/">Home </a></li>
                <li><a href="/about">About </a></li>
                <li><a href="/menu">Menu </a></li>
                <li><a href="/reservations">Reservations </a></li>
                <li><a href="/order">Order online </a></li>
                <li><a href="/">Login </a></li>
            </ul>
        </nav>
    );
}

export default Nav;
