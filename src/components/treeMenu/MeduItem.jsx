import React, { useState } from "react";
import MenuList from "./MenuList";

const MeduItem = ({ item }) => {
  const [displayChildren, setDisplayChildren] = useState([]);
  const handleToggle = (currentLabel) => {
    setDisplayChildren({
      ...displayChildren,
      [currentLabel]: !displayChildren[currentLabel],
    });
  };
  console.log(displayChildren);
  return (
    <li>
      <div style={{ display: "flex", gap: "20px" }}>
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span onClick={() => handleToggle(item.label)} style={{fontSize:'30px'}}>{displayChildren[item.label]? '-':'+'}</span>
        ) : null}
      </div>

      {item && item.children && item.children.length > 0 && displayChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MeduItem;
