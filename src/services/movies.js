export const searchMovies = async ({ search }) => {
  const API_KEY_OMDB = "6c52a547";
  const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY_OMDB}&s=${search}`;

  if (search === "") return null;

  try {
    const res = await fetch(API_URL);
    const json = await res.json();

    const movies = json.Search;

    return movies?.map((movie) => {
      return {
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster,
      };
    });
  } catch (error) {
    throw new Error("Error al buscar las películas");
  }
};
