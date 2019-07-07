import React from "react";
import "./about.css";

class About extends React.Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-inner-container">
          <h1>Me</h1>
          <div className="about-content">
            <div className="about-image" />
            <p className="about-text">
              My name is Zac Copeland, I'm a programmer who recently moved to
              California after marrying the love of my life. This is my first
              time living anywhere further west than Kansas and so far, it's
              pretty awesome. I have an endless number of hobbies, unfortunately
              for me anything to do with building or creating something new is
              interesting to me. Lets see my life: my wife, my doge, video
              games, 80's music, and almost every movie ever made. On this site
              you'll find (eventually) links to projects and information about
              me. If you have any questions feel free to use the form on the
              contact page to ask questions, say what's up, ... or send random
              message that make no sense (... you know who you are).
            </p>
          </div>

          <div className="about-divider" />

          <div className="hobby-section">
            <h1>Hobbies</h1>
            <div className="hobby-container">
              <div className="hobby-content">
                <div className="hobby-title">
                  <h3>Coding</h3>
                </div>
                <div className="hobby-description">
                  <img className="hobby-image hi1" />
                  <p className="hobby-text">
                    Computer code has to be at this point a life pursuit. I
                    started with basic HTML layouts in yahoo pages and I'm still
                    trying to learn something new with every day. Different
                    languages and frameworks all offer their own solutions to
                    building something new which is why I always have 30 tabs
                    open.
                  </p>
                </div>
              </div>
              <div className="hobby-content">
                <div className="hobby-title">
                  <h3>Motorcycles</h3>
                </div>
                <div className="hobby-description">
                  <img className="hobby-image hi2" />
                  <p className="hobby-text">
                    Getting my first bike was a challenge since everyone in my
                    family had a no mentality but at the same time owned or had
                    owned a bike. I started with a 93' Yamaha and luckily I only
                    have so much garage space or I'd try to buy and repair every
                    junked bike I come across. I still have 2 on my wishlist.
                  </p>
                </div>
              </div>
              <div className="hobby-content">
                <div className="hobby-title">
                  <h3>Wood Working</h3>
                </div>
                <div className="hobby-description">
                  <img className="hobby-image hi3" />
                  <p className="hobby-text">
                    Wood working for me came about as a need in my life for
                    something that functioned well and endured the time and
                    projects that are done at my desk. It turns out that fiber
                    board furniture wasn't well suited for soldering or other
                    electronic projects.
                  </p>
                </div>
              </div>
              <div className="hobby-content">
                <div className="hobby-title">
                  <h3>Photography</h3>
                </div>
                <div className="hobby-description">
                  <img className="hobby-image hi4" />
                  <p className="hobby-text">
                    I got in to photography as a secondary hobby to building
                    websites and applications. It's pretty cheese, but I thought
                    that if I built something from the ground up I wanted the
                    images to be something that I'd produced myself.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
