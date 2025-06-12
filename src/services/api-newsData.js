const API_KEY = import.meta.env.VITE_NEWSDATA_API_KEY;
const API_URL = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=en&category=technology,science`;

export async function getLatestNews() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      const errorBody = await response.json().catch(() => ({}));
      const message =
        errorBody.message || `Error ${response.status}: ${response.statusText}`;
      throw new Error(message);
    }
    const newsData = await response.json();
    return newsData.results;
  } catch (error) {
    console.error('API Request Error:', error);
    throw new Error(
      error.message || 'Something went wrong with the API request.'
    );
  }
}
