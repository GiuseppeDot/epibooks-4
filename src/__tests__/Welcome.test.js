import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";

test("Le card ci sono", () => {
  render(<Welcome />);
  const alert = screen.getByText("Benvenuti in EpiBooks!");
  expect(alert).toBeInTheDocument();
});
