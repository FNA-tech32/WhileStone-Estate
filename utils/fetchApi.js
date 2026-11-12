import axios from "axios";
import { filterMockProperties, getMockPropertyDetail } from "./mockData.js";

export const baseUrl =
  process.env.NEXT_PUBLIC_RAPIDAPI_BASE_URL || "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  try {
    const rapidApiKey =
      process.env.NEXT_PUBLIC_RAPIDAPI_KEY ||
      "32f3b3b5f6mshcb15d2fb43b04cfp19f014jsn389245b504b0";
    const rapidApiHost =
      process.env.NEXT_PUBLIC_RAPIDAPI_HOST || "bayut.p.rapidapi.com";

    const { data } = await axios.get(url, {
      headers: {
        "x-rapidapi-host": rapidApiHost,
        "x-rapidapi-key": rapidApiKey,
      },
      timeout: 4000,
    });

    if (data && (data.hits || data.id || data.externalID)) {
      return data;
    }
  } catch (error) {
    const status = error.response?.status;
    const msg = error.response?.data?.message || error.message;
    console.warn(
      `[WhileStone Estate API Notice] Remote API request returned: ${status || msg}. Gracefully serving curated WhileStone Estate listings.`
    );
  }

  // Fallback handler: returns curated WhileStone Estate property data
  if (url.includes("/properties/detail")) {
    const match = url.match(/externalID=([^&]+)/);
    const id = match ? match[1] : "5001";
    return getMockPropertyDetail(id);
  }

  return filterMockProperties(url);
};
