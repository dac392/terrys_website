// src/components/Footer.js
import React from "react";
import FooterTop from "./FooterTop";
import FooterBot from "./FooterBot";

function Footer() {
  return (
    <footer>
        <FooterTop />
        <FooterBot />
        <p class="copyright top-border"><small>&copy; 2025 Terry's Coffee Shop. All rights reserved.</small></p>
    </footer>
  );
}

export default Footer;