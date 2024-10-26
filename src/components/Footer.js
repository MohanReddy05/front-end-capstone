import React from "react";
import logo from "../assets/logo.png";
import "../styles/footer.css";
function Footer() {
    return (
        <footer>
            <section>
                <div className="company-logo">
                    <img src={logo} alt="logo" width="100px" />
                </div>
                <div className="company-detailes">
                    <div>
                        <strong>
                            Important <br /> Links
                        </strong>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Menu</li>
                            <li>Reservations</li>
                            <li>Order online</li>
                            <li>Login</li>
                        </ul>
                    </div>
                    <div>
                        <strong>Contact</strong>
                        <ul>
                            <li>Address</li>
                            <li>phone Number</li>
                            <li>Email</li>
                        </ul>
                    </div>
                    <div>
                        <strong>Social Media</strong>
                        <ul>
                            <li>Address</li>
                            <li>phone Number</li>
                            <li>Email</li>
                        </ul>
                    </div>
                </div>
            </section>
            <div>
                <p style={{ textAlign: "center" }}>cc@MIT</p>
            </div>
        </footer>
    );
}

export default Footer;
