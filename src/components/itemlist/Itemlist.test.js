import { render, screen } from "@testing-library/react";
import Itemlist from "./Itemlist";
import { mockdata } from "../../data/mockdata";

test("*Loading...* is being displayed on initial load", () => {
  render(<Itemlist loading={true} items={mockdata} />);
  const loading = screen.getByText("Loading...");
  expect(loading).toBeInTheDocument();
});

test("Items are being displayed when *loading=false*", () => {
  render(<Itemlist loading={false} items={mockdata} />);
  const items = screen.getAllByRole("link");
  expect(items.length).toBe(3);
});
