import firstAllRecipe from "../img/all-recipe-first-img.svg";
import secondAllRecipe from "../img/all-recipe-second-img.svg";
import thirdAllRecipe from "../img/all-recipe-third-img.svg";
import fifthAllRecipe from "../img/all-recipe-fifth-img.svg";
import sixthAllRecipe from "../img/all-recipe-sixth-img.svg";
import seventhAllRecipe from "../img/all-recipe-seventh-img.svg";
import eigthAllRecipe from "../img/all-recipe-eigth-img.svg";
import fourthAllRecipe from "../img/all-recipe-fourth-img.svg";

import { AllRecipes } from "../app/types";

import favoriteImg from "../img/favorites.svg";
import favoriteActiveImg from "../img/active-favorite.svg";

import "../style.sass";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addOrRemoveFavorite } from "../app/slices/Favorite";

function allRecipes() {
  function handleFavorite(recipe: AllRecipes) {
    dispatch(addOrRemoveFavorite(recipe));
  }

  const dispatch = useDispatch();
  const favorites = useSelector((state: any) => state.favorite);

  const mockAllRecipes: AllRecipes[] = [
    {
      id: 4,
      title: "Спагетти с индейкой по скуфски",
      time: 30,
      isFavorite: false,
      info: "",
      steps: [],
    },
    {
      id: 5,
      title: "Спагетти с индейкой по скуфски",
      time: 30,
      isFavorite: false,
      info: "",
      steps: [],
    },
    {
      id: 6,
      title: "Спагетти с индейкой по скуфски",
      time: 30,
      isFavorite: false,
      info: "",
      steps: [],
    },

    {
      id: 7,
      title: "Спагетти с индейкой по скуфски",
      time: 30,
      isFavorite: false,
      info: "",
      steps: [],
    },
    {
      id: 8,
      title: "Спагетти с индейкой по скуфски",
      time: 30,
      isFavorite: false,
      info: "",
      steps: [],
    },
    {
      id: 9,
      title: "Спагетти с индейкой по скуфски",
      time: 30,
      isFavorite: false,
      info: "",
      steps: [],
    },

    {
      id: 10,
      title: "Спагетти с индейкой по скуфски",
      time: 10,
      isFavorite: false,
      info: "",
      steps: [],
    },

    {
      id: 11,
      title: "Спагетти с индейкой по скуфски",
      time: 30,
      isFavorite: false,
      info: "",
      steps: [],
    },
  ];

  const recipeImages: { [key: number]: string } = {
    4: firstAllRecipe,
    5: secondAllRecipe,
    6: thirdAllRecipe,
    7: fourthAllRecipe,
    8: fifthAllRecipe,
    9: sixthAllRecipe,
    10: seventhAllRecipe,
    11: eigthAllRecipe,
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
            <div key={recipe.id} className="all-recipe-container">
              <img
                src={recipeImages[recipe.id] || firstAllRecipe}
                className="all-recipe-img"
                alt={recipe.title}
              />
              <p className="all-recipe-main">{recipe.title}</p>
              <p className="all-recipe-time">{recipe.time} мин</p>
              <img
                src={isInFavorites ? favoriteActiveImg : favoriteImg}
                className="favorite-cards"
                alt="favorite"
                onClick={() => handleFavorite(recipe)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default allRecipes;
