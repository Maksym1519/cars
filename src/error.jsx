import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError()

  return (
    <>
      <h1 style={{ color: "red", fontSize: "72px" }}>Error</h1>
      <p>{error.statusText}</p>
    </>
  );
};
export default Error;
