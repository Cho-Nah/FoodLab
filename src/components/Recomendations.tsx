import "../style.sass";
import RecipeOfDay from "../path/ResipeDay";
import AllRecipes from "../path/AllRecipes";

function Recomendation() {
  return (
    <div>
      <h1 className="recomendation-title">Рецепты дня</h1>
      <RecipeOfDay />
      <AllRecipes />
    </div>
  );
}

export default Recomendation;
