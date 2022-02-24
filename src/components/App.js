import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  const [time, setTime] = useState();
  function main(e) {
    let inter = setInterval(() => {
      const mintime = time;
      if (mintime === 0) {
        clearInterval(inter);
      }
      setTime((prv) => prv - 1);
    }, 1000);
  }
  // useEffect(() => {
  //   setInterval(() => {
  //     setTime(time - 1);
  //   }),
  //     1000;
  // }, [time]);
  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input
            id="timeCount"
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                main(e);
              }
            }}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />{" "}
          sec.
        </h1>
      </div>
      <div id="current-time">{time > 5 || time <= 0 ? null : time}</div>
    </div>
  );
};

export default App;
