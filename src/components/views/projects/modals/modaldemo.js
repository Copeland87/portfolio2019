import React from "react";
import Axios from "axios";

import Modal from "./modals";

import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

class ModalDemo extends React.Component {
  render() {
    const modal = <Modal />;

    return (
      <div>
        <span>
          <Link to="/project">Back to Projects</Link>
        </span>
        <div className="hero-text">
          <p>COMING SOON!!!</p>
          <button>Test</button>
          <Modal
            ref={node => {
              this.modal = node;
            }}
          />
        </div>
      </div>
    );
  }
}

export default ModalDemo;
