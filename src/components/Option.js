// src/components/Option.js
import React from "react";

function Option({ src, title }) {
    return (
        <div className="opt">
            <img src={src} alt={title} className="opt-img"/>
            <h3>{title}</h3>
        </div>
    );
}

export default Option;
