import React from "react";
import Axios from "axios";

import "./d6.css";

import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

class D6 extends React.Component {
  render() {
    let cube = document.querySelector(".cube");
    let radioGroup = document.querySelector(".radio-group");
    let currentClass = "";

    function changeSide() {
      let checkedRadio = radioGroup.querySelector(":checked");
      let showClass = "show-" + checkedRadio.value;
      if (currentClass) {
        cube.classList.remove(currentClass);
      }
      cube.classList.add(showClass);
      currentClass = showClass;
    }
    return (
      <div>
        <span>
          <Link to="/project">Back to Projects</Link>
        </span>
        <div className="hero-text">
          <p>COMING SOON!!!</p>

          <div class="cube-header">
            <div class="scene">
              <div class="cube">
                <div class="cube__face cube__face--front">1</div>
                <div class="cube__face cube__face--back">2</div>
                <div class="cube__face cube__face--right">3</div>
                <div class="cube__face cube__face--left">4</div>
                <div class="cube__face cube__face--top">5</div>
                <div class="cube__face cube__face--bottom">6</div>
              </div>
            </div>
            <div>
              <p class="radio-group">
                <label>
                  <input
                    id="1"
                    type="radio"
                    name="rotate-cube-side"
                    value="front"
                    checked
                    onclick="return runFunction();"
                  />
                  1
                </label>
                <label>
                  <input
                    id="2"
                    type="radio"
                    name="rotate-cube-side"
                    value="back"
                    onclick="return runFunction();"
                  />
                  2
                </label>
                <label>
                  <input
                    type="radio"
                    name="rotate-cube-side"
                    value="right"
                    onclick="return runFunction();"
                  />
                  3
                </label>
                <label>
                  <input
                    type="radio"
                    name="rotate-cube-side"
                    value="left"
                    onclick="return runFunction();"
                  />
                  4
                </label>
                <label>
                  <input
                    type="radio"
                    name="rotate-cube-side"
                    value="top"
                    onclick="return runFunction();"
                  />
                  5
                </label>
                <label>
                  <input
                    type="radio"
                    name="rotate-cube-side"
                    value="bottom"
                    onclick="return runFunction();"
                  />
                  6
                </label>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default D6;
