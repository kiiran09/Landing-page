import React from "react";
import "../App.css";

export const Home2 = () => {
  return (
    <div class="card">
      <div class="container">
        <div class="cloud front">
          <span class="left-front"></span>
          <span class="right-front"></span>
        </div>
        <span class="sun sunshine"></span>
        <span class="sun"></span>
        <div class="cloud back">
          <span class="left-back"></span>
          <span class="right-back"></span>
        </div>
      </div>

      <div class="card-header">
        <span>
          Messadine, Susah<br></br>Tunisia
        </span>
        <span>March 13</span>
      </div>

      <span class="temp">23°</span>

      <div class="temp-scale">
        <span>Celcius</span>
      </div>
    </div>
  );
};
