// Account.jsx
import "../Account.sass";

export function Account() {
  // Пример данных пользователя
  const user = {
    name: "Анна Поварова",
    username: "@annachef",
    bio: "Люблю готовить итальянскую и французскую кухню. Автор 25 рецептов на нашем сайте.",
    stats: {
      recipes: 25,
      favorites: 47,
      followers: 1280,
    },
  };

  // Пример избранных рецептов
  const favoriteRecipes = [
    {
      id: 1,
      title: "Паста Карбонара",
      time: "25 мин",
      likes: "128",
      image: "",
    },
    {
      id: 2,
      title: "Тирамису классический",
      time: "45 мин",
      likes: "215",
      image: "",
    },
    {
      id: 3,
      title: "Рататуй по-провански",
      time: "60 мин",
      likes: "89",
      image: "",
    },
    {
      id: 4,
      title: "Крем-суп из тыквы",
      time: "30 мин",
      likes: "156",
      image: "",
    },
    {
      id: 5,
      title: "Фокачча с розмарином",
      time: "90 мин",
      likes: "72",
      image: "",
    },
    {
      id: 6,
      title: "Чизкейк Нью-Йорк",
      time: "120 мин",
      likes: "310",
      image: "",
    },
  ];

  return (
    <div className="profile-page">
      <header className="profile-page__header">
        <div className="profile-page__avatar"></div>
        <div className="profile-page__user-info">
          <h1 className="profile-page__title">{user.name}</h1>
          <p className="profile-page__subtitle">{user.username}</p>
          <p className="profile-page__about">{user.bio}</p>
          <div className="profile-page__stats">
            <div className="profile-page__stat">
              <div className="profile-page__stat-value">
                {user.stats.recipes}
              </div>
              <div className="profile-page__stat-label">Рецептов</div>
            </div>
            <div className="profile-page__stat">
              <div className="profile-page__stat-value">
                {user.stats.favorites}
              </div>
              <div className="profile-page__stat-label">В избранном</div>
            </div>
            <div className="profile-page__stat">
              <div className="profile-page__stat-value">
                {user.stats.followers}
              </div>
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
              {favoriteRecipes.map((recipe) => (
                <div key={recipe.id} className="profile-page__recipe">
                  <div className="profile-page__recipe-image"></div>
                  <div className="profile-page__recipe-info">
                    <h3 className="profile-page__recipe-title">
                      {recipe.title}
                    </h3>
                    <div className="profile-page__recipe-meta">
                      <span>{recipe.time}</span>
                      <span>♥ {recipe.likes}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
