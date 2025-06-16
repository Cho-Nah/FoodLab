import { RecipeOfDay } from "../app/types";

export const RecipeSteps = ({ recipe }: { recipe: RecipeOfDay }) => {
  return (
    <div>
      <h2
        style={{
          fontSize: "1.25rem",
          fontWeight: 600,
          marginBottom: "1.25rem",
          color: "#333",
          paddingBottom: "0.5rem",
          borderBottom: "1px solid #eee",
        }}
      >
        Шаги приготовления
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {recipe.steps.map((step) => (
          <div
            key={step.number}
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                minWidth: "80px",
                borderRadius: "0.5rem",
                overflow: "hidden",
                backgroundColor: "#f0f0f0",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={step.image}
                alt={`Шаг ${step.number}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>

            <div>
              <div
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color: "#666",
                  marginBottom: "0.25rem",
                }}
              >
                Шаг {step.number} из {recipe.steps.length}
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.95rem",
                  lineHeight: 1.5,
                  color: "#444",
                }}
              >
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
