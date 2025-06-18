import { AllRecipes } from "../app/types";
import "../RecipeSteps.sass";

export const AllRecipeSteps = ({ recipe }: { recipe: AllRecipes }) => {
  return (
    <div className="recipe-steps">
      <h2 className="recipe-steps__title">Шаги приготовления</h2>

      <div className="recipe-steps__list">
        {recipe.steps.map((step) => (
          <div key={step.number} className="recipe-step">
            <div className="recipe-step__image-wrapper">
              <img
                src={step.image}
                alt={`Шаг ${step.number}`}
                className="recipe-step__image"
              />
            </div>

            <div className="recipe-step__content">
              <div className="recipe-step__number">
                Шаг {step.number} из {recipe.steps.length}
              </div>
              <p className="recipe-step__description">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
