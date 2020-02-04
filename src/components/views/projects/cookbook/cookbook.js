import React from "react";
import Axios from "axios";

import "./cookbook.css";

import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

class CookBook extends React.Component {
  render() {
    return (
      <div>
        <span>
          <Link to="/project">Back to Projects</Link>
        </span>
        <div className="highLight">boop </div>
      </div>
    );
  }
}

export default CookBook;
