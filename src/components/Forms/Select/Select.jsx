import "./Select.scss";
import PropTypes from "prop-types";

const Select = ({ value, className, img }) => {
  return (
    <div className="select-wrapper">
      <select
        className={`select ${className}`}
        name="header-category"
        id="header-category"
      >
        <option className="select__item">{value}</option>
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
  value: PropTypes.string,
  img: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Select;
