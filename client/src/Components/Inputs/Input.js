import React from "react";

export default function Input(props) {
  return (
    <div className={props.className}>
      <input
        type={props.type}
        placeholder={props.placeholder}
        style={Inputstyle}
        onChange={props.onChange}
        className="form-control"
        id={props.id}
        name={props.name}
        password={props.password}
        values={props.value}
      />
    </div>
  );
}

const Inputstyle = {
  borderTop: "0",
  borderLeft: "0",
  borderRight: "0",
  borderRadius: "0",
  borderBottom: "0",
  color: "#5d5b6f"
};
