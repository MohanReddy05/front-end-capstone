import React from "react";
import '../styles/about.css'
function About() {
    return (
        <section className="about">
            <div className="about-description">
                <h2>Little Lemon</h2>
                <h3>Chikago</h3>
                <p>
                    We are a family owned Mediterranean restaurant,
                    <br />
                    focused on traditional recipes served with a modern twist,
                    <br />
                    here you can find the tastiest food available
                </p>
                <h4>timings:</h4>
                <p>
                    9am-5pm <br /> Sunday closed
                </p>
            </div>
            <div className="img-container">
                <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Restaurant"
                    width="420px"
                    height="420px"
                />
            </div>
        </section>
    );
}

export default About;
