// src/components/FooterBot.js
import React from "react";

function FooterBot() {
  return (
    <div class="ft-bot top-border">
        <div class="ft-cont">
            <h4>Contact Us</h4>
            <p>3817 Bergenline Ave, Union City, NJ</p>
            <p>Call Us: <a href="tel:+12016175202">(201) 617-5202</a></p>
        </div>
        <div class="ft-cont">
            <h4>Follow Us</h4>
            <p><a href="https://www.instagram.com/terryscoffeeshop" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i>&nbsp;&nbsp;@terryscoffeeshop</a></p>
            <p><a href="https://www.facebook.com/terryscoffeeshop" target="_blank" rel="noopener noreferrer"><i class="fa fa-facebook-official" aria-hidden="true"></i>&nbsp;&nbsp;@terryscoffeeshop</a></p>
        </div>
    </div>
  );
}

export default FooterBot;