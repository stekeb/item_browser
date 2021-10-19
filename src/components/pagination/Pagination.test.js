import { render, screen } from "@testing-library/react";
import Pagination from "./Pagination";

describe("correct amount of page numbers being rendered", () => {
  test("1 item should equal 1 pagenumber", () => {
    render(<Pagination itemsPerPage={100} totalItems={1} />);
    const pageAmount1 = screen.getAllByRole("link");
    expect(pageAmount1.length).toBe(1);
  });
  test("101 items should equal 2 page numbers being rendered", () => {
    render(<Pagination itemsPerPage={100} totalItems={101} />);
    const pageAmount1 = screen.getAllByRole("link");
    expect(pageAmount1.length).toBe(2);
  });
});
