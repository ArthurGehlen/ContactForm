import Proptype from "prop-types";
import "./InputContainer.css";

function InputContainer({ label, type, is_textarea = false }) {
  return (
    <>
      {!is_textarea ? (
        <div className="input_container">
          <label htmlFor={label}>
            {label}
            <span className="label_marker">*</span>
          </label>
          <input type={type} id={label} />
        </div>
      ) : (
        <div className="message_container">
          <label htmlFor={label}>
            {label}
            <span className="label_marker">*</span>
          </label>
          <textarea id={label}></textarea>
        </div>
      )}
    </>
  );
}

InputContainer.prototype = {
  label: Proptype.string.isRequired,
  type: Proptype.string,
  is_textarea: Proptype.bool.isRequired,
};

export default InputContainer;
