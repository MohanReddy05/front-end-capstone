import React from "react";
import "../styles/hero.css";
import { Link } from "react-router-dom";
function Hero() {
    return (
        <section className="hero">
            <div>
                <h2>Little Lemon</h2>
                <h3>Chikago</h3>
                <p>
                    We are a family owned Mediterranean restaurant,
                    <br />
                    focused on traditional recipes served with a modern twist.
                </p>
                <Link to="/booking">
                    <button aria-label="On Click">Reserve a table</button>
                </Link>
            </div>
            <div className="img-container">
                <img
                    src="https://images.unsplash.com/photo-1674499978132-373a23ac17b7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Restaurant"
                    width="300px"
                    height="300px"
                />
            </div>
        </section>
    );
}

export default Hero;
