import "../Drawer.sass";
import favorite from "../img/favorites.svg";
import { FilterData } from "../app/types";
import { useState, useEffect } from "react";

function DrawerComponent({ onClose }: { onClose: () => void }) {
  const [searchItem, setSearchItem] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState<FilterData[]>([]);

  // useEffect(() => {
  //   fetch("/db.json") // путь к файлу в public
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setData(json);
  //       setFilteredData(json); // сразу показывать все данные
  //     })
  //     .catch((err) => console.error("Ошибка загрузки recipes.json:", err));
  // }, []);

  const data: FilterData[] = [
    {
      id: 1,
      name: "Product 1",
      tags: ["carrot", "milk"],
      description: "Describtion",
    },
    {
      id: 2,
      name: "Product 2",
      tags: ["canabis", "shishi"],
      description: "Yo",
    },
    {
      id: 3,
      name: "Product 3",
      tags: ["damn", "fuckYou"],
      description: "No",
    },
    {
      id: 4,
      name: "Product 4",
      tags: ["damn", "test"],
      description: "No",
    },
  ];

  const allTags = Array.from(new Set(data.flatMap((item) => item.tags)));

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchItem(event.target.value);
  }

  function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
    const tag = event.target.name;
    setSelectedTags((prev) =>
      event.target.checked ? [...prev, tag] : prev.filter((t) => t !== tag)
    );
  }

  function handleFilter() {
    const result = data.filter((item) => {
      const matchesSearch = searchItem
        ? item.tags.some((tag) =>
            tag.toLowerCase().includes(searchItem.toLowerCase())
          )
        : true;
      const matchesTags = selectedTags.length
        ? selectedTags.every((tag) => item.tags.includes(tag))
        : true;

      return matchesSearch && matchesTags;
    });

    setFilteredData(result);
  }

  return (
    <div className="drawer">
      <h1>Фильтрация</h1>
      <input
        type="text"
        placeholder="Search.."
        value={searchItem}
        onChange={handleSearchChange}
      />

      <div className="checkbox-menu">
        {allTags.map((tag) => (
          <span key={tag}>
            <input
              type="checkbox"
              name={tag}
              checked={selectedTags.includes(tag)}
              onChange={handleCheckboxChange}
            />
            {tag}
          </span>
        ))}
      </div>

      <button onClick={handleFilter}>Применить фильтр</button>

      <div className="container-tags">
        {filteredData.map((item) => (
          <div key={item.id} className="tag-item">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Tags: {item.tags.join(", ")}</p>
          </div>
        ))}
      </div>

      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default DrawerComponent;
function setData(json: any) {
  throw new Error("Function not implemented.");
}
