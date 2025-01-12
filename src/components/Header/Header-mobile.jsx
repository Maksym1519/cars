import "./Header";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


const HeaderMobile = ({className, handleMenu}) => {
    HeaderMobile.propTypes = {
        className: PropTypes.string.isRequired,
        handleMenu: PropTypes.func.isRequired
      }
  return (
    <div className={`header-mobile ${className}`}>
      <nav className="header-mobile__nav">
        <Link className={`header-mobile__nav-item active`}>
          <span>Подбор авто</span>
        </Link>

        <Link className="header-mobile__nav-item">
          <span>О компании</span>
        </Link>

        <Link className="header-mobile__nav-item">
          <span>Техцентр</span>
        </Link>

        <Link>
          <span className="header-mobile__nav-item">Отзывы</span>
        </Link>

        <Link className="header-mobile__nav-item">
          <span>Контакты</span>
        </Link>
      </nav>

      <div className="header-mobile__close" onClick={() => handleMenu(false)}>
          <span className="header-mobile__close-top"></span>
          <span className="header-mobile__close-bottom"></span>
      </div>
    </div>
  );
 };

export default HeaderMobile;
