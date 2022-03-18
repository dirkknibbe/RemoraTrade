import React, { useState } from "react";
import "./componentStyles/Contact.css";
const initialFormValues = {
  name: "",
  reason: "",
  notes: "",
};

export default function Contact(props) {
  const [values, setValues] = useState(initialFormValues);

  const onChange = (evt) => {
    const { id, value } = evt.target;
    setValues({ ...values, [id]: value });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <form id="loginForm" onSubmit={onSubmit} className="form">
      <h4>Name</h4>
      <input
        maxLength={20}
        value={values.name}
        onChange={onChange}
        placeholder="Enter name"
        id="name"
      />
      <h4>Reason</h4>
      <input
        maxLength={20}
        value={values.reason}
        onChange={onChange}
        placeholder="reason for contact"
        id="reason"
      />
      <h4>Notes</h4>
      <textarea
        className="notes-box"
        value={values.notes}
        onChange={onChange}
        placeholder="the details..."
        id="notes"
      />
      <button className="glow-on-hover" id="submitCredentials">
        Submit
      </button>
    </form>
  );
}
