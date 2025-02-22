import React from "react";

const ListComponent = ({ items }) => {
  return (
    <div>
      <h3>List of Items:</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
