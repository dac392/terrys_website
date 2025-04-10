// src/components/Header.js
import React from "react";

function Header() {
  return (
    <header>
        <div class="header-container">
            <img alt="Restaurant Logo" class="hero-logo" src="/logo.png" />
            <h1><a href="/" class="home-link holtwood">Terry's Coffee Shop</a></h1>
        </div>
        <div><a href="/routes/order-online.html" class="order-online sonsie">Order Online</a></div>
    </header>
  );
}

export default Header;