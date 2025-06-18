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

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addOrRemoveFavorite } from "../app/slices/Favorite";

function AllRecipesPage() {
  const dispatch = useDispatch();
  const favorites = useSelector((state: any) => state.favorite);
  const navigate = useNavigate();

  function handleFavorite(recipe: AllRecipes) {
    dispatch(addOrRemoveFavorite(recipe));
  }

  const mockAllRecipes: AllRecipes[] = [
    {
      id: 4,
      title: "Спагетти с индейкой по-скуфски 1",
      time: 30,
      // isFavorite: false,
      info: "",
      steps: [],
      type: "all",
    },
    {
      id: 5,
      title: "Спагетти с индейкой по-скуфски 2",
      time: 30,
      // isFavorite: false,
      info: "",
      steps: [],
      type: "all",
    },
    {
      id: 6,
      title: "Спагетти с индейкой по-скуфски 3",
      time: 30,
      // isFavorite: false,
      info: "",
      steps: [],
      type: "all",
    },
    {
      id: 7,
      title: "Спагетти с индейкой по-скуфски 4",
      time: 30,
      // isFavorite: false,
      info: "",
      steps: [],
      type: "all",
    },
    {
      id: 8,
      title: "Спагетти с индейкой по-скуфски 5",
      time: 30,
      // isFavorite: false,
      info: "",
      steps: [],
      type: "all",
    },
    {
      id: 9,
      title: "Спагетти с индейкой по-скуфски 6",
      time: 30,
      // isFavorite: false,
      info: "",
      steps: [],
      type: "all",
    },
    {
      id: 10,
      title: "Спагетти с индейкой по-скуфски 7",
      time: 10,
      // isFavorite: false,
      info: "",
      steps: [],
      type: "all",
    },
    {
      id: 11,
      title: "Спагетти с индейкой по-скуфски 8",
      time: 30,
      // isFavorite: false,
      info: "",
      steps: [],
      type: "all",
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
            <div
              key={recipe.id}
              className="all-recipe-container"
              onClick={() => navigate(`/all-recipes/${recipe.id}`)}
            >
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
                onClick={(e) => {
                  e.stopPropagation(); // предотврати переход при клике на иконку
                  handleFavorite(recipe);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllRecipesPage;
