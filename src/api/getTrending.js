import {API_KEY, API_URL} from "./setting";

export default async function getTrending(){
  const apiURL= `${API_URL}/trending?api_key=${API_KEY}&limit=10&rating=r`

  return await fetch(apiURL)
  .then(res => res.json())
  .then(response => {
      const {data = []} = response
      const trendsName = data.map(name =>{
          const {title}=name;
          return title;
      })
      return trendsName;
    });
};
