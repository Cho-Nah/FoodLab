import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FilterData } from "../app/types";
import { getAllTags, getRecipesByTags, addMockRecipes } from "../../db";

import { addOrRemoveFavorite } from "../app/slices/Favorite";

import favoriteImg from "../img/favorites.svg";
import favoriteActiveImg from "../img/active-favorite.svg";

import "../Drawer.sass";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function FilterModal({ isOpen, onClose }: FilterModalProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [filtered, setFiltered] = useState<FilterData[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const favorites = useSelector((state: any) => state.favorite);

  const fetchTags = useCallback(async () => {
    try {
      await addMockRecipes();
      const tags = await getAllTags();
      setAllTags(Array.from(new Set(tags)));
    } catch (error) {
      console.error("Error fetching tags:", error);
    }
  }, []);

  useEffect(() => {
    fetchTags();
  }, [fetchTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const resetFilters = () => {
    setSelectedTags([]);
    setFiltered(null);
  };

  const applyFilters = async () => {
    if (selectedTags.length === 0) {
      setFiltered(null);
      return;
    }

    setIsLoading(true);
    try {
      const result = await getRecipesByTags(selectedTags);

      // Исправляем тип для Map: используем number вместо string
      const uniqueMap = new Map<number, FilterData>();
      result.forEach((recipe) => {
        if (!uniqueMap.has(recipe.id)) {
          uniqueMap.set(recipe.id, recipe);
        } else {
          console.warn(`Duplicate recipe found: ${recipe.id} - ${recipe.name}`);
        }
      });

      const uniqueResults = Array.from(uniqueMap.values());
      setFiltered(uniqueResults);
    } catch (error) {
      console.error("Error applying filters:", error);
      setFiltered([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFavorite = (recipe: FilterData) => {
    const transformedRecipe = {
      id: recipe.id, // ID остается number
      title: recipe.name,
      info: recipe.description,
      steps: [],
      type: "recipe" as const,
    };

    dispatch(addOrRemoveFavorite(transformedRecipe));
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
          <button
            className="apply-filters-btn"
            onClick={applyFilters}
            disabled={isLoading || selectedTags.length === 0}
          >
            {isLoading ? "Загрузка..." : "Применить фильтры"}
          </button>
        </div>

        {filtered !== null && (
          <div className="modal-results">
            <h3>Результаты:</h3>
            {isLoading ? (
              <p>Загрузка...</p>
            ) : filtered.length > 0 ? (
              <div className="results-container">
                {filtered.map((recipe) => {
                  const isFavorite = favorites.some(
                    (fav: any) => fav.id === recipe.id
                  );

                  return (
                    <div
                      key={`${recipe.id}-${isFavorite}`}
                      className="recipe-card"
                    >
                      <div className="recipe-card-header">
                        <h4>{recipe.name}</h4>
                        <button
                          className="favorite-button"
                          onClick={() => handleFavorite(recipe)}
                          aria-label="Добавить в избранное"
                        >
                          <img
                            src={isFavorite ? favoriteActiveImg : favoriteImg}
                            alt="favorite icon"
                          />
                        </button>
                      </div>
                      <p>{recipe.description}</p>
                    </div>
                  );
                })}
              </div>
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
