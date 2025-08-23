import "./App.css";

import { useState } from "react";

// Components
import InputContainer from "./components/InputContainer";
import QueryType from "./components/QueryType";

function App() {
  return (
    <>
      <form>
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

        <button type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
