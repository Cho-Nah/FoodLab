// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";

const Array = require("../path/ArrayTestJest");

describe("Проверка массива", () => {
  test("Массив", () => {
    expect(Array(["1", "2", "3", "4", "5"])).toBe("1-2-3-4-5");
  });
});

// const SearchComponent = require("../components/Search");

// describe("Рендеры инпутов и кнопок", () => {
//   test("Инпут", () => {
//     render(<SearchComponent />);
//     const inputs = screen.getByRole("textbox");
//     expect(inputs).toBeInDocument();
//   });
// });
