import React, { useState } from "react";
import "./styles.css";

const Tabs = ({ tabsContent, onChange }) => {
  const [currentTabInd, setCurrentTabInd] = useState(0);
  const handleOnClick = (index) => {
    setCurrentTabInd(index);
    onChange(index);
  };
  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((elem, index) => (
          <div key={elem.label} onClick={() => handleOnClick(index)}>
            <span className="label">{elem.label}</span>
          </div>
        ))}
      </div>
      <div className="content">
        {tabsContent[currentTabInd] && tabsContent[currentTabInd].content}
      </div>
    </div>
  );
};

export default Tabs;
