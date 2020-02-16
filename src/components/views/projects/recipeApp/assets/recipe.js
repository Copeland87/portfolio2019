import React from "react";

const Recipe = ({ title, url, image, ingredients }) => {
  return (
    <div className="recipe-card">
      <h3 className="recipe-title">{title}</h3>
      {/* <p>{calories}</p> */}
      <div className="url-span">
        <a href={url} target="_blank">
          See full recipe here
        </a>
      </div>
      <div className="recipe-image-container">
        <img src={image} alt="" />
      </div>
      <ol className="ingredient-list">
        {ingredients.map(ingredient => (
          <li className="ingredient">{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
