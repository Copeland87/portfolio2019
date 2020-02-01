import React from "react";
import Axios from "axios";

import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

import "./exampleDB.css";

import firebase from "firebase/app";
import "firebase/database";

import { DB_CONFIG } from "./FirebaseConfig/db_config";

class ExampleDB extends React.Component {
  constructor() {
    super();

    this.app = firebase.initializeApp(DB_CONFIG);

    this.state = {
      currentRecipe: "",
      author: "",
      items: []
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
    const itemsRef = firebase.database().ref("items");
    const item = {
      title: this.state.currentRecipe,
      user: this.state.author
    };
    itemsRef.push(item);
    this.setState({
      currentRecipe: "",
      author: ""
    });
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref("items");
    itemsRef.on("value", snapshot => {
      console.log("boop");
    });
    itemsRef.on("value", snapshot => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user
        });
      }
      this.setState({
        items: newState
      });
    });
  }

  // removing an item
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }

  render() {
    return (
      <div>
        <span>
          <Link to="/project">Back to Projects</Link>
        </span>
        <div></div>
        <div className="dataForm">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="author"
              placeholder="What's your name?"
              onChange={this.handleChange}
              value={this.state.author}
            />
            <input
              type="text"
              name="currentRecipe"
              placeholder="What are you bringing?"
              onChange={this.handleChange}
              value={this.state.currentRecipe}
            />
            <button>Add Item</button>
          </form>
        </div>
        <div className="dataReturn">
          <ul className="dataUl">
            {this.state.items.map(item => {
              return (
                <li className="dataLine" key={item.id}>
                  <div className="dataItem">
                    <span>Recipe : {item.title}</span>
                  </div>
                  <div className="dataItem">
                    <span>Author : {item.user}</span>
                  </div>
                  <div className="dataItem">
                    <button onClick={() => this.removeItem(item.id)}>
                      Remove Item
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ExampleDB;
