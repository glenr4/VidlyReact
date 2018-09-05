import React from "react";

const ListGroup = props => {
  return (
    <ul className="list-group">
      {props.items.map(item => (
        <li key={item[props.valueProperty]} className="list-group-item">
          {item[props.textProperty]}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
