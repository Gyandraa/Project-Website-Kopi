import { ApiClient } from "./apiClient";

export async function getData() {
  const data = await ApiClient("/products");

  if (!data) return [];
  return data ?? [];
}
