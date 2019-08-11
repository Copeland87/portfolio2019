import React from "react";
class Project extends React.Component {
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <div className="hero-text">
          <p>
            Welcome to the projects page. At this point in time this section is
            still under construction as it is a project itself. As I am
            uploading and incorporating all of my projects on to this webserver,
            while at the same time still building out new React components and
            modules for another project for{" "}
            <a
              href="https://www.californialivefloors.com"
              style={{ textDecoration: "underline" }}
            >
              California Live Floors.
            </a>
            <br />
            Looking forward to having this built out soon!
          </p>
        </div>
      </div>
    );
  }
}
export default Project;
