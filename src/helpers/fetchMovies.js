export const fetchMovies = ({ params }) => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        name: "movie",
        duration: 3000,
        id: params.movieId,
      });
    }, 3000);
  });
};
