import React, { Component } from "react";

import "../styles/home.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <div id="u-input">
          <input type="text" placeholder="Ask and you shall receive" />
          <div id="button">Seek</div>
        </div>

        <h1 id="home-title">Your Adventure</h1>

        <div id="home-container">
          <div id="world">
            <span className="main-directory-text">
              <Link to="/directory/world">World</Link>
            </span>
          </div>
          <div id="wizards">
            <span className="main-directory-text">
              <Link to="/directory/wizards">Wizards</Link>
            </span>
          </div>
          <div id="bestiary">
            <span className="main-directory-text">
              <Link to="/directory/bestiary">Bestiary</Link>
            </span>
          </div>
          <div id="potions">
            <span className="main-directory-text">
              <Link to="/directory/potions">Potions</Link>
            </span>
          </div>
          <div id="deities">
            <span className="main-directory-text">
              <Link to="/directory/deities">Deities</Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
