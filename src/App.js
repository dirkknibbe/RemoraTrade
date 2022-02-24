// import logo from './logo.svg';
import "./App.css";
import React from "react";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import "./App.css";
// import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
// import axios from "axios";

import LandingPage from "./components/LandingPage";
// import LoginForm from "./components/LoginForm";

function App() {
  // const navigate = useNavigate();
  // const login = ({ username, password }) => {
  //   // hit the API, obtain JWT
  //   axios
  //     .post(loginUrl, { username, password })
  //     .then((res) => {})
  //     .catch((err) => {
  //       debugger;
  //     });
  // };
  return (
    <div className="App">
      <header className="App-header">
        <LandingPage />
        {/* <LoginForm /> */}
      </header>
    </div>
  );
}

export default App;
