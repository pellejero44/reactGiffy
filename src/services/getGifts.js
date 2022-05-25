import { API_KEY, API_URL } from './settings';

export default function getGifts({
  limit = 5,
  keyword = 'morty',
  page = 0,
} = {}) {
  const apiUrl = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=en`;
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((res) => {
      const { data = [] } = res;
      if (!Array.isArray(data)) {
        return [];
      }

      const gifts = data.map((img) => {
        const { images, title, id } = img;
        const { url } = images.downsized_medium;
        return { title, id, url };
      });
      return gifts;
    });
}
