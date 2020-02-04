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
        <div className="highLight">
          Boop, ahh the beginning of a new project. There isn't anything to
          currently show on this page while I'm setting up the database and
          while I will sometimes give out the link to add to a random database
          this one is important as it is part of a larger project. If you have
          any questions about this project feel free to let me know{" "}
          <Link className="boxLink" to="/contact">
            here!
          </Link>
        </div>
      </div>
    );
  }
}

export default CookBook;
