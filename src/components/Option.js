// src/components/Option.js
import React from "react";

function Option({ src, title, href }) {
    return (
        <a href={href} className="opt">
            <img src={src} alt={title} className="opt-img"/>
            <h3>{title}</h3>
        </a>
    );
}

export default Option;
