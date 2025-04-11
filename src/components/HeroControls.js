function HeroControls({ slideIndex, total, isPlaying, currentSlide, togglePlay }) {
  return (
    <div className="controls-container">
      <button
        className="play-pause-button"
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        title={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          // Pause SVG
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
            <rect x="6" y="4" width="4" height="16" rx="1"/>
            <rect x="14" y="4" width="4" height="16" rx="1"/>
          </svg>
        ) : (
          // Play SVG
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        )}
      </button>

      <div className="dot-container">
        {Array.from({ length: total }).map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === slideIndex ? "active" : ""}`}
            onClick={() => currentSlide(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default HeroControls;
