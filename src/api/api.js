import {API_KEY, API_URL }from "./setting";

export default async function getGifs({limit = 10, keyword, page = 0}){
  const apiURL= `${API_URL}/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=r&lang=en`

  return await fetch(apiURL)
  .then(res => res.json())
  .then(response => {
      const {data} = response
      const gifs = data.map(image => {
        const {images, title, id} = image;
        const {url} = images.downsized_medium;
          
        return {images, title, id, url}
      });
    return gifs
  });
};
