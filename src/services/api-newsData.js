const API_KEY = import.meta.env.VITE_NEWSDATA_API_KEY;
const API_URL = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&language=en&category=technology,science`;

export async function getLatestNews(
  pageId = null,
  qInTitle = null,
  categoryFilter
) {
  try {
    let newsPage = pageId ? `${API_URL}&page=${pageId}` : API_URL;
    newsPage = qInTitle ? `${API_URL}&qintitle=${qInTitle}` : newsPage;

    if (categoryFilter.length > 0) {
      const orQuery = categoryFilter.join(' OR ');
      newsPage += `&q=${encodeURIComponent(orQuery)}`;
    }

    const response = await fetch(newsPage);
    if (!response.ok) {
      const errorBody = await response.json().catch(() => ({}));
      const message =
        errorBody.message || `Error ${response.status}: ${response.statusText}`;
      const error = new Error(message);
      error.status = response.status;

      throw error;
    }
    const data = await response.json();
    return {
      newsData: data.results,
      nextPage: data.nextPage,
    };
  } catch (error) {
    if (!error.status) {
      error.status = 500;
    }
    throw error;
  }
  // const response = await fetch('../../mock/sample-news.json');
  // const data = await response.json();
  // return {
  //   newsData: data.results,
  //   nextPage: data.nextPage,
  // };
}
