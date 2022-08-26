export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a20046b244mshdbadc517f67b5f7p1f76a9jsn181111c8d8be',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'a20046b244mshdbadc517f67b5f7p1f76a9jsn181111c8d8be',
  },
};


export const fetchData = async (url, options) => {
    const response  = await fetch(url, options);
    const data = await response.json()

    return data;
}
