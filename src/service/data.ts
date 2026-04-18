import { ApiClient } from "./apiClient";

export async function getData() {
  const data = await ApiClient("/products");
  return data.products;
}
