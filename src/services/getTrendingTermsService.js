import { API_KEY, API_URL } from './settings';

const fromApiResponseToGifts = (apiResponse) => {
  const { data = [] } = apiResponse;
  return data;
};

export default function getTrendingTerms({ signal }) {
  const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`;

  return fetch(apiURL, { signal })
    .then((res) => res.json())
    .then(fromApiResponseToGifts);
}
