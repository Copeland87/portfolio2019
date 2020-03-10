import React from "react";

import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

import "./project.css";

class Project extends React.Component {
  render() {
    return (
      <div>
        <h1 className="page-title">Projects</h1>
        <div className="project-collection">
          <span className="project-button">
            <Link to="/GitCards">GitHub Cards</Link>
          </span>
          <span className="project-button">
            <Link to="/FlashCards">FlashCards</Link>
          </span>
          <span className="project-button">
            <Link to="/ExampleDB">Database</Link>
          </span>
          <span className="project-button">
            <Link to="/CookBook">Recipes</Link>
          </span>
          <span className="project-button">
            <Link to="/RecipeApp02">RecipesApp-2</Link>
          </span>
          <span className="project-button">
            <a href="https://www.copeland.work" style={{ textDecoration: "" }}>
              Wordpress Sandbox
            </a>
          </span>
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
