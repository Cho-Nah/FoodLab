import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addOrRemoveFavorite } from "../app/slices/Favorite";
import { RecipeOfDay } from "../app/types";
import { RecipeSteps } from "../features/RecipeSteps";

import firstRecipeDay from "../img/first-recipeday.svg";
import secondRecipeDay from "../img/second-recipeday.svg";
import thirdRecipeDay from "../img/third-recipeday.svg";
import favoriteImg from "../img/favorites.svg";
import favoriteActiveImg from "../img/active-favorite.svg";

export const RecipeDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const recipeId = Number(id);

  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: { favorite: RecipeOfDay[] }) => state.favorite
  );

  const recipes: RecipeOfDay[] = [
    {
      id: 1,
      title: "Запеканка за 5 минут",
      info: "Нежная творожная запеканка с ванильным ароматом",
      steps: [
        {
          number: 1,
          description:
            "Смешайте 500 г творога, 2 яйца и 3 ст.л. сахара. Добавьте 2 ст.л. манки и щепотку ванилина, тщательно перемешайте.",
          image: "https://via.placeholder.com/150/FFE4B5/000000?text=Step+1",
        },
        {
          number: 2,
          description:
            "Смажьте форму маслом, выложите творожную массу. Разровняйте поверхность.",
          image: "https://via.placeholder.com/150/FFE4B5/000000?text=Step+2",
        },
        {
          number: 3,
          description:
            "Выпекайте 25 минут при 180°C до золотистой корочки. Подавайте с ягодным соусом.",
          image: "https://via.placeholder.com/150/FFE4B5/000000?text=Step+3",
        },
      ],
    },
    {
      id: 2,
      title: "Рыба по флотски",
      info: "Сытное рыбное блюдо с картофелем и луком",
      steps: [
        {
          number: 1,
          description:
            "500 г филе трески нарежьте порционно. 4 картофелины очистите и нарежьте кружочками. 2 луковицы нашинкуйте.",
          image: "https://via.placeholder.com/150/B0E0E6/000000?text=Step+1",
        },
        {
          number: 2,
          description:
            "В форму выложите слоями: картофель, лук, рыбу. Посолите, поперчите каждый слой.",
          image: "https://via.placeholder.com/150/B0E0E6/000000?text=Step+2",
        },
        {
          number: 3,
          description:
            "Залейте 200 мл сливок, посыпьте 50 г тёртого сыра. Запекайте 40 минут при 200°C.",
          image: "https://via.placeholder.com/150/B0E0E6/000000?text=Step+3",
        },
      ],
    },
    {
      id: 3,
      title: "Нутовое пюре с хумусом",
      info: "Питательный веганский хумус с оливковым маслом",
      steps: [
        {
          number: 1,
          description:
            "200 г нута замочите на ночь. Отварите до мягкости (около 1,5 часов). Сохраните 100 мл отвара.",
          image: "https://via.placeholder.com/150/F5DEB3/000000?text=Step+1",
        },
        {
          number: 2,
          description:
            "В блендер добавьте нут, 2 ст.л. тахини, 1 зубчик чеснока, сок 1/2 лимона, 3 ст.л. оливкового масла.",
          image: "https://via.placeholder.com/150/F5DEB3/000000?text=Step+2",
        },
        {
          number: 3,
          description:
            "Взбивайте, постепенно добавляя отвар до нужной консистенции. Посолите по вкусу. Украсьте паприкой.",
          image: "https://via.placeholder.com/150/F5DEB3/000000?text=Step+3",
        },
      ],
    },
  ];

  const recipeImages: Record<number, string> = {
    1: firstRecipeDay,
    2: secondRecipeDay,
    3: thirdRecipeDay,
  };

  const recipe = recipes.find((r) => r.id === recipeId);
  if (!recipe) return <p>Рецепт не найден</p>;

  const isFavorite = favorites.some((fav) => fav.id === recipe.id);

  const handleFavorite = () => {
    dispatch(addOrRemoveFavorite(recipe));
  };

  return (
    <div
      style={{
        maxWidth: "min(90vw, 900px)",
        width: "100%",
        margin: "1.5rem auto",
        borderRadius: "0.75rem",
        overflow: "hidden",
        boxShadow: "0 0.25rem 1rem rgba(0,0,0,0.08)",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#fff",
      }}
    >
      {/* Обложка рецепта */}
      <div
        style={{
          width: "100%",
          height: "30vh",
          minHeight: "200px",
          maxHeight: "250px",
          backgroundColor: "#f8f8f8",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src={recipeImages[recipe.id]}
          alt={recipe.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            filter: "brightness(0.95)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "1rem",
            background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "clamp(1.5rem, 5vw, 2rem)",
              margin: 0,
              textShadow: "0 1px 3px rgba(0,0,0,0.3)",
            }}
          >
            {recipe.title}
          </h1>
        </div>
      </div>

      {/* Основной контент */}
      <div style={{ padding: "1.5rem" }}>
        {/* Мета-информация */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1.5rem",
            gap: "1rem",
          }}
        >
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <div>
              <div
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#444",
                }}
              >
                {recipe.id === 1
                  ? "25 мин"
                  : recipe.id === 2
                  ? "50 мин"
                  : "2 ч"}
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "#777",
                }}
              >
                Время
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#444",
                }}
              >
                {recipe.id === 1 ? "1/5" : recipe.id === 2 ? "2/5" : "3/5"}
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "#777",
                }}
              >
                Сложность
              </div>
            </div>
          </div>

          <button
            onClick={handleFavorite}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
            }}
          >
            <img
              src={isFavorite ? favoriteActiveImg : favoriteImg}
              alt="Добавить в избранное"
              style={{
                width: "1.8rem",
                height: "1.8rem",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </button>
        </div>

        {recipe.info && (
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.5,
              color: "#555",
              marginBottom: "1.5rem",
              padding: "0.75rem",
              backgroundColor: "#f9f9f9",
              borderRadius: "0.5rem",
            }}
          >
            {recipe.info}
          </p>
        )}

        <RecipeSteps recipe={recipe} />
      </div>
    </div>
  );
};
