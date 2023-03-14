const API_KEY = process.env.API_KEY;

 export default  {
  fetchTrending: {
    title: "Trending Now",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },

  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },

  fetchActionMovies: {
    title: "Action Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },

  fetchComedyMovies: {
    title: "Comedy Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },

  fetchHorrorMovies: {
    title: "Horror Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },

  fetchRomanceMovies: {
    title: "Romance Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },

  fetchMysteryMovies: {
    title: "Mystery Movies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },

  fetchSciFi: {
    title: "SciFi",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },

  fetchWestern: {
    title: "Western",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },

  fetchAnimation: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },

  fetchTV: {
    title: "TV Shows",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },

  // fetchDocumentaries: {
  //   title: "Documentaries",
  //   url: `/discover/movie?api_key=&with_genres=99`,
  // },
};
