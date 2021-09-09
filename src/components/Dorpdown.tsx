/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import "./Dropdown.css";

const Dropdown = () => {

    const cl = ()=>{
        console.log("clicked");
        
    };
  return (
    <div className="dropdown-container">
      <div className="wrap">
        <span className="decor"></span>
        <nav>
          <ul className="primary">
            <li>
              <a>Currencies</a>
              <ul className="sub">
                <li>
                  <a onClick={cl}>USD</a>
                </li>
                <li>
                  <a>EUR</a>
                </li>
                <li>
                  <a>AUD</a>
                </li>
                <li>
                  <a>CAD</a>
                </li>
                <li>
                  <a>CHF</a>
                </li>
                <li>
                  <a>NZD</a>
                </li>
                <li>
                  <a>BGN</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Dropdown;
