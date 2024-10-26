import React from "react";
import Nav from "./Nav";
import "../styles/header.css";
import logo from "../assets/logo1.png";
function Header() {
    return (
        <header className="header">
            <img src={logo} alt="logo" width="100px" />
            <Nav />
        </header>
    );
}

export default Header;
