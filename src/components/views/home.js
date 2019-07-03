import React from "react";
import "./home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div className="hero-text">
          <h1>Zac Copeland</h1>
          <div className="title-collection">
            <div>
              <span className="tri-left" />
              <span className="title">Web Developer | Builder</span>
              <span className="tri-right" />
            </div>
          </div>
        </div>
        <span className="temp-span">
          Welcome to my new site. Currently I'm going through a build phase to
          update the old site to React, look forward to the updates!
        </span>
      </div>
    );
  }
}
export default Home;
