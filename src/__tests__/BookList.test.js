// import { render, screen } from "@testing-library/react";
// import SingleBook from "../components/SingleBook";
// import App from "../App";
// describe("render books", () => {
//   test("le card sono tante quante i book nel json", () => {
//     render(<App />);
//     const cards = screen.getAllByTestId("allTheCards");
//     expect(cards).toHaveLength(cards.length);
//   });
// });

import { render, screen } from "@testing-library/react";
import App from "../App";
test("la presenza delle card", () => {
  render(<App />);
  const arrayOfCards = screen.getAllByTestId("book");
  expect(arrayOfCards).toHaveLength(148);
});
