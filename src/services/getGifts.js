const apiKey = 'D24rsKFoiOnqCnMvm4lvSI9kTq4XiMHM';

export default function getGifts({ keyword = 'morty' } = {}) {
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
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
