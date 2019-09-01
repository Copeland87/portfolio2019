import React from "react";
import "./home.css";
import Pdf from "../../assets/documents/2019Resume3.1.pdf";

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
          <h3>
            <a href={Pdf} target="_blank">
              Resume
            </a>
          </h3>
        </div>
        <span className="temp-span">
          Welcome to the new site, I'm currently undergoing some build changes
          to the website. Look forward to the updates!
        </span>
      </div>
    );
  }
}
export default Home;
