// src/components/HeroBottom.js
import React from "react";

function HeroBottom() {
  return (
    <div class="bottom-hero">
        <h3>Where Every Sip &amp; Bite Feels Like Home~</h3>
        <ul class="food-options">
            <li>Eggs</li>
            <li>Hot Sandwiches</li>
            <li>Seafood</li>
            <li>Desserts</li>
            <li>Platters</li>
            <li>Beverage</li>
            <li>Crispy Cold Salad Plates</li>
        </ul>
        <ul class="info">
            <li>
                <h4>Location</h4>
                <p>3817 Bergenline ave,</p>
                <p>Union City, NJ</p>
            </li>
            <li>
                <h4>Call Us</h4>
                <p><a href="tel:+12016175202" class="phone">(201) 617-5202</a></p>
            </li>
            <li>
                <h4>Business Hours</h4>
                <p>Mon - Sat : 7:00am - 5:00pm</p>
                <p>Sun : 8:00am - 3:00pm</p>
            </li>
        </ul>
    </div>
  );
}

export default HeroBottom;