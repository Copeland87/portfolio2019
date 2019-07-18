import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "./components/views/home";
import About from "./components/views/about";
import Contact from "./components/views/contact";
import Project from "./components/views/project";
import Notfound from "./components/views/notfound";

// import Particles from "./components/particles/particles";

import * as serviceWorker from "./serviceWorker";

const routing = (
  <Router>
    <div className="page-container">
      <div className="header-collection">
        <div>
          <span>
            <Link to="/">Home</Link>
          </span>
        </div>
        <div>
          <span>
            <Link to="/About">About</Link>
          </span>
          <span>
            <Link to="/contact">Contact</Link>
          </span>
          <span>
            <Link to="/project">Projects</Link>
          </span>
        </div>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/project" component={Project} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));

serviceWorker.unregister();
