import React from "react";

function Hero() {
  const dishes = [
    "No Soups Today",
    "Cream of Spinach, Chicken Rice",  
    "Cheam of Mushroom Lentil, Chicken Noodle",              
    "Cream of Broccoli, Vegetable, Chicken Rice",              
    "Split Pea, Chicken Noddle, Cream of Carrots",               
    "Cream of Turkey, Chiecken Rice",          
    "Split Pea, Chicken Noodle"
  ];

  const today = new Date().getDay(); // Get current day index (0 = Sunday, 1 = Monday, etc.)
  const dishOfTheDay = dishes[today];

  return (
    <div class="hero-container">
        <h1 class="hero-title">A Sip of Comfort, A Bite of Home</h1>
        <p class="p1">Enjoy the warmth of freshly brewed coffee and the comfort of a homemade breakfast, all served with a touch of love.</p>
        <img src="/pancakes.jpg" alt="All American Breakfast Spread" class="hero-oval" />
        <div class="p2">
          <p><strong>Soup of the day:</strong></p>
          <p>{dishOfTheDay}</p>
        </div>
        <div class="p3">
            <h2>8+</h2>
            <p>variety of food available</p>
        </div>
        <div class="p4">
            <h2>2k+</h2>
            <p>Happy Customers</p>
        </div>
    </div>
  );
}

export default Hero;
