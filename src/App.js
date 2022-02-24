import "./App.css";
import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";

import LandingPage from "./components/LandingPage";
import LoginForm from "./components/LoginForm";

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
