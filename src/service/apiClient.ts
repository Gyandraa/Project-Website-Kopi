import axios from "axios";

const BASE_URL = "http://localhost:3001";

export async function ApiClient(endpoint: string) {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`);

    if (response.status !== 200) {
      throw new Error(`Api request failed status ${response.status}`);
    }
    return response.data;
  } catch (error) {
    console.log("terjadi error", error);
    throw error;
  }
}
