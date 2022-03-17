import React, { useState } from "react";

import "./componentStyles/Header.css";

export default function Header(props) {
  //   const clickHandle = (evt) => {};

  //   const onSubmit = (evt) => {};

  return (
    <>
      <input type="checkbox" className="toggler" />
      <div className="hamburger">
        <div></div>
      </div>
      <div className="menu">
        <div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
