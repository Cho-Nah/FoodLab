import "../Account.sass";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getUserFromIndexedDB } from "../../User";

export function Account() {
  const user = useSelector((state: any) => state.register);
  const favoriteRecipes = useSelector((state: any) => state.favorite);

  const [username, setUsername] = useState(user?.username || "Гость");
  const [email, setEmail] = useState(user?.email || "email не указан");

  useEffect(() => {
    if (!user?.username) {
      getUserFromIndexedDB()
        .then((dbUser) => {
          if (dbUser) {
            setUsername(dbUser.username);
            setEmail(dbUser.email);
          }
        })
        .catch((error) => {
          console.error("Ошибка при получении пользователя:", error);
        });
    }
  }, [user]);

  return (
    <div className="profile-page">
      <header className="profile-page__header">
        <div className="profile-page__avatar"></div>
        <div className="profile-page__user-info">
          <h1 className="profile-page__title">{username}</h1>
          <p className="profile-page__subtitle">{email}</p>

          <div className="profile-page__stats">
            <div className="profile-page__stat">
              <div className="profile-page__stat-value"></div>
              <div className="profile-page__stat-label">Рецептов</div>
            </div>
            <div className="profile-page__stat">
              <div className="profile-page__stat-label">
                В избранном {favoriteRecipes.length}
              </div>
            </div>
            <div className="profile-page__stat">
              <div className="profile-page__stat-value"></div>
              <div className="profile-page__stat-label">Подписчиков</div>
            </div>
          </div>
        </div>
      </header>

      <div className="profile-page__content">
        <aside className="profile-page__sidebar">
          <div className="profile-page__card">
            <h2 className="profile-page__card-title">
              Кулинарные предпочтения
            </h2>
            <p>Итальянская кухня</p>
            <p>Французская кухня</p>
            <p>Выпечка</p>
          </div>

          <div className="profile-page__card">
            <h2 className="profile-page__card-title">Кухонное оборудование</h2>
            <p>Духовка</p>
            <p>Блендер</p>
            <p>Кухонный комбайн</p>
          </div>
        </aside>

        <main className="profile-page__main">
          <div className="profile-page__card">
            <div className="profile-page__actions">
              <button className="profile-page__button profile-page__button--primary">
                Добавить рецепт
              </button>
              <button className="profile-page__button profile-page__button--secondary">
                Редактировать профиль
              </button>
            </div>
          </div>

          <div className="profile-page__card">
            <h2 className="profile-page__card-title">Мои избранные рецепты</h2>
            <div className="profile-page__favorites">
              {favoriteRecipes.length > 0 ? (
                favoriteRecipes.map((recipe: any) => (
                  <div key={recipe.id} className="profile-page__recipe">
                    <div className="profile-page__recipe-image">
                      {recipe.image && (
                        <img
                          src={recipe.image}
                          alt={recipe.title}
                          style={{ width: "100%", height: "auto" }}
                        />
                      )}
                    </div>
                    <div className="profile-page__recipe-info">
                      <h3 className="profile-page__recipe-title">
                        {recipe.title}
                      </h3>
                      <div className="profile-page__recipe-meta">
                        {recipe.time && <span>{recipe.time} мин</span>}
                        {recipe.likes && <span>♥ {recipe.likes}</span>}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>Нет избранных рецептов</p>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
