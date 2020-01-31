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
      currentItem: "",
      username: "",
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
      title: this.state.currentItem,
      user: this.state.username
    };
    itemsRef.push(item);
    this.setState({
      currentItem: "",
      username: ""
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
        <div className="hero-text">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="What's your name?"
              onChange={this.handleChange}
              value={this.state.username}
            />
            <input
              type="text"
              name="currentItem"
              placeholder="What are you bringing?"
              onChange={this.handleChange}
              value={this.state.currentItem}
            />
            <button>Add Item</button>
          </form>
        </div>
        <div>
          <ul>
            {this.state.items.map(item => {
              return (
                <li key={item.id}>
                  <h3>{item.title}</h3>
                  <p>brought by: {item.user}</p>
                  <button onClick={() => this.removeItem(item.id)}>
                    Remove Item
                  </button>
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
