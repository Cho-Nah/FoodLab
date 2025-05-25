import { useState } from "react";
import "../Drawer.sass";
import { FilterData } from "../app/types";

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

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function FilterModal({ isOpen, onClose }: FilterModalProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filtered, setFiltered] = useState<FilterData[] | null>(null);

  const allTags = Array.from(new Set(mockRecipes.flatMap((r) => r.tags)));

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const resetFilters = () => {
    setSelectedTags([]);
    setFiltered(null);
  };

  const applyFilters = () => {
    const filteredRecipes = mockRecipes.filter((recipe) =>
      selectedTags.every((tag) => recipe.tags.includes(tag))
    );
    setFiltered(filteredRecipes);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">Фильтрация рецептов</h2>
          <button className="modal-close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="modal-body">
          <div className="filter-section">
            <div className="filter-section-header">
              <h3 className="filter-section-title">Теги</h3>
              <button className="filter-reset-btn" onClick={resetFilters}>
                Сбросить
              </button>
            </div>

            <div className="ingredients-list">
              {allTags.map((tag) => (
                <label key={tag} className="ingredient-item">
                  <input
                    type="checkbox"
                    checked={selectedTags.includes(tag)}
                    onChange={() => toggleTag(tag)}
                    className="ingredient-checkbox"
                  />
                  <span className="custom-checkbox"></span>
                  <span className="ingredient-name">{tag}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="apply-filters-btn" onClick={applyFilters}>
            Применить фильтры
          </button>
        </div>

        {filtered !== null && (
          <div className="modal-results">
            <h3>Результаты:</h3>
            {filtered.length > 0 ? (
              filtered.map((recipe) => (
                <div key={recipe.id} className="recipe-card">
                  <h4>{recipe.name}</h4>
                  <p>{recipe.description}</p>
                </div>
              ))
            ) : (
              <p>Ничего не найдено</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default FilterModal;
