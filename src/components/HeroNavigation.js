function HeroNavigation({ onPrev, onNext }) {
    return (
      <>
        <button className="prev" onClick={onPrev}>
          &#10094;
        </button>
        <button className="next" onClick={onNext}>
          &#10095;
        </button>
      </>
    );
  }
  
  export default HeroNavigation;
  