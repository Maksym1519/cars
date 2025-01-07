import PropTypes from "prop-types";

const Button = ({ children, handleSubmit }) => {
  Button.propTypes = {
    children: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired
  };
  return (
    <>
      <button className="form-button" type="submit" aria-label="send-data" onClick={handleSubmit}>
        {children}
      </button>
    </>
  );
};
export default Button;
