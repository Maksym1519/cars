import { NavLink } from "react-router-dom";

const Movies = () => {
 
  return (
    <>
      <h1>Movies</h1>
      <ul style={{ display: "flex", flexDirection: "column", rowGap: "30px" }}>
        <li>
          <NavLink to="/movie/1">Movie1</NavLink>
        </li>
        <li>
          <NavLink to="/movie/2">Movie2</NavLink>
        </li>
        <li>
          <NavLink to="/movie/3">Movie3</NavLink>
        </li>
      </ul>
    </>
  );
};
export default Movies;
