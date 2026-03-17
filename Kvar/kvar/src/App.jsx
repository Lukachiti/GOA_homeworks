import { useState, useRef, useEffect } from "react";
import "./App.css";
import TRACKS from "./Tracks";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);

  const audioRef = useRef(null);
  const currentTrack = TRACKS[currentIndex];

  const handleNext = () => {
    if (isShuffle) {
      const randomIndex = Math.floor(Math.random() * TRACKS.length);
      setCurrentIndex(randomIndex);
    } else {
      setCurrentIndex((prev) => (prev + 1) % TRACKS.length);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TRACKS.length) % TRACKS.length);
  };

  const togglePlay = () => {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) audioRef.current.play();
  }, [currentIndex]);

  return (
    <div className="player-container">
      <div className="section-left">
        <div className="player-card">
          <div className="track-info">
            <h2>{currentTrack.title}</h2>
            <p>{currentTrack.artist}</p>
          </div>

          <audio
            ref={audioRef}
            src={currentTrack.src}
            className="audio-element"
            onEnded={handleNext}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            controls
          />

          <div className="main-controls">
            <button className="control-btn" onClick={handlePrev}>
              {"<--"}
            </button>
            <button className="control-btn play-pause-btn" onClick={togglePlay}>
              {isPlaying ? "||" : "▶"}
            </button>
            <button className="control-btn" onClick={handleNext}>
              {"-->"}
            </button>
          </div>

          <button
            className={`shuffle-btn ${isShuffle ? "active" : ""}`}
            onClick={() => setIsShuffle(!isShuffle)}
          >
            SHUFFLE {isShuffle ? "ON" : "OFF"}
          </button>
        </div>
      </div>
      
      <div className="section-right">
        <div className="playlist-section">
          {TRACKS.map((track, index) => (
            <div
              key={track.id}
              className={`playlist-item ${currentIndex === index ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            >
              <span>{track.title}</span>
              <span style={{ fontSize: "0.8rem", color: "#666" }}>
                {track.artist}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
