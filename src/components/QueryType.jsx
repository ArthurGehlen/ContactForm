import PropTypes from "prop-types";
import "./QueryType.css"

function QueryType({ label, onCLick }) {
  return <label htmlFor={label} className="query_container">
    <input type="radio" name={label} />
    <span>{label}</span>
  </label>;
}

QueryType.prototype = {
    label: PropTypes.string.isRequired,
    onCLick: PropTypes.func,
}

export default QueryType;
