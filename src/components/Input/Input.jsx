import PropTypes from "prop-types";

const Input = ({ label, value, handleChange, placeholder, name, type, error}) => {
   return (
    <>
      <label className={`input-label ${error && 'error'}`} htmlFor={name}>
        {label}
      </label>

      <input
        className={`input ${error && 'error'}`}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        aria-label="enter-text"
        onChange={handleChange}
        required
      />
    </>
  );
};

 // Валидация пропсов
 Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type:PropTypes.string.isRequired,
  error: PropTypes.string
};
export default Input;
