import styles from "./Button.module.css";
import PropTypes from "prop-types";

function Button({ onClick, type, children }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
Button.propTypes = {
  onClick: PropTypes.node,
  type: PropTypes.node,
  children: PropTypes.node,
};
