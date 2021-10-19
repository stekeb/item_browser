import {
  render,
  screen,
  waitForElementToBeRemoved,
  waitFor,
} from "@testing-library/react";
import App from "./App";
import fetchPosts from "./services/datafetcher";
import { mockdata } from "./data/mockdata";
import { mockFetchPosts } from "./services/mockDatafetcher";

jest.mock("./services/datafetcher");

// render(<App />);

// fetchPosts.mockResolvedValueOnce(() => mockFetchPosts);

test("check for links (failing)", async () => {
  const { findAllByTestId } = render(<App />);
  fetchPosts().mockResolvedValueOnce(() => mockFetchPosts);
  const links = await findAllByTestId("item");
  expect(links.length).toBe(4);
});
