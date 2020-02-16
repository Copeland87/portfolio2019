import React from "react";

const Recipe = ({ title, url, image, ingredients }) => {
  return (
    <div className="recipe-card">
      <h2 className="recipe-title">{title}</h2>
      {/* <p>{calories}</p> */}
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
