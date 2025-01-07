import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import About from "./pages/about/about";
import Home from "."; 
import Movies from "./pages/movies/movies";
import { Movie } from "./pages/movies/movie.required.page";
import Error from "./error";
import { fetchMovies } from "./helpers/fetchMovies";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: 'movies',
        element: <Movies />
      },
      {
        path: 'movie/:movieId',
        element: <Movie />,
        loader: fetchMovies
      }
    ],
  },
]);

export default router;
