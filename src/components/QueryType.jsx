import PropTypes from "prop-types";
import "./QueryType.css";

function QueryType({ label, handle_click }) {
  return (
    <label htmlFor={label} className="query_container" onClick={handle_click}>
      <input type="radio" id={label} name="query_type" />
      <span>{label}</span>
    </label>
  );
}

QueryType.prototype = {
  label: PropTypes.string.isRequired,
  handle_click: PropTypes.func,
};

export default QueryType;
