// import logo from './logo.svg';

import "./App.css";

import React from "react";

import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
// import axiosWithAuth from "./axios";
import axios from "axios";

import LandingPage from "./components/LandingPage";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import Contact from "./components/Contact";

const loginUrl = "http://localhost:3000/login";

function App() {
  const navigate = useNavigate();
  const login = ({ username, password }) => {
    // hit the API, obtain JWT
    axios
      .post(loginUrl, { username, password })
      .then((res) => {
        // persist token in client window.localStorage
        window.localStorage.setItem("token", res.data.token);
        // redirect user to /articles route
        // navigate("/dashboard"); // v.5 history.push('/articles')
      })
      .catch((err) => {
        debugger;
      });
  };

  const logout = () => {
    window.localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm login={login} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
