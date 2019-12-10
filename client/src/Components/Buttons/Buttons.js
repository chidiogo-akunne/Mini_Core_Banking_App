import React from "react";

export default function Buttons(props) {
  return (
    <div>
      <button type="submit" className={props.className} onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
}
