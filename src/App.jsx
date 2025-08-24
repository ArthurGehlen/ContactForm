import "./App.css";

import { useState } from "react";

// Components
import InputContainer from "./components/InputContainer";
import SuccessMessage from "./components/SuccessMessage";
import QueryType from "./components/QueryType";

function App() {
  const [infos, setInfos] = useState({
    first_name: "",
    last_name: "",
    email: "",
    query_type: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    first_name: false,
    last_name: false,
    email: false,
    query_type: false,
    message: false,
  });

  const handle_change = (e) => {
    setInfos((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handle_submit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <SuccessMessage />
      <form onSubmit={handle_submit}>
        <h1>Contact Us</h1>

        <div className="name_wrapper">
          <InputContainer label="First Name" type="text" is_textarea={false} />
          <InputContainer label="Last Name" type="text" is_textarea={false} />
        </div>

        <InputContainer
          label="Email Address"
          type="email"
          is_textarea={false}
        />

        <div className="query_type_wrapper">
          <QueryType label="General Enquiry" />
          <QueryType label="Support Request" />
        </div>

        <InputContainer label="Message" is_textarea={true} />

        <div className="consent_wrapper">
          <input type="checkbox" name="consent" id="consent" />
          <label htmlFor="consent">
            I consent to being contacted by the team{" "}
            <span className="label_marker">*</span>
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
