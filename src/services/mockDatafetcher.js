import { mockdata } from "../data/mockdata";

function delay100ms() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockdata);
    }, 100);
  });
}

export async function mockFetchPosts() {
  const data = await fetch(delay100ms());
  return data;
}
