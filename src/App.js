import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    names: ["Jessica", "Brad", "Dixie", "Tanner", "Kylee", "Colton"]
  };
  render() {
    const { names } = this.state;

    return (
      <div className="App">
        <div className="list">
          <div className="list-item">{`${names[0]} has ${names[4]}`}</div>
          <div className="list-item">{`${names[1]} has ${names[5]}`}</div>
          <div className="list-item">{`${names[2]} has ${names[3]}`}</div>
          <div className="list-item">{`${names[3]} has ${names[0]}`}</div>
          <div className="list-item">{`${names[4]} has ${names[1]}`}</div>
          <div className="list-item">{`${names[5]} has ${names[2]}`}</div>
        </div>
      </div>
    );
  }
}

export default App;
