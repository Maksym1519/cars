import { NavLink } from "react-router-dom";
import Form from "./components/Forms/Form";

const Home = () => {
  return (
    <>
      <h1 style={{textAlign:'center'}}>Home</h1>
      <NavLink to='/about'>to About</NavLink>

      <NavLink to='/movies'>to Movies</NavLink>

      <Form />
    </>
  );
};
export default Home;
