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
import FlashCards from "./components/views/projects/flashcards/flashcards";
import FlashForm from "./components/views/projects/flashcards/forms/flashcardform";
import ExampleDB from "./components/views/projects/basicdatabase/exampleDB";
import CookBook from "./components/views/projects/cookbook/cookbook";
import RecipeForm from "./components/views/projects/cookbook/recipeform";
// Edamam Recipe App
import RecipeApp02 from "./components/views/projects/recipeApp/recipeApp";

// import Particles from "./components/particles/particles";

import * as serviceWorker from "./serviceWorker";

const routing = (
  <Router>
    <div className="page-container">
      <div className="header-collection">
        <div className="header-row">
          <div>
            <span>
              <Link to="/">Home</Link>
            </span>
          </div>
          <div className="page-links">
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
      </div>
      <Switch>
        {/* Nav Routes */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/project" component={Project} />
        {/* Non Nav Routes */}
        <Route path="/gitcards" component={Cards} />
        <Route path="/tetris" component={Tetris} />
        <Route path="/flashcards" component={FlashCards} />
        <Route path="/flashform" component={FlashForm} />
        <Route path="/exampledb" component={ExampleDB} />
        {/* Recipes */}
        <Route path="/cookbook" component={CookBook} />
        <Route path="/recipeform" component={RecipeForm} />
        {/* RecipeApp02 */}
        <Route path="/recipeapp02" component={RecipeApp02} />

        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));

serviceWorker.unregister();
