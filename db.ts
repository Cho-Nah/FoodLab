import { openDB } from "idb";
import { FilterData } from "../FoodLab/src/app/types";

export const initDB = async () => {
  return openDB("RecipesDB", 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("recipes")) {
        const store = db.createObjectStore("recipes", { keyPath: "id" });
        store.createIndex("tags", "tags", { multiEntry: true });
      }
    },
  });
};

export const addMockRecipes = async () => {
  const db = await initDB();

  const mockRecipes: FilterData[] = [
    {
      id: 1,
      name: "Картофель по-деревенски",
      tags: ["картофель", "чеснок", "петрушка"],
      description: "Вкусный картофель с чесноком и зеленью",
    },
    {
      id: 2,
      name: "Омлет с грибами",
      tags: ["яйца", "шампиньоны", "молоко"],
      description: "Пышный омлет с шампиньонами",
    },
    {
      id: 3,
      name: "Блинчики",
      tags: ["мука", "яйца", "молоко"],
      description: "Традиционные русские блины",
    },
    {
      id: 4,
      name: "Фаршированный перец",
      tags: ["перец", "фарш", "рис"],
      description: "Болгарский перец с начинкой",
    },
  ];

  const tx = db.transaction("recipes", "readwrite");
  const store = tx.objectStore("recipes");

  for (const recipe of mockRecipes) {
    await store.put(recipe);
  }

  await tx.done;
};

export const getAllTags = async (): Promise<string[]> => {
  const db = await initDB();
  const recipes: FilterData[] = await db.getAll("recipes");

  const allTags = recipes.flatMap((r) => r.tags);
  return Array.from(new Set(allTags));
};

export const getRecipesByTags = async (
  selectedTags: string[]
): Promise<FilterData[]> => {
  const db = await initDB();
  const recipes: FilterData[] = await db.getAll("recipes");

  return recipes.filter((recipe) =>
    selectedTags.every((tag) => recipe.tags.includes(tag))
  );
};
