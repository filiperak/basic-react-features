import React from "react";

const Suggestions = ({ data,handleClick }) => {
  return (
    <ul>
      {data && data.length
        ? data.map((elem, index) => <li onClick={handleClick} key={index}>{elem}</li>)
        : null}
    </ul>
  );
};

export default Suggestions;
