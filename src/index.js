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

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

// pages
import Home from "./components/views/home";
import About from "./components/views/about";
import Contact from "./components/views/contact";
// import Current from "./components/views/subviews/current";
import Notfound from "./components/views/notfound";

import Project from "./components/views/project";
// project sublinks
import Cards from "./components/views/projects/gitcards/cardapp";
import Tetris from "./components/views/projects/tetris/tetris";
import D6 from "./components/views/projects/d6header/d6";

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
        {/* Nav Routes */}
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/project" component={Project} />
        {/* Non Nav Routes */}
        <Route path="/GitCards" component={Cards} />
        <Route path="/Tetris" component={Tetris} />
        <Route path="/D6" component={D6} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));

serviceWorker.unregister();
