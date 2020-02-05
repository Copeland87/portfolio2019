import React from "react";
import Axios from "axios";

import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

import "./recipeform.css";

import firebase from "firebase/app";
import "firebase/database";

import { DB_CONFIG_RECIPE } from "./assets/recipeconfig/db_config";

class RecipeForm extends React.Component {
  constructor() {
    super();

    if (!firebase.apps.length) {
      this.app = firebase.initializeApp(DB_CONFIG_RECIPE);
    }

    this.state = {
      author: "",
      category: "",
      ingredients: "",
      instructions: "",
      miscellaneous: "",
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
      recipetitle: this.state.recipetitle,
      author: this.state.author,
      category: this.state.category,
      ingredients: this.state.ingredients,
      instructions: this.state.instructions,
      miscellaneous: this.state.miscellaneous
    };
    itemsRef.push(item);
    this.setState({
      recipetitle: "",
      author: "",
      category: "",
      ingredients: "",
      instructions: "",
      miscellaneous: ""
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
          recipetitle: items[item].recipetitle,
          author: items[item].author,
          category: items[item].category,
          ingredients: items[item].ingredients,
          instructions: items[item].instructions,
          miscellaneous: items[item].miscellaneous
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
              className="formOption"
              type="text"
              name="recipetitle"
              placeholder="Recipe Title"
              onChange={this.handleChange}
              value={this.state.recipetitle}
              required
            />
            <input
              className="formOption"
              type="text"
              name="author"
              placeholder="Recipe Creator"
              onChange={this.handleChange}
              value={this.state.author}
            />
            <select
              name="category"
              placeholder="Recipe Category"
              onChange={this.handleChange}
              value={this.state.category}
              className="formOption"
              required
            >
              <option value="">Category</option>
              <option value="Appetizers">Appetizers and Dips</option>
              <option value="Soups">Soups</option>
              <option value="Salads">Salads</option>
              <option value="Main Dishes">Main Dishes</option>
              <option value="Vegetables">Vegetables</option>
              <option value="Breads and Muffins">Breads and Muffins</option>
              <option value="Cakes and Frostings">Cakes and Frostings</option>
              <option value="Pies, Puddings, Custards">
                Pies, Puddings, Custards, Etc.
              </option>
              <option value="Cookies, Bars">Cookies, Bars, Etc.</option>
              <option value="Candy">Candy</option>
              <option value="Miscellaneous">Miscellaneous</option>
            </select>

            <textarea
              className="formOption"
              type="text"
              name="ingredients"
              placeholder="Ingredients List"
              onChange={this.handleChange}
              value={this.state.ingredients}
              required
            />
            <textarea
              className="formOption"
              type="text"
              name="instructions"
              placeholder="Instructions / Directions"
              onChange={this.handleChange}
              value={this.state.instructions}
              required
            />
            <textarea
              className="formOption"
              type="text"
              name="miscellaneous"
              placeholder="Miscellaneous"
              onChange={this.handleChange}
              value={this.state.miscellaneous}
            />
            <button>Add Recipe</button>
          </form>
        </div>
        <div className="dataReturn">
          <ul className="dataUl">
            {this.state.items.map(item => {
              return (
                <li className="dataLine" key={item.id}>
                  <div className="dataItem">
                    <span> Title : {item.recipetitle}</span>
                  </div>
                  <div className="dataItem">
                    <span>Recipe : {item.author}</span>
                  </div>
                  <div className="dataItem">
                    <span>Category : {item.category}</span>
                  </div>
                  <div className="dataItem">
                    <span>Ingredients : {item.ingredients}</span>
                  </div>
                  <div className="dataItem">
                    <span>Instructions : {item.instructions}</span>
                  </div>
                  <div className="dataItem">
                    <span>Miscellaneous : {item.miscellaneous}</span>
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

export default RecipeForm;
