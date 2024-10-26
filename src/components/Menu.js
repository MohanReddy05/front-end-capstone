import React from "react";
import recipes from "../recipes";
import "../styles/menu.css";
function Menu() {
    return (
        <section className="menu-container">
            <div className="menu-header">
                <h1>Specials</h1>
                <button >online Menu</button>
            </div>
            <div className="menus">
                {recipes.map((recipes) => (
                    <div key={recipes.id} className="menu-items">
                        <img
                            src={recipes.image}
                            alt="item-image"
                            width="200px"
                            height="150px"
                        />
                        <div className="menu-details">
                            <div className="menu-header">
                                <p>{recipes.title}</p>
                                <p>$ {recipes.price}</p>
                            </div>
                            <p className="menu-description">
                                {recipes.description}
                            </p>
                            <button className="order-btn">
                                Order a delivery
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Menu;
