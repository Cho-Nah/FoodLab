import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients, setIngredients } from "../app/slices/hintSlice";
import {
  sendIngredients,
  setRecipes,
} from "../app/slices/sendIngredientsSlice";
import { RootState } from "../app/store";

import Menu from "../path/Menu";

import "../style.sass";

import filter from "../img/filter.svg";
import FilterModal from "./Drawer";

function Search() {
  const result = useSelector((state: any) => state.search.ingredients);
  const dispatch = useDispatch();
  const recipes = useSelector((state: RootState) => state.send.recipes);

  const [value, setValue] = useState("");
  const [isOpen, isDrawerOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  let timeoutId: NodeJS.Timeout;

  useEffect(() => {
    clearTimeout(timeoutId);

    if (value.trim().length > 1) {
      timeoutId = setTimeout(() => dispatch(fetchIngredients(value)), 1000);
    }
  }, [value, dispatch]);

  return (
    <div>
      <div className="header">
        <button
          className="button-filter"
          onClick={() => setIsFilterModalOpen(true)}
        >
          <img src={filter} alt="" />
        </button>

        <FilterModal
          isOpen={isFilterModalOpen}
          onClose={() => setIsFilterModalOpen(false)}
        />

        <div className="search-container">
          <svg
            className="search-icon"
            width="20"
            height="20"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.8875 24.1125L21.6375 19.875C23.0087 18.1281 23.7528 15.9708 23.75 13.75C23.75 11.7722 23.1635 9.83879 22.0647 8.1943C20.9659 6.54981 19.4041 5.26809 17.5768 4.51121C15.7496 3.75433 13.7389 3.5563 11.7991 3.94215C9.85929 4.328 8.07746 5.28041 6.67894 6.67894C5.28041 8.07746 4.328 9.85929 3.94215 11.7991C3.5563 13.7389 3.75433 15.7496 4.51121 17.5768C5.26809 19.4041 6.54981 20.9659 8.1943 22.0647C9.83879 23.1635 11.7722 23.75 13.75 23.75C15.9708 23.7528 18.1281 23.0087 19.875 21.6375L24.1125 25.8875C24.2287 26.0047 24.367 26.0977 24.5193 26.1611C24.6716 26.2246 24.835 26.2573 25 26.2573C25.165 26.2573 25.3284 26.2246 25.4807 26.1611C25.633 26.0977 25.7713 26.0047 25.8875 25.8875C26.0047 25.7713 26.0977 25.633 26.1611 25.4807C26.2246 25.3284 26.2573 25.165 26.2573 25C26.2573 24.835 26.2246 24.6716 26.1611 24.5193C26.0977 24.367 26.0047 24.2287 25.8875 24.1125ZM6.25 13.75C6.25 12.2666 6.68987 10.8166 7.51398 9.58323C8.33809 8.34986 9.50943 7.38857 10.8799 6.82091C12.2503 6.25325 13.7583 6.10473 15.2132 6.39411C16.668 6.6835 18.0044 7.39781 19.0533 8.4467C20.1022 9.4956 20.8165 10.832 21.1059 12.2868C21.3953 13.7417 21.2468 15.2497 20.6791 16.6201C20.1114 17.9906 19.1502 19.1619 17.9168 19.986C16.6834 20.8101 15.2334 21.25 13.75 21.25C11.7609 21.25 9.85323 20.4598 8.4467 19.0533C7.04018 17.6468 6.25 15.7391 6.25 13.75Z"
              fill="#4E370E"
            />
          </svg>

          <input
            className="search-receip-input"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            list="cities"
          />
        </div>

        <button
          className="search-receip-button"
          onClick={() => {
            dispatch(sendIngredients(value));
          }}
        >
          Отправить
        </button>

        <Menu />
      </div>

      {/* <div className="search-result">
        <h1>Мой рецепт:</h1>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.instructions}</p>
            </div>
          ))
        ) : (
          <p>Ничего не найдено</p>
        )}
      </div> */}
    </div>
  );
}

export default Search;
