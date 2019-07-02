import React from "react";
import "./home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div className="hero-text">
          <h1>Zac Copeland</h1>
          <div className="title-collection">
            <span className="tri-left" />
            <span className="title">Web Developer | Builder</span>
            <span className="tri-right" />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
