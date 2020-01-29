import React from "react";

import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

class Project extends React.Component {
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <div>
          <span>
            <Link to="/GitCards">GitHub Cards</Link>
          </span>
          <span>
            <Link to="/Tetris">Tetris (Coming Soon)</Link>
          </span>
          <span>
            <Link to="/FlashCards">FlashCards</Link>
          </span>
          {/* <span>
            <Link to="/ModalDemo">Modals</Link>
          </span> */}
          {/* <span>
            <Link to="/D6">D6 Animated Header</Link>
          </span> */}
          <span>
            <a href="https://www.copeland.work" style={{ textDecoration: "" }}>
              Component List
            </a>
          </span>
        </div>
        <div className="hero-text">
          <p>
            Welcome to the projects section of my site. Currently this section
            is under maintenance as I'm working on moving all of my projects to
            this site. As well as building out new things for myself and
            clients.
          </p>
        </div>
        {/* <div className="hero-text">
          <p>
            Welcome to the projects page. At this point in time this section is
            still under construction. As I am uploading and incorporating all of
            my projects on to this webserver, while at the same time still
            building out new React components and modules for another project
            for{" "}
            <a
              href="https://www.californialivefloors.com"
              style={{ textDecoration: "underline" }}
            >
              California Live Floors.
            </a>
            <br />
            Looking forward to having this built out soon!
          </p>
        </div> */}
      </div>
    );
  }
}
export default Project;
