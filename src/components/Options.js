// src/components/Options.js
import React from "react";
import Option from "./Option";

import "../styles/options.css"

function Options() {
    return (
        <div className="opt-container">
            <Option src="/bf.png" title="Breakfast Platters" href="/routes/breakfast.html" />
            <Option src="/bagel.png" title="Breakfast Sandwiches" href="/routes/bf-sandwiches.html"/>
            <Option src="/sandwich.png" title="Sandwiches & Wraps" href="/routes/sandwiches.html"/>
            <Option src="/burger.png" title="Burgers" href="/routes/burgers.html"/>
            <Option src="/drinks.png" title="Drinks" href="/routes/drinks.html"/>
            <Option src="/bbq.png" title="Specials" href="/routes/specials.html"/>
            <Option src="/specials.png" title="Hot Plates" href="/routes/hot-plates.html"/>
            <Option src="/salad.png" title="Salads" href="/routes/salads.html"/>
            <Option src="/desserts.png" title="Desserts" href="/routes/desserts.html"/>
        </div>
    );
}

export default Options;