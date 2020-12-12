const keyApi = "i9zxWJWDHjbF38g98rEjS3nyY8cDnjf7";

export default function getGifs({keyword = "anime"} = {}){

    const apiURL= `https://api.giphy.com/v1/gifs/search?api_key=${keyApi}&q=${keyword}&limit=25&offset=0&rating=r&lang=en`

    return fetch(apiURL)
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
