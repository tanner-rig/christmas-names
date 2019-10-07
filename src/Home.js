import React, { Component } from "react";

import "./Home.css";

const jess = require("./assets/jes.png");
const brad = require("./assets/bra.png");
const dixie = require("./assets/dix.png");
const tanner = require("./assets/tan.png");
const kylee = require("./assets/ky.png");
const colton = require("./assets/colt.png");

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="list-header">Christmas Assignments</div>
        <div className="list">
          <div className="list-item">
            <img src={colton} alt="colton" height="100" width="100" />
            <span
              style={{ fontSize: "40px" }}
              role="img"
              aria-label="gives gift to"
            >
              🎁 →
            </span>
            <img src={kylee} alt="kylee" height="100" width="100" />
          </div>
          <div className="list-item">
            <img src={jess} alt="jess" height="100" width="100" />
            <span
              style={{ fontSize: "40px" }}
              role="img"
              aria-label="gives gift to"
            >
              🎁→
            </span>
            <img src={colton} alt="colton" height="100" width="100" />
          </div>
          <div className="list-item">
            <img src={brad} alt="brad" height="100" width="100" />
            <span
              style={{ fontSize: "40px" }}
              role="img"
              aria-label="gives gift to"
            >
              🎁→
            </span>
            <img src={tanner} alt="tanner" height="100" width="100" />
          </div>

          <div className="list-item">
            <img src={dixie} alt="dix" height="100" width="100" />
            <span
              style={{ fontSize: "40px" }}
              role="img"
              aria-label="gives gift to"
            >
              🎁→
            </span>
            <img src={jess} alt="jess" height="100" width="100" />
          </div>

          <div className="list-item">
            <img src={tanner} alt="tanner" height="100" width="100" />
            <span
              style={{ fontSize: "40px" }}
              role="img"
              aria-label="gives gift to"
            >
              🎁→
            </span>
            <img src={brad} alt="brad" height="100" width="100" />
          </div>

          <div className="list-item">
            <img src={kylee} alt="kylee" height="100" width="100" />
            <span
              style={{ fontSize: "40px" }}
              role="img"
              aria-label="gives gift to"
            >
              🎁→
            </span>
            <img src={dixie} alt="dixie" height="100" width="100" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
