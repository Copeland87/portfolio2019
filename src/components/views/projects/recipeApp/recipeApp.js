import React, { useEffect, useState } from "react";
import Axios from "axios";

import Recipe from "./assets/recipe";

import "./recipeApp.css";

import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

const RecipeApp02 = () => {
  const RecipeApp_ID = "c3bae976";
  const RecipeApp_Key = "ea876131e45d4a411dd5dfed49781102";

  const defaultOption = "Potato";

  //   state set from setRecipes in getRecipes
  const [recipes, setRecipes] = useState([]);
  // state set
  const [search, setSearch] = useState("");
  // state set
  const [query, setQuery] = useState("");

  //   calls when query runs onSubmit getSearch
  useEffect(() => {
    // console.log("Effect has been run");
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${RecipeApp_ID}&app_key=${RecipeApp_Key}`
    );
    const data = await response.json();
    console.log(data.hits);
    // setRecipes(data.hits) sets data to setRecipes state
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div>
      <span>
        <Link to="/project">Back to Projects</Link>
      </span>
      <div className="app-description">
        <h2>
          A quick app for when you do know what you want to eat. (Still a work
          in progress)
        </h2>
      </div>
      <div className="search-container">
        {/* <p onClick={() => setCounter(counter + 1)}>COMING SOON!!!{counter}</p> */}
        <form onSubmit={getSearch} className="search-form">
          {/* value of search pulled from const search setState */}
          <input
            className="search-bar"
            type="text"
            value={search}
            placeholder="Enter an Ingredient here... like banana"
            onChange={updateSearch}
          />{" "}
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="recipe-returns">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            url={recipe.recipe.url}
            // calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeApp02;
