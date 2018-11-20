import React from "react";

const List = props => (
  <ul>
    {props.items.map((item, index) => (
      <div>
        <li key={index}>
          {" "}
          {item} <button className="buttonDelete">X</button>
        </li>
      </div>
    ))}
  </ul>
);
export default List;
