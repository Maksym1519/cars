import { useLoaderData, useParams} from "react-router-dom";

export const Movie = () => {
  const {movieId} = useParams();
  const { name,duration, id} = useLoaderData();
 
  return (
    <>
     <h1>Movie id</h1>
      <p>{movieId}</p>
      <p>
       {name}: {duration}: {id}
      </p>
    </>
  );
};
