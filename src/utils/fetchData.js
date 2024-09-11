export const exerciseOptions = {
  method: 'GET',

  headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',

  headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

// useEffect(() => {
//   // setVideos(null);
//   const fetchVideos = async () => {
//     const VideosFromApi = await fetchFromAPI(
//       `search?part=snippet&q=${selectedCategory}`
//     );
//     setVideos(VideosFromApi);
//   };
//   fetchVideos();
// }, [selectedCategory]);

// useEffect(() => {
//   const fetchFromAPI = async () => {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/todos/`
//       // options
//     );
//     const { data } = await response.json();
//     setVideos(data);

//     return data;
//   };
//   fetchFromAPI();
// }, [selectedCategory]);

// useEffect(() => {
//   const fetchData = async () => {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/todos/`
//       // options
//     );
//     const newData = await response.json();
//     setVideos(newData);
//   };

//   fetchData();
// }, [selectedCategory]);
