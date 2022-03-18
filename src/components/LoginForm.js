import React, { useState } from "react";
import "./componentStyles/LoginForm.css";
const initialFormValues = {
  username: "",
  password: "",
};

export default function LoginForm(props) {
  const [values, setValues] = useState(initialFormValues);
  const { login } = props;

  const onChange = (evt) => {
    const { id, value } = evt.target;
    setValues({ ...values, [id]: value });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    login(values);
  };

  return (
    <form id="loginForm" onSubmit={onSubmit} className="login">
      <h2>Login</h2>
      <input
        maxLength={20}
        value={values.username}
        onChange={onChange}
        placeholder="Enter username"
        id="username"
      />
      <input
        maxLength={20}
        value={values.password}
        onChange={onChange}
        placeholder="Enter password"
        type="password"
        id="password"
      />
      <button className="glow-on-hover" id="submitCredentials">
        Submit
      </button>
    </form>
  );
}
