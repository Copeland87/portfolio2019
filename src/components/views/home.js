import React from "react";
import "./home.css";
import Pdf from "../../assets/documents/2020Resume3.3.pdf";

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <div className="hero-text">
          <h1 className="home-text">Zac Copeland</h1>
          <div className="title-collection">
            <div>
              <span className="tri-left" />
              <span className="title">Web Developer | Builder</span>
              <span className="tri-right" />
            </div>
          </div>
          <h3>
            <a href={Pdf} target="_blank" className="home-text">
              Resume
            </a>
          </h3>
        </div>
        <span className="temp-span"></span>
      </div>
    );
  }
}
export default Home;
