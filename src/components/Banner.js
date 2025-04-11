import React from 'react';
import '../styles/banner.css';

const Banner = ({ src, title, text, buttonText }) => {
  return (
    <div className="banner">
      <div className="banner-overlay">
        <h2 className="banner-title">{title}</h2>
        <p className="banner-text">{text}</p>
        {buttonText && <button className="banner-button">{buttonText}</button>}
      </div>
      <img src={src} alt={title} className="banner-image" />
    </div>
  );
};

export default Banner;
