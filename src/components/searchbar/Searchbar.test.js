import { render, screen } from "@testing-library/react";
import Searchbar from "./Searchbar";
import userEvent from "@testing-library/user-event";
import { mockdata } from "../../data/mockdata";

const filteredDataHandler = jest.fn;
test("checkbox is initially not checked and checked after click", () => {
  render(
    <Searchbar items={mockdata} filteredDataHandler={filteredDataHandler} />
  );
  const checkbox = screen.getByRole("checkbox", { id: "sales" });
  expect(checkbox).not.toBeChecked();
  userEvent.click(checkbox);
  expect(checkbox).toBeChecked();
});

test("initial value of dropdown is *all*", () => {
  render(
    <Searchbar items={mockdata} filteredDataHandler={filteredDataHandler} />
  );
  const option = screen.getByRole("option", { name: "all" });
  expect(option).toBeInTheDocument();
});

test("dropdown changes on selection", () => {
  render(
    <Searchbar items={mockdata} filteredDataHandler={filteredDataHandler} />
  );
  const dropdown = screen.getByTestId("gender-dropdown");
  expect(dropdown.value).toBe("all");
  userEvent.selectOptions(dropdown, "male");
  expect(dropdown.value).toBe("male");
});
