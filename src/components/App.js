import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  const [time, setTime] = useState();
  function main(e) {
    setTime(e.target.value);
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
                let inter = setInterval(() => {
                  setTime((prv) => {
                    if (prv >= 1) {
                      return prv - 1;
                    } else {
                      return 0;
                    }
                  });
                  if (time === 0) {
                    setTime(0);
                  }
                }, 1000);
              }
            }}
          />{" "}
          sec.
        </h1>
      </div>
      <div id="current-time">{time > 5 ? null : time}</div>
    </div>
  );
};

export default App;
