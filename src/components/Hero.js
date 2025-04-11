import React, { useState, useEffect, useRef } from "react";
import Banner from "./Banner";
import HeroControls from "./HeroControls";
import HeroNavigation from "./HeroNavigation";


function Hero() {
  const banners = [
    {
      src: "/pancakes-horrizontal.jpg",
      title: "Enjoy Breakfast All Day",
      text: "Enjoy the warmth of freshly brewed coffee and the comfort of a homemade breakfast, all served with a touch of love.",
    },
    {
      src: "/coffee-horrizontal.jpg",
      title: "Enjoy Free Coffee",
      text: "With the purchase of any breakfast platter between 7:00 AM - 11:00 AM",
    },
    {
      src: "/soup.jpg",
      title: "Soups of The Day",
      text: getSoupOfTheDay(),
    },
  ];

  const [slideIndex, setSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const autoScrollRef = useRef(null);

  function plusSlides(n, userClicked = false) {
    const newIndex = (slideIndex + n + banners.length) % banners.length;
    setSlideIndex(newIndex);
    if (userClicked) stopAutoScroll();
  }

  function currentSlide(index) {
    setSlideIndex(index);
    stopAutoScroll();
  }

  function stopAutoScroll() {
    setIsPlaying(false);
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
  }

  function startAutoScroll() {
    setIsPlaying(true);
  }

  function getSoupOfTheDay() {
    const dishes = [
      "No Soups Today",
      "Cream of Spinach, Chicken Rice",
      "Cream of Mushroom Lentil, Chicken Noodle",
      "Cream of Broccoli, Vegetable, Chicken Rice",
      "Split Pea, Chicken Noodle, Cream of Carrots",
      "Cream of Turkey, Chicken Rice",
      "Split Pea, Chicken Noodle",
    ];
    const today = new Date().getDay();
    return dishes[today];
  }

  useEffect(() => {
    if (isPlaying) {
      autoScrollRef.current = setInterval(() => {
        setSlideIndex((prev) => (prev + 1) % banners.length);
      }, 5000);
    }
    return () => clearInterval(autoScrollRef.current);
  }, [isPlaying, banners.length]);

  return (
    <div className="hero-gallery">
      <div className="banner-slide">
        <Banner
          src={banners[slideIndex].src}
          title={banners[slideIndex].title}
          text={banners[slideIndex].text}
        />
      </div>

      <HeroNavigation onNext={() => plusSlides(1, true)} onPrev={() => plusSlides(-1, true)} />

      <HeroControls
        slideIndex={slideIndex}
        total={banners.length}
        isPlaying={isPlaying}
        currentSlide={currentSlide}
        togglePlay={() => (isPlaying ? stopAutoScroll() : startAutoScroll())}
      />
    </div>
  );
}

export default Hero;
