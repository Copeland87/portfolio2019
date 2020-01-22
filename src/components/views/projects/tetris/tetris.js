import React from "react";
import Axios from "axios";

import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

class Tetris extends React.Component {
  render() {
    return (
      <div>
        <span>
          <Link to="/project">Back to Projects</Link>
        </span>
        <div className="hero-text">
          <p>COMING SOON!!!</p>
        </div>
      </div>
    );
  }
}

export default Tetris;
