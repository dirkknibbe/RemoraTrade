import "./componentStyles/LandingPage.css";
import RemoraLogo from "./Remora_fish_logo-removebg-preview.png";

function LandingPage() {
  return (
    <div className="App">
      <header className="App-body">
        <h1>RemoraTrade</h1>
        <img src={RemoraLogo} alt="Remora Fish" />
        <h4>Like the remora fish...</h4>
        <h5>Learn to swim with the Whales and Sharks...</h5>
        <h6>instead of being eaten by them...</h6>
        <li>smart saving features</li>
        <li>curated data insights</li>
        <h7>👷 under construction 🚧</h7>
      </header>
    </div>
  );
}

export default LandingPage;
