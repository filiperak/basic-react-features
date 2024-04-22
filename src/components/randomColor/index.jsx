import { useEffect, useState } from "react";

const RandomColor = () => {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    const randColorUtility = (length) => {
        return Math.floor(Math.random() * length);
    }

    const handleCreateRandomColor = () => {
        const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','E'];
        let hexColor = '#';
        const R = randColorUtility(256) 
        const G = randColorUtility(256) 
        const B = randColorUtility(256) 

        if(typeOfColor === 'hex'){
            for(let i = 0; i < 6; i++){
                hexColor += hex[randColorUtility(hex.length)];
            }
            setColor(hexColor);
        }else{
            setColor(`RGB(${R},${G},${B})`)
        }

    }
    useEffect(() => {
        handleCreateRandomColor();
    },[typeOfColor])

    return (
      <div
        className="container"
        style={{
          width: "100vw",
          height: "100vh",
          background: color,
        }}
      >
        <button onClick={() => setTypeOfColor("hex")}>Create hex color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create rgb color</button>
        <button onClick={() => handleCreateRandomColor()}>
          Generate random color
        </button>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontSize: "30px",
            flexDirection: "column",
            border: "1px solid",
          }}
        >
          <h1>{color}</h1>
          <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        </div>
      </div>
    );
}

export default RandomColor;
