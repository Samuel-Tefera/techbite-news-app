const API_KEY = import.meta.env.VITE_NEWSDATA_API_KEY;
const API_URL = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=en&category=technology,science`;

export async function getLatestNews(pageId = null) {
  try {
    const newsPage = pageId ? `${API_URL}&page=${pageId}` : API_URL;
    const response = await fetch(newsPage);
    if (!response.ok) {
      const errorBody = await response.json().catch(() => ({}));
      const message =
        errorBody.message || `Error ${response.status}: ${response.statusText}`;
      throw new Error(message);
    }
    const data = await response.json();
    return {
      newsData: data.results,
      nextPage: data.nextPage,
    };
  } catch (error) {
    console.error('API Request Error:', error);
    throw new Error(
      error.message || 'Something went wrong with the API request.'
    );
  }
  // const response = await fetch('../../mock/sample-news.json');
  // const data = await response.json();
  // console.log(data);
  // return {
  //   newsData: data.results,
  //   nextPage: data.nextPage,
  // };
}
