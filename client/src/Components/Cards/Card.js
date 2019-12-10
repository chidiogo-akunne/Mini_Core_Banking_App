import React from "react";

export default function Card(props) {
  return (
      <div className="card" style={props.Cardstyle}>
        <div className="card-body" style={props.CardBodystyle}>
          {props.children}
        </div>
      </div>
  );
}
