import Proptype from "prop-types";
import "./InputContainer.css";

function InputContainer({ label, type, is_textarea = false, handle_change }) {
  return (
    <>
      {!is_textarea ? (
        <div className="input_container">
          <label htmlFor={label}>
            {label}
            <span className="label_marker">*</span>
          </label>
          <input type={type} id={label} onChange={handle_change} />
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
  type: Proptype.string.isRequired,
  is_textarea: Proptype.bool.isRequired,
  handle_change: Proptype.func.isRequired,
};

export default InputContainer;
