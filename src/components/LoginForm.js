import React, { useState } from "react";
import "../App.css";

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
    <form id="loginForm" onSubmit={onSubmit} className="form">
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
        id="password"
      />
      <button id="submitCredentials">Submit</button>
    </form>
  );
}