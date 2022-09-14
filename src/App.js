import React, { useEffect } from "react";
import "./App.css";
import Login from "./login/Login";
import Tilt from "react-tilt";
function App() {
  const Effect = {
    reverse: false, // reverse the tilt direction
    max: 50, // max tilt rotation (degrees)
    perspective: 2000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 500, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <div className="app login_page">
      <Tilt className="Tilt" options={Effect}>
        <Login />
      </Tilt>
    </div>
  );
}

export default App;
