import React from "react";
import Axios from "axios";

import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

import "./flashcardform.css";

import firebase from "firebase/app";
import "firebase/database";

import { DB_CONFIG } from "./../config/Firebase/db_config";

class FlashForm extends React.Component {
  constructor() {
    super();

    if (!firebase.apps.length) {
      this.app = firebase.initializeApp(DB_CONFIG);
    }

    this.state = {
      term: "",
      definition: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const cardsRef = firebase.database().ref("cards");
    const card = {
      term: this.state.term,
      definition: this.state.definition
    };
    cardsRef.push(card);
    this.setState({
      term: "",
      definition: ""
    });
  }

  componentDidMount() {
    let newState = [];
    this.setState({
      cards: newState
    });
  }

  render() {
    return (
      <div>
        <span>
          <Link to="/project">Back to Projects</Link>
        </span>
        <div>boop</div>
        <div className="hero-text">
          <div>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="term"
                placeholder="Term"
                onChange={this.handleChange}
                value={this.state.term}
              />
              <textarea
                type="textarea"
                name="definition"
                placeholder="Definition"
                onChange={this.handleChange}
                value={this.state.definition}
              />
              <button> Add Card </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FlashForm;
