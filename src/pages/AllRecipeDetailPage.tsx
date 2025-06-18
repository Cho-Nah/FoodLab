import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addOrRemoveFavorite } from "../app/slices/Favorite";
import { AllRecipes } from "../app/types";
import { AllRecipeSteps } from "../features/AllRecipeSteps";

import firstAllRecipe from "../img/all-recipe-first-img.svg";
import secondAllRecipe from "../img/all-recipe-second-img.svg";
import thirdAllRecipe from "../img/all-recipe-third-img.svg";
import fourthAllRecipe from "../img/all-recipe-fourth-img.svg";
import fifthAllRecipe from "../img/all-recipe-fifth-img.svg";
import sixthAllRecipe from "../img/all-recipe-sixth-img.svg";
import seventhAllRecipe from "../img/all-recipe-seventh-img.svg";
import eigthAllRecipe from "../img/all-recipe-eigth-img.svg";

import favoriteImg from "../img/favorites.svg";
import favoriteActiveImg from "../img/active-favorite.svg";

import "../style.sass";

export const AllRecipeDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const recipeId = Number(id);

  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: { favorite: AllRecipes[] }) => state.favorite
  );

  const mockAllRecipes: AllRecipes[] = [
    {
      id: 4,
      title: "Спагетти с индейкой по-скуфски",
      time: 30,
      isFavorite: false,
      info: "Вкусное блюдо из индейки с томатным соусом и специями.",
      steps: [
        {
          number: 1,
          description: "Отварите спагетти до готовности.",
          image: "https://via.placeholder.com/150/FA8072/000000?text=Step+1",
        },
        {
          number: 2,
          description: "Обжарьте фарш из индейки с луком.",
          image: "https://via.placeholder.com/150/FA8072/000000?text=Step+2",
        },
        {
          number: 3,
          description: "Добавьте томатный соус и перемешайте со спагетти.",
          image: "https://via.placeholder.com/150/FA8072/000000?text=Step+3",
        },
      ],
    },
    {
      id: 5,
      title: "Куриное филе в сливочном соусе",
      time: 25,
      isFavorite: false,
      info: "Нежное куриное филе в сливочном соусе с грибами.",
      steps: [
        {
          number: 1,
          description: "Обжарьте филе до золотистой корочки.",
          image: "https://via.placeholder.com/150/FFFACD/000000?text=Step+1",
        },
        {
          number: 2,
          description: "Добавьте грибы и тушите 5 минут.",
          image: "https://via.placeholder.com/150/FFFACD/000000?text=Step+2",
        },
        {
          number: 3,
          description: "Влейте сливки и доведите до кипения.",
          image: "https://via.placeholder.com/150/FFFACD/000000?text=Step+3",
        },
      ],
    },
    {
      id: 6,
      title: "Овощное рагу",
      time: 40,
      isFavorite: false,
      info: "Полезное и вкусное овощное рагу с картошкой, кабачками и морковью.",
      steps: [
        {
          number: 1,
          description: "Нарежьте все овощи кубиками.",
          image: "https://via.placeholder.com/150/90EE90/000000?text=Step+1",
        },
        {
          number: 2,
          description: "Обжарьте лук и морковь.",
          image: "https://via.placeholder.com/150/90EE90/000000?text=Step+2",
        },
        {
          number: 3,
          description: "Добавьте остальные овощи и тушите 25 минут.",
          image: "https://via.placeholder.com/150/90EE90/000000?text=Step+3",
        },
      ],
    },
    {
      id: 7,
      title: "Салат Цезарь с курицей",
      time: 15,
      isFavorite: false,
      info: "Классический салат Цезарь с обжаренной курицей и гренками.",
      steps: [
        {
          number: 1,
          description: "Обжарьте курицу до готовности.",
          image: "https://via.placeholder.com/150/F5DEB3/000000?text=Step+1",
        },
        {
          number: 2,
          description: "Подготовьте салат, гренки и соус.",
          image: "https://via.placeholder.com/150/F5DEB3/000000?text=Step+2",
        },
        {
          number: 3,
          description: "Соберите все ингредиенты в миске.",
          image: "https://via.placeholder.com/150/F5DEB3/000000?text=Step+3",
        },
      ],
    },
    {
      id: 8,
      title: "Гречка с грибами",
      time: 20,
      isFavorite: false,
      info: "Постное блюдо — гречневая каша с ароматными жареными грибами.",
      steps: [
        {
          number: 1,
          description: "Отварите гречку.",
          image: "https://via.placeholder.com/150/DDA0DD/000000?text=Step+1",
        },
        {
          number: 2,
          description: "Обжарьте грибы с луком.",
          image: "https://via.placeholder.com/150/DDA0DD/000000?text=Step+2",
        },
        {
          number: 3,
          description: "Смешайте гречку с грибами и прогрейте вместе.",
          image: "https://via.placeholder.com/150/DDA0DD/000000?text=Step+3",
        },
      ],
    },
    {
      id: 9,
      title: "Картофельное пюре с маслом",
      time: 30,
      isFavorite: false,
      info: "Классическое пюре с молоком и сливочным маслом.",
      steps: [
        {
          number: 1,
          description: "Очистите и отварите картофель.",
          image: "https://via.placeholder.com/150/F0E68C/000000?text=Step+1",
        },
        {
          number: 2,
          description: "Разомните с маслом и молоком.",
          image: "https://via.placeholder.com/150/F0E68C/000000?text=Step+2",
        },
      ],
    },
    {
      id: 10,
      title: "Омлет с сыром и зеленью",
      time: 10,
      isFavorite: false,
      info: "Быстрый и вкусный завтрак — омлет с тертым сыром и зеленью.",
      steps: [
        {
          number: 1,
          description: "Взбейте яйца с молоком, солью и перцем.",
          image: "https://via.placeholder.com/150/FFB6C1/000000?text=Step+1",
        },
        {
          number: 2,
          description: "Обжарьте с двух сторон и посыпьте сыром и зеленью.",
          image: "https://via.placeholder.com/150/FFB6C1/000000?text=Step+2",
        },
      ],
    },
    {
      id: 11,
      title: "Плов с курицей",
      time: 45,
      isFavorite: false,
      info: "Ароматный плов с куриным мясом, морковью и специями.",
      steps: [
        {
          number: 1,
          description: "Обжарьте курицу с луком и морковью.",
          image: "https://via.placeholder.com/150/F08080/000000?text=Step+1",
        },
        {
          number: 2,
          description: "Добавьте рис и залейте водой.",
          image: "https://via.placeholder.com/150/F08080/000000?text=Step+2",
        },
        {
          number: 3,
          description: "Готовьте под крышкой до испарения жидкости.",
          image: "https://via.placeholder.com/150/F08080/000000?text=Step+3",
        },
      ],
    },
  ];

  const recipeImages: Record<number, string> = {
    4: firstAllRecipe,
    5: secondAllRecipe,
    6: thirdAllRecipe,
    7: fourthAllRecipe,
    8: fifthAllRecipe,
    9: sixthAllRecipe,
    10: seventhAllRecipe,
    11: eigthAllRecipe,
  };

  const recipe = mockAllRecipes.find((r) => r.id === recipeId);
  if (!recipe) return <p>Рецепт не найден</p>;

  const isFavorite = favorites.some((fav) => fav.id === recipe.id);

  const handleFavorite = () => {
    dispatch(addOrRemoveFavorite(recipe));
  };

  return (
    <div className="recipe-detail">
      <div className="cover">
        <img src={recipeImages[recipe.id]} alt={recipe.title} />
        <div className="overlay">
          <h1>{recipe.title}</h1>
        </div>
      </div>

      <div className="content">
        <div className="meta">
          <div className="meta-info">
            <div>
              <div className="meta-info-item-value">{recipe.time} мин</div>
              <div className="meta-info-item-label">Время</div>
            </div>
          </div>

          <button onClick={handleFavorite} className="favorite-btn">
            <img
              src={isFavorite ? favoriteActiveImg : favoriteImg}
              alt="Добавить в избранное"
            />
          </button>
        </div>

        {recipe.info && <p className="description">{recipe.info}</p>}

        <AllRecipeSteps recipe={recipe} />
      </div>
    </div>
  );
};
