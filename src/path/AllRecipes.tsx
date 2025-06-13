import firstAllRecipe from "../img/all-recipe-first-img.svg";
import secondAllRecipe from "../img/all-recipe-second-img.svg";
import thirdAllRecipe from "../img/all-recipe-third-img.svg";
import fifthAllRecipe from "../img/all-recipe-fifth-img.svg";
import sixthAllRecipe from "../img/all-recipe-sixth-img.svg";
import seventhAllRecipe from "../img/all-recipe-seventh-img.svg";
import eigthAllRecipe from "../img/all-recipe-eigth-img.svg";
import fourthAllRecipe from "../img/all-recipe-fourth-img.svg";

import { AllRecipes } from "../app/types";

import favorite from "../img/favorites.svg";
import "../style.sass";

function AllRecipes() {
  const favorites = useSelector((state: any) => state.favorite);


  const mockAllRecipes: AllRecipes[] = [
    {
      id: 1,
      title: "Спагетти с индейкой по скуфски",
      time: 30,
      isFavorite: false,
    },

    {
      id: 2,
      title: "Спагетти с индейкой по скуфски",
      time: 30,
      isFavorite: false,
    },

    {
      id: 3,
      title: "Спагетти с индейкой по скуфски",
      time: 30,
      isFavorite: false,
    },

    {
      id: 4,
      title: "Спагетти с индейкой по скуфски",
      time: 30,
      isFavorite: false,
    },

    {
      id: 5,
      title: "Спагетти с индейкой по скуфски",
      time: 30,
      isFavorite: false,
    },

    {
      id: 6,
      title: "Спагетти с индейкой по скуфски",
      time: 30,
      isFavorite: false,
    },
  ];


  
  const recipeImages = {
    1: firstAllRecipe,
    2: secondAllRecipe,
    3: thirdAllRecipe,
    4: fourthAllRecipe,
    5: fifthAllRecipe,
    6: sixthAllRecipe,
    7: seventhAllRecipe,
    8: eigthAllRecipe,
  };


  return (
    <div>
      <h1 className="all-recipes-title">Все рецепты</h1>

      <div className="all-recipes">
        {mockAllRecipes.map((recipe) => {
          const isInFavorites = favorites.some(
            (fav: AllRecipes) => fav.id === recipe.id
          );
        

        return (
          <div className="all-recipe-container">
          <img src={firstAllRecipe} className="all-recipe-img" alt="" />
          <p className="all-recipe-main">Спагетти с индейкой по скуфски</p>
          <p className="all-recipe-time">30 мин</p>
          <img src={favorite} className="all-favorite-cards" alt="" />
        </div>
        </div>
        )
      })
  );
}

export default AllRecipes;
