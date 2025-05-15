import firstAllRecipe from "../img/all-recipe-first-img.svg";
import secondAllRecipe from "../img/all-recipe-second-img.svg";
import thirdAllRecipe from "../img/all-recipe-third-img.svg";
import fifthAllRecipe from "../img/all-recipe-fifth-img.svg";
import sixthAllRecipe from "../img/all-recipe-sixth-img.svg";
import seventhAllRecipe from "../img/all-recipe-seventh-img.svg";
import eigthAllRecipe from "../img/all-recipe-eigth-img.svg";
import fourthAllRecipe from "../img/all-recipe-fourth-img.svg";

import favorite from "../img/favorites.svg";
import "../style.sass";

function AllRecipes() {
  return (
    <div>
      <h1 style={{ marginTop: "5%", paddingLeft: "5%", width: "20%" }}>
        Все рецепты
      </h1>

      <div className="all-recipes">
        <div className="all-recipe-container">
          <img src={firstAllRecipe} className="all-recipe-img" alt="" />
          <p className="all-recipe-main">Спагетти с индейкой по скуфски</p>
          <p className="all-recipe-time">30 мин</p>
          <img src={favorite} className="all-favorite-cards" alt="" />
        </div>

        <div className="all-recipe-container">
          <img src={secondAllRecipe} className="all-recipe-img" alt="" />
          <p className="all-recipe-main">Спагетти с индейкой по скуфски</p>
          <p className="all-recipe-time">30 мин</p>
          <img src={favorite} className="all-favorite-cards" alt="" />
        </div>

        <div className="all-recipe-container">
          <img src={thirdAllRecipe} className="all-recipe-img" alt="" />
          <p className="all-recipe-main">Спагетти с индейкой по скуфски</p>
          <p className="all-recipe-time">30 мин</p>
          <img src={favorite} className="all-favorite-cards" alt="" />
        </div>

        <div className="all-recipe-container">
          <img src={fourthAllRecipe} className="all-recipe-img" alt="" />
          <p className="all-recipe-main">Спагетти с индейкой по скуфски</p>
          <p className="all-recipe-time">30 мин</p>
          <img src={favorite} className="all-favorite-cards" alt="" />
        </div>

        <div className="all-recipe-container">
          <img src={fifthAllRecipe} className="all-recipe-img" alt="" />
          <p className="all-recipe-main">Спагетти с индейкой по скуфски</p>
          <p className="all-recipe-time">30 мин</p>
          <img src={favorite} className="all-favorite-cards" alt="" />
        </div>

        <div className="all-recipe-container">
          <img src={sixthAllRecipe} className="all-recipe-img" alt="" />
          <p className="all-recipe-main">Спагетти с индейкой по скуфски</p>
          <p className="all-recipe-time">30 мин</p>
          <img src={favorite} className="all-favorite-cards" alt="" />
        </div>

        <div className="all-recipe-container">
          <img src={seventhAllRecipe} className="all-recipe-img" alt="" />
          <p className="all-recipe-main">Спагетти с индейкой по скуфски</p>
          <p className="all-recipe-time">30 мин</p>
          <img src={favorite} className="all-favorite-cards" alt="" />
        </div>

        <div className="all-recipe-container">
          <img src={eigthAllRecipe} className="all-recipe-img" alt="" />
          <p className="all-recipe-main">Спагетти с индейкой по скуфски</p>
          <p className="all-recipe-time">30 мин</p>
          <img src={favorite} className="all-favorite-cards" alt="" />
        </div>
      </div>
    </div>
  );
}

export default AllRecipes;
