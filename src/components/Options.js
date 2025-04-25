// src/components/Options.js
import React from "react";
import Option from "./Option";

import "../styles/options.css"

function Options() {
    return (
        <div className="opt-container">
            <Option src="/bf.png" title="Breakfast Platters" />
            <Option src="/bagel.png" title="Breakfast Sandwiches" />
            <Option src="/sandwich.png" title="Sandwiches & Wraps" />
            <Option src="/burger.png" title="Burgers" />
            <Option src="/drinks.png" title="Drinks" />
            <Option src="/bbq.png" title="Specials" />
            <Option src="/specials.png" title="Hot Plates" />
            <Option src="/salad.png" title="Salads" />
            <Option src="/desserts.png" title="Desserts" />
        </div>
    );
}

export default Options;