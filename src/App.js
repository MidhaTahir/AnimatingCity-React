import React,{ useEffect } from "react";
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";

function App() {
// animation: name duration timing-function delay iteration-count direction fill-mode play-state;
  const { ref, playState, getAnimation } = useWebAnimations({
    keyframes: [
      {backgroundPosition: "1000% 0"},
      {backgroundPosition: "0 0"},
    ],
    timing: {
      duration: 15000,
      iterations: Infinity,
    },
  })

  const speedUp = () => {
    const animation = getAnimation();
    animation.updatePlaybackRate(animation.playbackRate * 1.4);
  };

  const speedLow = () => {   
    const animation = getAnimation();
    animation.updatePlaybackRate(animation.playbackRate * 0.3);
  }

  // useEffect(() => {
  //   document.addEventListener("click",speedUp)
  // }, [])

  return (
    <div className="App">
      <span>Web Animations Using React Hooks</span>{' '}
      <button onClick={speedUp}>Speed High</button>{' '}
      <button onClick={speedLow}>Speed Low</button>
      <div ref={ref} className="background">
          <div className="container">
              <div className="guybrush"></div>
          </div>
      </div>
    </div>
  );
}

export default App;
