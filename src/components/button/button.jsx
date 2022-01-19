import React from "react";
import Comp1 from "../Comp1";

const Button = ({ label,name, type = "primary", onClick, children }) => {
  function abc() {
    return type === "primary" ? "This is primary" : "This is secondary";
  }
  return (
    <div>
      <div aria-label="button-label">{label}</div>

      <Comp1 name="darshan" />
      <button onClick={onClick}>{children}</button>
      <button onClick={onClick}>{children + " button2"}</button>
    </div>
  );
};

export default Button;
