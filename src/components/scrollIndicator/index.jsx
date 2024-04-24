import React, { useEffect, useState } from "react";
import './styles.css'
const ScrolllIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [scrollPer, setScrollPer] = useState(0);
  useEffect(() => {
    fetchData(url);
  }, [url]);

  async function fetchData(dataURL) {
    try {
      setLoading(true);
      const response = await fetch(dataURL);
      const result = await response.json();
      if (result && result.products && result.products.length > 0) {
        setData(result.products);

        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setErrorMsg(e);
    }
  }
  const handleScrollPer = () => {
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight
    // );
    const howMutchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const heigth =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPer((howMutchScrolled / heigth) * 100);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPer);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  },[]);
  return (
    <div>
      <div className="top-container">
        <h1>Scroll indicator</h1>
        <div className="scroll-progres-container">
        <div
          className="current-progres-bar"
          style={{ width: `${scrollPer}%` }}
        ></div>
        </div>

      </div>
      {data && data.length > 0
          ? data.map((elem) => <p>{elem.title}</p>)
          : null}
    </div>
  );
};

export default ScrolllIndicator;
