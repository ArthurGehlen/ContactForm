import { useEffect, useState } from "react";
import check from "../assets/images/icon-success-check.svg";
import "./SuccessMessage.css";

function SuccessMessage() {
  const [messageDisplay, setMessageDisplay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessageDisplay(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {messageDisplay && (
        <div id="success_message">
          <header>
            <img src={check} alt="Check" />
            <h2>Messsage Sent!</h2>
          </header>
          <p>Thanks for completing the form. We'll be in touch soon</p>
        </div>
      )}
    </>
  );
}

export default SuccessMessage;
