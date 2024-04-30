import { writable } from "svelte/store";

export async function fetchData(category) {
  const response = await fetch(`http://localhost:3100/data/${category}`);
  return response.json();
}

export async function deleteData(category, index) {
  const response = await fetch(
    `http://localhost:3100/data/${category}/${index}`,
    { method: "DELETE" }
  );
  return response.json();
}

export async function deleteAllData(category) {
  const response = await fetch(`http://localhost:3100/data/${category}`, {
    method: "DELETE",
  });
  return response.json();
}
