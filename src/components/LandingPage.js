import React from "react";
import remoraLogo from "../images/Remora_fish_logo-removebg-preview.png";
import "./componentStyles/LandingPage.css";

function LandingPage() {
  return (
    <div className="App">
      <header className="App-body">
        <h1 className="titleLogo">RemoraTrade</h1>
        <img src={remoraLogo} alt="Remora Fish" />
        <h4>Like the remora fish</h4>
        <h5>Learn to swim with the Whales and Sharks</h5>
        <h6>instead of being eaten by them</h6>
        <li>smart saving features</li>
        <li>curated data insights</li>
        <h6>👷 under construction 🚧</h6>
      </header>
    </div>
  );
}

export default LandingPage;
