// src/components/recipeOfDay.tsx

import firstRecipeDay from "../img/first-recipeday.svg";
import secondRecipeDay from "../img/second-recipeday.svg";
import thirdRecipeDay from "../img/third-recipeday.svg";

import favoriteImg from "../img/favorites.svg";
import favoriteActiveImg from "../img/active-favorite.svg";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addOrRemoveFavorite } from "../app/slices/Favorite";
import { RecipeOfDay } from "../app/types";

function RecipeOfDayComponent() {
  const favorites = useSelector((state: any) => state.favorite);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mockResipeOfDay: RecipeOfDay[] = [
    {
      id: 1,
      title: "Запеканка за 5 минут",
      info: "info-text-cards",
      steps: [],
      type: "day",
    },
    {
      id: 2,
      title: "Рыба по флотски",
      info: "info-text-cards",
      steps: [],
      type: "day",
    },
    {
      id: 3,
      title: "Нутовое пюре с хумусом",
      info: "info-text-cards",
      steps: [],
      type: "day",
    },
  ];

  const recipeImages = {
    1: firstRecipeDay,
    2: secondRecipeDay,
    3: thirdRecipeDay,
  };

  return (
    <div className="recipes-day">
      {mockResipeOfDay.map((recipe) => {
        const isInFavorites = favorites.some(
          (fav: RecipeOfDay) => fav.id === recipe.id && fav.type === "day"
        );

        return (
          <div className="recipe-container-day" key={recipe.id}>
            <img
              src={recipeImages[recipe.id]}
              className="recipe-img"
              alt={recipe.title}
              onClick={() => navigate(`/recipe/${recipe.id}`)}
            />
            <h1 className="main-text-cards">{recipe.title}</h1>
            <p className="info-text-cards">{recipe.info}</p>
            <img
              src={isInFavorites ? favoriteActiveImg : favoriteImg}
              className="favorite-cards"
              alt="favorite"
              onClick={(e) => {
                e.stopPropagation();
                dispatch(addOrRemoveFavorite(recipe));
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default RecipeOfDayComponent;
