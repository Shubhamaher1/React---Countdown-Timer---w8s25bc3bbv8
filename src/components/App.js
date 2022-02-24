import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  const [time, setTime] = useState();
  function main(e) {
    if (time > 0) {
      setInterval(() => {
        setTime(time - 1);
      }, 1000);
    }
  }

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input
            id="timeCount"
            onKeyDown={(e) => {
              setTime(e.target.value);
              if (e.keyCode === 13) {
                main;
              }
            }}
          />{" "}
          sec.
        </h1>
      </div>
      <div id="current-time">{time}</div>
    </div>
  );
};

export default App;
