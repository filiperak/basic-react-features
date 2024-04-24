import React, { useContext } from "react";
import { ThemeContext } from "./Context";

const Theme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      style={{
        height: "100vh",
        alignItems: "center",
        paddingTop: "200px",
        background: theme.isLigth ? theme.ligth : theme.dark,
      }}
    >
      <h1
        style={{
          color: theme.isLigth ? theme.dark : theme.ligth,
        }}
      >
        Zdravo Svete
      </h1>
      <button
        onClick={toggleTheme}
        style={{
          background: theme.isLigth ? theme.dark : theme.ligth,
          color: theme.isLigth ? theme.ligth : theme.dark,
          border:'none',
          padding:'10px'
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Theme;
