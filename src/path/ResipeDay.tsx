import firstRecipeDay from "../img/first-recipeday.svg";
import secondRecipeDay from "../img/second-recipeday.svg";
import thirdRecipeDay from "../img/third-recipeday.svg";
import favorite from "../img/favorites.svg";

function recipeOfDay() {
  return (
    <div className="recipes-day">
      <div className="recipe-container-day">
        <img src={firstRecipeDay} className="first-recipe-day" alt="" />
        <h1 className="main-text-cards">Запеканка за 5 минут</h1>
        <p className="info-text-cards">info-text-cards</p>
        <img src={favorite} className="favorite-cards" alt="" />
      </div>

      <div className="recipe-container-day">
        <img src={secondRecipeDay} className="second-recipe-day" alt="" />
        <h1 className="main-text-cards">Рыба по флотски</h1>
        <p className="info-text-cards">info-text-cards</p>
        <img src={favorite} className="favorite-cards" alt="" />
      </div>

      <div className="recipe-container-day">
        <img src={thirdRecipeDay} className="third-recipe-day" alt="" />
        <h1 className="main-text-cards">Нутовое пюре с хумусом</h1>
        <p className="info-text-cards">info-text-cards</p>
        <img src={favorite} className="favorite-cards" alt="" />
      </div>
    </div>
  );
}

export default recipeOfDay;
