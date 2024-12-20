import React from "react";
import "../styles/nav.css";
function Nav() {
    return (
        <nav>
            <ul className="nav-bar">
                <li>
                    <a href="/">Home </a>
                </li>
                <li>
                    <a href="/">About </a>
                </li>
                <li>
                    <a href="/">Menu </a>
                </li>
                <li>
                    <a href="/">Reservations </a>
                </li>
                <li>
                    <a href="/">Order online </a>
                </li>
                <li>
                    <a href="/">Login </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
