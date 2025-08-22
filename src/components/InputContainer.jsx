import Proptype from "prop-types";
import "./InputContainer.css";

function InputContainer({ label, type, is_textarea = false }) {
  return (
    <div className="input_container">
      {!is_textarea ? (
        <>
          <label htmlFor={label}>
            {label}
            <span className="label_marker">*</span>
          </label>
          <input type={type} name={label} />
        </>
      ) : (
        <>
          <label htmlFor={label}>{label}</label>
          <span className="label_marker">*</span>
          <textarea name={label} cols="30" rows="10"></textarea>
        </>
      )}
    </div>
  );
}

InputContainer.prototype = {
  label: Proptype.string.isRequired,
  type: Proptype.string,
  is_textarea: Proptype.bool.isRequired,
};

export default InputContainer;
