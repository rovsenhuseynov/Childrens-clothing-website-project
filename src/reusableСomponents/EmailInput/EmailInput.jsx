import React from "react";
import "./EmailInput.scss";

const EmailInput = ({ label = "Enter your email", placeholder = "", buttonText = "I’m in" }) => {
  return (
    <form className="email-input">
      <label htmlFor="email" className="email-input__label">{label}</label>
      <div className="email-input__wrapper">
        <input
          type="email"
          id="email"
          name="email"
          className="email-input__field"
          placeholder={placeholder}
          required
        />
        <button type="submit" className="email-input__button">{buttonText}</button>
      </div>
    </form>
  );
}

export default EmailInput;
