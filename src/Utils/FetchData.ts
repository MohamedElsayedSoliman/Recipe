const youtubeAPI= `${process.env.REACT_APP_YOUTUBE_KEY}`

const recipeAPI=`${process.env.REACT_APP_RECIPE_Key}`

export const recipeOptions = {
    method: 'GET',


    params: {from: '0', size: '20', tags: 'under_30_minutes'},
    headers: {
       
      
       //'X-RapidAPI-Key': '01207b6241msh81034eb4bbef8e2p1a3b27jsnca4a4291a0cf',
      'X-RapidAPI-Key':recipeAPI,
       'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
      "Content-Type": "application/json",
  
    }
  };

  export const youtubeOptions = {
    method: 'GET',


   
    headers: {
      'X-RapidAPI-Key': youtubeAPI,
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      "Content-Type": "application/json"
  
    }
  };

export  const fetchData = async (url:string, options?:RequestInit) => {
  const res = await fetch(url, options);
  if (!res.ok) {
    const message = `An error has occured: ${res.status}`;
    throw new Error(message);
  }
  const data = await res.json();
  return data;
};
