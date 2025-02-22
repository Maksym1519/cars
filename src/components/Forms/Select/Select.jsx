import "./Select.scss";
import PropTypes from "prop-types";

const Select = ({ value, className, img, title }) => {
  const valuesArray = Array.isArray(value) ? value : [value];
  return (
    <div className="select-wrapper">
       <select
        className={`select ${className}`}
        name="header-category"
        id="header-category"
      >
        <option>{title}</option>
        {valuesArray &&
          valuesArray.map((item, index) => (
            <option key={index} className="select__item">
              {item}
            </option>
          ))}
      </select>
      {img && (
        <svg className="select-wrapper__arrow">
          <use href={`sprite.svg#${img}`}></use>
        </svg>
      )}
    </div>
  );
};

Select.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    PropTypes.string,
    PropTypes.number,
  ]),
  img: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default Select;
