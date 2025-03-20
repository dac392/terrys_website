// src/components/About.js
import React from "react";

function About() {
  return (
    <div class="about-container">
        <h1 class="about-title">About Us</h1>
        <p class="about-text">At Terry's Coffee Shop, we believe that great food and a warm atmosphere make every meal special. Nestled in the heart of Union City, we've been serving freshly brewed coffee, hearty breakfasts, and classic diner favorites for years.</p>
        <img src="/millenial.jpg" alt="business owner profile" class="profile-pic" />
        <div class="about-additional">
          <img class="flair" src="/management.png" alt="Management Icon" />
          <p>Whether you're stopping by for a quick bite or settling in for a leisurely meal, we bring the perfect blend of flavor, comfort, and quality to your table.</p>
        </div>
          

    </div>
  );
}

export default About;