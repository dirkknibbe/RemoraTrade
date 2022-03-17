// import logo from './logo.svg';

import "./App.css";

import React from "react";

import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
// import axios from "axios";

import LandingPage from "./components/LandingPage";
import Header from "./components/Header";

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
      <div className="Header">
        <Header />
      </div>
      <LandingPage />
    </div>
  );
}

export default App;
