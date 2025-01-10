import PropTypes from 'prop-types';
import './Button.scss'; 

const Button = ({ children, className }) => {
  return <button className={`btn ${className}`}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired, 
  className: PropTypes.string,        
};

Button.defaultProps = {
  className: '',
};

export default Button;
